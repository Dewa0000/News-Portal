
callbackFn(result){
    console.log(result);
}

var sendObj = {
    method: "POST"
}
fetch("http://localhost:3001/handleFunc", sendObj).then(callbackFn)