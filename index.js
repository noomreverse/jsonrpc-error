var util = require('util');

var JsonRpcError = function(code, message, value) {
  if (!(this instanceof JsonRpcError)) {
    return new JsonRpcError(code, message, value);
  }

  this.code = code;
  this.message = message;
  this.value = value;
};

util.inherits(JsonRpcError, Error);

module.exports = JsonRpcError;