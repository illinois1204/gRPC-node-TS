const messages = require('../../build/echo_pb');

function call(call, callback) {
    const res = new messages.echoResponse();
    res.setMessage(`yaos, ${call.request.getName()}, this response from server. Time is ${Date.now()}`);
    callback(null, res);
}

module.exports = { call };