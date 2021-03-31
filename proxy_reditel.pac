function FindProxyForURL(url, host)
{
        // para evitar el acceso al proxy fuera de central
        var myip = myIpAddress();

 

    // Acceso HTTPS directamente sin pasar por el PROXY
    //
    if (shExpMatch(url, "http://*orange*")) 
        return "PROXY rdtcentral1.dyndns.org:5129";

 

    if (shExpMatch(url, "https://*orange*")) 
        return "PROXY rdtcentral1.dyndns.org:5129";
    //
    // Si el acceso es a nuestros Hosts Internos, sin PROXY
    //
        if (
                isPlainHostName(host)                     ||
                dnsDomainIs(host, ".local")
           )
                return "DIRECT";
        // Para Todo lo Demas
    else
                return "DIRECT";
} //End PAC File 

 

// $Id$

