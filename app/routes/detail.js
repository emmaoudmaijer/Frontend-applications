import Route from '@ember/routing/route';

const url = "https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-09/sparql"
const query = `

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX edm: <http://www.europeana.eu/schemas/edm/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX dbo: <http://dbpedia.org/ontology/> 
SELECT ?cho ?title ?type (SAMPLE(?description) AS ?description) (SAMPLE(?picture) AS ?picture) WHERE {
  VALUES ?type { "camera" "Camera" "fotocamera" "Fotocamera" "cameratas" "cameratassen" "Cameratassen" "filmcamera" "film" "filmtassen" "sepia" "fototas" "Film" "Cameratas"}
  ?cho dc:type ?type;
  dc:title ?title;
  edm:isShownBy ?picture .
  OPTIONAL {?cho dc:description ?description} .
  FILTER langMatches(lang(?title), "ned")
}
`
//OPTIONAL {?cho dc:description ?description} .

// FILTER langMatches(lang(?title), "ned")
export default Route.extend({
  model: function (params) {
    let object_url = params.url
    console.log(object_url);



    return fetch(url + "?query=" + encodeURIComponent(query) + "&format=json")
      .then(res => res.json())
      .then(json => {
        //console.log(json.results.bindings)

        let resultaten = json.results.bindings

        for (let i = 0; i < resultaten.length; i++) {
          //if(object_url == bindings[i].cho.split("/").pop() ){	
          let item = resultaten[i]
          item.cho = item.cho.value
          item.title = item.title.value
          // item.description = item.description.value.replace(/<[^>]+>/g, '')
          item.type = item.type.value
          item.img = item.picture.value
        }



        let newObject;
        for (let i = 0; i < resultaten.length; i++) {
          //console.log(bindings[0].cho.split("/").pop());
          if (object_url == resultaten[i].cho.split("/").pop()) {
            // console.log(bindings[i]);
			newObject = resultaten[i];
          }
        }

        console.log(newObject);

		return newObject;


	})
    // }



  }






  // .get('/collectie', function(db, request) {
  //   if(request.queryParams.city !== undefined) {
  //     let filteredRentals = rentals.filter(function(i) {
  //       return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
  //     });
  //    return { data: filteredRentals };
  //   } else {
  //     return { data: collectie };
  // });

});
