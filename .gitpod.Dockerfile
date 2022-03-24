FROM gitpod/workspace-full

USER gitpod

COPY .bash_aliases .bash_aliases
COPY frontend/package.json package.json
COPY frontend/package-lock.json package-lock.json
COPY backend/requirements.txt requirements.txt
RUN cat .bash_aliases >> ~/.bashrc \
    && source ~/.bashrc \
    && npm install -g \
    && pip3 install -r requirements.txt
