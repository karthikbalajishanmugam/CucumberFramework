$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/CucumberFrame1.feature");
formatter.feature({
  "name": "TV Purchase",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch Flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "TVPurchaseSteps.user_launch_Flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should login Flipkart with valid Credentials",
  "keyword": "And "
});
formatter.match({
  "location": "TVPurchaseSteps.user_should_login_Flipkart_with_valid_Credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TV using list",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User Seacrh the Tv brand and Choose Tv Modeln using list",
  "rows": [
    {
      "cells": [
        "Realme tv",
        "OnePluse TV",
        "Samsung TV"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "TVPurchaseSteps.user_Seacrh_the_Tv_brand_and_Choose_Tv_Modeln_using_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should Add the Selected TV To addToCart and Make a Payment",
  "keyword": "And "
});
formatter.match({
  "location": "TVPurchaseSteps.user_Should_Add_the_Selected_TV_To_addToCart_and_Make_a_Payment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should Receive and Valided The Confermation Message",
  "keyword": "Then "
});
formatter.match({
  "location": "TVPurchaseSteps.user_Should_Receive_and_Valided_The_Confermation_Message()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[text()\u003d\u0027ORDER IT\u0027]\"}\n  (Session info: chrome\u003d103.0.5060.53)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-9RN6IOSL\u0027, ip: \u0027192.168.0.105\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.3\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.53, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\balas\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53986}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e83a4385bfcabf531f163d1a0ab1fec9\n*** Element info: {Using\u003dxpath, value\u003d//button[text()\u003d\u0027ORDER IT\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.flipkart.stepdefinitions.TVPurchaseSteps.user_Should_Receive_and_Valided_The_Confermation_Message(TVPurchaseSteps.java:68)\r\n\tat ✽.User Should Receive and Valided The Confermation Message(src/test/resources/Features/CucumberFrame1.feature:22)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch Flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "TVPurchaseSteps.user_launch_Flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should login Flipkart with valid Credentials",
  "keyword": "And "
});
formatter.match({
  "location": "TVPurchaseSteps.user_should_login_Flipkart_with_valid_Credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TV using Map",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User Seacrh the Tv brand and Choose Tv Modeln using Map",
  "rows": [
    {
      "cells": [
        "TV1",
        "Realme tv"
      ]
    },
    {
      "cells": [
        "TV2",
        "OnePluse TV"
      ]
    },
    {
      "cells": [
        "TV3",
        "Samsung TV"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "TVPurchaseSteps.user_Seacrh_the_Tv_brand_and_Choose_Tv_Modeln_using_Map(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should Add the Selected TV To addToCart and Make a Payment",
  "keyword": "And "
});
formatter.match({
  "location": "TVPurchaseSteps.user_Should_Add_the_Selected_TV_To_addToCart_and_Make_a_Payment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should Receive and Valided The Confermation Message",
  "keyword": "Then "
});
formatter.match({
  "location": "TVPurchaseSteps.user_Should_Receive_and_Valided_The_Confermation_Message()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[text()\u003d\u0027ORDER IT\u0027]\"}\n  (Session info: chrome\u003d103.0.5060.53)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-9RN6IOSL\u0027, ip: \u0027192.168.0.105\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.3\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.53, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\balas\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54047}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 30636c71e9dbfdf9c8bfc86ff21e37e2\n*** Element info: {Using\u003dxpath, value\u003d//button[text()\u003d\u0027ORDER IT\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.flipkart.stepdefinitions.TVPurchaseSteps.user_Should_Receive_and_Valided_The_Confermation_Message(TVPurchaseSteps.java:68)\r\n\tat ✽.User Should Receive and Valided The Confermation Message(src/test/resources/Features/CucumberFrame1.feature:30)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User Seacrh the Tv brand and Choose Tv Model\"\u003cPhone\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User Should Add the Selected TV To addToCart and Make a Payment",
  "keyword": "And "
});
formatter.step({
  "name": "User Should Receive and Valided The Confermation Message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Phone"
      ]
    },
    {
      "cells": [
        "Realme tv"
      ]
    },
    {
      "cells": [
        "OnePluse TV"
      ]
    },
    {
      "cells": [
        "Samsung TV"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch Flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "TVPurchaseSteps.user_launch_Flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should login Flipkart with valid Credentials",
  "keyword": "And "
});
formatter.match({
  "location": "TVPurchaseSteps.user_should_login_Flipkart_with_valid_Credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User Seacrh the Tv brand and Choose Tv Model\"Realme tv\"",
  "keyword": "When "
});
formatter.match({
  "location": "TVPurchaseSteps.user_Seacrh_the_Tv_brand_and_Choose_Tv_Model(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should Add the Selected TV To addToCart and Make a Payment",
  "keyword": "And "
});
formatter.match({
  "location": "TVPurchaseSteps.user_Should_Add_the_Selected_TV_To_addToCart_and_Make_a_Payment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should Receive and Valided The Confermation Message",
  "keyword": "Then "
});
formatter.match({
  "location": "TVPurchaseSteps.user_Should_Receive_and_Valided_The_Confermation_Message()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[text()\u003d\u0027ORDER IT\u0027]\"}\n  (Session info: chrome\u003d103.0.5060.53)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-9RN6IOSL\u0027, ip: \u0027192.168.0.105\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.3\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.53, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\balas\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:49576}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c87d9a6da4796986ac948569af711d12\n*** Element info: {Using\u003dxpath, value\u003d//button[text()\u003d\u0027ORDER IT\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.flipkart.stepdefinitions.TVPurchaseSteps.user_Should_Receive_and_Valided_The_Confermation_Message(TVPurchaseSteps.java:68)\r\n\tat ✽.User Should Receive and Valided The Confermation Message(src/test/resources/Features/CucumberFrame1.feature:37)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch Flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "TVPurchaseSteps.user_launch_Flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should login Flipkart with valid Credentials",
  "keyword": "And "
});
formatter.match({
  "location": "TVPurchaseSteps.user_should_login_Flipkart_with_valid_Credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User Seacrh the Tv brand and Choose Tv Model\"OnePluse TV\"",
  "keyword": "When "
});
formatter.match({
  "location": "TVPurchaseSteps.user_Seacrh_the_Tv_brand_and_Choose_Tv_Model(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should Add the Selected TV To addToCart and Make a Payment",
  "keyword": "And "
});
formatter.match({
  "location": "TVPurchaseSteps.user_Should_Add_the_Selected_TV_To_addToCart_and_Make_a_Payment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should Receive and Valided The Confermation Message",
  "keyword": "Then "
});
formatter.match({
  "location": "TVPurchaseSteps.user_Should_Receive_and_Valided_The_Confermation_Message()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[text()\u003d\u0027ORDER IT\u0027]\"}\n  (Session info: chrome\u003d103.0.5060.53)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-9RN6IOSL\u0027, ip: \u0027192.168.0.105\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.3\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.53, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\balas\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64600}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: eddca6767b86661172d05acc3a5f119f\n*** Element info: {Using\u003dxpath, value\u003d//button[text()\u003d\u0027ORDER IT\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.flipkart.stepdefinitions.TVPurchaseSteps.user_Should_Receive_and_Valided_The_Confermation_Message(TVPurchaseSteps.java:68)\r\n\tat ✽.User Should Receive and Valided The Confermation Message(src/test/resources/Features/CucumberFrame1.feature:37)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch Flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "TVPurchaseSteps.user_launch_Flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should login Flipkart with valid Credentials",
  "keyword": "And "
});
formatter.match({
  "location": "TVPurchaseSteps.user_should_login_Flipkart_with_valid_Credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User Seacrh the Tv brand and Choose Tv Model\"Samsung TV\"",
  "keyword": "When "
});
formatter.match({
  "location": "TVPurchaseSteps.user_Seacrh_the_Tv_brand_and_Choose_Tv_Model(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should Add the Selected TV To addToCart and Make a Payment",
  "keyword": "And "
});
formatter.match({
  "location": "TVPurchaseSteps.user_Should_Add_the_Selected_TV_To_addToCart_and_Make_a_Payment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should Receive and Valided The Confermation Message",
  "keyword": "Then "
});
formatter.match({
  "location": "TVPurchaseSteps.user_Should_Receive_and_Valided_The_Confermation_Message()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[text()\u003d\u0027ORDER IT\u0027]\"}\n  (Session info: chrome\u003d103.0.5060.53)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-9RN6IOSL\u0027, ip: \u0027192.168.0.105\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.3\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.53, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\balas\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64697}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 7dd5d34961d038ecfb60ae073512772c\n*** Element info: {Using\u003dxpath, value\u003d//button[text()\u003d\u0027ORDER IT\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.flipkart.stepdefinitions.TVPurchaseSteps.user_Should_Receive_and_Valided_The_Confermation_Message(TVPurchaseSteps.java:68)\r\n\tat ✽.User Should Receive and Valided The Confermation Message(src/test/resources/Features/CucumberFrame1.feature:37)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/CucumberFrameMobile.feature");
formatter.feature({
  "name": "Mobile Purchase",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "mobile",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch Flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "TVPurchaseSteps.user_launch_Flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should login Flipkart with valid Credentials",
  "keyword": "And "
});
formatter.match({
  "location": "TVPurchaseSteps.user_should_login_Flipkart_with_valid_Credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Seacrh the Mobile brand and Choose Mobile Model",
  "keyword": "When "
});
formatter.match({
  "location": "MobilePurchaseSteps.user_Seacrh_the_Mobile_brand_and_Choose_Mobile_Model()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should Add the Selected Mobile To addToCart and Make a Payment",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchaseSteps.user_Should_Add_the_Selected_Mobile_To_addToCart_and_Make_a_Payment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should Receive and Valided The Confermation Message",
  "keyword": "Then "
});
formatter.match({
  "location": "TVPurchaseSteps.user_Should_Receive_and_Valided_The_Confermation_Message()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[text()\u003d\u0027ORDER IT\u0027]\"}\n  (Session info: chrome\u003d103.0.5060.53)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-9RN6IOSL\u0027, ip: \u0027192.168.0.105\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.3\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.53, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\balas\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64804}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: dd1414fce4bcfa0d2d15c362f6e16b4e\n*** Element info: {Using\u003dxpath, value\u003d//button[text()\u003d\u0027ORDER IT\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.flipkart.stepdefinitions.TVPurchaseSteps.user_Should_Receive_and_Valided_The_Confermation_Message(TVPurchaseSteps.java:68)\r\n\tat ✽.User Should Receive and Valided The Confermation Message(src/test/resources/Features/CucumberFrameMobile.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});