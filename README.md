# practice-grpc-typescript

Typescript + gRPC 練習

## PJ スタート

PJ の作成

```npm
npm init -y

npm install tsoa express body-parser

npm install --save-dev typescript @types/node @types/express @types/body-parser
```

## 調べたこと

### `routes.ts` が作成失敗する

`npx tsoa routes` を実行しても下記のようなエラーが出て、ルーティング用ファイルが作成されない

```
npx tsoa routes
Generate routes error.
 GenerateMetadataError: No declarations found for referenced type User.
    at TypeResolver.getModelTypeDeclaration (/home/shoma/code/Typescript/practice-grpc-typescript/node_modules/@tsoa/cli/dist/metadataGeneration/typeResolver.js:755:19)
    at TypeResolver.typeArgumentsToContext (/home/shoma/code/Typescript/practice-grpc-typescript/node_modules/@tsoa/cli/dist/metadataGeneration/typeResolver.js:880:34)
    at TypeResolver.getReferenceType (/home/shoma/code/Typescript/practice-grpc-typescript/node_modules/@tsoa/cli/dist/metadataGeneration/typeResolver.js:576:14)
    at TypeResolver.resolve (/home/shoma/code/Typescript/practice-grpc-typescript/node_modules/@tsoa/cli/dist/metadataGeneration/typeResolver.js:389:36)
    at TypeResolver.resolve (/home/shoma/code/Typescript/practice-grpc-typescript/node_modules/@tsoa/cli/dist/metadataGeneration/typeResolver.js:379:118)
    at MethodGenerator.Generate (/home/shoma/code/Typescript/practice-grpc-typescript/node_modules/@tsoa/cli/dist/metadataGeneration/methodGenerator.js:39:78)
    at /home/shoma/code/Typescript/practice-grpc-typescript/node_modules/@tsoa/cli/dist/metadataGeneration/controllerGenerator.js:45:41
    at Array.map (<anonymous>)
    at ControllerGenerator.buildMethods (/home/shoma/code/Typescript/practice-grpc-typescript/node_modules/@tsoa/cli/dist/metadataGeneration/controllerGenerator.js:45:14)
    at ControllerGenerator.Generate (/home/shoma/code/Typescript/practice-grpc-typescript/node_modules/@tsoa/cli/dist/metadataGeneration/controllerGenerator.js:34:27)
```

`tsconfig.json` に baseUrl を指定してある時は、 `tsoa.json` にも同様に baseUrl を設定してあげる必要がある。

```json
"compilerOptions": {
"baseUrl": "src"
}
```

## 参考文献

- [軽量な Web フレームワーク tsoa を使って、OpenAPI と express ルーティングを自動生成する](https://zenn.dev/briete/articles/e556424c18e68d)
- [tsoa 公式ドキュメント](https://tsoa-community.github.io/docs/)
