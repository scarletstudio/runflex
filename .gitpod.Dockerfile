FROM gitpod/workspace-full

USER gitpod

COPY gitpod/backend/requirements.txt /
RUN pip3 install -r backend/requirements.txt
