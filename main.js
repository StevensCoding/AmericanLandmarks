document.addEventListener("DOMContentLoaded", () => {
    const magic = document.getElementById("landmarkButton");
    magic.addEventListener("click", (e) => {
        fetch(`http://localhost:3000/landmarks`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              }
        })
        .then(res => res.json())
        .then(data => {
            data.map(names => {
                console.log(names);
                const h3 = document.createElement("h3");
                const para = document.createElement("p");
                const img = document.createElement("img");
                const location = names.location[0];
                const namesList = document.querySelector("#forLandmarks");
                h3.textContent = names.landmarkName;
                img.src= `${names.url}`
                img.height = 400;
                img.width = 400;
                para.textContent = `Located in: ${location.city}, ${location.state}`;
                namesList.append(h3, img, para);

            })})
        })
    })
