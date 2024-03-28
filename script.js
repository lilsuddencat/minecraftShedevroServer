let icon = document.getElementById("icon")
let ipspan = document.getElementById("ipspan")
icon.onclick=  function () {
    console.log("скопировано");
    navigator.clipboard.writeText("ip:NewYearCorgiCraft.aternos.me")
    ipspan.innerHTML = "скопировано!"
    setTimeout(function () {
        ipspan.innerHTML = "ip:NewYearCorgiCraft.aternos.me"
    },2000)
    }
