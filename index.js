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

function search(query) {
  console.log("searching for " + query);
  return db.filter(function (item) {
    if (item.summary.includes(query)) {
      return true;
    } else {
      return false;
    }
  });
}
function reverseIndexSearch(query) {
  return ri[query.toLowerCase()];
}

// const results = search("Washer");
const results = reverseIndexSearch("beach");
console.log(`${results}`);

console.timeEnd("search");
