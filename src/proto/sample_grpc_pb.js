// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sample_pb = require('./sample_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');

function serialize_sample_SampleRequest(arg) {
  if (!(arg instanceof sample_pb.SampleRequest)) {
    throw new Error('Expected argument of type sample.SampleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sample_SampleRequest(buffer_arg) {
  return sample_pb.SampleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sample_SampleResponse(arg) {
  if (!(arg instanceof sample_pb.SampleResponse)) {
    throw new Error('Expected argument of type sample.SampleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sample_SampleResponse(buffer_arg) {
  return sample_pb.SampleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SampleServiceService = exports.SampleServiceService = {
  sample: {
    path: '/sample.SampleService/Sample',
    requestStream: false,
    responseStream: false,
    requestType: sample_pb.SampleRequest,
    responseType: sample_pb.SampleResponse,
    requestSerialize: serialize_sample_SampleRequest,
    requestDeserialize: deserialize_sample_SampleRequest,
    responseSerialize: serialize_sample_SampleResponse,
    responseDeserialize: deserialize_sample_SampleResponse,
  },
  // server streaming
sampleServerStreamMethod: {
    path: '/sample.SampleService/SampleServerStreamMethod',
    requestStream: false,
    responseStream: true,
    requestType: sample_pb.SampleRequest,
    responseType: sample_pb.SampleResponse,
    requestSerialize: serialize_sample_SampleRequest,
    requestDeserialize: deserialize_sample_SampleRequest,
    responseSerialize: serialize_sample_SampleResponse,
    responseDeserialize: deserialize_sample_SampleResponse,
  },
  // client streaming 
sampleClientStreamMethod: {
    path: '/sample.SampleService/SampleClientStreamMethod',
    requestStream: true,
    responseStream: false,
    requestType: sample_pb.SampleRequest,
    responseType: sample_pb.SampleResponse,
    requestSerialize: serialize_sample_SampleRequest,
    requestDeserialize: deserialize_sample_SampleRequest,
    responseSerialize: serialize_sample_SampleResponse,
    responseDeserialize: deserialize_sample_SampleResponse,
  },
  // bi streaming
sampleBidrectionalMethod: {
    path: '/sample.SampleService/SampleBidrectionalMethod',
    requestStream: true,
    responseStream: true,
    requestType: sample_pb.SampleRequest,
    responseType: sample_pb.SampleResponse,
    requestSerialize: serialize_sample_SampleRequest,
    requestDeserialize: deserialize_sample_SampleRequest,
    responseSerialize: serialize_sample_SampleResponse,
    responseDeserialize: deserialize_sample_SampleResponse,
  },
};

exports.SampleServiceClient = grpc.makeGenericClientConstructor(SampleServiceService);
