import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

async function read(path) {
  return readFile(new URL(`../${path}`, import.meta.url), 'utf8');
}

test('business constants contain approved public contact details', async () => {
  const content = await read('lib/constants.ts');
  assert.match(content, /247 PRINT HOUSE/);
  assert.match(content, /\+233558213040/);
  assert.match(content, /printproduction247@gmail.com/);
  assert.match(content, /George Walker Bush Highway, Awoshie Waterworks, Accra, Ghana/);
});

test('site includes required core pages', async () => {
  const content = await read('lib/constants.ts');
  assert.match(content, /href: "\/services"/);
  assert.match(content, /href: "\/about"/);
  assert.match(content, /href: "\/contact"/);
  assert.match(content, /href: "\/quote"/);
});

test('privacy page includes core policy sections', async () => {
  const content = await read('app/privacy/page.tsx');
  assert.match(content, /Data we collect/);
  assert.match(content, /How we use data/);
  assert.match(content, /Security/);
  assert.match(content, /Your rights/);
});
