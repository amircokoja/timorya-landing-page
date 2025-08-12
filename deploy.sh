#!/usr/bin/env bash
set -euo pipefail

# ===== Config =====
BRANCH="master"                 
PROJECT_NAME="timorya-landing-page"          
FE_ENV_FILE_REL="./.env"


echo "==> Fetching latest code for branch: $BRANCH"
git fetch --all --prune
git checkout "$BRANCH"
git pull --ff-only origin "$BRANCH"

if [[ ! -f "$FE_ENV_FILE_REL" ]]; then
  echo "ERROR: Frontend env file '$FE_ENV_FILE_REL' not found."
  exit 1
fi

echo "==> Bringing stack down (keep data, remove orphans)"
docker compose -p "$PROJECT_NAME" down --remove-orphans || true

echo "==> Building images (with FE build-time envs)"
docker compose \
  -p "$PROJECT_NAME" \
  --env-file "$FE_ENV_FILE_REL" \
  build --pull

echo "==> Starting updated services"
docker compose \
  -p "$PROJECT_NAME" \
  --env-file "$FE_ENV_FILE_REL" \
  up -d --remove-orphans

echo "==> Pruning dangling images"
docker image prune -f

echo "==> Deployment complete."
docker compose -p "$PROJECT_NAME" ps
