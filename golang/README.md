# 作ってわかる！　はじめての gRPC 学習履歴

## 概要

[作ってわかる! はじめての gRPC](https://zenn.dev/hsaki/books/golang-grpc-starting) の学習履歴

## 追加で調べてこと

### go run は非推奨

参照先にて `go get` でライブラリインストールしていますが、 go1.17 から非推奨になり、 `go install` になったので、下記を使用します。

```bash
go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
```

コードを自動生成したあとは、go mod にパッケージを追加するために `go mod tidy`　を使用します。

### ubuntu に protobuf インストール

```bash
sudo apt install protobuf-compiler
```

protoc-gen-go を実行できるようにパス追加

```bash
export PATH="$PATH:$(go env GOPATH)/bin"
```

### ubuntu に grpcurl インストール

brew にしかないっぽいので、go でインストールしました。

```bash
go install github.com/fullstorydev/grpcurl/cmd/grpcurl@latest
```

### undefined: myUnaryServerInterceptor1 となり、関数を呼べない

`go run main.go` では main.go しか読み込んでくれない。

`go run main.go unaryIntercepror.go` または　`go run *.go` にする
