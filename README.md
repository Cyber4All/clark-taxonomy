# Bloomin' Onion Taxonomy
`taxonomy.json` contains all information on Learning Object lengths and Bloom taxonomy, including action verbs, assessments, and instructional strategies for each classification.

`taxonomy.ts` programatically extracts `taxonomy.json` information.

## Exports
Export | Type | Description
---|---|---
`lengths`|`Set<string>`|a set of all lengths (nanomodule, course, etc...)
`levels`|`Set<string>`|a set of all Bloom taxons (Remember, Apply, etc...)
`verbs`|`{string:Set<string>}`|a dictionary mapping Bloom taxons to a set of action verbs
`assessments`|`{string:Set<string>}`|a dictionary mapping Bloom taxons to a set of assessment plans
`quizzes`|`{string:Set<string>}`|a dictionary mapping Bloom taxons to a set of appropriate quiz/tests
`instructions`|`{string:Set<string>}`|a dictionary mapping Bloom taxons to a set of instructional strategies

## Installation
This package goes _inside_ your other CLARK repositories. From the typescript source directory of your CLARK repo workspace, follow these steps:
1) run `git clone https://github.com/Cyber4All/taxonomy.git`
2) run `npm install -save jsonfile`
3) run `npm install --save-dev @types/jsonfile`
4) Add `/<src directory>/taxonomy` to your `.gitignore` file.