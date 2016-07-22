var  citiesObj = {
    "Lviv":            ["Gorodok", "Mykolaiv", "Stryi", "Zolociv", "Yavoriv", "Zhovkva"],
    "Ivano-Frankivsk": ["Dolyna", "Kalush", "Kolomyia", "Nadvirna"],
    "Ternopil":        ["Berezhany", "Chortkiv", "Kremenec"],
    "Uzhgorod":        ["Khust", "Mukachevo"],
    "Luck":            ["Kovel", "Shack", "Volodymyr-Volynskiy"],
    "Rivne":           []
  };

var citiesList = document.createElement("UL");
document.body.appendChild(citiesList);

for (var key in citiesObj) {
  var city = document.createElement("LI");
  var cityName = document.createTextNode(key);
  var regionsCount = document.createTextNode(" (" + citiesObj[key].length + ")");

  city.setAttribute("id", key);
  city.appendChild(cityName);

  if (citiesObj[key].length > 0) {
    city.setAttribute("class", "closed");
    city.appendChild(regionsCount);
    city.addEventListener("click", toggleRegionsList);
  } else {
    city.setAttribute("style", "background-color: green");
    city.addEventListener("click", alertWarning);
  }
  citiesList.appendChild(city);
}

function toggleRegionsList(e) {
  var city = e.target;
  var cityName = city.getAttribute("id");

  if (city.classList.contains("closed")) {
    city.classList.toggle("closed");
    var regions = citiesObj[cityName];
    var subCitiesList = document.createElement("UL");
    subCitiesList.setAttribute("id", cityName + "CitiesList");
    regions.forEach(function(sub){
      var subCity = document.createElement("LI");
      var subCityName = document.createTextNode(sub);
      subCity.appendChild(subCityName);
      subCitiesList.appendChild(subCity);
    });
    city.appendChild(subCitiesList);
  } else {
    city.classList.toggle("closed");
    city.removeChild(document.getElementById(cityName + "CitiesList"));
  }
}

function alertWarning(e) {
  alert("No sub-cities available for " + e.target.getAttribute("id") +"!")
}
