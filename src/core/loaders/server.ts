import * as path from "path";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as mongoose from "mongoose";

import { DB_URI, BODY_PARSER_LIMIT } from "../../config/environment";

import AppRoutes from "../../layers/routes";
import { errorHandler } from "../../layers/middlewares";

class ServerLoader {
    private app: express.Application;

    constructor(private port) {
        this.app = express();
        this.config();
    }

    // connect database
    connectDatabase() {
        console.log("connecting to database...");
        mongoose
            .connect(DB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false,
            })
            .then(() => console.log("Database connected..."))
            .catch((e) => console.log("Database connection error", e.message));
    }

    config() {
        this.connectDatabase();

        this.app.use(cors());

        // use body parser
        this.app.use(bodyParser.json({ limit: BODY_PARSER_LIMIT }));
        this.app.use(
            bodyParser.urlencoded({ limit: BODY_PARSER_LIMIT, extended: true })
        );

        // Set static folder
        this.app.use(express.static(path.join(__dirname, "public")));

        // mount routes
        this.app.use(AppRoutes);

        // error handler
        this.app.use(errorHandler);
    }

    start() {
        return this.app.listen(this.port, () => {
            console.log("Server started on port: ", this.port);
        });
    }
}

export default ServerLoader;
