# Ingnite
Ip: 10.10.236.138


## Scans

```bash
nmap x.x.x.x

Starting Nmap 7.60 ( https://nmap.org ) at 2020-04-17 21:38 CEST
Nmap scan report for 10.10.236.138
Host is up (0.024s latency).
Not shown: 970 closed ports, 29 filtered ports
PORT   STATE SERVICE
80/tcp open  http

Nmap done: 1 IP address (1 host up) scanned in 7.74 seconds
```

```bash
sudo nmap -O -sV --script vuln x.x.x.x

Starting Nmap 7.60 ( https://nmap.org ) at 2020-04-17 21:39 CEST
Pre-scan script results:
| broadcast-avahi-dos:
|   Discovered hosts:
|     224.0.0.251
|   After NULL UDP avahi packet DoS (CVE-2011-1002).
|_  Hosts are all up (not vulnerable).
Nmap scan report for 10.10.236.138
Host is up (0.061s latency).
Not shown: 999 closed ports
PORT   STATE SERVICE VERSION
80/tcp open  http    Apache httpd 2.4.18 ((Ubuntu))
|_http-csrf: Couldn\t find any CSRF vulnerabilities.
|_http-dombased-xss: Couldn\t find any DOM based XSS.
| http-enum:
|   /robots.txt: Robots file
|   /0/: Potentially interesting folder
|   /home/: Potentially interesting folder
|_  /index/: Potentially interesting folder
|_http-server-header: Apache/2.4.18 (Ubuntu)
|_http-stored-xss: Couldn\t find any stored XSS vulnerabilities.
No exact OS matches for host (If you know what OS is running on it, see https://nmap.org/submit/ ).
TCP/IP fingerprint:
OS:SCAN(V=7.60%E=4%D=4/17%OT=80%CT=1%CU=30000%PV=Y%DS=2%DC=I%G=Y%TM=5E9A07A
OS:8%P=x86_64-pc-linux-gnu)SEQ(SP=105%GCD=1%ISR=10B%TI=Z%CI=I%II=I%TS=A)SEQ
OS:(SP=105%GCD=1%ISR=10A%TI=Z%CI=I%TS=A)OPS(O1=M54DST11NW7%O2=M54DST11NW7%O
OS:3=M54DNNT11NW7%O4=M54DST11NW7%O5=M54DST11NW7%O6=M54DST11)WIN(W1=68DF%W2=
OS:68DF%W3=68DF%W4=68DF%W5=68DF%W6=68DF)ECN(R=Y%DF=Y%T=40%W=6903%O=M54DNNSN
OS:W7%CC=Y%Q=)T1(R=Y%DF=Y%T=40%S=O%A=S+%F=AS%RD=0%Q=)T2(R=N)T3(R=N)T4(R=Y%D
OS:F=Y%T=40%W=0%S=A%A=Z%F=R%O=%RD=0%Q=)T5(R=Y%DF=Y%T=40%W=0%S=Z%A=S+%F=AR%O
OS:=%RD=0%Q=)T6(R=Y%DF=Y%T=40%W=0%S=A%A=Z%F=R%O=%RD=0%Q=)T7(R=Y%DF=Y%T=40%W
OS:=0%S=Z%A=S+%F=AR%O=%RD=0%Q=)U1(R=Y%DF=N%T=40%IPL=164%UN=0%RIPL=G%RID=G%R
OS:IPCK=G%RUCK=G%RUD=G)IE(R=Y%DFI=N%T=40%CD=S)

Network Distance: 2 hops

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 457.59 seconds

```

## Services / Versions

Apache/2.4.18 (Ubuntu)
Fuel CMS V1.4
#TODO: find version of CodeIgniter
CodeIgniter ?
#TODO: find version of MYSQL
MySQL ?

## Research
Fuel CMS V1.4
CodeIgniter

## Investigate
/robots.txt
/0/
/home/
/index/
/fuel/
/fuel/login

-- 777
/fuel/application/cache/
/fuel/application/cache/dwoo/
/fuel/application/cache/dwoo/compiled
/assets/images

## Login

### Fuel CMS:
 - Username: xxxxx
 - Passowrd: xxxxx
