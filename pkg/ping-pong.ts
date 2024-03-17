import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { PingPongClient as _pingPong_PingPongClient, PingPongDefinition as _pingPong_PingPongDefinition } from './pingPong/PingPong';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  pingPong: {
    Empty: MessageTypeDefinition
    PingPong: SubtypeConstructor<typeof grpc.Client, _pingPong_PingPongClient> & { service: _pingPong_PingPongDefinition }
  }
}

