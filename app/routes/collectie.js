import Route from '@ember/routing/route';
//import fetch from 'fetch';
// import { encode } from 'punycode';

const url = "https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-09/sparql"
const query = `

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX edm: <http://www.europeana.eu/schemas/edm/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
SELECT ?cho ?title ?type ?description ?picture WHERE {
   VALUES ?type { "camera" "Camera" "fotocamera" "Fotocamera" "cameratas" "filmcamera" "Foto" "foto" "Negatief" "negatief" "Glasnegatief" "glasnegatief" "Dia" "dia" "Kleurendia" "kleurendia" "Lichtbeeld" "lichtbeeld"}
   ?cho dc:type ?type;
   dc:title ?title;
   dc:description ?description;
   edm:isShownBy ?picture.
}
`//edm:isShownBy ?picture.

export default Route.extend({
  model() {
    return fetch(url+"?query="+ encodeURIComponent(query) +"&format=json") 
    .then(res => res.json())
    .then(json => {
      console.log(json.results.bindings)

    let bindings = json.results.bindings

    for (let i=0; i < bindings.length; i ++){
      let item = bindings [i]

    item.cho = item.cho.value
    item.title = item.title.value
    item.description = item.description.value.replace(/<[^>]+>/g, '')
    item.type = item.type.value
    item.img = item.picture.value
    }
     console.log(bindings)
    return bindings
    })
  }
});

