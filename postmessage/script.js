function getParameterByName(name, url) {

    if (!url) url = window.location.href;

    name = name.replace(/[$$$$]/g, "\\$&");
    
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)")
    
    results = regex.exec(url);

    if (!results) return null;

    if (!results[2]) return '';

    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var redirectParam = getParameterByName('redirect');

if (redirectParam && !redirectParam.startsWith("javascript:")) {
    window.location = redirectParam;
}

window.addEventListener("message", function (e) {
    if (e.origin && e.data) {
        let t; // Declare 't' with let
        try {
            t = JSON.parse(e.data);
        } catch (error) {
            console.error("Error parsing JSON:", error); // Log the error
        }
        if (t && typeof t === "object") {
            if (t.name) {
                // nothing
            }
            if (t.goto) {
                window.location = t.goto;
            }
        }
    }
});