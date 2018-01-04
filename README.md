## Installation
`npm install --save clark-taxonomy`

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
