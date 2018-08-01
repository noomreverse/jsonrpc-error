# Standard JSON RPC 2.0 Error

Provides standard JSON RPC 2.0 error.

## Install
```bash
npm install node-jsonrpc-error
```

## Usage

Import the JSON RPC 2.0 error module:

```js
var JsonRpcError = require('node-jsonrpc-error');

var error = new JsonRpcError(-32600, 'Invalid Request');

console.log(error);
```

# License

[MIT](LICENSE)


