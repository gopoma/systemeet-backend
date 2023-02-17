declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DB_CNN: string,
            NODE_ENV: "development" | "production";
            PORT?: string;
            SECRET_JWT_SEED: string
        }
    }
}

export {};
