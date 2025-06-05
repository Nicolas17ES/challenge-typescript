import { test, expect } from '@playwright/test'

test('test add comment', async ({page}) => {
    await page.goto('http://localhost:3000/')
    await page.getByText('Luminaria Entrada').click()

    await page.getByTestId('input_form').fill('Hello World');
    await page.getByTestId('submit_form').click();
    
    await expect(page.getByText('Hello World')).toBeVisible()
    }
)