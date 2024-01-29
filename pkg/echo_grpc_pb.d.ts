// package: echo
// file: echo.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as echo_pb from "./echo_pb";

interface IEchoService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    ping: IEchoService_Iping;
}

interface IEchoService_Iping extends grpc.MethodDefinition<echo_pb.echoRequest, echo_pb.echoResponse> {
    path: "/echo.Echo/ping";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<echo_pb.echoRequest>;
    requestDeserialize: grpc.deserialize<echo_pb.echoRequest>;
    responseSerialize: grpc.serialize<echo_pb.echoResponse>;
    responseDeserialize: grpc.deserialize<echo_pb.echoResponse>;
}

export const EchoService: IEchoService;

export interface IEchoServer extends grpc.UntypedServiceImplementation {
    ping: grpc.handleUnaryCall<echo_pb.echoRequest, echo_pb.echoResponse>;
}

export interface IEchoClient {
    ping(request: echo_pb.echoRequest, callback: (error: grpc.ServiceError | null, response: echo_pb.echoResponse) => void): grpc.ClientUnaryCall;
    ping(request: echo_pb.echoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: echo_pb.echoResponse) => void): grpc.ClientUnaryCall;
    ping(request: echo_pb.echoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: echo_pb.echoResponse) => void): grpc.ClientUnaryCall;
}

export class EchoClient extends grpc.Client implements IEchoClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public ping(request: echo_pb.echoRequest, callback: (error: grpc.ServiceError | null, response: echo_pb.echoResponse) => void): grpc.ClientUnaryCall;
    public ping(request: echo_pb.echoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: echo_pb.echoResponse) => void): grpc.ClientUnaryCall;
    public ping(request: echo_pb.echoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: echo_pb.echoResponse) => void): grpc.ClientUnaryCall;
}
