(function () {
//  Miami
let miami = ['Miami', '2 500 625 man', 'english', 'Bayside Marketplace'];
let aboutMiami = document.createElement('div');
aboutMiami.className = 'AboutMiami';
aboutMiami.innerHTML = "<strong>Miami</strong>  is a major center and leader in finance, commerce, culture, media, entertainment, the arts, and international trade. The metro area is by far the largest urban economy in Florida and the 12th largest in the United States, with a GDP of $344.9 billion as of 2017. In 2018, Miami was classified as an Alpha level global city by the GaWC. In 2019, Miami ranked seventh in the United States and 31st among global cities in terms of business activity, human capital, information exchange, cultural experience, and political engagement. According to a 2018 UBS study of 77 world cities, the city was ranked as the third-richest in the United States and the eighth-richest in the world in terms of purchasing power. Miami is nicknamed the Capital of Latin America and is the largest city with a Cuban-American plurality";

//  Moscow
let moscow = ['Moscow', '12 630 289 man', 'russian', 'The Red Square'];
let aboutMoscow = document.createElement('div');
aboutMoscow.className = 'AboutMoscow';
aboutMoscow.innerHTML = "<strong>Moscow</strong>  is a major political, economic, cultural, and scientific centre of Russia and Eastern Europe. It is the second-most populous city in Europe, the most populous city entirely within Europe, as well as the largest city (by area) on the European continent. By broader definitions, Moscow is among the world's largest cities, being the 24th largest metropolitan area, the 16th largest urban area, and the 10th largest by population within city limits worldwide. Moscow has been ranked as the ninth most expensive city in the world[16] and has one of the world's largest urban economies, being ranked as an alpha global city, and is also one of the fastest growing tourist destinations in the world. Moscow is home to the third-highest number of billionaires of any city in the world, and has the highest number of billionaires of any city in Europe";

// Berlin
let berlin = ['Berlin', '3 644 826 man', 'deutsch', 'Brandenburg Gate'];
let aboutBerlin = document.createElement('div');
aboutBerlin.className = 'AboutBerlin';
aboutBerlin.innerHTML = "<strong>Berlin</strong> Berlin straddles the banks of the River Spree, which flows into the River Havel (a tributary of the River Elbe) in the western borough of Spandau. Among the city's main topographical features are the many lakes in the western and southeastern boroughs formed by the Spree, Havel, and Dahme rivers (the largest of which is Lake Müggelsee). Due to its location in the European Plain, Berlin is influenced by a temperate seasonal climate. About one-third of the city's area is composed of forests, parks, gardens, rivers, canals and lakes. The city lies in the Central German dialect area, the Berlin dialect being a variant of the Lusatian-New Marchian dialects";


let tableName = document.getElementById('form_table_name');
let tablePopulation = document.getElementById('form_table_population');
let tableLanguage = document.getElementById('form_table_language');
let tableSight = document.getElementById('form_table_sight');

let textAboutCity = document.getElementById('text_about_city');
let select = document.querySelector('select');

select.addEventListener('change',showInfo);

function showInfo() {
    let indexSelected = select.selectedIndex,
    option = select.querySelectorAll('option')[indexSelected];
    let selectedId = option.getAttribute('id');

    if (selectedId == 'miami'){
        tableName.innerHTML = miami[0],
        tablePopulation.innerHTML = miami[1], 
        tableLanguage.innerHTML = miami[2],
        tableSight.innerHTML = miami[3],
        textAboutCity.append(aboutMiami)
    };
    if (selectedId == 'moscow'){
        tableName.innerHTML = moscow[0],
        tablePopulation.innerHTML = moscow[1],
        tableLanguage.innerHTML = moscow[2],
        tableSight.innerHTML = moscow[3],
        textAboutCity.append(aboutMoscow)
    };
    if (selectedId == 'berlin'){
        tableName.innerHTML = berlin[0],
        tablePopulation.innerHTML = berlin[1],
        tableLanguage.innerHTML = berlin[2],
        tableSight.innerHTML = berlin[3],
        textAboutCity.append(aboutBerlin)
    };
}

let clear = document.getElementById('clearButton');
clear.addEventListener('click',clearHistory);


function clearHistory() {
    document.getElementById("text_about_city").innerHTML = "";
  }

})();