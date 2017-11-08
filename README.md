# taxonomy
Bloom taxonomy information

## Installation instructions
This package goes _inside_ your other CLARK repositories. From the working directory of your CLARK repo workspace, follow these steps:
1) run `git clone https://github.com/Cyber4All/taxonomy.git`
2) run `npm install -save jsonfile`
3) run `npm install --save-dev @types/jsonfile`
4) Add `/taxonomy` to your `.gitignore` file.

To add this package to your `npm run build` workflow, add this to your `package.json`:
```
"prebuild": "tsc -p taxonomy/"
```
If `prebuild` already exists, integrate the new command with `&&`.
Example:
```
"prebuild": "tsc -p taxonomy/ && tsc -p entity/"
```

## Usage instructions
See jsdocs for taxonomy.ts.

TODO: Generate and link to documentation for taxonomy.ts...