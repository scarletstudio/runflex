FROM gitpod/workspace-full

USER gitpod

COPY .bash_aliases /
COPY run.sh /
RUN cat .bash_aliases >> ~/.bashrc \
    && source ~/.bashrc \
    && ./run.sh install-frontend \
    && ./run.sh install-backend \
    && ./run.sh manage migrate \
    && ./run.sh manage load
