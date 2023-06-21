document.getElementById("mapRange").max = 8;
document.getElementById("mapRange").addEventListener("input", function () {
    let mapIndex = +this.value;
    document.getElementById("mapDisplay").src = `./assets/fix_${mapIndex * 2}.html`;
    document.getElementById("mapDetails").src = `./assets/fixtime_${mapIndex * 2}.png`;
});