# Udemy-downloader

An extensible tool to download locally courses from Udemy/Udemy-for-business bought by the user.

*Currently supports a single type of SSO login for Udemy for business. Instrcutions for generic extension will be added later*

### Usage

- *Initial Config*

    Edit in values inside _config/default.json_
    ```json
    {
    // udemy module configs
        "Udemy": {
            "root": "http://www.udemy.com", //udemy root
            "loginPage": "http://www.udemy.com/login", //loginpage udemy url/udemy for business
            "username": "",
            "password": ""
        }
    }
    ```
- *Quickstart*

    ```javascript
    npm install
    npm start
    ```

## ToDo

- [x] List all registered courses
- [ ] Add support for custom course list
- [ ] Add support for downloading courses with resources
- [ ] Add support for structuring and viewing courses locally
- [ ] Add support for standard udemy login


