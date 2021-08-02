import Server from "./server";
import { PORT } from "./environment";

const server = new Server(PORT);

server.start();
