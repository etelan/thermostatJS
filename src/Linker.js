
// COLOURS
// red
function _setRed(string) {
    var element = document.getElementById(string);
    element.className = "";
    element.classList.add("red");
};

// blue
function _setBlue(string) {
    var element = document.getElementById(string);
    element.className = "";
    element.classList.add("blue");
};

// mahogany
function _setMahogany(string) {
    var element = document.getElementById(string);
    element.className = "";
    element.classList.add("mahogany");
};

// REFRESHES
// temp
function refreshTemp(thermo) {
    console.log("refreshTemp: " + String(thermo))
    document.getElementById('demo').innerHTML = String(thermo.temp) + '°C';
};

function refreshSlider(thermo) {
    console.log("refreshSlider: " + String(thermo))
    document.getElementById('tempSlider').value = thermo.temp
    document.getElementById('tempSliderHigh').value = thermo.temp
};

// energy
function refreshUsage(thermo) {

    // Get what we need
    var usage = thermo.energyUsage(thermo)
    console.log("refreshUsage: " + String(usage))

    // Low
    if (usage == "low-usage") { 
        document.getElementById('energy-usage').innerHTML = "Low"
        _setBlue('energy-usage')
    }

    // Medium
    else if (usage == "medium-usage") { 
        document.getElementById('energy-usage').innerHTML = "Medium"
        _setMahogany('energy-usage')
    }

    // High
    else if (usage == "high-usage") { 
        document.getElementById('energy-usage').innerHTML = "High"
        _setRed('energy-usage')
    }

    else {
        console.log(usage)
    }


};

function returnUsage(thermo) {
    console.log(thermo.energyUsage(thermo))
}


// all
function refreshAll(thermo) {
    console.log("refreshAll: " + String(thermo))
    refreshUsage(thermo)
    refreshTemp(thermo)
    hideFunction()
    refreshSlider(thermo)
    makeGraph()
};

// TEMPERATURE CHANGE
// up
function up(thermo) {
    console.log("up: " + String(thermo))
    thermo.up(1)
    refreshAll(thermo)
    
};

// down
function down(thermo) {
    console.log("down: " + String(thermo))
    thermo.down(1)
    refreshAll(thermo)
};

// POWER SAVING
// toggle
function toggle(thermo) {
    thermo.psToggle(thermo);
    if (thermo.ps == false) { document.getElementById('power-saving-status').innerHTML = "Off"; }
    if (thermo.ps == true) { document.getElementById('power-saving-status').innerHTML = "On"; }
    refreshAll(thermo);
};

// Not my code, following a tutorial.
function weatherBalloon( cityID ) {

    // Set your key...
    var key = 'e3e70bd3dda87fe435cf916d1dfaed44';

    // Fetch the data
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  

    // Convert data to json
    .then(function(resp) { return resp.json() }) 

    // Then with this data, print to console
    .then(function(data) {

        temp_place(data)
    })

    // Error Handling
    .catch(function() {
        // catch any errors
    });
};

// Weather in different place
function temp_place(data) {

    // Tempurature 
    var temp = data.main.temp - 273.15
    temp =  Math.round(temp * 10) / 10 

    // Name of Place
    var name = data.name 

    // Replace
    document.getElementById('place-temp').innerHTML = temp;
    document.getElementById("place-temp").className = 'red';
    document.getElementById('place-title').innerHTML = name;

    //Frame
    hideFrame()

}

function hideFrame() {
    var status = String(document.getElementById('place-title').textContent || document.getElementById('power-saving-status').innerText)
    console.log(status)

    switch(status) {
        case "Melbourn":
            enableFrame("https://www.google.com/maps/embed?pb=!4v1605806558239!6m8!1m7!1swsldjItprJ5tMGyhQFvqFQ!2m2!1d52.08519872497711!2d0.01859984414884981!3f277.8907148927977!4f-11.192688505590098!5f0.7820865974627469")
            break;
        case "London":
            enableFrame("https://www.google.com/maps/embed?pb=!4v1605807970936!6m8!1m7!1sYgXqXIPdvbxfR4xgqgQT7A!2m2!1d51.50618432298923!2d-0.07492337995702769!3f240.84871329605465!4f25.5102480213352!5f0.7820865974627469")
            break;
        case "Bersenbrück":
            enableFrame("https://www.google.com/maps/embed?pb=!4v1605808097788!6m8!1m7!1sCAoSLEFGMVFpcE5Md0hBTmg0QndtMzh6ZlpCdG9sQlZYTThsOUNmNzNUSG4wa2ZY!2m2!1d52.5518203!2d7.944483099999999!3f291.34752540830294!4f5.08162644975333!5f0.7820865974627469")
            break;
        case "Paris":
            enableFrame("https://www.google.com/maps/embed?pb=!4v1605808155590!6m8!1m7!1sCAoSLEFGMVFpcE1QUl9ZNm9HbFFqOTU4bTdwaFFDTmhQVkk2NzNFN0xranZCUGla!2m2!1d48.852736!2d2.303018999999949!3f308.62272319437693!4f6.207187594629687!5f0.7820865974627469")
            break;
        case "Kyiv":
            enableFrame("https://www.google.com/maps/embed?pb=!4v1605808197895!6m8!1m7!1sCAoSLEFGMVFpcE5oS2RSYklPV3ZxNE9PREctT050bkJ1MkFYb25HUG5mUlFmSFFw!2m2!1d50.43367894201197!2d30.55460393428802!3f359.24507189885696!4f15.874354661936636!5f0.7820865974627469")
            break;
        case "Minsk":
            enableFrame("https://www.google.com/maps/embed?pb=!4v1605808259729!6m8!1m7!1sCAoSLEFGMVFpcE5aSU5nY25jQkpfaEM1bXBfYzdtZVFNSENtb0JUOXJvSnM2TGI1!2m2!1d53.90332369999999!2d27.5633105!3f40.701485181598635!4f21.98802623377138!5f0.7820865974627469")
            break;
        case "Berlin":
            enableFrame("https://www.google.com/maps/embed?pb=!4v1605808307307!6m8!1m7!1sCAoSLEFGMVFpcFA2bFBNcjBOLU40U18yQjUxekNiek1MMW1uN3JoNmNhc0I4N003!2m2!1d52.51860272255234!2d13.39942773677399!3f32.040918827826935!4f14.960949864833083!5f0.7820865974627469")
            break;
        case "Moscow":
            enableFrame("https://www.google.com/maps/embed?pb=!4v1605808352689!6m8!1m7!1sCAoSLEFGMVFpcFAzd2ZJeks1MW14UzlLRl96MUlSRXktc0UxT0FXbWlhTElQLWo4!2m2!1d55.7507843!2d37.6175831!3f29.649843013336298!4f21.428312408139192!5f0.7820865974627469" )
            break;
        default:
          // code block
      }

    if (status === "Off") {
        low.style.display = "none";
        high.style.display = "block";
    } else {
        low.style.display = "block";
        high.style.display = "none";
    }
}


function enableFrame(link) {
    var frame = document.getElementById("frame");
    frame.src = link;
}


function hideFunction() {
    var low = document.getElementById("tempSlider");
    var high = document.getElementById("tempSliderHigh");
    var status = String(document.getElementById('power-saving-status').textContent || document.getElementById('power-saving-status').innerText)

    if (status === "Off") {
        low.style.display = "none";
        high.style.display = "block";
    } else {
        low.style.display = "block";
        high.style.display = "none";
    }
}