## Proto build tools

```sh
npm i grpc-tools grpc_tools_node_protoc_ts
```

## Compile proto to js with types:
### At first create target dir (e.g. /pkg)
```sh
npx grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./pkg --grpc_out=grpc_js:./pkg --ts_out=grpc_js:./pkg -I./proto *.proto
```
