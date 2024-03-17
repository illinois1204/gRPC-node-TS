// Original file: proto/ping-pong.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _pingPong_Empty, Empty__Output as _pingPong_Empty__Output } from '../pingPong/Empty';

export interface PingPongClient extends grpc.Client {
  play(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_pingPong_Empty, _pingPong_Empty__Output>;
  play(options?: grpc.CallOptions): grpc.ClientDuplexStream<_pingPong_Empty, _pingPong_Empty__Output>;
  play(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_pingPong_Empty, _pingPong_Empty__Output>;
  play(options?: grpc.CallOptions): grpc.ClientDuplexStream<_pingPong_Empty, _pingPong_Empty__Output>;
  
}

export interface PingPongHandlers extends grpc.UntypedServiceImplementation {
  play: grpc.handleBidiStreamingCall<_pingPong_Empty__Output, _pingPong_Empty>;
  
}

export interface PingPongDefinition extends grpc.ServiceDefinition {
  play: MethodDefinition<_pingPong_Empty, _pingPong_Empty, _pingPong_Empty__Output, _pingPong_Empty__Output>
}
