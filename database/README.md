## MySQL Tunnel Setup

```
# RDS instance
export KECKMYSQL_RDS=keckmysql-rds.lmucs.com

# EC2 instance to tunnel through
export KECKMYSQL=keckmysql.lmucs.com

# Tunnel command to run on local box
ssh -N -L 33066:$KECKMYSQL_RDS:3306 ubuntu@$KECKMYSQL -i <private key>
```

## MySQL Command Line

```
mysql -umobaread -preadonly -h 127.0.0.1 -P 33066 moba_ryan
```

## Web Admin

https://keckmysql.lmucs.com/pma/
