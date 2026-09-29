/**
 * Runs the shared search indexer for this site after `next build`.
 *
 * On the VPS: calls /var/www/search-service/indexer/run.mjs with ./search.config.mjs.
 * On a local machine (no search service): prints a note and skips.
 * Never fails the build.
 *
 * Extra flags pass through:
 *   node search-index.mjs --no-embed --sample 5
 */

import { existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import path from 'node:path';

const serviceDir = process.env.SEARCH_SERVICE_DIR || '/var/www/search-service';
const runner = path.join(serviceDir, 'indexer', 'run.mjs');

if (!existsSync(runner)) {
  console.log(`[search-index] skipped: ${runner} not found (normal on a local machine)`);
  process.exit(0);
}

spawnSync(process.execPath, [runner, '--config', './search.config.mjs', ...process.argv.slice(2)], {
  stdio: 'inherit',
});

process.exit(0);
