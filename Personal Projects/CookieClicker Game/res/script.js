let totalCookies = 0;
let cookieMultiplier = 1;

let twoTimesCookiesActivated = false;
let fourTimesCookiesActivated = false;

LoadCookiesFromLocalStorage();
UpdateCookiesClicked();
AddClickEvent();

function LoadCookiesFromLocalStorage() 
{
    if(!localStorage.getItem("cookies"))
        return;
    else{
        totalCookies = localStorage.getItem("cookies");
        UpdateCookiesClicked();
    }
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

function AddClickListener(upgradeName, upgrade, requiredCookies, newCookieMultipler)
{
    if(!upgrade && totalCookies >= requiredCookies)
    {
        upgrade = true;
        cookieMultiplier = newCookieMultipler;
        RemoveCookies(requiredCookies);
        
        document.getElementById(`${upgradeName}`).removeEventListener('click');
    }
}

function AddClickEvent()
{
    document.getElementById("cookie").addEventListener('click', function() 
    {
        CookieClicked();
        UpdateCookiesClicked();
    }, false);

    document.getElementById("twoCookiesUpgrade").addEventListener('click', function() 
    {
        AddClickListener("twoCookiesUpgrade", twoTimesCookiesActivated, 200, 2);
    }, false);

    document.getElementById("fourCookiesUpgrade").addEventListener('click', function() 
    {
        AddClickListener("fourCookiesUpgrade", fourTimesCookiesActivated, 400, 4);
    }, false);
}

const CookieClicked = () => 
{
    totalCookies += cookieMultiplier;
    SaveCookiesToLocalStorage();
}