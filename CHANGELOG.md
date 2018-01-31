# Changelog

## Overview

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).
Please visit Keep a Changelog for more information on formatting your entries, or use existing entries in this file as a template.

## [1.0.18] - 01-26-2018

### Added

- Change log created
- Mapper.ts created - creates sets of the maps from the taxonomy-json file; imports should now be made from here or index.ts, not taxonomy-json.ts or taxonomy.ts.
- Test.js created for testing the mapper functions; will implement circleci in future releases.

### Changed

- Re-structured taxonomy-json.ts to use maps of each entry; the key of each map entry is a camelcase version to be used in code, and the value of each entry is the plaintext version to be used in the frontend.
- Adjusted index.ts to use mapper.ts rather than taxonomy.ts
- Rather than sending out one massive list for each of the dropdown categories (verbs, assessments, quizzes, and instructions), separate sets are made and exported for each taxon's collection of each category, simplifying distinctions during utilization. These sets are named using the two words of their relative taxon and the name of their category, separated by underscores (i.e. 'remember/\_understand\_verbs'). In items with the "(Quiz/Test)" designation, that portion of each title has been shortened to QT in the relevant keys. 

### Removed

- Taxonomy.ts - no longer necessary or functional. Replaced by Mapper.ts

### Fixed

- NA
