## Proto build tools

```sh
npm i grpc-tools grpc_tools_node_protoc_ts
```

## Compile types for dynamic proto loading
```sh
npx proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=./pkg .\proto\*.proto
```
