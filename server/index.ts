import { Server, ServerCredentials, ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js";
import { EchoService, IEchoServer } from "../pkg/echo_grpc_pb";
import { echoRequest, echoResponse } from "../pkg/echo_pb";

class Service implements IEchoServer {
    [name: string]: import("@grpc/grpc-js").UntypedHandleCall;
    ping(call: ServerUnaryCall<echoRequest, echoResponse>, callback: sendUnaryData<echoResponse>) {
        const name = call.request.getName();
        const age = call.request.getAge();
        callback(null, new echoResponse().setMessage(`data from req => name: ${name}, age: ${age}`));
    }
}

const PORT = 8717;
const server = new Server();
server.addService(EchoService, new Service());
server.bindAsync(`0.0.0.0:${PORT}`, ServerCredentials.createInsecure(), () => {
    server.start();
    console.log(`Server is running on port: ${PORT}`);
});
