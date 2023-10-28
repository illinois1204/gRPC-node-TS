// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var echo_pb = require('./echo_pb.js');

function serialize_echo_calculateRequest(arg) {
  if (!(arg instanceof echo_pb.calculateRequest)) {
    throw new Error('Expected argument of type echo.calculateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_echo_calculateRequest(buffer_arg) {
  return echo_pb.calculateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_echo_calculateResponse(arg) {
  if (!(arg instanceof echo_pb.calculateResponse)) {
    throw new Error('Expected argument of type echo.calculateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_echo_calculateResponse(buffer_arg) {
  return echo_pb.calculateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_echo_echoRequest(arg) {
  if (!(arg instanceof echo_pb.echoRequest)) {
    throw new Error('Expected argument of type echo.echoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_echo_echoRequest(buffer_arg) {
  return echo_pb.echoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_echo_echoResponse(arg) {
  if (!(arg instanceof echo_pb.echoResponse)) {
    throw new Error('Expected argument of type echo.echoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_echo_echoResponse(buffer_arg) {
  return echo_pb.echoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var EchoService = exports.EchoService = {
  call: {
    path: '/echo.Echo/call',
    requestStream: false,
    responseStream: false,
    requestType: echo_pb.echoRequest,
    responseType: echo_pb.echoResponse,
    requestSerialize: serialize_echo_echoRequest,
    requestDeserialize: deserialize_echo_echoRequest,
    responseSerialize: serialize_echo_echoResponse,
    responseDeserialize: deserialize_echo_echoResponse,
  },
};

exports.EchoClient = grpc.makeGenericClientConstructor(EchoService);
var CalculateService = exports.CalculateService = {
  sum: {
    path: '/echo.Calculate/sum',
    requestStream: false,
    responseStream: false,
    requestType: echo_pb.calculateRequest,
    responseType: echo_pb.calculateResponse,
    requestSerialize: serialize_echo_calculateRequest,
    requestDeserialize: deserialize_echo_calculateRequest,
    responseSerialize: serialize_echo_calculateResponse,
    responseDeserialize: deserialize_echo_calculateResponse,
  },
  min: {
    path: '/echo.Calculate/min',
    requestStream: false,
    responseStream: false,
    requestType: echo_pb.calculateRequest,
    responseType: echo_pb.calculateResponse,
    requestSerialize: serialize_echo_calculateRequest,
    requestDeserialize: deserialize_echo_calculateRequest,
    responseSerialize: serialize_echo_calculateResponse,
    responseDeserialize: deserialize_echo_calculateResponse,
  },
};

exports.CalculateClient = grpc.makeGenericClientConstructor(CalculateService);
