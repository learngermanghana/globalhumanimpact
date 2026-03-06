import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

async function read(path) {
  return readFile(new URL(`../${path}`, import.meta.url), 'utf8')
}

test('site branding is consistent with NGO identity', async () => {
  const content = await read('src/lib/site.ts')
  assert.match(content, /Global Human Impact Foundation/)
  assert.doesNotMatch(content, /247 Print House/)
})

test('navigation exposes key pages directly', async () => {
  const content = await read('src/components/Navbar.tsx')
  assert.match(content, /"\/services"/)
  assert.match(content, /"\/portfolio"/)
  assert.match(content, /"\/quote"/)
})

test('quote API route exists and validates required fields', async () => {
  const content = await read('src/app/api/quote/route.ts')
  assert.match(content, /requiredFields/)
  assert.match(content, /Missing required fields/)
})
