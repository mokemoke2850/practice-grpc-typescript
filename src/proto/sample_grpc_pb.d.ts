// package: sample
// file: sample.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as sample_pb from "./sample_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

interface ISampleServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sample: ISampleServiceService_ISample;
    sampleServerStreamMethod: ISampleServiceService_ISampleServerStreamMethod;
    sampleClientStreamMethod: ISampleServiceService_ISampleClientStreamMethod;
    sampleBidrectionalMethod: ISampleServiceService_ISampleBidrectionalMethod;
}

interface ISampleServiceService_ISample extends grpc.MethodDefinition<sample_pb.SampleRequest, sample_pb.SampleResponse> {
    path: "/sample.SampleService/Sample";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sample_pb.SampleRequest>;
    requestDeserialize: grpc.deserialize<sample_pb.SampleRequest>;
    responseSerialize: grpc.serialize<sample_pb.SampleResponse>;
    responseDeserialize: grpc.deserialize<sample_pb.SampleResponse>;
}
interface ISampleServiceService_ISampleServerStreamMethod extends grpc.MethodDefinition<sample_pb.SampleRequest, sample_pb.SampleResponse> {
    path: "/sample.SampleService/SampleServerStreamMethod";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sample_pb.SampleRequest>;
    requestDeserialize: grpc.deserialize<sample_pb.SampleRequest>;
    responseSerialize: grpc.serialize<sample_pb.SampleResponse>;
    responseDeserialize: grpc.deserialize<sample_pb.SampleResponse>;
}
interface ISampleServiceService_ISampleClientStreamMethod extends grpc.MethodDefinition<sample_pb.SampleRequest, sample_pb.SampleResponse> {
    path: "/sample.SampleService/SampleClientStreamMethod";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<sample_pb.SampleRequest>;
    requestDeserialize: grpc.deserialize<sample_pb.SampleRequest>;
    responseSerialize: grpc.serialize<sample_pb.SampleResponse>;
    responseDeserialize: grpc.deserialize<sample_pb.SampleResponse>;
}
interface ISampleServiceService_ISampleBidrectionalMethod extends grpc.MethodDefinition<sample_pb.SampleRequest, sample_pb.SampleResponse> {
    path: "/sample.SampleService/SampleBidrectionalMethod";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<sample_pb.SampleRequest>;
    requestDeserialize: grpc.deserialize<sample_pb.SampleRequest>;
    responseSerialize: grpc.serialize<sample_pb.SampleResponse>;
    responseDeserialize: grpc.deserialize<sample_pb.SampleResponse>;
}

export const SampleServiceService: ISampleServiceService;

export interface ISampleServiceServer {
    sample: grpc.handleUnaryCall<sample_pb.SampleRequest, sample_pb.SampleResponse>;
    sampleServerStreamMethod: grpc.handleUnaryCall<sample_pb.SampleRequest, sample_pb.SampleResponse>;
    sampleClientStreamMethod: grpc.handleClientStreamingCall<sample_pb.SampleRequest, sample_pb.SampleResponse>;
    sampleBidrectionalMethod: grpc.handleBidiStreamingCall<sample_pb.SampleRequest, sample_pb.SampleResponse>;
}

export interface ISampleServiceClient {
    sample(request: sample_pb.SampleRequest, callback: (error: grpc.ServiceError | null, response: sample_pb.SampleResponse) => void): grpc.ClientUnaryCall;
    sample(request: sample_pb.SampleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sample_pb.SampleResponse) => void): grpc.ClientUnaryCall;
    sample(request: sample_pb.SampleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sample_pb.SampleResponse) => void): grpc.ClientUnaryCall;
    sampleServerStreamMethod(request: sample_pb.SampleRequest, callback: (error: grpc.ServiceError | null, response: sample_pb.SampleResponse) => void): grpc.ClientUnaryCall;
    sampleServerStreamMethod(request: sample_pb.SampleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sample_pb.SampleResponse) => void): grpc.ClientUnaryCall;
    sampleServerStreamMethod(request: sample_pb.SampleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sample_pb.SampleResponse) => void): grpc.ClientUnaryCall;
    sampleClientStreamMethod(callback: (error: grpc.ServiceError | null, response: sample_pb.SampleResponse) => void): grpc.ClientWritableStream<sample_pb.SampleRequest>;
    sampleClientStreamMethod(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sample_pb.SampleResponse) => void): grpc.ClientWritableStream<sample_pb.SampleRequest>;
    sampleClientStreamMethod(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sample_pb.SampleResponse) => void): grpc.ClientWritableStream<sample_pb.SampleRequest>;
    sampleClientStreamMethod(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sample_pb.SampleResponse) => void): grpc.ClientWritableStream<sample_pb.SampleRequest>;
    sampleBidrectionalMethod(): grpc.ClientDuplexStream<sample_pb.SampleRequest, sample_pb.SampleResponse>;
    sampleBidrectionalMethod(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<sample_pb.SampleRequest, sample_pb.SampleResponse>;
    sampleBidrectionalMethod(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<sample_pb.SampleRequest, sample_pb.SampleResponse>;
}

export class SampleServiceClient extends grpc.Client implements ISampleServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sample(request: sample_pb.SampleRequest, callback: (error: grpc.ServiceError | null, response: sample_pb.SampleResponse) => void): grpc.ClientUnaryCall;
    public sample(request: sample_pb.SampleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sample_pb.SampleResponse) => void): grpc.ClientUnaryCall;
    public sample(request: sample_pb.SampleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sample_pb.SampleResponse) => void): grpc.ClientUnaryCall;
    public sampleServerStreamMethod(request: sample_pb.SampleRequest, callback: (error: grpc.ServiceError | null, response: sample_pb.SampleResponse) => void): grpc.ClientUnaryCall;
    public sampleServerStreamMethod(request: sample_pb.SampleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sample_pb.SampleResponse) => void): grpc.ClientUnaryCall;
    public sampleServerStreamMethod(request: sample_pb.SampleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sample_pb.SampleResponse) => void): grpc.ClientUnaryCall;
    public sampleClientStreamMethod(callback: (error: grpc.ServiceError | null, response: sample_pb.SampleResponse) => void): grpc.ClientWritableStream<sample_pb.SampleRequest>;
    public sampleClientStreamMethod(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sample_pb.SampleResponse) => void): grpc.ClientWritableStream<sample_pb.SampleRequest>;
    public sampleClientStreamMethod(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sample_pb.SampleResponse) => void): grpc.ClientWritableStream<sample_pb.SampleRequest>;
    public sampleClientStreamMethod(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sample_pb.SampleResponse) => void): grpc.ClientWritableStream<sample_pb.SampleRequest>;
    public sampleBidrectionalMethod(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<sample_pb.SampleRequest, sample_pb.SampleResponse>;
    public sampleBidrectionalMethod(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<sample_pb.SampleRequest, sample_pb.SampleResponse>;
}
