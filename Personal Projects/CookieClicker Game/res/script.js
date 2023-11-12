let totalCookies = 0;
let cookieMultiplier = 1;

let twoTimesCookiesActivated = false;
let fourTimesCookiesActivated = false;

LoadCookiesFromLocalStorage();
UpdateCookiesClicked();
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
    const newText = `Cookies Clicked: ${totalCookies}`;
    document.getElementById("cookiesTotal").textContent = newText;
}

function RemoveCookies(totalCookiesToRemove) {
    totalCookies -= totalCookiesToRemove;
    SaveCookiesToLocalStorage();
    UpdateCookiesClicked();
}

function AddClickEvent()
{
    document.getElementById("cookie").addEventListener('click', function() {
        CookieClicked();
        UpdateCookiesClicked();
    }, false);

    document.getElementById("twoCookiesUpgrade").addEventListener('click', function() {
        if(!twoTimesCookiesActivated && totalCookies >= 200) {
            twoTimesCookiesActivated = true;
            cookieMultiplier = 2;
            RemoveCookies(200);
            
            document.getElementById("twoCookiesUpgrade").removeEventListener('click');
        }
    }, false);

    document.getElementById("fourCookiesUpgrade").addEventListener('click', function() {
        if(!fourTimesCookiesActivated && totalCookies >= 400) {
            fourTimesCookiesActivated = true;
            cookieMultiplier = 4;
            RemoveCookies(400);

            document.getElementById("fourCookiesUpgrade").removeEventListener('click');
        }
    }, false);
}

const CookieClicked = () => {
    totalCookies += cookieMultiplier;
    SaveCookiesToLocalStorage();
}