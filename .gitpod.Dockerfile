FROM gitpod/workspace-full

USER gitpod

COPY run.sh /
RUN ./run.sh install-frontend \
    && ./run.sh install-backend \
    && ./run.sh manage migrate \
    && ./run.sh manage load
