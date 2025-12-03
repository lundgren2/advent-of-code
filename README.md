# advent-of-code

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.js
```

## Start new day script

To create a new day's structure and download the input automatically:

1.  Create a `.env` file in the root directory and add your Advent of Code session cookie:

    ```env
    AOC_SESSION=your_session_cookie_here
    ```

2.  Run the setup script with the day number:

    ```bash
    ./new_day.sh <day_number>
    ```

This project was created using `bun init` in bun v1.0.2. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
