let totalCookies = 0;

AddClickEvent();

const CookieClicked = () => {
    totalCookies++;
    console.log(totalCookies);
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