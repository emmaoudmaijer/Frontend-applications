# applicatie-filmliefhebbers
* [De applicatie](https://voorwerpen-nwcm.herokuapp.com/collectie)
Afbeelding van applicatie 
## Concept

### Hoe werkt het?

## Proces
Als je meer wilt weten over mijn proces kun je de wiki bekijken
[Wiki]()

## Data met SPARQL
```
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
```

## Installation

* `git clone <repository-url>` this repository
* `cd applicatie-filmliefhebbers`
* `npm install`

### Wat heb je nodig?

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/) (optional)

## Running / Development

* `ember serve`
* Bekijk je app op [http://localhost:4200](http://localhost:4200).

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Interessante en gebruikte bronnen

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## Licence:
ISC [Emma Oudmaijer](https://github.com/emmaoudmaijer/Frontend-applications)