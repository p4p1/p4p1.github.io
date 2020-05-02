<!--
  ____   __  ____  __
 (  _ \ /. |(  _ \/  )
  )___/(_  _))___/ )(
 (__)    (_)(__)  (__)

FileName: pickle.md
Link: 10.10.166.40
-->
# pickle.md
Ip: x.x.x.x

## Scans
```bash
Starting Nmap 7.60 ( https://nmap.org ) at 2020-05-02 14:24 CEST
Pre-scan script results:
| broadcast-avahi-dos:
|   Discovered hosts:
|     224.0.0.251
|   After NULL UDP avahi packet DoS (CVE-2011-1002).
|_  Hosts are all up (not vulnerable).
Nmap scan report for 10.10.166.40
Host is up (0.020s latency).
Not shown: 998 closed ports
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 7.2p2 Ubuntu 4ubuntu2.6 (Ubuntu Linux; protocol 2.0)
80/tcp open  http    Apache httpd 2.4.18 ((Ubuntu))
| http-cookie-flags:
|   /login.php:
|     PHPSESSID:
|_      httponly flag not set
|_http-csrf: Couldn't find any CSRF vulnerabilities.
|_http-dombased-xss: Couldn't find any DOM based XSS.
| http-enum:
|   /login.php: Possible admin folder
|_  /robots.txt: Robots file
| http-fileupload-exploiter:
|
|     Couldn't find a file-type field.
|
|_    Couldn't find a file-type field.
|_http-server-header: Apache/2.4.18 (Ubuntu)
| http-sql-injection:
|   Possible sqli for queries:
|     http://10.10.166.40/assets/r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&%5b%5d,o?w%28a%29
.remove%28%29%2cw.merge%28%5b%5d%2co.childNodes%29%29%7d%2cw.fn.load=function%28e%2ct%2cn%29%7bvar%27%20OR%20sql
spider&%5bt.createElement%28o%5b1%5d%29%5d%3a%28o=xe%28%5be%5d%2ct%2ca%29%2ca&=&a.length=
|     http://10.10.166.40/assets/r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&%5b%5d,o?w%28a%29
.remove%28%29%2cw.merge%28%5b%5d%2co.childNodes%29%29%7d%2cw.fn.load=function%28e%2ct%2cn%29%7bvar&%5bt.createEl
ement%28o%5b1%5d%29%5d%3a%28o=xe%28%5be%5d%2ct%2ca%29%2ca%27%20OR%20sqlspider&=&a.length=
|     http://10.10.166.40/assets/r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&%5b%5d,o?w%28a%29
.remove%28%29%2cw.merge%28%5b%5d%2co.childNodes%29%29%7d%2cw.fn.load=function%28e%2ct%2cn%29%7bvar&%5bt.createEl
ement%28o%5b1%5d%29%5d%3a%28o=xe%28%5be%5d%2ct%2ca%29%2ca&=%27%20OR%20sqlspider&a.length=
|     http://10.10.166.40/assets/r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&%5b%5d,o?w%28a%29
.remove%28%29%2cw.merge%28%5b%5d%2co.childNodes%29%29%7d%2cw.fn.load=function%28e%2ct%2cn%29%7bvar&%5bt.createEl
ement%28o%5b1%5d%29%5d%3a%28o=xe%28%5be%5d%2ct%2ca%29%2ca&=&a.length=%27%20OR%20sqlspider
|     http://10.10.166.40/assets/?C=D%3bO%3dA%27%20OR%20sqlspider
|     http://10.10.166.40/assets/?C=N%3bO%3dD%27%20OR%20sqlspider
|     http://10.10.166.40/assets/?C=N%3bO%3dA%27%20OR%20sqlspider
|_http-stored-xss: Couldn't find any stored XSS vulnerabilities.
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 359.68 seconds

#[p4p1@computer thm/]$ nikto -host 10.10.110.84
- Nikto v2.1.5
---------------------------------------------------------------------------
+ Target IP:          10.10.110.84
+ Target Hostname:    10.10.110.84
+ Target Port:        80
+ Start Time:         2020-05-02 18:33:22 (GMT2)
---------------------------------------------------------------------------
+ Server: Apache/2.4.18 (Ubuntu)
+ Server leaks inodes via ETags, header found with file /, fields: 0x426 0x5818ccf125686
+ The anti-clickjacking X-Frame-Options header is not present.
+ No CGI Directories found (use '-C all' to force check all possible dirs)
+ "robots.txt" retrieved but it does not contain any 'disallow' entries (which is odd).
+ Allowed HTTP Methods: OPTIONS, GET, HEAD, POST
+ Cookie PHPSESSID created without the httponly flag
+ OSVDB-3233: /icons/README: Apache default file found.
+ /login.php: Admin login page/section found.
+ 6544 items checked: 0 error(s) and 7 item(s) reported on remote host
+ End Time:           2020-05-02 18:44:53 (GMT2) (376 seconds)
--------------------------------------------------------------------------
```

## Services / Versions
22/tcp open  ssh     OpenSSH 7.2p2 Ubuntu 4ubuntu2.6 (Ubuntu Linux; protocol 2.0)
80/tcp open  http    Apache httpd 2.4.18 ((Ubuntu))

## Research
"PHPSESSID=i3qer5peb5jsu8813d9vpnequ6"

## Investigate
/Sup3rS3cretPickl3Ingred.txt
/assets
/clue.txt
/denied.php
/index.html
/login.php
/portal.php
/robots.txt

## Credentials

### Root:
 - user: <..>
 - pass: <..>

### Other:
 - user: R1ckRul3s
 - pass: Wubbalubbadubdub
