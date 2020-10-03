function delayedResult(n1, n2, delayTime, callback) {
    let result = n1+n2;
    setTimeout(() => {callback(result);
    }, delayTime);
}