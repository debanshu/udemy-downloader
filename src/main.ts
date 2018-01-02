import * as config from "config";
import * as path from "path";
import { Chromeless } from "chromeless";
import * as cheerio from "cheerio";

async function run(): Promise<void> {
    const chromeless: Chromeless<{}> = new Chromeless(
        {
            scrollBeforeClick: true,
            implicitWait: true,
            viewport: { width: 1920, height: 1024 }
        });

    const html:string = await chromeless
        .goto(config.get("Udemy.loginPage"))
        .type(config.get("Udemy.username"), "input[name=\"USER\"]")
        .type(config.get("Udemy.password"), "input[name=\"PASSWORD\"]")
        .click(".ButtonSm")
        .wait(".dropdown--mycourses")
        .click(".dropdown--mycourses")
        .wait(".card--learning__details")
        .html();

    const $:CheerioStatic = cheerio.load(html);
    $(".card--learning__details").each((idx, el) => console.log(el.attribs.href));

    await chromeless.end();
}

run().catch(console.error.bind(console));