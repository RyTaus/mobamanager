## MySQL Tunnel Setup

```
export KECKMYSQL_RDS=keckmysql-rds.lmucs.com
export KECKMYSQL=keckmysql.lmucs.com

ssh -N -L 33066:$KECKMYSQL_RDS:3306 ubuntu@$KECKMYSQL -i <private key>
```
