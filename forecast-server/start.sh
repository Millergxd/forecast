#!/bin/bash
exec > /dev/null 2>&1
sudo nohup node index.js  > stdout.txt 2> stderr.txt &
exit