// Original file: proto/echo.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { echoRequest as _echo_echoRequest, echoRequest__Output as _echo_echoRequest__Output } from '../echo/echoRequest';
import type { echoResponse as _echo_echoResponse, echoResponse__Output as _echo_echoResponse__Output } from '../echo/echoResponse';

export interface EchoClient extends grpc.Client {
  ping(argument: _echo_echoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_echo_echoResponse__Output>): grpc.ClientUnaryCall;
  ping(argument: _echo_echoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_echo_echoResponse__Output>): grpc.ClientUnaryCall;
  ping(argument: _echo_echoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_echo_echoResponse__Output>): grpc.ClientUnaryCall;
  ping(argument: _echo_echoRequest, callback: grpc.requestCallback<_echo_echoResponse__Output>): grpc.ClientUnaryCall;
  ping(argument: _echo_echoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_echo_echoResponse__Output>): grpc.ClientUnaryCall;
  ping(argument: _echo_echoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_echo_echoResponse__Output>): grpc.ClientUnaryCall;
  ping(argument: _echo_echoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_echo_echoResponse__Output>): grpc.ClientUnaryCall;
  ping(argument: _echo_echoRequest, callback: grpc.requestCallback<_echo_echoResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface EchoHandlers extends grpc.UntypedServiceImplementation {
  ping: grpc.handleUnaryCall<_echo_echoRequest__Output, _echo_echoResponse>;
  
}

export interface EchoDefinition extends grpc.ServiceDefinition {
  ping: MethodDefinition<_echo_echoRequest, _echo_echoResponse, _echo_echoRequest__Output, _echo_echoResponse__Output>
}
