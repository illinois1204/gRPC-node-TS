## Compile proto to JS

```sh
npm install -g grpc-tools
npm i google-protobuf
cd protos
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./build/ --grpc_out=grpc_js:./build/ file.proto
```
