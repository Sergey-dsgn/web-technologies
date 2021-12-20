function setCookie(name, value, options = {}) {
    options = {
    path: '/',
    // при необходимости добавьте другие значения по умолчанию
    ...options
    };
    if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
    }
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
    updatedCookie += "=" + optionValue;
    }
    }
    document.cookie = updatedCookie;
   }
   
function setCookie(name, value, options = {}) {

    options = {
        path: '/',
        // при необходимости добавьте другие значения по умолчанию
        ...options
    };
  
    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }
  
    document.cookie = updatedCookie;
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
let show = document.querySelector("#show");
let hide = document.querySelector("#hide");
let cookie = document.querySelector("#cookies");
cookie.style.visibility = getCookie('c');
hide.onclick =function (){
    cookie.style.visibility = "hidden";
    setCookie('c', cookie.style.visibility);
    
}
show.onclick =function (){
    cookie.style.visibility = "visible";
    setCookie('c', cookie.style.visibility);
    
}