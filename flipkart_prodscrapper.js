
let puppeteer = require('puppeteer-extra');
let pluginStealth = require('puppeteer-extra-plugin-stealth');
puppeteer.use(pluginStealth());
puppeteer = require('puppeteer')
const { writeFile } = require('fs');

async function scrapeProducts(url) {
    // const Browser = await puppeteer.launch({headless: false});
    const Browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1920,1080', '--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36"'] });
    const page = await Browser.newPage();
    await page.goto(url)

    //product name
    const [el] = await page.$x('/html/body/div[1]/div/div[3]/div[1]/div[2]/div[2]/div/div[1]/h1/span');
    const urlHeader = await el.getProperty('textContent');
    const Product_name = await urlHeader.jsonValue()
    const prn = Product_name.replace(/(\r\n|\n|\r)/gm, "");

    //price
    const [el1] = await page.$x('/html/body/div[1]/div/div[3]/div[1]/div[2]/div[2]/div/div[3]/div[1]/div/div[1]');
    const p = await el1.getProperty('textContent');
    const Price = await p.jsonValue();
    const price = Price.replace(/(\r\n|\n|\r)/gm, "");

    //rating        
    const [el2] = await page.$x('/html/body/div[1]/div/div[3]/div[1]/div[2]/div[2]/div/div[2]/div/div/span[1]/div');
    const urlHeader2 = await el2.getProperty('textContent');
    const r = await urlHeader2.jsonValue()
    const rating = r.replace(/(\r\n|\n|\r)/gm, "");

    //seller
    const [el3] = await page.$x('/html/body/div[1]/div/div[3]/div[1]/div[2]/div[7]/div[1]/div/div[2]/div[1]');
    const urlHeader3 = await el3.getProperty('textContent');
    const s = await urlHeader3.jsonValue()
    const seller = s.replace(/(\r\n|\n|\r)/gm, "");

    const obj = {
        "prod dets":
            [
                {
                    'url': [url],
                    'date scrapped': new Date(),
                    'Product_name': [prn],
                    'price': [price],
                    'rating': [rating],
                    'seller': [seller]
                }

            ]
    }


    const jsondata = JSON.stringify(obj, null, 2)
    writeFile('prod_data.json', jsondata, { flag: 'a' }, (err, res) => {
        if (err) console.log(err);
        console.log(res);
        return;
    })


    Browser.close();
}

//passing a list of urls

urls = ['https://www.flipkart.com/microsoft-controller-electric-volt-bluetooth-gamepad/p/itme24cd52c8c553?pid=ACCG2U33UFXCJRTG&lid=LSTACCG2U33UFXCJRTGZFOVFQ&marketplace=FLIPKART&fm=personalisedRecommendation%2Fp2p-same&iid=R%3As%3Bp%3AACCFS66EEDXYNYVW%3Bpt%3Ahp%3Buid%3A0f0b9609-f213-11eb-84c2-5d794ebccd40%3B.ACCG2U33UFXCJRTG&ppt=None&ppn=None&ssid=qdoppxgmhs0000001627744924042&otracker=hp_reco_Suggested%2Bfor%2BYou_7_12.productCard.PMU_V2_MICROSOFT%2BController%2B-%2BElectric%2BVolt%2BBluetooth%2B%2BGamepad_ACCG2U33UFXCJRTG_personalisedRecommendation%2Fp2p-same_6&otracker1=hp_reco_WHITELISTED_personalisedRecommendation%2Fp2p-same_Suggested%2Bfor%2BYou_DESKTOP_HORIZONTAL_productCard_cc_7_NA_view-all&cid=ACCG2U33UFXCJRTG',
    'https://www.flipkart.com/microsoft-wl3-00062-bluetooth-gamepad/p/itmb9d4650904653?pid=ACCFZZSJBHZEYVHM&lid=LSTACCFZZSJBHZEYVHM4F2JWI&marketplace=FLIPKART&fm=personalisedRecommendation%2Fp2p-same&iid=R%3As%3Bp%3AACCFS66EEDXYNYVW%3Bpt%3Ahp%3Buid%3A0f0b9609-f213-11eb-84c2-5d794ebccd40%3B.ACCFZZSJBHZEYVHM&ppt=None&ppn=None&ssid=qdoppxgmhs0000001627744924042&otracker=hp_reco_Suggested%2Bfor%2BYou_6_12.productCard.PMU_V2_MICROSOFT%2BWL3-00062%2BBluetooth%2B%2BGamepad_ACCFZZSJBHZEYVHM_personalisedRecommendation%2Fp2p-same_5&otracker1=hp_reco_WHITELISTED_personalisedRecommendation%2Fp2p-same_Suggested%2Bfor%2BYou_DESKTOP_HORIZONTAL_productCard_cc_6_NA_view-all&cid=ACCFZZSJBHZEYVHM']
urls.forEach(urrl => { scrapeProducts(urrl) })

//app

// scrapeProducts(urrl)
module.exports = scrapeProducts;

