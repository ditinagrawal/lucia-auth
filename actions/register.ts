"use server"

import { lucia } from "@/lib/auth";
import { UserCollection, db } from "@/lib/db";
import { hash } from "@node-rs/argon2"
import { generateIdFromEntropySize } from "lucia";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const RegisterAction = async (formData: FormData) => {
    // console.log({ formData });

    const email = formData.get("email");
    const password = formData.get("password");
    const username = formData.get("username");

    if (
        typeof username !== "string" ||
        username.length < 3 ||
        username.length > 31 ||
        !/^[a-z0-9_-]+$/.test(username)
    ) {
        return {
            error: "Invalid username"
        };
    }
    if (typeof password !== "string" || password.length < 6 || password.length > 255) {
        return {
            error: "Invalid password"
        };
    }

    const hashedPassword = await hash(password, {
        memoryCost: 19456,
        timeCost: 2,
    });

    const userId = generateIdFromEntropySize(10);

    await UserCollection.insertOne({
        _id: userId,
        email: email as string,
        username,
        password: hashedPassword,
    })

    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    return redirect("/auth/login");
}