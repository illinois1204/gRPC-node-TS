import { credentials } from "@grpc/grpc-js";
import { EchoClient } from "../pkg/echo_grpc_pb";
import { echoRequest } from "../pkg/echo_pb";
import { PingPongClient } from "../pkg/ping-pong_grpc_pb";
import { Empty } from "../pkg/ping-pong_pb";

const EchoStub = new EchoClient("127.0.0.1:8717", credentials.createInsecure());
const PingPongStub = new PingPongClient("127.0.0.1:8717", credentials.createInsecure());

const payload = new echoRequest().setName("illinois").setAge(25);
EchoStub.ping(payload, (err, res) => console.info(res.getMessage()));

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const limit = 20;
let i = 0;
const playing = PingPongStub.play();
playing.on("status", () => console.info("Game over"));
playing.on("data", async () => {
    console.log("Pong");
    i++;
    if (i == limit) return playing.end();

    await sleep(500);
    process.stdout.write("Ping......");
    await sleep(1000);
    playing.write(new Empty());
});
process.stdout.write("Ping......");
playing.write(new Empty());
