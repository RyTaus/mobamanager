#!/bin/bash -x

USER=mobaread
PASS=readonly
HOST=127.0.0.1
PORT=33066
DBNAME=moba_ryan

OPTIONS="-u$USER -p$PASS -h $HOST -P $PORT --column-statistics=0"

OUTFILE=mysql_schema.sql
OUTDATA=mysql_data.sql

mysqldump $OPTIONS --no-data $DBNAME > $OUTFILE
mysqldump $OPTIONS --no-create-info $DBNAME > $OUTDATA
