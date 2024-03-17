import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { EchoClient as _echo_EchoClient, EchoDefinition as _echo_EchoDefinition } from './echo/Echo';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  echo: {
    Echo: SubtypeConstructor<typeof grpc.Client, _echo_EchoClient> & { service: _echo_EchoDefinition }
    echoRequest: MessageTypeDefinition
    echoResponse: MessageTypeDefinition
  }
}

