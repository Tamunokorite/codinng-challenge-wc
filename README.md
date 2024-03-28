# ccwc

## Introduction
The idea for this project was gotten from the Coding Challenges [website](https://codingchallenges.fyi).

It is my own version of wc, a Unix command line tool that displays the number of lines, words, and bytes contained in each input file or standard input.

This implementation works with standard input, and one input file (multiple files not supported yet).

## Testing Setup
To test this locally:
- Clone this repository
- cd into the local repository location from your terminal

- install dependencies:

```bash
bun install
```

- Run it:
You can run it via one of the following methods:
```bash
bun run index.ts <args> <filename>
```

or:
```bash
alias ccwc="bun run index.ts"
ccwc <args> <filename>
```

or (to allow you run it from anywhere on your computer):
```bash
bun link
bun link ccwc
ccwc <args> <filename>
```

## Available Flags:
- -l: Output the number of lines
- -m: Output the number of characters.
- -c: Output the number of bytes.
- -w: Output the number of words.

This project was created using `bun init` in bun v1.0.21. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
