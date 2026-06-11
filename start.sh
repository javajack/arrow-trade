#!/usr/bin/env bash
set -euo pipefail

DOCS_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/docs"
cd "$DOCS_DIR"

if [ ! -d node_modules ]; then
  echo "Installing dependencies..."
  npm install
fi

exec npm run dev -- --host "${HOST:-localhost}" --port "${PORT:-4321}" --open
