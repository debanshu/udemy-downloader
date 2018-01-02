"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("config");
const chromeless_1 = require("chromeless");
const cheerio = require("cheerio");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const chromeless = new chromeless_1.Chromeless({
            scrollBeforeClick: true,
            implicitWait: true,
            viewport: { width: 1920, height: 1024 }
        });
        const html = yield chromeless
            .goto(config.get("Udemy.loginPage"))
            .type(config.get("Udemy.username"), "input[name=\"USER\"]")
            .type(config.get("Udemy.password"), "input[name=\"PASSWORD\"]")
            .click(".ButtonSm")
            .wait(".dropdown--mycourses")
            .click(".dropdown--mycourses")
            .wait(".card--learning__details")
            .html();
        const $ = cheerio.load(html);
        $(".card--learning__details").each((idx, el) => console.log(el.attribs.href));
        yield chromeless.end();
    });
}
run().catch(console.error.bind(console));
