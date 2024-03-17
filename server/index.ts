import { Server, ServerCredentials, ServerDuplexStream, ServerUnaryCall, loadPackageDefinition, sendUnaryData } from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";
import { ProtoGrpcType as EchoServiceGRPC } from "../pkg/echo";
import { EchoHandlers } from "../pkg/echo/Echo";
import { echoRequest__Output } from "../pkg/echo/echoRequest";
import { echoResponse } from "../pkg/echo/echoResponse";
import { ProtoGrpcType as PingPongServiceGRPC } from "../pkg/ping-pong";
import { Empty, Empty__Output } from "../pkg/pingPong/Empty";
import { PingPongHandlers } from "../pkg/pingPong/PingPong";

class ServiceEchoProto implements EchoHandlers {
    [name: string]: import("@grpc/grpc-js").UntypedHandleCall;
    ping(call: ServerUnaryCall<echoRequest__Output, echoResponse>, callback: sendUnaryData<echoResponse>) {
        const req = call.request;
        callback(null, { message: `data from req => name: ${req.name}, age: ${req.age}` });
    }
}

class ServicePingPongProto implements PingPongHandlers {
    [name: string]: import("@grpc/grpc-js").UntypedHandleCall;
    play(call: ServerDuplexStream<Empty__Output, Empty>) {
        call.on("end", () => call.end());

        call.on("data", () => {
            console.log("acceptPing");
            call.write({});
        });
    }
}

const PROTO_PATH = [`${process.cwd()}/proto/echo.proto`, `${process.cwd()}/proto/ping-pong.proto`];

const packageDefinition = loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});

const CONTRACTS = loadPackageDefinition(packageDefinition);

const PORT = 8717;
const server = new Server();
server.addService((CONTRACTS as unknown as EchoServiceGRPC).echo.Echo.service, new ServiceEchoProto());
server.addService((CONTRACTS as unknown as PingPongServiceGRPC).pingPong.PingPong.service, new ServicePingPongProto());
server.bindAsync(`0.0.0.0:${PORT}`, ServerCredentials.createInsecure(), () => {
    server.start();
    console.log(`Server is running on port: ${PORT}`);
});
