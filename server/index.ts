import { Server, ServerCredentials, ServerDuplexStream, ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js";
import { EchoService, IEchoServer } from "../pkg/echo_grpc_pb";
import { echoRequest, echoResponse } from "../pkg/echo_pb";
import { IPingPongServer, PingPongService } from "../pkg/ping-pong_grpc_pb";
import { Empty } from "../pkg/ping-pong_pb";

class EchoServiceGRPC implements IEchoServer {
    [name: string]: import("@grpc/grpc-js").UntypedHandleCall;
    ping(call: ServerUnaryCall<echoRequest, echoResponse>, callback: sendUnaryData<echoResponse>) {
        const name = call.request.getName();
        const age = call.request.getAge();
        callback(null, new echoResponse().setMessage(`data from req => name: ${name}, age: ${age}`));
    }
}

class PingPongServiceGRPC implements IPingPongServer {
    [name: string]: import("@grpc/grpc-js").UntypedHandleCall;
    play(call: ServerDuplexStream<Empty, Empty>) {
        call.on("end", () => call.end());

        call.on("data", () => {
            console.log("acceptPing");
            call.write(new Empty());
        });
    }
}

const PORT = 8717;
const server = new Server();
server.addService(EchoService, new EchoServiceGRPC());
server.addService(PingPongService, new PingPongServiceGRPC());
server.bindAsync(`0.0.0.0:${PORT}`, ServerCredentials.createInsecure(), () => {
    server.start();
    console.log(`Server is running on port: ${PORT}`);
});
