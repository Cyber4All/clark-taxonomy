import { taxonomy } from './taxonomy-json';
/**
 * Provide taxonomical structures relating Bloom categories and
 * associated word selections for learning outcome verbs, assessment
 * plans, and instructional strategies.
 */

/**
 * All permitted learning object classes, ie. their length category.
 */
export const lengths = new Set<string>(
  taxonomy.lengths.map(l => l.toLowerCase())
);

/**
 * All permitted Bloom taxons.
 */
export const levels = new Set<string>(
  Object.keys(taxonomy.taxons).map(key => key.toLowerCase())
);

/**
 * All permitted learning outcomes for each Bloom taxon.
 */
export const verbs = buildTaxonomy('verbs');

/**
 * Define the shape of the taxonomical structures we will export.
 */
type taxonomy = { [level: string]: Set<string> };

/**
 * Build a taxonomy object from the taxonomy.json file.
 * @param {string} which the field to pull from the taxon
 *
 * @returns {taxonomy}
 */
function buildTaxonomy(which: string): taxonomy {
  let c: taxonomy = {};

  levels.forEach(level => {
    c[level] = new Set<string>(taxonomy.taxons[level][which]);
  });

  return c;
}
