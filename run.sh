#!/bin/bash

# Tells the script to exit if a command fails instead of continuing
set -e

if [ "$1" == "backend" ]; then
  echo "Starting backend..."
  cd backend
  # Set the Django secret key and save as an environment variable
  gp env SECRET_KEY=$RANDOM
  eval $(gp env -e)
  echo "SECRET_KEY=$SECRET_KEY" > .env
  # Run the backend in development mode
  ./start.sh "${@:2}"
  
elif [ "$1" == "frontend" ]; then
  echo "Starting frontend app..."
  cd frontend
  # Get the GitPod URL for the backend and save as an environment variable
  gp env VITE_BACKEND_URL=$(gp url 8000)
  eval $(gp env -e)
  echo "VITE_BACKEND_URL=$VITE_BACKEND_URL" > .env
  # Run the frontend in development mode
  npm run dev

elif [ "$1" == "install-frontend" ]; then
  echo "Installing frontend dependencies..."
  # Install Node dependencies within frontend directory
  cd frontend
  npm install

elif [ "$1" == "install-backend" ]; then
  echo "Installing backend dependencies..."
  # Install Python dependencies in workspace so that GitPod persists them
  pip3 install -r backend/requirements.txt

elif [ "$1" == "preview" ]; then
  # Open the frontend in the GitPod preview window
  gp preview $(gp url 3000)

elif [ "$1" == "api" ]; then
  # Open the backend in the GitPod preview window
  gp preview $(gp url 8000)

elif [ "$1" == "manage" ]; then
  cd backend
  python3 manage.py "${@:2}"

else
  echo "No run shortcut found for: $1"
  echo "Did you pull the latest version?"

fi
