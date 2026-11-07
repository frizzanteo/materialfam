#!/bin/bash
# Run this once from the materialfam directory to commit and push everything needed for deployment

cd "$(dirname "$0")"

# Add all the missing/changed files
git add .gitattributes
git add .gitignore
git add .htaccess
git add index.html
git add style.css
git add "images/Manifesto screenshot.png"
git add "pdf/trilingual_manifesto.pdf"
git rm --cached pdf/manifesto_placeholder.pdf 2>/dev/null || true

git commit -m "fix: deployment readiness - MIME types, missing assets, font fallback"
git push origin main

echo "Done! All changes pushed."

