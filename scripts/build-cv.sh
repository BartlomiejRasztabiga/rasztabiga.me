#!/usr/bin/env bash
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CV_DIR="$PROJECT_ROOT/cv"
OUTPUT="$PROJECT_ROOT/public/resume.pdf"

echo "Building CV..."
cd "$CV_DIR"

pdflatex -interaction=nonstopmode resume.tex > /dev/null
pdflatex -interaction=nonstopmode resume.tex > /dev/null  # second pass for cross-refs

cp resume.pdf "$OUTPUT"
rm -f resume.aux resume.log resume.out

echo "Done: $OUTPUT"
