#!/bin/bash
ps -aux | grep uai.py | grep -v grep | awk '{print $2}' | sudo xargs kill
exit
