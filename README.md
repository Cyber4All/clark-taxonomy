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

### Verbs
Export | Type | Description
---|---|---
`remember_understand_verbs`|`Set<string>`|a set of mapped verbs relevant to the Remember and Understand taxon
`apply_analyze_verbs`|`Set<string>`|a set of mapped verbs relevant to the Apply and Analyze taxon
`evaluate_synthesize_verbs`|`Set<string>`|a set of mapped verbs relevant to the Evaluate and Synthesize taxon

### Assessments
Export | Type | Description
---|---|---
`remember_understand_assessments`|`Set<string>`|a set of mapped assessments relevant to the Remember and Understand taxon
`apply_analyze_assessments`|`Set<string>`|a set of mapped assessments relevant to the Apply and Analyze taxon
`evaluate_synthesize_assessments`|`Set<string>`|a set of mapped assessments relevant to the Evaluate and Synthesize taxon

### Quizzes
Export | Type | Description
---|---|---
`remember_understand_quizzes`|`Set<string>`|a set of mapped quizzes relevant to the Remember and Understand taxon
`apply_analyze_quizzes`|`Set<string>`|a set of mapped quizzes relevant to the Apply and Analyze taxon
`evaluate_synthesize_quizzes`|`Set<string>`|a set of mapped quizzes relevant to the Evaluate and Synthesize taxon

### Instructions
Export | Type | Description
---|---|---
`remember_understand_instructions`|`Set<string>`|a set of mapped strategies relevant to the Remember and Understand taxon
`apply_analyze_instructions`|`Set<string>`|a set of mapped strategies relevant to the Apply and Analyze taxon
`evaluate_synthesize_instructions`|`Set<string>`|a set of mapped strategies relevant to the Evaluate and Synthesize taxon
