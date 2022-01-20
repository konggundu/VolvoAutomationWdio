const { alertIsPresent } = require('wdio-wait-for');
const { acceptCookie } = require('../pageobjects/volvohome.page');
const VolvoHome = require('../pageobjects/volvohome.page');

describe('Validate Volvo Cars', () => {
    it('should display list of Menu items', async () => {
        await VolvoHome.open();
        expect(browser).toHaveTitle('A million more | Volvo Cars - International')
        await browser.pause(4000)
        await VolvoHome.acceptOnAlert.click();
        await VolvoHome.validateMenu();
        await VolvoHome.buyMenu.click();
       
       });

       it('social links should be present in Menu', async () => {
        await VolvoHome.validateMenu();
        await VolvoHome.validateSocialLinks();
        expect(VolvoHome.closeIcon.isExisting)
        await VolvoHome.closeIcon.click();
       });

       it('Our cars should contain different car types', async () => {
        await VolvoHome.validateOurCars();
       });

       it('A million more video sshould be present', async () => {
        expect(VolvoHome.video.isExisting()) 
       });

       
    
       });


