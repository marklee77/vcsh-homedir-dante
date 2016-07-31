function FindProxyForURL(url, host) {

    if (url.substring(0,4) == "ftp:") {
        return "DIRECT;";
    }

    if (dnsDomainIs(host, "localhost") ||
        isInNet(host, "127.0.0.0", "255.0.0.0") ||
        isInNet(host, "172.17.0.0", "255.255.0.0")) {
        return "DIRECT;";
    }

    if (dnsDomainIs(host, ".onion") {
        return "PROXY localhost:9050;";
    }

    return "DIRECT;";

}
