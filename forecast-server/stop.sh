#!/bin/bash
top -b -n1 | grep node | grep -v grep | awk '{print $1}' | sudo xargs kill
exit