const magic = document.getElementById("landmarkButton");
magic.addEventListener("click", (theMagic) => {
    theMagic.preventDefault()
    theMagic.target[0].value
    fetch("")
    .then(res => res.json())
    .then(res => console.log(res))
})