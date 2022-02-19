// indexes vs reverse indexes ( indices )
// databases vs search engines
// keywords DONE
// stopwords DONE
// next time:
// ngrams
// lucene / elastic / mdb indexes

console.time("search");

const fs = require("fs");
const db = JSON.parse(fs.readFileSync("database.json"));
const ri = JSON.parse(fs.readFileSync("reverseIndex.json"));

console.timeEnd("search");
