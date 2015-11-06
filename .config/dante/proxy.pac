function FindProxyForURL(url, host) {

    if (dnsDomainIs(host, ".grid5000.fr") || 
        isInNet(host, "10.156.0.0", "255.252.0.0")) {
        return "SOCKS5 localhost:9060; PROXY localhost:3128; DIRECT";
    }

    if (dnsDomainIs(host, ".ic.ac.uk") ||
        dnsDomainIs(host, ".imperial.ac.uk")) {
        return "SOCKS5 localhost:9070; PROXY localhost:3128; DIRECT";
    }

    if (dnsDomainIs(host, ".stillwell.me") ||
        dnsDomainIs(host, ".foodnetwork.com") ||
        dnsDomainIs(host, ".doodle.com")) {
        return "SOCKS5 localhost:9080; DIRECT";
    }

    if (shEXpMatch(url, "https://*")) {
        return "DIRECT";
    } else if (shExpMatch(url, "ftp://*")) {
        return "SOCKS5 loalhost:9050; DIRECT"
    }
    
    return "PROXY localhost:3128; DIRECT";
}
