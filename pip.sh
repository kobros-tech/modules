#!/usr/bin/env bash
set -e

echo "Installing all addon requirements..."
find . -name "requirements.txt" -exec pip install -r {} \;

echo "Done ✅"
