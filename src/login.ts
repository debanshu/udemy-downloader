import * as config from "config";
import { Chromeless } from "chromeless";

// sso Login functionality
export function SSOLogin(chromeless: Chromeless<any>): Chromeless<any> {
    return chromeless
        .goto(config.get("Udemy.loginPage"))
        .type(config.get("Udemy.username"), "input[name=\"USER\"]")
        .type(config.get("Udemy.password"), "input[name=\"PASSWORD\"]")
        .click(".ButtonSm")
        .wait(".dropdown--mycourses");
}
