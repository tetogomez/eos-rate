FROM hasura/graphql-engine:v1.2.0-beta.4.cli-migrations

ARG hasura_graphql_migrations_dir

ENV HASURA_GRAPHQL_MIGRATIONS_DIR $hasura_graphql_migrations_dir
ENV PORT_HASURA 8080

EXPOSE $PORT_HASURA

COPY migrations $HASURA_GRAPHQL_MIGRATIONS_DIR

CMD graphql-engine \
  serve \
  --database-url $HASURA_GRAPHQL_DATABASE_URL
