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

console.log(lengths);
console.log(levels);


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
