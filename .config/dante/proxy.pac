function FindProxyForURL(url, host) {

    if (dnsDomainIs(host, "ictmmweb.cc.ic.ac.uk")) {
        return "DIRECT;";
    }

    if (url.substring(0,4) == "ftp:") {
        return "DIRECT;";
    }

    if (dnsDomainIs(host, "localhost") ||
        isInNet(host, "127.0.0.0", "255.0.0.0") ||
        isInNet(host, "172.17.0.0", "255.255.0.0")) {
        return "DIRECT;";
    }

    if (dnsDomainIs(host, "www.grid5000.fr")) {
        return "DIRECT;";
    }

    if (dnsDomainIs(host, ".grid5000.fr") || 
        isInNet(host, "10.156.0.0", "255.252.0.0")) {
        return "SOCKS5 localhost:9060; DIRECT;";
    }

    if (dnsDomainIs(host, ".ic.ac.uk") ||
        dnsDomainIs(host, ".imperial.ac.uk") ||
        isInNet(host, "146.169.2.0", "255.255.255.0")) {
        return "SOCKS5 localhost:9070; DIRECT;";
    }

    if (dnsDomainIs(host, ".stillwell.me") ||
        dnsDomainIs(host, ".fortawesome.org")) {
        return "SOCKS5 localhost:9080; DIRECT;";
    }

    // FIXME: set up i2p
    if (dnsDomainIs(host, ".onion") ||
        dnsDomainIs(host, ".i2p")) {
        return "PROXY localhost:9050;";
    }

    return "DIRECT;";

}
