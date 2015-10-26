function FindProxyForURL(url, host) {

    if (shExpMatch(host, "*.onion")) {
        return "SOCKS5 localhost:9050";
    }

    if (shExpMatch(host, "*.grid5000.fr") || isInNet(host, "10.156.0.0", "255.252.0.0")) {
        return "SOCKS5 localhost:9060; DIRECT";
    }

    if (shExpMatch(host, "*.doc.ic.ac.uk") || shExpMatch(host, "*.imperial.ac.uk")) {
        return "SOCKS5 localhost:9070; DIRECT";
    }
    
    return "PROXY localhost:3128; DIRECT";
}
