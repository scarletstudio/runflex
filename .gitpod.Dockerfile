FROM gitpod/workspace-full

USER gitpod

RUN pip3 install -r backend/requirements.txt
