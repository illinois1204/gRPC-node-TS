// package: pingPong
// file: ping-pong.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as ping_pong_pb from "./ping-pong_pb";

interface IPingPongService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    play: IPingPongService_Iplay;
}

interface IPingPongService_Iplay extends grpc.MethodDefinition<ping_pong_pb.Empty, ping_pong_pb.Empty> {
    path: "/pingPong.PingPong/play";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<ping_pong_pb.Empty>;
    requestDeserialize: grpc.deserialize<ping_pong_pb.Empty>;
    responseSerialize: grpc.serialize<ping_pong_pb.Empty>;
    responseDeserialize: grpc.deserialize<ping_pong_pb.Empty>;
}

export const PingPongService: IPingPongService;

export interface IPingPongServer extends grpc.UntypedServiceImplementation {
    play: grpc.handleBidiStreamingCall<ping_pong_pb.Empty, ping_pong_pb.Empty>;
}

export interface IPingPongClient {
    play(): grpc.ClientDuplexStream<ping_pong_pb.Empty, ping_pong_pb.Empty>;
    play(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<ping_pong_pb.Empty, ping_pong_pb.Empty>;
    play(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<ping_pong_pb.Empty, ping_pong_pb.Empty>;
}

export class PingPongClient extends grpc.Client implements IPingPongClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public play(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<ping_pong_pb.Empty, ping_pong_pb.Empty>;
    public play(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<ping_pong_pb.Empty, ping_pong_pb.Empty>;
}
