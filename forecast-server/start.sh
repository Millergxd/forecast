#!/bin/bash
exec > /dev/null 2>&1
cd /home/ubuntu/forecast-server/
sudo nohup node index.js > stdout.txt 2> stderr.txt 2>&1 &
exit