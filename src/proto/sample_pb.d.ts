// package: sample
// file: sample.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class SampleRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): SampleRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SampleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SampleRequest): SampleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SampleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SampleRequest;
    static deserializeBinaryFromReader(message: SampleRequest, reader: jspb.BinaryReader): SampleRequest;
}

export namespace SampleRequest {
    export type AsObject = {
        name: string,
    }
}

export class SampleResponse extends jspb.Message { 

    hasSample(): boolean;
    clearSample(): void;
    getSample(): Sample | undefined;
    setSample(value?: Sample): SampleResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SampleResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SampleResponse): SampleResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SampleResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SampleResponse;
    static deserializeBinaryFromReader(message: SampleResponse, reader: jspb.BinaryReader): SampleResponse;
}

export namespace SampleResponse {
    export type AsObject = {
        sample?: Sample.AsObject,
    }
}

export class Sample extends jspb.Message { 
    getId(): number;
    setId(value: number): Sample;
    getName(): string;
    setName(value: string): Sample;
    getIsbool(): boolean;
    setIsbool(value: boolean): Sample;
    getDublicatedField(): string;
    setDublicatedField(value: string): Sample;

    getSampleMapMap(): jspb.Map<string, string>;
    clearSampleMapMap(): void;

    hasSampleDuration(): boolean;
    clearSampleDuration(): void;
    getSampleDuration(): google_protobuf_duration_pb.Duration | undefined;
    setSampleDuration(value?: google_protobuf_duration_pb.Duration): Sample;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Sample;

    hasOne(): boolean;
    clearOne(): void;
    getOne(): string;
    setOne(value: string): Sample;

    hasOther(): boolean;
    clearOther(): void;
    getOther(): string;
    setOther(value: string): Sample;

    getMessageCase(): Sample.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Sample.AsObject;
    static toObject(includeInstance: boolean, msg: Sample): Sample.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Sample, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Sample;
    static deserializeBinaryFromReader(message: Sample, reader: jspb.BinaryReader): Sample;
}

export namespace Sample {
    export type AsObject = {
        id: number,
        name: string,
        isbool: boolean,
        dublicatedField: string,

        sampleMapMap: Array<[string, string]>,
        sampleDuration?: google_protobuf_duration_pb.Duration.AsObject,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        one: string,
        other: string,
    }

    export enum SampleEnum {
    UNKNOWN = 0,
    TEST1 = 1,
    TEST2 = 2,
    TEST3 = 3,
    }


    export enum MessageCase {
        MESSAGE_NOT_SET = 0,
        ONE = 14,
        OTHER = 15,
    }

}
