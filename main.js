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
                img.height = 600;
                img.width = 900;
                para.textContent = `Located in: ${location.city}, ${location.state}`;

                if (location.city == "NA") {
                    para.innerText = `Located in: ${location.state}`;
                } else if (location.state == "NA"){
                    para.innerText = `Located in: ${location.city}`;
                }else {
                    para.innerText = `Located in: ${location.city}, ${location.state}`;
                }


                namesList.append(h3, para, img);
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
        
        const toggleEvilModeOn = document.getElementById("dontTouchMe");
        toggleEvilModeOn.addEventListener('mouseover', evilMode);  
        function evilMode(){
            document.getElementById("body").style.backgroundColor = "#000000";
            document.getElementsByClassName("flex-container")[0].style.backgroundColor = "#000000";
            document.getElementsByClassName("flex-container")[0].style.color = "#ffffff";
            document.getElementsByClassName("flex-container")[1].style.backgroundColor = "#000000";
            document.getElementsByClassName("flex-container")[1].style.color = "#ffffff";
            document.getElementsByClassName("flex-container")[2].style.backgroundColor = "#000000";
            document.getElementsByClassName("flex-container")[2].style.color = "#ffffff";
            document.getElementsByClassName("A")[0].style.backgroundColor = "#000000";
            document.getElementsByClassName("A")[0].style.color = "#ffffff";
            document.getElementsByClassName("A")[1].style.backgroundColor = "#000000";
            document.getElementsByClassName("A")[1].style.color = "#ffffff";
            document.getElementsByClassName("A")[2].style.backgroundColor = "#000000";
            document.getElementsByClassName("A")[2].style.color = "#ffffff";
            //
            document.getElementById("landmarkButton").style.backgroundColor = "#dd0000";
            document.getElementById("titleText").style.color = "#8a0707";
            document.getElementById("suggestionsBox").style.backgroundColor = "#660000";
            document.getElementById("suggestionsTitle").style.backgroundColor = "#660000";
            document.getElementById("suggestionsTitle").style.color = "#ffffff";
            document.getElementById("wantTo").style.backgroundColor = "#660000";
            document.getElementById("wantTo").style.color = "#ffffff";
            document.getElementsByClassName("landmarkLabel")[0].style.backgroundColor = "#660000";
            document.getElementsByClassName("landmarkLabel")[0].style.color = "#ffffff";
            document.getElementsByClassName("landmarkLabel")[1].style.backgroundColor = "#660000";
            document.getElementsByClassName("landmarkLabel")[1].style.color = "#ffffff";
            document.getElementById("submitHere").style.backgroundColor = "#660000";
            document.getElementById("submitHere").style.color = "#ffffff";


        }
        const toggleEvilModeOff = document.getElementById("evilCat");
        toggleEvilModeOff.addEventListener('mouseout', evilModeOff);

        function evilModeOff(){
            document.getElementById("body").style.backgroundColor = "#cbc3e3";
            document.getElementsByClassName("flex-container")[0].style.backgroundColor = "#fcf7de";
            document.getElementsByClassName("flex-container")[0].style.color = "#000000";
            document.getElementsByClassName("flex-container")[1].style.backgroundColor = "#fcf7de";
            document.getElementsByClassName("flex-container")[1].style.color = "#000000";
            document.getElementsByClassName("flex-container")[2].style.backgroundColor = "#fcf7de";
            document.getElementsByClassName("flex-container")[2].style.color = "#000000";
            document.getElementsByClassName("A")[0].style.backgroundColor = "#ebe0e0";
            document.getElementsByClassName("A")[0].style.color = "#9F1338";
            document.getElementsByClassName("A")[1].style.backgroundColor = "#ebe0e0";
            document.getElementsByClassName("A")[1].style.color = "#9F1338";
            document.getElementsByClassName("A")[2].style.backgroundColor = "#ebe0e0";
            document.getElementsByClassName("A")[2].style.color = "#9F1338";
            //
            document.getElementById("landmarkButton").style.backgroundColor = "#bdf2ff";
            document.getElementById("titleText").style.color = "#000072";
            document.getElementById("suggestionsBox").style.backgroundColor = "#c1e7e3";
            document.getElementById("suggestionsTitle").style.backgroundColor = "#c1e7e3";
            document.getElementById("suggestionsTitle").style.color = "#000000";
            document.getElementById("wantTo").style.backgroundColor = "#c1e7e3";
            document.getElementById("wantTo").style.color = "#000000";
            document.getElementsByClassName("landmarkLabel")[0].style.backgroundColor = "#c1e7e3";
            document.getElementsByClassName("landmarkLabel")[0].style.color = "#000000";
            document.getElementsByClassName("landmarkLabel")[1].style.backgroundColor = "#c1e7e3";
            document.getElementsByClassName("landmarkLabel")[1].style.color = "#000000";
            document.getElementById("submitHere").style.backgroundColor = "#c1e7e3";
            document.getElementById("submitHere").style.color = "#000000";

        }
    })
