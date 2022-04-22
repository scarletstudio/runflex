#!/bin/bash

# Tells the script to exit if a command fails instead of continuing
set -e

if [ "$1" == "backend" ]; then
  echo "Starting backend..."
  source .venv/bin/activate
  cd backend
  # Set the Django secret key and save as an environment variable
  if command -v gp &> /dev/null; then
    gp env SECRET_KEY=$RANDOM
    eval $(gp env -e)
  else
    SECRET_KEY=$RANDOM
  fi
  echo "SECRET_KEY=$SECRET_KEY" > .env
  # Run the backend in development mode
  python3 manage.py migrate
  python3 manage.py runserver
  
elif [ "$1" == "frontend" ]; then
  echo "Starting frontend app..."
  cd frontend
  # Get the GitPod URL for the backend, for API requests
  # Get the GitPod URL for the frontend, for hot module reloading
  if command -v gp &> /dev/null; then
    gp env VITE_BACKEND_URL=$(gp url 8000)
    gp env VITE_FRONTEND_URL=$(gp url 3000)
    eval $(gp env -e)
  else
    VITE_BACKEND_URL="http://localhost:8000"
    VITE_FRONTEND_URL="http://localhost:3000"
  fi
  echo "VITE_BACKEND_URL=$VITE_BACKEND_URL" > .env
  echo "VITE_FRONTEND_URL=$VITE_FRONTEND_URL" >> .env
  # Run the frontend in development mode
  npm run dev

elif [ "$1" == "install-frontend" ]; then
  echo "Installing frontend dependencies..."
  # Install Node dependencies within frontend directory
  cd frontend
  npm install

elif [ "$1" == "install-backend" ]; then
  echo "Installing backend dependencies..."
  python3 -m venv .venv
  source .venv/bin/activate
  # Install Python dependencies in workspace so that GitPod persists them
  pip3 install -r requirements.txt

elif [ "$1" == "ui" ]; then
  # Open the frontend in the GitPod preview window
  if command -v gp &> /dev/null; then
    gp preview $(gp url 3000)
  else
    open "http://localhost:3000"
  fi

elif [ "$1" == "api" ]; then
  source .venv/bin/activate
  # Open the backend in the GitPod preview window
  if command -v gp &> /dev/null; then
    gp preview $(gp url 8000)
  else
    open "http://localhost:8000"
  fi

elif [ "$1" == "manage" ]; then
  source .venv/bin/activate
  cd backend
  # Set the Django secret key and save as an environment variable
  if command -v gp &> /dev/null; then
    gp env SECRET_KEY=$RANDOM
    eval $(gp env -e)
  else
    SECRET_KEY=$RANDOM
  fi
  echo "SECRET_KEY=$SECRET_KEY" > .env
  # Run the Django management command with args
  python3 manage.py "${@:2}"

else
  echo "No run shortcut found for: $1"
  echo "Did you pull the latest version?"

fi
