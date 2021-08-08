
let puppeteer = require('puppeteer-extra');
let pluginStealth = require('puppeteer-extra-plugin-stealth');
puppeteer.use(pluginStealth());
puppeteer = require('puppeteer')
const { writeFile } = require('fs');

async function scrapeReviews(url) {
    // const Browser = await puppeteer.launch({headless: false});
    const Browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1920,1080', '--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36"'] });
    const page = await Browser.newPage();
    await page.goto(url)

    //product name
    const [el] = await page.$x('/html/body/div[1]/div/div[3]/div/div[1]/div[2]/div[1]/div/div[1]/div');
    const urlHeader = await el.getProperty('textContent');
    const Product_name = await urlHeader.jsonValue()
    const prn = Product_name.replace(/(\r\n|\n|\r|Reviews)/gm, "");

    //review 1
    const [el1] = await page.$x('/html/body/div[1]/div/div[3]/div/div[1]/div[2]/div[3]/div/div/div/div[2]/div/div/div'); //review
    const [hl1] = await page.$x('/html/body/div[1]/div/div[3]/div/div[1]/div[2]/div[3]/div/div/div/div[1]/p'); //heading
    const [rl1] = await page.$x('/html/body/div[1]/div/div[3]/div/div[1]/div[2]/div[3]/div/div/div/div[1]/div'); //rating
    const e = await el1.getProperty('textContent');
    const E = await e.jsonValue();
    const h = await hl1.getProperty('textContent');
    const H = await h.jsonValue();
    const r = await rl1.getProperty('textContent');
    const R = await r.jsonValue();
    const review1 = E.replace(/(\r\n|\n|\r)/gm, "");
    const heading1 = H.replace(/(\r\n|\n|\r)/gm, "");
    const rating1 = R.replace(/(\r\n|\n|\r)/gm, "");


    //review 2
    const [el2] = await page.$x('/html/body/div[1]/div/div[3]/div/div[1]/div[2]/div[4]/div/div/div/div[2]/div/div/div');
    const [hl2] = await page.$x('/html/body/div[1]/div/div[3]/div/div[1]/div[2]/div[4]/div/div/div/div[1]/p');
    const [rl2] = await page.$x('/html/body/div[1]/div/div[3]/div/div[1]/div[2]/div[4]/div/div/div/div[1]/div');
    const e2 = await el2.getProperty('textContent');
    const E2 = await e2.jsonValue();
    const h2 = await hl2.getProperty('textContent');
    const H2 = await h2.jsonValue();
    const r2 = await rl2.getProperty('textContent');
    const R2 = await r2.jsonValue();
    const review2 = E2.replace(/(\r\n|\n|\r)/gm, "");
    const heading2 = H2.replace(/(\r\n|\n|\r)/gm, "");
    const rating2 = R2.replace(/(\r\n|\n|\r)/gm, "");

    //review 3
    const [el3] = await page.$x('/html/body/div[1]/div/div[3]/div/div[1]/div[2]/div[5]/div/div/div/div[2]/div/div/div');
    const [hl3] = await page.$x('/html/body/div[1]/div/div[3]/div/div[1]/div[2]/div[5]/div/div/div/div[1]/p');
    const [rl3] = await page.$x('/html/body/div[1]/div/div[3]/div/div[1]/div[2]/div[5]/div/div/div/div[1]/div');
    const e3 = await el3.getProperty('textContent');
    const E3 = await e3.jsonValue();
    const h3 = await hl3.getProperty('textContent');
    const H3 = await h3.jsonValue();
    const r3 = await rl3.getProperty('textContent');
    const R3 = await r3.jsonValue();
    const review3 = E3.replace(/(\r\n|\n|\r)/gm, "");
    const heading3 = H3.replace(/(\r\n|\n|\r)/gm, "");
    const rating3 = R3.replace(/(\r\n|\n|\r)/gm, "");

    //review 4
    const [el4] = await page.$x('/html/body/div[1]/div/div[3]/div/div[1]/div[2]/div[6]/div/div/div/div[2]/div/div/div');
    const [hl4] = await page.$x('/html/body/div[1]/div/div[3]/div/div[1]/div[2]/div[6]/div/div/div/div[1]/p');
    const [rl4] = await page.$x('/html/body/div[1]/div/div[3]/div/div[1]/div[2]/div[6]/div/div/div/div[1]/div');
    const e4 = await el4.getProperty('textContent');
    const E4 = await e4.jsonValue();
    const h4 = await hl4.getProperty('textContent');
    const H4 = await h4.jsonValue();
    const r4 = await rl4.getProperty('textContent');
    const R4 = await r4.jsonValue();
    const review4 = E4.replace(/(\r\n|\n|\r)/gm, "");
    const heading4 = H4.replace(/(\r\n|\n|\r)/gm, "");
    const rating4 = R4.replace(/(\r\n|\n|\r)/gm, "");

    //review 5
    const [el5] = await page.$x('/html/body/div[1]/div/div[3]/div/div/div[2]/div[7]/div/div/div/div[2]/div/div/div');
    const [hl5] = await page.$x('/html/body/div[1]/div/div[3]/div/div/div[2]/div[7]/div/div/div/div[1]/p');
    const [rl5] = await page.$x('/html/body/div[1]/div/div[3]/div/div/div[2]/div[7]/div/div/div/div[1]/div');
    const e5 = await el5.getProperty('textContent');
    const E5 = await e5.jsonValue();
    const h5 = await hl5.getProperty('textContent');
    const H5 = await h5.jsonValue();
    const r5 = await rl5.getProperty('textContent');
    const R5 = await r.jsonValue();
    const review5 = E5.replace(/(\r\n|\n|\r)/gm, "");
    const heading5 = H5.replace(/(\r\n|\n|\r)/gm, "");
    const rating5 = R5.replace(/(\r\n|\n|\r)/gm, "");

    //review 6
    const [el6] = await page.$x('/html/body/div[1]/div/div[3]/div/div/div[2]/div[8]/div/div/div/div[2]/div/div/div');
    const [hl6] = await page.$x('/html/body/div[1]/div/div[3]/div/div/div[2]/div[8]/div/div/div/div[1]/p');
    const [rl6] = await page.$x('/html/body/div[1]/div/div[3]/div/div/div[2]/div[8]/div/div/div/div[1]/div');
    const e6 = await el6.getProperty('textContent');
    const E6 = await e6.jsonValue();
    const h6 = await hl6.getProperty('textContent');
    const H6 = await h6.jsonValue();
    const r6 = await rl6.getProperty('textContent');
    const R6 = await r6.jsonValue();
    const review6 = E6.replace(/(\r\n|\n|\r)/gm, "");
    const heading6 = H6.replace(/(\r\n|\n|\r)/gm, "");
    const rating6 = R6.replace(/(\r\n|\n|\r)/gm, "");

    //review 7
    const [el7] = await page.$x('/html/body/div[1]/div/div[3]/div/div/div[2]/div[9]/div/div/div/div[2]/div/div/div');
    const [hl7] = await page.$x('/html/body/div[1]/div/div[3]/div/div/div[2]/div[9]/div/div/div/div[1]/p');
    const [rl7] = await page.$x('/html/body/div[1]/div/div[3]/div/div/div[2]/div[9]/div/div/div/div[1]/div');
    const e7 = await el7.getProperty('textContent');
    const E7 = await e7.jsonValue();
    const h7 = await hl7.getProperty('textContent');
    const H7 = await h7.jsonValue();
    const r7 = await rl7.getProperty('textContent');
    const R7 = await r7.jsonValue();
    const review7 = E7.replace(/(\r\n|\n|\r)/gm, "");
    const heading7 = H7.replace(/(\r\n|\n|\r)/gm, "");
    const rating7 = R7.replace(/(\r\n|\n|\r)/gm, "");

    //review 8
    const [el8] = await page.$x('/html/body/div[1]/div/div[3]/div/div/div[2]/div[10]/div/div/div/div[2]/div/div/div');
    const [hl8] = await page.$x('/html/body/div[1]/div/div[3]/div/div/div[2]/div[10]/div/div/div/div[1]/p');
    const [rl8] = await page.$x('/html/body/div[1]/div/div[3]/div/div/div[2]/div[10]/div/div/div/div[1]/div');
    const e8 = await el8.getProperty('textContent');
    const E8 = await e8.jsonValue();
    const h8 = await hl8.getProperty('textContent');
    const H8 = await h8.jsonValue();
    const r8 = await rl8.getProperty('textContent');
    const R8 = await r8.jsonValue();
    const review8 = E8.replace(/(\r\n|\n|\r)/gm, "");
    const heading8 = H8.replace(/(\r\n|\n|\r)/gm, "");
    const rating8 = R8.replace(/(\r\n|\n|\r)/gm, "");

    //review 9
    const [el9] = await page.$x('/html/body/div[1]/div/div[3]/div/div/div[2]/div[11]/div/div/div/div[2]/div/div/div');
    const [hl9] = await page.$x('/html/body/div[1]/div/div[3]/div/div/div[2]/div[11]/div/div/div/div[1]/p');
    const [rl9] = await page.$x('/html/body/div[1]/div/div[3]/div/div/div[2]/div[11]/div/div/div/div[1]/div');
    const e9 = await el9.getProperty('textContent');
    const E9 = await e9.jsonValue();
    const h9 = await hl9.getProperty('textContent');
    const H9 = await h9.jsonValue();
    const r9 = await rl9.getProperty('textContent');
    const R9 = await r9.jsonValue();
    const review9 = E9.replace(/(\r\n|\n|\r)/gm, "");
    const heading9 = H9.replace(/(\r\n|\n|\r)/gm, "");
    const rating9 = R9.replace(/(\r\n|\n|\r)/gm, "");

    //review 10
    const [el0] = await page.$x('/html/body/div[1]/div/div[3]/div/div/div[2]/div[12]/div/div/div/div[2]/div/div/div');
    const [hl0] = await page.$x('/html/body/div[1]/div/div[3]/div/div/div[2]/div[12]/div/div/div/div[1]/p');
    const [rl0] = await page.$x('/html/body/div[1]/div/div[3]/div/div/div[2]/div[12]/div/div/div/div[1]/div');
    const e0 = await el0.getProperty('textContent');
    const E0 = await e0.jsonValue();
    const h0 = await hl0.getProperty('textContent');
    const H0 = await h0.jsonValue();
    const r0 = await rl0.getProperty('textContent');
    const R0 = await r0.jsonValue();
    const review0 = E0.replace(/(\r\n|\n|\r)/gm, "");
    const heading0 = H0.replace(/(\r\n|\n|\r)/gm, "");
    const rating0 = R0.replace(/(\r\n|\n|\r)/gm, "");


    const obj = {
        'date scrapped': new Date(),
        "reviews":
            [
                {
                    "name": prn,
                    "heading": heading1,
                    "rating": rating1,
                    "review": review1
                },
                {
                    "name": prn,
                    "heading": heading2,
                    "rating": rating2,
                    "review": review2
                },
                {
                    "name": prn,
                    "heading": heading3,
                    "rating": rating3,
                    "review": review3
                },
                {
                    "name": prn,
                    "heading": heading4,
                    "rating": rating4,
                    "review": review4
                },
                {
                    "name": prn,
                    "heading": heading5,
                    "rating": rating5,
                    "review": review5
                },
                {
                    "name": prn,
                    "heading": heading6,
                    "rating": rating6,
                    "review": review6
                },
                {
                    "name": prn,
                    "heading": heading7,
                    "rating": rating7,
                    "review": review7
                },
                {
                    "name": prn,
                    "heading": heading8,
                    "rating": rating8,
                    "review": review8
                },
                {
                    "name": prn,
                    "heading": heading9,
                    "rating": rating9,
                    "review": review9
                },
                {
                    "name": prn,
                    "heading": heading0,
                    "rating": rating0,
                    "review": review0
                }


            ]
    }

    // console.log(obj);
    Browser.close();
    const jsondata = JSON.stringify(obj,null,2);
    writeFile('./results/reviews.json', jsondata,{flag:'a'}, (err, res) => {
        if (err) console.log(err);
        console.log(res);
        return;
    })

}


//passing a list of urls
newarr=[]
for(let i=1;i<=5;i++){
    let urls= `https://www.flipkart.com/poco-m3-cool-blue-64-gb/product-reviews/itmc8ec867cb0472?pid=MOBFZTCUDDCTDN3G&lid=LSTMOBFZTCUDDCTDN3GBY0LIO&marketplace=FLIPKART&page=${i}`    
    newarr.push(urls);    
}
//console.log(newarr)


newarr.forEach(urlss => { scrapeReviews(urlss)})





