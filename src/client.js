import { io } from "socket.io-client";
const URL = "http://localhost:3000";
const sk = io(URL, { autoConnect: false });

sk.onAny((event, ...args) => {
    console.log(event, args)
});
sk.on("round", (socket) => {
    //a set of turns
});
sk.on("turn", (socket) => {
    //notify players of next turn
});
sk.on("phase", (socket) => {
    //subset of a turn
});