import { test, expect } from '@playwright/test'

test('home renders main content', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('main')).toBeVisible()
})

test('robots blocks studio', async ({ request }) => {
  const res = await request.get('/robots.txt')
  expect(res.ok()).toBeTruthy()
  const body = await res.text()
  expect(body).toContain('/studio')
})
