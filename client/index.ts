import { credentials, loadPackageDefinition } from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";
import { ProtoGrpcType as EchoGRPC } from "../pkg/echo";
import { ProtoGrpcType as PingPongGRPC } from "../pkg/ping-pong";

const PROTO_PATH = [`${process.cwd()}/proto/echo.proto`, `${process.cwd()}/proto/ping-pong.proto`];

const packageDefinition = loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});

const CONTRACTS = loadPackageDefinition(packageDefinition) as unknown as PingPongGRPC & EchoGRPC;

const EchoStub = new CONTRACTS.echo.Echo("127.0.0.1:8717", credentials.createInsecure());
const PingPongStub = new CONTRACTS.pingPong.PingPong("127.0.0.1:8717", credentials.createInsecure());

// EchoStub.ping({ name: "illinois", age: 25 }, (err, res) => console.info(res?.message));

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
    playing.write({});
});
process.stdout.write("Ping......");
playing.write({});
