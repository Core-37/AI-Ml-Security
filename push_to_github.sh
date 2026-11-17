#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "${BASH_SOURCE[0]}")"
echo "==================================================="
echo "  Core-37 - Syncing Security37 (AI/ML) to GitHub"
echo "==================================================="
git add -A
if ! git diff --cached --quiet; then
  git commit -m "Update project materials and notes (Core-37)"
fi
git push origin main
echo "✅ Готово! Изменения отправлены в Security37."
