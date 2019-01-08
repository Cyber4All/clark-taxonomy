/**
 * Ensure the refactoring is working smoothly
 */

const taxonomyx = require('../dist/taxonomy-json');
const taxonomy_json_1 = require("../dist/mapper");
const lengths = taxonomy_json_1.lengths();
const levels = taxonomy_json_1.levels;
const ruv = taxonomy_json_1.remember_understand_verbs;
const aav = taxonomy_json_1.apply_analyze_verbs;
const esv = taxonomy_json_1.evaluate_synthesize_verbs;
const ruq = taxonomy_json_1.remember_understand_quizzes;
const aaq = taxonomy_json_1.apply_analyze_quizzes;
const esq = taxonomy_json_1.evaluate_synthesize_quizzes;
const rua = taxonomy_json_1.remember_understand_assessments;
const aaa = taxonomy_json_1.apply_analyze_assessments;
const esa = taxonomy_json_1.evaluate_synthesize_assessments;
const rui = taxonomy_json_1.remember_understand_instructions;
const aai  = taxonomy_json_1.apply_analyze_instructions;
const esi  = taxonomy_json_1.evaluate_synthesize_instructions;

var _ = require('lodash');

/* 
console.log('\n');
console.log(ruv); */

console.log(lengths);
console.log(levels);

/* console.log(Object.keys(taxonomyx.taxonomy.taxons));

let ru = 'Remember and Understand'
let str = 'verbs'

let remember_understand_assessments = new Set(Array.from(taxonomyx.taxonomy.taxons[ru][str]));
console.log(remember_understand_assessments); */


console.log('REMEMBER')
console.log(ruv);
console.log('\n');
console.log(rua);
console.log('\n');
console.log(ruq);
console.log('\n');
console.log(rui);
console.log('\n\n');

console.log('APPLY')
console.log(aav);
console.log('\n');
console.log(aaa);
console.log('\n');
console.log(aaq);
console.log('\n');
console.log(aai);
console.log('\n\n');

console.log('EVALUATE')
console.log(esv);
console.log('\n');
console.log(esa);
console.log('\n');
console.log(esq);
console.log('\n');
console.log(esi);
console.log('\n\n');


//const taxonomy_json_2 = require("../dist/taxonomy-json");

/* console.log(ruverbs);

console.log('\n');

console.log(aaverbs);

console.log('\n');

console.log(esverbs); */

/* var getKeys = function (obj) {
    var keys = [];
    for (var key in obj) {
        keys.push(key);
    }
    return keys;
} */

/* ////
// console.log(lengths);
/* console.log(levels);
let array = Array.from(levels);
console.log(array); */
/* console.log(verbs);
//console.log(verbs.has("'Remember and Understand'"));
let array = Array.from(verbs);

console.log('\n');

console.log(array[0][1]);
//let array2 = Array.from(array[0][1]);

console.log(array[0][1].length);

console.log('\n'); */
/*
//console.log(array[0][1].length);

//klengths = new Set(Array.from(taxonomy_json_1.taxonomy));

/* let array = Array.from(klengths);
let map = new Map();

for (let m of array) {
    console.log(Object.keys(m)[0])
    console.log(_.values(m)[0])
    map.set(Object.keys(m)[0], _.values(m)[0])
}
console.log(map.entries());
 */
//console.log(lengths); 

/* let mp = new Map;
Object.keys(klengths).forEach(k => {
    //console.log('i did a thing' + k);
    mp.set(k, klengths[k])
}); */
//console.log(mp);

/* 
console.log('test')

//print the pairs for course lengths
lengths = new Set(taxonomy_json_1.taxonomy.lengths);
console.log('\nlengths:');
console.log(lengths);

console.log('\nup one level from lengths?')
lens = new Set(Object.keys(taxonomy_json_1.taxonomy));
console.log(lens);

console.log('\nmy test - made of lengths.values()')
test = new Set(lengths.values());

console.log('\ntest.values()')
console.log(test.values());

console.log('\nbleh - a map of lengths');
bleh = new Map(lengths.keys());
console.log(bleh.entries());

console.log('\nlengths.keys');
console.log(lengths.values());

console.log('\nlengths.values');
console.log(lengths.values());

console.log('\nPrint all the values for taxon types ("levels"):');
const levels = new Set(Object.keys(taxonomy_json_1.taxonomy.taxons));
console.log(levels);

console.log('\nPrint all the verbs');
verbs = buildTaxonomy('verbs');
console.log(verbs);

console.log('\nPrint all the assessments');
assessments = buildTaxonomy('assessments');
console.log(assessments);

console.log('\nPrint all the quizzes');
quizzes = buildTaxonomy('quizzes');
console.log(quizzes);

console.log('\nPrint all the strategies');
instructions = buildTaxonomy('strategies');
console.log(strategies);

taxonomy = {};

function buildTaxonomy(which) {
    let c = {};
    exports.levels.forEach(level => {
        c[level] = new Set(taxonomy_json_1.taxonomy.taxons[level][which]);
    });
    return c;
}
 */