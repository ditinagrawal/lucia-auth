import { Collection, MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI!);
async () => {
    await client.connect()
}

export const db = client.db('AuthDB');
export const UserCollection = db.collection("users") as Collection<UserDoc>;
export const SessionCollection = db.collection("sessions") as Collection<SessionDoc>;

interface UserDoc {
    _id: string;
    email: string;
    password: string;
    username: string;
}

interface SessionDoc {
    _id: string;
    expires_at: Date;
    user_id: string;
}