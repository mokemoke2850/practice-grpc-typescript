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

### vite を express アプリへ導入する

vite と必要プラグインインストール

```bash
npm i vite vite-plugin-node
```

vite.config.ts を作成

```ts
import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  plugins: [
    ...VitePluginNode({
      adapter: 'express',
      appPath: './src/server.ts',
    }),
  ],
});
```

`tsconfig.json` へもパスエイリアスを設定

```json
{
  "compilerOptions": {
    "rootDir": ".",
    "baseUrl": ".",
    "outDir": "./build",
    "@/*": ["src/*"]
  }
}
```

`package.json` へ npm スクリプト追加

```json
"scripts": {
"start": "NODE_ENV=production node dist/server.js",
"build": "tsoa spec-and-routes && tsc && vite build",
"dev": "vite"
}
```

エントリーポイントのファイルで listen しているところは本番環境以外はいらないので、分岐させる

```ts
if (process.env.NODE_ENV === 'production') {
  app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
}
```

### Swagger-UI-Express 導入

ライブラリインストール

```
npm i swagger-ui-express
npm i -D @types/swagger-ui-express
```

swagger.json をインポートするために tsconfig.json に以下を追記

```json
"compilerOptions": {
    "resolveJsonModule": true,
}
```

Swagger 用のルーティングを追加する

```ts
import swaggerUi from 'swagger-ui-express';
import SwaggerDocument from '@/swagger.json';

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(SwaggerDocument));
```

### gRPC for Typescript について

Node.js で gRPC を実装する際には [grpc-node](https://github.com/grpc/grpc-node) というライブラリが公式から出されている。

Typescript の gRPC 用ライブラリとして以下の 2 つがある

- (grpc_tools_node_protoc_ts)[https://github.com/agreatfool/grpc_tools_node_protoc_ts]
- (ts-protoc-gen)[https://github.com/improbable-eng/ts-protoc-gen]

#### gRPC 導入

```bash
npm i -D grpc-tools grpc_tools_node_protoc_ts
npm i @grpc/grpc-js google-protobuf
```

## 参考文献

- [軽量な Web フレームワーク tsoa を使って、OpenAPI と express ルーティングを自動生成する](https://zenn.dev/briete/articles/e556424c18e68d)
- [tsoa 公式ドキュメント](https://tsoa-community.github.io/docs/)
- [Vite を使って Express.js アプリを作る](https://scrapbox.io/dojineko/Vite%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6Express.js%E3%82%A2%E3%83%97%E3%83%AA%E3%82%92%E4%BD%9C%E3%82%8B)
- [Node.js + TypeScript で gRPC に入門する [前編: gRPC とは]](https://qiita.com/hedrall/items/038a2b29d27dd631be8a)
- [Protocol Buffers から TypeScript の型定義を作る](https://zenn.dev/ryo_kawamata/articles/ts-from-protocol-buffers)
