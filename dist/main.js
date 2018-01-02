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
const chromeless_1 = require("chromeless");
const cheerio = require("cheerio");
const login_1 = require("./login");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        let chromeless = new chromeless_1.Chromeless({
            scrollBeforeClick: true,
            implicitWait: true,
            viewport: { width: 1920, height: 1024 }
        });
        // login to the page
        chromeless = login_1.SSOLogin(chromeless);
        console.log(chromeless);
        // goto course list page
        yield chromeless.click(".dropdown--mycourses")
            .wait(".card--learning__details");
        // get html of current page
        let html = yield chromeless.html();
        // load html of current page into cheerio object
        const $ = cheerio.load(html);
        $(".card--learning__details").each((idx, el) => console.log(el.attribs.href));
        yield chromeless.end();
    });
}
run().catch(console.error.bind(console));
//# sourceMappingURL=main.js.map