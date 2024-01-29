import { credentials } from "@grpc/grpc-js";
import { EchoClient } from "../pkg/echo_grpc_pb";
import { echoRequest } from "../pkg/echo_pb";

void (async function () {
    const EchoStub = new EchoClient("127.0.0.1:8717", credentials.createInsecure());

    const payload = new echoRequest().setName("illinois").setAge(25);
    EchoStub.ping(payload, (err, res) => {
        if (err) console.error(err.message);
        else console.log(res.getMessage());
    });
})();
