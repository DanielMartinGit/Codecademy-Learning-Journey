let totalCookies = 0;

LoadCookiesFromLocalStorage();
AddClickEvent();

function LoadCookiesFromLocalStorage() {
    if(!localStorage.getItem("cookies"))
        return;
    else 
        totalCookies = localStorage.getItem("cookies");
    
    UpdateCookiesClicked();
}

function SaveCookiesToLocalStorage() {
    localStorage.setItem("cookies", totalCookies);
}

function UpdateCookiesClicked() {
    const newText = "Cookies Clicked: " + totalCookies;
    document.getElementById("cookiesTotal").textContent = newText;
}

function AddClickEvent()
{
    document.getElementById("cookie").addEventListener('click', function() {
        CookieClicked();
        UpdateCookiesClicked();
    }, false);
}

const CookieClicked = () => {
    totalCookies++;
    SaveCookiesToLocalStorage();
}