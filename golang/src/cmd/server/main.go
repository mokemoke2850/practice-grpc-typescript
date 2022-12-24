package main

import (
	"context"
	"fmt"
	"log"
	"net"
	"os"
	"os/signal"

	hellopb "mygrpc/pkg/grpc"

	"google.golang.org/grpc"
)

type myServer struct {
	hellopb.UnimplementedGreetignServiceServer
}

func NewMyServer() *myServer {
	return &myServer{}
}

func (s *myServer) Hello(ctx context.Context, req *hellopb.HelloRequest) (*hellopb.HelloResponse, error) {
	return &hellopb.HelloResponse{
		Message: fmt.Sprintf("Hello, %s!", req.GetName()),
	}, nil
}

func main() {
	// create listener on 8080 port
	port := 8080
	listener, err := net.Listen("tcp", fmt.Sprintf(":%d", port))

	if err != nil {
		panic(err)
	}

	// create gRPC server instance
	s := grpc.NewServer()

	// regist GreetingService to gRPC server
	hellopb.RegisterGreetignServiceServer(s, NewMyServer())

	// start the server on 8080 port
	go func() {
		log.Printf("start gRPC server port: %v", port)
		s.Serve(listener)
	}()

	// when pressed Ctrl + C, graceful shudown the server
	quit := make(chan os.Signal, 1)
	signal.Notify(quit, os.Interrupt)
	<-quit
	log.Println("stopping gRPC server...")
	s.GracefulStop()
}
