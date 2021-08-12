import 'reflect-metadata'; // required by typeid
import ServerLoader from "./core/loaders/server";
import { PORT } from "./core/environment";

const server = new ServerLoader(PORT);

server.start();
