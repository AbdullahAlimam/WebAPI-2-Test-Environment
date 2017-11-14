/*!
 * Storeators v0.0.5 (http://getbootstrap.com)
 * Copyright 2015-2017 Noor Al Bayan, Inc.
 * Licensed under the MIT license
 */
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
//UserSettings=OneSignalAppID=ab079ae4-eba0-4b60-bf0b-bc6f497dbc60&OneSignalRESTAPIKey=ab079ae4-eba0-4b60-bf0b-bc6f497dbc60
function getAspCookie(cname, pname) {
    var parameters = getCookie(cname).split('&');
    var parameterName = pname + "=";

    for (var i = 0; i < parameters.length; i++) {
        var c = parameters[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(parameterName) == 0) {
            return c.substring(parameterName.length, c.length);
        }
    }
    return "";
}

function checkCookie(cname) {
    var val = getCookie(cname);
    return val != "";
}

function deleteCookie(cname) {
    document.cookie = cname + "=;expires=Wed 01 Jan 1970"
}


function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

