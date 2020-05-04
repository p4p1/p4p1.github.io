<!--
  ____   __  ____  __
 (  _ \ /. |(  _ \/  )
  )___/(_  _))___/ )(
 (__)    (_)(__)  (__)

FileName: convertmyvideo.md
Link: https://tryhackme.com/room/convertmyvideo
-->
# convertmyvideo.md
Ip: 10.10.117.246

## Scans
```bash
![p4p1@computer notes/]$ nmap 10.10.117.246
Starting Nmap 7.60 ( https://nmap.org ) at 2020-05-03 22:18 CEST
Nmap scan report for 10.10.117.246
Host is up (0.043s latency).
Not shown: 998 closed ports
PORT   STATE SERVICE
22/tcp open  ssh
80/tcp open  http

Nmap done: 1 IP address (1 host up) scanned in 0.78 seconds

![p4p1@computer notes/]$ nikto -host 10.10.117.246
- Nikto v2.1.5
---------------------------------------------------------------------------
+ Target IP:          10.10.117.246
+ Target Hostname:    10.10.117.246
+ Target Port:        80
+ Start Time:         2020-05-03 22:19:11 (GMT2)
---------------------------------------------------------------------------
+ Server: Apache/2.4.29 (Ubuntu)
+ The anti-clickjacking X-Frame-Options header is not present.
+ No CGI Directories found (use '-C all' to force check all possible dirs)
+ IP address found in the 'location' header. The IP is "127.0.1.1".
+ OSVDB-630: IIS may reveal its internal or real IP in the Location header via a request to the /images directory. The value is "http://127.0.1.1/images/".
+ DEBUG HTTP verb may show server debugging information. See http://msdn.microsoft.com/en-us/library/e8z01xdh%28VS.80%29.aspx for details.
+ Server leaks inodes via ETags, header found with file /icons/README, fields: 0x13f4 0x438c034968a80
+ OSVDB-3233: /icons/README: Apache default file found.
+ 6544 items checked: 15 error(s) and 6 item(s) reported on remote host
+ End Time:           2020-05-03 22:28:14 (GMT2) (543 seconds)
---------------------------------------------------------------------------
+ 1 host(s) tested


```

## Services / Versions
Apache / 2.4.29

## Research
<..>

## Investigate
``` bash
curl 'http://10.10.117.246/' \
    -H 'Connection: keep-alive' \
    -H 'Accept: */*' \
    -H 'X-Requested-With: XMLHttpRequest' \
    -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.123 Safari/537.36' \
    -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' \
    -H 'Origin: http://10.10.117.246' \
    -H 'Referer: http://10.10.117.246/' \
    -H 'Accept-Language: en-US,en;q=0.9,fr-FR;q=0.8,fr;q=0.7' \
    --data 'yt_url=;id;'
    --compressed
```

## Credentials

### Root:
 - user: <..>
 - pass: <..>
