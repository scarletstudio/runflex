# RunFlex

An app for runners to track and share their achievements.

If you launch a workspace with this GitPod badge, the codebase will be automatically set up for you. Then, you will be able to run the app and code in your browser.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod-redirect.herokuapp.com/)

## Tools Used

- Frontend
    - JavaScript
    - React
    - Vite
    - React Router
    - Leaflet Maps
    - Font Awesome Icons
- Backend
    - Python
    - Django
    - SQLite

Data for runs generated from [Trail Router](https://trailrouter.com).

## Backend Development

The backend API is a [Django app](https://www.djangoproject.com/) which provides a [RESTful API](https://mlsdev.com/blog/81-a-beginner-s-tutorial-for-understanding-restful-api) for the frontend app.

Most of the backend code for this project is written in Python.

You can trace through the backend codebase in this order to understand how it is structured:

- The entrypoint for the backend API is `backend/server/urls.py`, which defines all the endpoints.
- The endpoints process requests using the views defined in `backend/server/views.py`.
- The views use data about runners, runs, and run tracking data, whose data models are defined in `backend/core/models.py`.
- The view for an individual run returns metrics about that run, which are configured in `backend/analytics/main.py`.
- Each metric is implemented in a file like `backend/analytics/metrics/elevation.py`.
- Each metric has tests in a file like `backend/analytics/metrics/tests/test_elevation.py`.

You can run tests with this command:

```bash
run manage test
```

You can start the backend API server with this command:

```bash
run backend
```
