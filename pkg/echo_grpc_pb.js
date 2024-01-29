// GENERATED CODE -- DO NOT EDIT!

"use strict";
var grpc = require("@grpc/grpc-js");
var echo_pb = require("./echo_pb.js");

function serialize_echo_echoRequest(arg) {
    if (!(arg instanceof echo_pb.echoRequest)) {
        throw new Error("Expected argument of type echo.echoRequest");
    }
    return Buffer.from(arg.serializeBinary());
}

function deserialize_echo_echoRequest(buffer_arg) {
    return echo_pb.echoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_echo_echoResponse(arg) {
    if (!(arg instanceof echo_pb.echoResponse)) {
        throw new Error("Expected argument of type echo.echoResponse");
    }
    return Buffer.from(arg.serializeBinary());
}

function deserialize_echo_echoResponse(buffer_arg) {
    return echo_pb.echoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

var EchoService = (exports.EchoService = {
    ping: {
        path: "/echo.Echo/ping",
        requestStream: false,
        responseStream: false,
        requestType: echo_pb.echoRequest,
        responseType: echo_pb.echoResponse,
        requestSerialize: serialize_echo_echoRequest,
        requestDeserialize: deserialize_echo_echoRequest,
        responseSerialize: serialize_echo_echoResponse,
        responseDeserialize: deserialize_echo_echoResponse
    }
});

exports.EchoClient = grpc.makeGenericClientConstructor(EchoService);
