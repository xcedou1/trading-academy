#!/usr/bin/env bash
git add .
git commit -m "${1:-Mise à jour générée par Codex}"
git push origin main
