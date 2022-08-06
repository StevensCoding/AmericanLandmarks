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

                if (location.city == "NA") {
                    para.innerText = `Located in: ${location.state}`;
                } else if (location.state == "NA"){
                    para.innerText = `Located in: ${location.city}`;
                }else {
                    para.innerText = `Located in: ${location.city}, ${location.state}`;
                }

                namesList.append(h3, img, para);
                // console.log(para.textContent)
            })})
        })
        const submitButton = document.getElementById("submitSuggestion")
        submitButton.addEventListener('click', e => {
            e.preventDefault();
            fetch(`http://localhost:3000/suggestions`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                  }

            })
            .then((response) => response.json())
            .then((data) => console.log(data));
            const sugBox = document.getElementById("suggestionsBox")
            sugBox.innerHTML = 'Thank you for your suggestion! It has been submitted.'
        })
    })
