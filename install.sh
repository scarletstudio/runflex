#!/bin/bash

echo "Installing frontend dependencies..."
cd frontend
npm install

echo "Installing backend dependencies..."
cd ../backend
pip3 install -r requirements.txt
cd ..

echo "Done."
