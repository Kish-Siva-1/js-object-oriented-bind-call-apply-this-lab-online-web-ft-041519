//Your code here

function justInvoke(funktion) {
    return funktion(); 
}

function setThisWithCall(fn, thisValue, arg) {
    return fn.call(thisValue, arg);
}

function setThisWithApply(fn, thisValue, arg) {
    return fn.apply(thisValue, arg);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
    return functionToBeCopied.bind(thisValue);
}


