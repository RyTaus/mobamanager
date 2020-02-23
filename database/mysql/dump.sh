#!/bin/bash -x

USER=mobaread
PASS=readonly
HOST=127.0.0.1
PORT=33066
DBNAME=moba_ryan

OUTFILE=mysql_schema.sql

mysqldump -u$USER -p$PASS -h $HOST -P $PORT --no-data $DBNAME > $OUTFILE
