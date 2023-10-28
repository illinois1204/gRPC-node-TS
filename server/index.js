const grpc = require('@grpc/grpc-js');
const services = require('../build/echo_grpc_pb');
const EchoMethods = require("./services/echo");

const PORT = 8717
const server = new grpc.Server();
server.addService(services.EchoService, EchoMethods);
server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), () => server.start());
console.log(`Server is running on port: ${PORT}`);