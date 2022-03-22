cp .env backend/server/.env
cd backend
python3 manage.py migrate
python3 manage.py runserver