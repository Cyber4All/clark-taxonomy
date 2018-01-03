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

## Installation & Updates
This package is included as a submodule in relevant CLARK repositories. If you have
pulled the latest version of a relevant repository and it is missing any submodules,
use the following commands:
```
git submodule init
git submodule update --remote --merge
```
When changes are pushed to this repo, you will need to repeat the 
`git submodule update --remote --merge` command to include them in your instances of 
any repositories using it.
