import * as path from "path";
import { Chromeless } from "chromeless";
import * as cheerio from "cheerio";
import { SSOLogin } from "./login";

async function run(): Promise<void> {
    let chromeless: Chromeless<any> = new Chromeless(
        {
            scrollBeforeClick: true,
            implicitWait: true,
            viewport: { width: 1920, height: 1024 }
        });

    // login to the page
    chromeless = SSOLogin(chromeless);

    // goto course list page
    chromeless.click(".dropdown--mycourses")
                    .wait(".card--learning__details");

    // get html of current page
    let html: string = await chromeless.html();

    // load html of current page into cheerio object
    const $: CheerioStatic = cheerio.load(html);
    $(".card--learning__details").each((idx, el) => console.log(el.attribs.href));

    await chromeless.end();
}

run().catch(console.error.bind(console));