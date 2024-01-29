// package: echo
// file: echo.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class echoRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): echoRequest;
    getAge(): number;
    setAge(value: number): echoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): echoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: echoRequest): echoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: echoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): echoRequest;
    static deserializeBinaryFromReader(message: echoRequest, reader: jspb.BinaryReader): echoRequest;
}

export namespace echoRequest {
    export type AsObject = {
        name: string,
        age: number,
    }
}

export class echoResponse extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): echoResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): echoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: echoResponse): echoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: echoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): echoResponse;
    static deserializeBinaryFromReader(message: echoResponse, reader: jspb.BinaryReader): echoResponse;
}

export namespace echoResponse {
    export type AsObject = {
        message: string,
    }
}
