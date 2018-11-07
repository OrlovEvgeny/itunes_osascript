#!/usr/bin/env osascript -l JavaScript

App = Application.currentApplication()
App.includeStandardAdditions = true
var itunes = Application('App Store')
itunes.includeStandardAdditions = true
itunes.activate()
var se = Application('System Events')
var proc = se.processes.byName('App Store')


while(true) {

    const email = 'example@mail.ru'
    const password = 'qwerty123'
    const AppleIDPasswd = 'QWErty123@'
    const firstName = 'Steve'
    const lastName = 'Jobs'
    const age = '1955'
    const quest1 = 'Star Wars'
    const quest2 = 'write code'
    const quest3 = 'pool'
    const city = 'San Francisco'
    const address = 'Pushkina'
    const index = '546322'
    const phoneCode = '293'
    const phone = '472-35-75'


    itunes.openLocation("macappstores://itunes.apple.com/ru/app/unsplash-wallpapers/id1284863847?mt=12")
    delay(5)
    //Open Window
    while(true) {
        if(proc.windows[0].groups[0].groups[0].scrollAreas[0].uiElements[0].groups.length !== 29) {
            delay(1)
            continue
        }
        var button = proc.windows[0].groups[0].groups[0].scrollAreas[0].uiElements[0].groups[0].groups[0].buttons[0]
        button.click();
        delay(1)
        button.click();
        delay(3)
        while(true) {
            if(proc.windows[0].sheets.length < 1) {
                continue
            }
            var button1 = proc.windows[0].sheets[0].buttons[0]
            button1.click();
            break
        }
        break
    }


    while(true) {
        if(proc.windows[0].groups[0].groups[0].scrollAreas[0].uiElements[0].groups.length !== 10) {
            delay(1)
            continue
        }
        console.log('view is loaded')
        proc.windows[0].groups[0].groups[0].scrollAreas[0].uiElements[0].groups[2].textFields[0].click()
        delay(0.3)
        se.keystroke(`${email}`);
        proc.windows[0].groups[0].groups[0].scrollAreas[0].uiElements[0].groups[3].textFields[0].click()
        delay(0.3)
        se.keystroke(`${AppleIDPasswd}`);
        proc.windows[0].groups[0].groups[0].scrollAreas[0].uiElements[0].groups[4].textFields[0].click()
        delay(0.3)
        se.keystroke(`${AppleIDPasswd}`);
        proc.windows[0].groups[0].groups[0].scrollAreas[0].uiElements[0].groups[6].checkboxes[0].click()
        var button = proc.windows[0].groups[0].groups[0].scrollAreas[0].uiElements[0].groups[7].buttons.byName('Продолжить');
        button.click();
        delay(1)
        break
    }


    while(true) {
        if(proc.windows[0].groups[0].groups[0].scrollAreas[0].uiElements[0].groups.length !== 16) {
            delay(1)
            continue
        }
        var pop = proc.windows[0].groups[0].groups[0].scrollAreas[0].uiElements[0].groups[2].popUpButtons[0]
        pop.click()
        delay(1)
        se.keystroke('n');
        delay(0.1);
        se.keyCode(36);

        delay(0.3)
        proc.windows[0].groups[0].groups[0].scrollAreas[0].uiElements[0].groups[3].textFields[0].click()
        delay(0.3)
        se.keystroke(`${firstName}`);
        proc.windows[0].groups[0].groups[0].scrollAreas[0].uiElements[0].groups[4].textFields[0].click()
        delay(0.3)
        se.keystroke(`${lastName}`);
        proc.windows[0].groups[0].groups[0].scrollAreas[0].uiElements[0].groups[5].groups[1].groups[2].textFields[0].click()
        delay(0.3)
        se.keystroke(`${age}`);
        proc.windows[0].groups[0].groups[0].scrollAreas[0].uiElements[0].groups[7].textFields[0].click()
        delay(0.3)
        se.keystroke(`${quest1}`);
        proc.windows[0].groups[0].groups[0].scrollAreas[0].uiElements[0].groups[9].textFields[0].click()
        delay(0.3)
        se.keystroke(`${quest2}`);
        proc.windows[0].groups[0].groups[0].scrollAreas[0].uiElements[0].groups[11].textFields[0].click()
        delay(0.3)
        se.keystroke(`${quest3}`);
        delay(0.3)
        var pop2 = proc.windows[0].groups[0].groups[0].scrollAreas[0].uiElements[0].groups[5].groups[1].groups[0].popUpButtons[0]
        pop2.click()
        delay(0.5)
        se.keystroke('n');
        delay(0.1);
        se.keyCode(36);

        var pop3 = proc.windows[0].groups[0].groups[0].scrollAreas[0].uiElements[0].groups[5].groups[1].groups[1].popUpButtons[0]
        pop3.click()
        delay(0.5)
        se.keystroke('n');
        delay(0.1);
        se.keyCode(36);


        var pop4 = proc.windows[0].groups[0].groups[0].scrollAreas[0].uiElements[0].groups[6].popUpButtons[0]
        pop4.click()
        delay(0.5)
        se.keystroke('n');
        delay(0.1);
        se.keyCode(36);

        var pop5 = proc.windows[0].groups[0].groups[0].scrollAreas[0].uiElements[0].groups[8].popUpButtons[0]
        pop5.click()
        delay(0.5)
        se.keystroke('n');
        delay(0.1);
        se.keyCode(36);

        var pop6 = proc.windows[0].groups[0].groups[0].scrollAreas[0].uiElements[0].groups[10].popUpButtons[0]
        pop6.click()
        delay(0.5)
        se.keystroke('n');
        delay(0.1);
        se.keyCode(36);

        delay(1)
        var button = proc.windows[0].groups[0].groups[0].scrollAreas[0].uiElements[0].groups[13].buttons.byName('Продолжить');
        button.click();
        delay(1)
        break
        // Next -->
    }


    while(true) {
        if(proc.windows[0].groups[0].groups[0].scrollAreas[0].uiElements[0].groups.length !== 22) {
            delay(1)
            continue
        }
        proc.windows[0].groups[0].groups[0].scrollAreas[0].uiElements[0].groups[5].radioButtons[4].click()
        proc.windows[0].groups[0].groups[0].scrollAreas[0].uiElements[0].textFields[0].click()
        delay(0.3)
        se.keystroke(`${firstName}`);
        proc.windows[0].groups[0].groups[0].scrollAreas[0].uiElements[0].textFields[1].click()
        delay(0.3)
        se.keystroke(`${lastName}`);
        proc.windows[0].groups[0].groups[0].scrollAreas[0].uiElements[0].textFields[2].click()
        delay(0.3)
        se.keystroke(`${address}`);
        proc.windows[0].groups[0].groups[0].scrollAreas[0].uiElements[0].textFields[3].click()
        delay(0.3)
        se.keystroke(`${address}`);
        proc.windows[0].groups[0].groups[0].scrollAreas[0].uiElements[0].textFields[4].click()
        delay(0.3)
        se.keystroke(`${address}`);
        proc.windows[0].groups[0].groups[0].scrollAreas[0].uiElements[0].textFields[5].click()
        delay(0.3)
        se.keystroke(`${index}`);
        proc.windows[0].groups[0].groups[0].scrollAreas[0].uiElements[0].textFields[6].click()
        delay(0.3)
        se.keystroke(`${city}`);
        proc.windows[0].groups[0].groups[0].scrollAreas[0].uiElements[0].textFields[7].click()
        delay(0.3)
        se.keystroke(`${phoneCode}`);
        proc.windows[0].groups[0].groups[0].scrollAreas[0].uiElements[0].textFields[8].click()
        delay(0.3)
        se.keystroke(`${phone}`);
        delay(1)
        var button3 = proc.windows[0].groups[0].groups[0].scrollAreas[0].uiElements[0].groups[14].buttons.byName('Продолжить');
        button3.click()
        delay(1)
        break
        // Next -->
    }

    var code
    console.log(`build command: python ./getcode.py ${email} ${password}`)
    var timeOut = 0
    while(true) {
        var result = App.doShellScript(`python ./getcode.py ${email} ${password}`)
        console.log(result)
        if(result !== '' && result !== 'fail') {
            code = result
            break
        }
        timeOut +=2
        console.log(`get code email TimeOut is - ${timeOut}`)
        if(timeOut > 10) {
            break
        }
        delay(5)
    }

    if(timeOut > 10) {
        timeOut = 0
        continue
    }

    console.log(`email apple code ${code}`);
    proc.windows[0].groups[0].groups[0].scrollAreas[0].uiElements[0].groups[3].textFields[0].click()
    delay(0.5)
    se.keystroke(code);
    var button4 = proc.windows[0].groups[0].groups[0].scrollAreas[0].uiElements[0].groups[5].buttons[0]
    button4.click()
    delay(1)
    var button5 = proc.windows[0].sheets[0].buttons[0]
    button5.click();

    delay(5)
    console.log(`apple account register access - ${email} ${password}`)
    break
}