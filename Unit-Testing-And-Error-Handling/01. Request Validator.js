function solve(obj) {
    let validMethods = ["GET", "POST", "DELETE", "CONNECT"];
    if (!(obj.method && validMethods.includes(obj.method))) {
        throw new Error(`Invalid request header: Invalid Method`);
    }
    let uriTester = /^[\w.]+$/;
    if (!(obj.uri && (obj.uri === "*" || uriTester.test(obj.uri)))) {
        throw new Error(`Invalid request header: Invalid URI`);
    }

    let validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    if (!(obj.version && validVersions.includes(obj.version))) {
        throw new Error(`Invalid request header: Invalid Version`);
    }
    let messageValidator = /^[^<>\\&'"]*$/;
    if (!obj.hasOwnProperty('message') || (obj.message !== "" && !messageValidator.test(obj.message))) {
        throw new Error(`Invalid request header: Invalid Message`);
    }

    return obj;
}
console.log(
    solve({
        method: "GET",
        uri: "*",
        version: "HTTP/1.1",
        
    })
);
