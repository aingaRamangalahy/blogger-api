import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config({
    path: path.resolve(
        process.cwd(),
        `src/config/environment/${process.env.NODE_ENV}.env`
    ),
});

export const PORT = process.env.PORT;
export const BODY_PARSER_LIMIT = process.env.BODY_PARSER_LIMIT;

export const DB_URI = process.env.DB_URI;

export const FILE_UPLOAD_PATH = process.env.FILE_UPLOAD_PATH;
export const MAX_FILE_UPLOAD = process.env.MAX_FILE_UPLOAD;

export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRE = process.env.JWT_EXPIRE;
export const JWT_COOKIE_EXPIRE = process.env.JWT_COOKIE_EXPIRE;
