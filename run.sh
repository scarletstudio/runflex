#!/bin/bash

# Tells the script to exit if a command fails instead of continuing
set -e

if [ "$1" == "backend" ]; then
  echo "Starting backend..."
  ./backend/start.sh "${@:2}"
  
elif [ "$1" == "frontend" ]; then
  echo "Starting frontend app..."
  cd frontend
  npm run dev

else
  echo "No run shortcut found for: $1"
  echo "Did you pull the latest version?"

fi
