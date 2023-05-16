const expect = require("chai").expect;

describe('observe suvc.ru', async function() {
    
    browser.waitForAngularEnabled(false);

    const loginInput = $('input[name="username"]');
    const passwordInput = $('input[name="password"]');
    const loginButton = $('.btn-login');
    const errorMessage = $('.alert.alert-danger');
    const testLogin = 'admin';
    const testPassword = 'admin';


    beforeEach(async function() {
        await browser.get('https://is.suvc.ru/')
    });

    it('should have a title', async function(){
        // получаем заголовок сайта
        let title = await browser.getTitle();
        expect(title).to.equal('Учебный портал ЮУМК');
    });

    it('should display an error', async function() {
        loginInput.sendKeys(testLogin);
        passwordInput.sendKeys(testPassword);

        // нажимаем на кнопку входа
        await loginButton.click();

        // получаем текст ошибки
        let message = await errorMessage.getText();

        expect(message).to.equal('Неверный логин или пароль, попробуйте заново');

        // ожидание браузера 5 секунд
        await browser.sleep(5 * 1000)
    });
});