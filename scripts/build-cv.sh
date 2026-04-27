#!/usr/bin/env bash
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CV_DIR="$PROJECT_ROOT/cv"
OUTPUT="$PROJECT_ROOT/public/resume.pdf"

OUTPUT_ATS="$PROJECT_ROOT/public/resume-ats.pdf"

echo "Building CV..."
cd "$CV_DIR"

pdflatex -interaction=nonstopmode resume.tex > /dev/null
pdflatex -interaction=nonstopmode resume.tex > /dev/null

cp resume.pdf "$OUTPUT"
rm -f resume.aux resume.log resume.out

echo "Building ATS CV..."
pdflatex -interaction=nonstopmode resume-ats.tex > /dev/null
pdflatex -interaction=nonstopmode resume-ats.tex > /dev/null

cp resume-ats.pdf "$OUTPUT_ATS"
rm -f resume-ats.aux resume-ats.log resume-ats.out

echo "Done: $OUTPUT"
echo "Done: $OUTPUT_ATS"
