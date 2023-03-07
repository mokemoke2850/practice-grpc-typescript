import * as grpc from '@grpc/grpc-js';
import * as sample_pb from '../../proto/sample_pb';
import * as sample_grpc_pb from '../../proto/sample_grpc_pb';

const sleep = async (ms: number) => {
  return new Promise((r) => setTimeout(r, ms));
};

export const sampleService: sample_grpc_pb.ISampleServiceServer['sample'] = (
  call,
  callback
) => {
  const name = call.request.getName();
  const resoponseMessage = `Hello! ${name}!`;

  const responseBody = new sample_pb.Sample();
  responseBody.setName(name);
  responseBody.setOne(resoponseMessage);
  //   responseBody.setOther("others");

  const res = new sample_pb.SampleResponse();
  res.setSample(responseBody);

  callback(null, res);
};

export const sampleServerStreamService: sample_grpc_pb.ISampleServiceServer['sampleServerStreamMethod'] =
  (call) => {
    const name = call.request.getName();

    const message = `Hello!, ${name}!!`;

    const sample = new sample_pb.Sample();
    sample.setName(name);
    sample.setOne(message);

    const res = new sample_pb.SampleResponse();
    res.setSample(sample);

    [...Array(5)].forEach(async () => {
      call.write(res);
      await sleep(1000);
    });

    call.end();
  };

export const sampleClientStreamService: sample_grpc_pb.ISampleServiceServer['sampleClientStreamMethod'] =
  (call) => {
    const messageList: string[] = [];
    call.on('data', (stream: sample_pb.SampleRequest) => {
      const message = `Hello, ${stream.getName()}`;
      messageList.push(message);
    });

    call.on('close', () => {
      const res = new sample_pb.SampleResponse();
      const responseSample = new sample_pb.Sample();
      responseSample.setOne(messageList.join('\n'));
      res.setSample(responseSample);
      return res;
    });

    // waiting for closing stream
    setInterval(() => {}, 1000);
  };

export const sampleBiStreamService: sample_grpc_pb.ISampleServiceServer['sampleBidrectionalMethod'] =
  (call) => {
    call.on('data', (stream: sample_pb.SampleRequest) => {
      const name = stream.getName();
      const message = `Hello, ${name}! from bi stream`;
      const res = new sample_pb.SampleResponse();
      const responseSample = new sample_pb.Sample();
      responseSample.setOne(message);
      call.emit('data', () => {
        return res;
      });
    });

    call.on('close', () => {
      return;
    });

    setInterval(() => {}, 1000);
  };
