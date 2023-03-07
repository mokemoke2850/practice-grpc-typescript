import * as grpc from '@grpc/grpc-js';
import * as sample_pb from '../proto/sample_pb';
import * as sample_grpc_pb from '../proto/sample_grpc_pb';
import {
  sampleBiStreamService,
  sampleClientStreamService,
  sampleServerStreamService,
  sampleService,
} from './service/SampleService';

const gRPC_PORT = '50051';

class ServerImplement implements sample_grpc_pb.ISampleServiceServer {
  constructor(
    public sample: grpc.handleUnaryCall<
      sample_pb.SampleRequest,
      sample_pb.SampleResponse
    >,
    public sampleServerStreamMethod: grpc.handleServerStreamingCall<
      sample_pb.SampleRequest,
      sample_pb.SampleResponse
    >,
    public sampleClientStreamMethod: grpc.handleClientStreamingCall<
      sample_pb.SampleRequest,
      sample_pb.SampleResponse
    >,
    public sampleBidrectionalMethod: grpc.handleBidiStreamingCall<
      sample_pb.SampleRequest,
      sample_pb.SampleResponse
    >
  ) {}
  [name: string]: grpc.UntypedHandleCall;
}

const main = () => {
  const server = new grpc.Server();

  server.addService(
    sample_grpc_pb.SampleServiceService,
    new ServerImplement(
      sampleService,
      sampleServerStreamService,
      sampleClientStreamService,
      sampleBiStreamService
    )
  );

  server.bindAsync(
    `0.0.0.0:${gRPC_PORT}`,
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {
      if (error) {
        console.error(error);
        return;
      }

      server.start();
      console.log(`gRPC server start! port: ${port}`);
    }
  );
};

main();
