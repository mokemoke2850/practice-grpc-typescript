package main

import (
	"errors"
	"io"
	"log"

	"google.golang.org/grpc"
)

func myStreamServerInterceptor1(srv interface{}, ss grpc.ServerStream, info *grpc.StreamServerInfo, handler grpc.StreamHandler) error {
	// preprocessing done when the stream is opened
	log.Println("[pre stream] my stream server interceptor 1: ", info.FullMethod)

	err := handler(srv, &myServerStreamWrapper1{ss})

	// preprocessing done when the stream is closed
	log.Println("[poset stream] my stream server interceptor1: ")
	return err
}

type myServerStreamWrapper1 struct {
	grpc.ServerStream
}

func (s *myServerStreamWrapper1) RecvMsg(m interface{}) error {
	// receive request from the stream
	err := s.ServerStream.RecvMsg(m)

	if !errors.Is(err, io.EOF) {
		log.Println("[pre message] my stream server interceptor 1: ", m)
	}
	return err
}

func (s *myServerStreamWrapper1) SendMsg(m interface{}) error {
	log.Println("[post message] my stream server interceptor 1: ", m)
	return s.ServerStream.SendMsg(m)
}
func myStreamServerInterceptor2(srv interface{}, ss grpc.ServerStream, info *grpc.StreamServerInfo, handler grpc.StreamHandler) error {
	// preprocessing done when the stream is opened
	log.Println("[pre stream] my stream server interceptor 2: ", info.FullMethod)

	err := handler(srv, &myServerStreamWrapper1{ss})

	// preprocessing done when the stream is closed
	log.Println("[poset stream] my stream server interceptor2: ")
	return err
}

type myServerStreamWrapper2 struct {
	grpc.ServerStream
}

func (s *myServerStreamWrapper2) RecvMsg(m interface{}) error {
	// receive request from the stream
	err := s.ServerStream.RecvMsg(m)

	if !errors.Is(err, io.EOF) {
		log.Println("[pre message] my stream server interceptor 2: ", m)
	}
	return err
}

func (s *myServerStreamWrapper2) SendMsg(m interface{}) error {
	log.Println("[post message] my stream server interceptor 2: ", m)
	return s.ServerStream.SendMsg(m)
}
