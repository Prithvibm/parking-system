import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateSummary } from '../src/services/metrics.js';

test('calculates sprint completion percentage', () => {
  const result = calculateSummary([{ status: 'done', priority: 'high' }, { status: 'todo', priority: 'low' }]);
  assert.equal(result.completionRate, 50);
  assert.equal(result.byStatus.done, 1);
});
