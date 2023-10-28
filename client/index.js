const grpc = require('@grpc/grpc-js');
const messages = require('../build/echo_pb');
const services = require('../build/echo_grpc_pb');

const STUB = {
    Echo: new services.EchoClient("127.0.0.1:8717", grpc.credentials.createInsecure()),
}

const request = new messages.echoRequest();
request.setName("illinois");

STUB.Echo.call(request, (err, res) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(res.getMessage());
    }
})