import express, { Application, Request, Response } from "express";
import config from "./config";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import { authRoutes } from "./routes";

class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        auth: "/api/auth",
        users: "/api/users",
        posts: "/api/posts",
        friends: "/api/friends"
    };

    constructor() {
        this.app = express();
        this.port = config.port;

        this.middlewares();
        this.routes();
    }

    private middlewares() {
        this.app.use(morgan("dev"));
        this.app.use(cors({
            origin: [
                "http://127.0.0.1:5500",
                "http://localhost:4200",
            ],
            credentials: true
        }));
        this.app.use(helmet());
        this.app.use(express.json());
    }

    private routes() {
        this.app.get("/", (req: Request, res: Response) => {
            return res.status(200).json({
                name: "systemeet-backend",
                version: "1.0.0",
                authors: [
                    "Ordoño Poma, Gustavo Eduardo",
                    "Pacori Anccasi, Diego Ivan"
                ]
            });
        });
        this.app.use(this.apiPaths.auth, authRoutes);
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`);
        });
    }
}

export default Server;