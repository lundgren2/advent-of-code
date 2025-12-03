#!/bin/bash

# Usage: ./new_day.sh <day_number>

YEAR=2025
DAY=$1

# Load .env file if it exists
BASE_DIR=$(dirname "$0")
ENV_FILE="$BASE_DIR/.env"
if [ -f "$ENV_FILE" ]; then
  export $(grep -v '^#' "$ENV_FILE" | xargs)
fi

if [ -z "$DAY" ]; then
  echo "Usage: $0 <day>"
  exit 1
fi

PADDED_DAY=$(printf "%02d" $DAY)

# Define paths
TEMPLATE_DIR="$BASE_DIR/src/$YEAR/day00"
TARGET_DIR="$BASE_DIR/src/$YEAR/day$PADDED_DAY"

# Check if target directory exists
if [ -d "$TARGET_DIR" ]; then
  echo "Directory $TARGET_DIR already exists."
else
  echo "Creating $TARGET_DIR..."
  mkdir -p "$TARGET_DIR"
  
  # Copy template files
  cp "$TEMPLATE_DIR/part1.ts" "$TARGET_DIR/"
  cp "$TEMPLATE_DIR/part2.ts" "$TARGET_DIR/"
  cp "$TEMPLATE_DIR/test.spec.ts" "$TARGET_DIR/"
  # Create empty input.txt if not downloading
  touch "$TARGET_DIR/input.txt"

  # Update test.spec.ts with the correct day
  sed -i '' "s/Day x/Day $DAY/g" "$TARGET_DIR/test.spec.ts"
fi

# Open problem page
URL="https://adventofcode.com/$YEAR/day/$DAY"
echo "Opening $URL..."
open "$URL"

# Download input
INPUT_URL="https://adventofcode.com/$YEAR/day/$DAY/input"
INPUT_FILE="$TARGET_DIR/input.txt"

# Check for AOC_SESSION environment variable
if [ -n "$AOC_SESSION" ]; then
  echo "Downloading input to $INPUT_FILE..."
  curl -s --cookie "session=$AOC_SESSION" "$INPUT_URL" > "$INPUT_FILE"
else
  echo "AOC_SESSION env var not set. Cannot download input automatically."
  echo "To enable auto-download, set AOC_SESSION in .env file."
  open "$INPUT_URL"
fi

echo "Done ✅ Day $DAY ready in $TARGET_DIR"

