var p = function () {
    const s = new URLSearchParams(location.search)
    const p = {}
    s.forEach(
        (v, k) => 
    {
        (v.indexOf("https:") > -1) ? p[k] = v : void 0
    }
    )
    return p
    
}

s = {
    "debug.voorivex-lab.online": ["debug_mode"]
}

c = [".voorivex-lab.online", ".voorivex.academy", ".voorivex.team"]

var u = function (e) {
    var team
    if (!e)
        return !1

    var n = /^https?:\/\//i.test(e) ? (new URL(e)).host : e
    return (null !== (t = s[window.location.hostname]) && void 0 !== t ? t:c).some((function (e) {
    return n.endsWith(e)   
    } 
    ))
}

u(p().l) ? location.href = p().l : false
