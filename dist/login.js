"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("config");
// sso Login functionality
function SSOLogin(chromeless) {
    return chromeless
        .goto(config.get("Udemy.loginPage"))
        .type(config.get("Udemy.username"), "input[name=\"USER\"]")
        .type(config.get("Udemy.password"), "input[name=\"PASSWORD\"]")
        .click(".ButtonSm")
        .wait(".dropdown--mycourses");
}
exports.SSOLogin = SSOLogin;
//# sourceMappingURL=login.js.map