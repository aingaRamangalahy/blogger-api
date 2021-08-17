import 'reflect-metadata'; // required by typedi
import ServerLoader from "./core/loaders/server";
import { PORT } from "./config/environment";

const server = new ServerLoader(PORT);

server.start();
