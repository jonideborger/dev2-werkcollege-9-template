"use strict";

import Utils from './Utils.js';

/* Stap 0 */
/* Om de grafiek te tonen maken we gebruik van een externe library
Chart.js: https://www.chartjs.org/

Zorg ervoor dat deze library wordt ingeladen in de index.html file, gebruik hiervoor deze code:
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>

Let er op dat je het chart.js-script inlaadt voordat index.js wordt ingeladen
*/

/* Stap 1 */
/*
Maak een klasse CountryList aan met de nodige attributen en methodes, deze vind je terug in de UML.
*/


/* Stap 2 */
/*
Maak een klasse Country aan met de nodige attributen en methodes, deze vind je terug in de UML.

Werk de htmlString methode uit, hier alvast de template:
  <li><span>COUNTRY CODE</span><span class="span-country">COUNTRY</span><span>CONFIRMED</span><span>DEATHS</span><span><input name="countryCheckbox" type="checkbox" value="ID"></span>
*/


/* Stap 3 */
/* Even terug naar de CountryList klasse. Werk de 'fetch'-methode uit.

Haal de data op via: https://coronavirus-tracker-api.herokuapp.com/v2/locations
Gebruik de async await syntax om de data met 'fetch' op te halen via de URL en om de JSON data hier uit te halen

Maak nu voor elke locatie in json een instantie van de klasse 'Country' aan.
Bewaar deze instanties in de array 'this.countries'
*/


/* Stap 4 */
/* Werk de filter methode uit.

Sorteer de countries array.
Als sorterings functie gebruik sortCountriesBy(), dit is een methode van het geimporteerde Utils object.
De functie accepteer een String, dit is een parameter waarop gesorteerd kan worden: 'confirmed' of 'deaths'.
bv: Utils.sortCountriesBy('confirmed')

Zorg ervoor dat enkel de eerste 20 landen bewaard blijven:
https://www.w3schools.com/jsref/jsref_slice_array.asp
*/

/* Stap 5 */
/* Werk de render methode uit door gebruik te maken van this.countries en de htmlString methode van de Country klasse
Tip: insertAdjacentHTML

Nadat je de html hebt geinjecteerd voer je de bindEventListeners() functie uit
*/

/* Stap 6 */
/* Maak de klasse CustomChart aan zoals beschreven in de UML.

CustomChart erft over van Chart, dit is een klasse die we inladen via de Chart.js library.
Een line chart aanmaken doe je zo: https://www.chartjs.org/docs/latest/charts/line.html

Roep de super() methode van Chart als volgt aan:
    super(document.getElementById('chart-confirmed').getContext('2d'), {
      type: 'line',
      data: {
          labels: ['January', 'February', 'March', 'April'],
          datasets: []
      },
      options: {}
    })

Wanneer we later data gaan toevoegen aan de chart zullen we gebruik maken van 'data.labels' om de labels aan te passen,
en 'data.datasets' om nieuwe datasets toe te voegen aan deze array
*/

/* Stap 7 */
/* We keren terug naar CountryList en de bindEventListeners() methode

Voeg een event listener toe aan elke input met de name 'countryCheckbox'
op het change event moet de updateChartData() methode aangeroepen worden.

Vergeet niet 'bind' te gebruiken om de juiste scope van het 'this'-keyword te behouden.
Huh? --> https://stackoverflow.com/questions/42344350/what-does-bindthis-mean
*/

/* Stap 8 */
/* updateChartData accepteert de 'event' parameter, gebruik deze om:
- via target.checked de waarde van de checkbox te achterhalen
- via target.value de id van de aangeklikte Country te achterhalen

Op basis van target.checked gaan we data toevoegen of verwijderen.

Om data toe te voegen moeten we de fetchDetailedData functie uitwerken.
Deze haalt op basis van de id de juiste data op via: `https://coronavirus-tracker-api.herokuapp.com/v2/locations/${id}`

gebruik de id en de opgehaalde data om de addData() methode van je chart instantie aan te roepen:
  this.chart.addData(id, detailedData);

indien we data moeten verwijderen gebruiken we de id om removeData() methode van je chart instantie aan te roepen
*/

/* Stap 9 */
/* Bijna daar! 
gebruik opnieuw een functie van het Utils object,
met Utils.convertDetailedDataToDataset(id, data) converteer je het data object naar een correcte dataset

Het resultaat van deze functie, bv. de variabele 'newDataset', moeten we toevoegen aan de 'data.datasets' array, dit is een attribuut van onze klasse.

Vooraleer onze nieuwe dataset zichtbaar is moeten we de update() methode aanroepen.
Dit weten we door de documentatie van de library te bekijken: https://www.chartjs.org/docs/latest/developers/api.html

! Als je het resultaat nu bekijkt zie je dat onze chart nog de oude labels bevat,
we kunnen ook de labels aanpassen:
  this.data.labels = newDataset.labels;

Doe dit voordat je de update() functie aanroept
*/

/* Stap 10 */
/* removeData verwijdert een dataset op basis van een id

maak gebruik van de Array-filter methode (https://alligator.io/js/filter-array-method/)
Elke dataset heeft een attribuut 'id', return enkel de datasets waarvoor dataset.id !== id

Vergeet niet je chart te updaten!
*/





/* Roep hier de functies aan die aangeroepen moeten worden wanneer de pagina geladen is */

//const chart = new CustomChart();
//const countryList = new CountryList();
//countryList.init();
