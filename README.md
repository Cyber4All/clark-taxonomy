## Installation
`npm install --save clark-taxonomy`

# Bloomin' Onion Taxonomy
`taxonomy.json` contains all information on Learning Object lengths and Bloom's taxonomy action verbs for each classification.

`taxonomy.ts` programatically extracts `taxonomy.json` information.

## Exports
Export | Type | Description
---|---|---
`lengths`|`Set<string>`|a set of all lengths, in form of a map (nanomodule, course, etc...)
`levels`|`Set<string>`|a set of all Bloom taxons, in form of a map (Remember, Apply, etc...)

### Verbs
Export | Type | Description
---|---|---
`remember_understand_verbs`|`Set<string>`|a set of mapped verbs relevant to the Remember and Understand taxon
`apply_analyze_verbs`|`Set<string>`|a set of mapped verbs relevant to the Apply and Analyze taxon
`evaluate_synthesize_verbs`|`Set<string>`|a set of mapped verbs relevant to the Evaluate and Synthesize taxon

