// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var ping$pong_pb = require('./ping-pong_pb.js');

function serialize_pingPong_Empty(arg) {
  if (!(arg instanceof ping$pong_pb.Empty)) {
    throw new Error('Expected argument of type pingPong.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pingPong_Empty(buffer_arg) {
  return ping$pong_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var PingPongService = exports.PingPongService = {
  play: {
    path: '/pingPong.PingPong/play',
    requestStream: true,
    responseStream: true,
    requestType: ping$pong_pb.Empty,
    responseType: ping$pong_pb.Empty,
    requestSerialize: serialize_pingPong_Empty,
    requestDeserialize: deserialize_pingPong_Empty,
    responseSerialize: serialize_pingPong_Empty,
    responseDeserialize: deserialize_pingPong_Empty,
  },
};

exports.PingPongClient = grpc.makeGenericClientConstructor(PingPongService);
