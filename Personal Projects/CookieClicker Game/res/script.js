let totalCookies = 0;
let cookieMultiplier = 1;

let twoTimesCookiesActivated = false;
let fourTimesCookiesActivated = false;

LoadCookiesFromLocalStorage();
AddClickEvent();

function LoadCookiesFromLocalStorage() 
{
    if(!localStorage.getItem("cookies"))
        return;

    totalCookies = localStorage.getItem("cookies");
    console.log(totalCookies);
    UpdateCookiesClicked();
}

function SaveCookiesToLocalStorage() 
{
    localStorage.setItem("cookies", totalCookies);
}

function UpdateCookiesClicked()
{
    const newText = `Cookies Clicked: ${totalCookies}`;
    document.getElementById("cookiesTotal").textContent = newText;
}

function RemoveCookies(totalCookiesToRemove) 
{
    totalCookies -= totalCookiesToRemove;
    SaveCookiesToLocalStorage();
    UpdateCookiesClicked();
}

function PurchaseUpgrade(upgradeName, upgrade, requiredCookies, newCookieMultipler)
{
    if(!upgrade && totalCookies >= requiredCookies)
    {
        upgrade = true;
        cookieMultiplier = newCookieMultipler;
        RemoveCookies(requiredCookies);
        
        document.getElementById(upgradeName).removeEventListener('click', PurchaseUpgrade(upgradeName, upgrade, requiredCookies, newCookieMultipler), false);
    }
}

function AddClickEvent()
{
    document.getElementById("cookie").addEventListener('click', function() 
    {
        CookieClicked();
        UpdateCookiesClicked();
    }, false);

    document.getElementById("twoCookiesUpgrade").addEventListener('click', PurchaseUpgrade("twoCookiesUpgrade", twoTimesCookiesActivated, 200, 2), true);
    document.getElementById("fourCookiesUpgrade").addEventListener('click', PurchaseUpgrade("fourCookiesUpgrade", fourTimesCookiesActivated, 400, 4), true);
}

const CookieClicked = () => 
{
    totalCookies += cookieMultiplier;
    SaveCookiesToLocalStorage();
}