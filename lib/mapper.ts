/**
 * Morph taxonomy-json.ts into beautiful sets of maps.
 * To get the camelcase keys: Set.keys();
 * To get the capitalized words: Set.values();
 * Lodash is vital for being able to use the bleeding-edge Object.values()[] function
 */

import {
    taxonomy
} from './taxonomy-json';
import { lchmod } from 'fs';

var _ = require('lodash');

//done
export var lengths = function () {
    var lengthsArray = new Set(Array.from(taxonomy.lengths));
    let lengths = new Map();
    for (let m of lengthsArray) {
        //this separates and pulls the keys and values; otherwise they're kept as a single unit.
        lengths.set(Object.keys(m)[0], _.values(m)[0])
    }
    return lengths;
}


//Export a set of the taxons; this is the only thing without separate values/keys (it has no keys)
export var levels = new Set(Object.keys(taxonomy.taxons));

//done
export const remember_understand_verbs = buildTaxonomy('Remember and Understand', 'verbs');

//done
export const apply_analyze_verbs = buildTaxonomy('Apply and Analyze', 'verbs');

//done
export const evaluate_synthesize_verbs = buildTaxonomy('Evaluate and Synthesize', 'verbs');

//done
export const remember_understand_quizzes = buildTaxonomy('Remember and Understand', 'quizzes');

//done
export const apply_analyze_quizzes = buildTaxonomy('Apply and Analyze', 'quizzes');

//done
export const evaluate_synthesize_quizzes = buildTaxonomy('Evaluate and Synthesize', 'quizzes');

//done
export const remember_understand_assessments = buildTaxonomy('Remember and Understand', 'assessments');

//done
export const apply_analyze_assessments = buildTaxonomy('Apply and Analyze', 'assessments');

//done
export const evaluate_synthesize_assessments = buildTaxonomy('Evaluate and Synthesize', 'assessments');

//done
export const remember_understand_instructions = buildTaxonomy('Remember and Understand', 'strategies');

//done
export const apply_analyze_instructions = buildTaxonomy('Apply and Analyze', 'strategies');

//done
export const evaluate_synthesize_instructions = buildTaxonomy('Evaluate and Synthesize', 'strategies');



/**
 * 
 * @param level 
 * @param category 
 */
function buildTaxonomy(level: string, category: string): Set < string > {
    return new Set(Array.from(taxonomy.taxons[level][category]));
}