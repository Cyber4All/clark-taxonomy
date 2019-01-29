import { taxonomy } from './taxonomy';
const lengths = taxonomy.lengths;
const levels = Object.keys(taxonomy.taxons).map(key => key.toLowerCase());
export { taxonomy, lengths, levels };



