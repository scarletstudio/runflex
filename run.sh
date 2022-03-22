#!/bin/bash

# Tells the script to exit if a command fails instead of continuing
set -e

if [ "$1" == "backend" ]; then
  echo "Starting backend..."
  cd backend
  ./start.sh "${@:2}"
  
elif [ "$1" == "frontend" ]; then
  echo "Starting frontend app..."
  cd frontend
  # Get the GitPod URL for the backend and save as an environment variable
  gp env VITE_BACKEND_URL=$(gp url 8000)
  eval $(gp env -e)
  echo "VITE_BACKEND_URL=$VITE_BACKEND_URL" > .env
  # Run the app in development mode
  npm run dev

else
  echo "No run shortcut found for: $1"
  echo "Did you pull the latest version?"

fi
