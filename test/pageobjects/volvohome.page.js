

const Page = require('./page');

class VolvoHome extends Page {
    get menuLink() {
        return $('#sitenav-sidenav-toggle');
    }

    get ourCars() {
        return $('button[data-autoid="nav:topNavCarMenu"]');
    }

    
    get video() {
        return $('video[preload="auto"]');
    }
    
    get acceptOnAlert() {
        return $('button[aria-label="Accept"]');
    }
    get menuList(){
        return $$('button[data-autoid="nav:sideNavLinksMenuDrawer"]');
    }

    get buyMenu(){
        return $('//em[text()="Buy"]');
    
    }
        
    get electricCars(){
        return $('//button[contains(@id,"cars-menu-section-tab-0")]')
    }

       
    get hybridCars(){
        return $('//button[contains(@id,"cars-menu-section-tab-1")]')
    }

       
    get mildHybridCars(){
        return $('//button[contains(@id,"cars-menu-section-tab-2")]')
    }

    get closeIcon(){
        return $('button[data-autoid="nav:siteNavCloseIcon"]')
    }

    get instagramSocialLink(){
        return $('a[aria-label="Instagram"]')
    }

    get facebookSocialLink(){
        return $('a[aria-label="Facebook"]')
    }

    get twitterSocialLink(){
        return $('a[aria-label="Twitter"]')
    }

    
    get youtubeSocialLink(){
        return $('a[aria-label="YouTube"]')
    }
    
    get footerCookies(){
        return $('//a[text()="Cookies"]')
    }

    get footerLegal(){
        return $('//a[text()="Legal"]')
    }

    get footerSocialMedia(){
        return $('//a[text()="Social Media"]')
    }

    get footerTellUs(){
        return $('//a[text()="Tell Us"]')
    }

    
    async validateSocialLinks(){
        expect(this.instagramSocialLink.isExisting());
        expect(this.facebookSocialLink.isExisting());
        expect(this.twitterSocialLink.isExisting());
        expect(this.youtubeSocialLink.isExisting());
        

    }

    async validateOurCars(){
        expect(this.ourCars.isExisting());
        this.ourCars.click();
        expect(this.electricCars.isExisting());
        expect(this.hybridCars.isExisting());
        expect(this.mildHybridCars.isExisting());
    }

     async validateMenu () {
        this.menuLink.click();
        console.log("clicked");
        expect(this.menuList).toBeElementsArrayOfSize(5);
        
       }

    open() {
        return super.open('https://www.volvocars.com/intl/v/car-safety/a-million-more');
    }
}

module.exports = new VolvoHome();
