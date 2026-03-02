import { hash } from "crypto";

export class HashHelper {
    static async hash(password: string): Promise<string>{
        return hash("sha256",password);
    }
}