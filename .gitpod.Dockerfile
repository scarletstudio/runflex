FROM gitpod/workspace-full

USER gitpod

COPY backend/requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
