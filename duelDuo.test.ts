
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})
describe('duel duo tests', () => {


    test('Title shows up when page loads', async () => {
        const title = await driver.findElement(By.id('title'))
        const displayed = await title.isDisplayed()
        expect(displayed).toBe(true)
    })

    test('clicking the draw button displays the bots', async () => {
        await driver.findElement(By.id('draw')).click()
        await driver.sleep(2000)
        const divChoices = await driver.findElement(By.id('choices'))
        const display = await divChoices.isDisplayed()
        expect(display).toBe(true)
    })

    test('clicking remove from duo button returns bot to choices div ', async () => {
        await driver.findElement(By.id('draw')).click()
        await driver.sleep(4000)
        await driver.findElement(By.xpath('(//button[text() = "Add to Duo"])[1]')).click()
        await driver.findElement(By.xpath('(//button[text() = "Remove from Duo"])[1]')).click()
        const playerDuoDiv = await driver.findElement(By.id('player-duo'))
        const displayed = await playerDuoDiv.isDisplayed()
        expect(displayed).toBe(false)


    })

})