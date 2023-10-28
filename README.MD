##required: npm install -g grpc-tools

```sh
npm i google-protobuf
cd protos
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./build/ --grpc_out=grpc_js:./build/ echo.proto
```