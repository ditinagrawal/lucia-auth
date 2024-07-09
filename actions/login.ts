"use server"

import { lucia } from "@/lib/auth";
import { UserCollection } from "@/lib/db";
import { verify } from "@node-rs/argon2";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const LoginAction = async (formData: FormData) => {
    // console.log("LoginAction");

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const existingUser = await UserCollection.findOne({
        email
    })

    if (!existingUser) {
        return {
            error: "User Not Exist"
        };
    }
    const validPassword = await verify(existingUser.password, password, {
        memoryCost: 19456,
        timeCost: 2,
    });
    if (!validPassword) {
        return {
            error: "Incorrect password"
        };
    }

    const session = await lucia.createSession(existingUser._id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    return redirect("/dashboard");
}