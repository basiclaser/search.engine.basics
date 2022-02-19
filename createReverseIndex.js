const fs = require("fs");
const db = JSON.parse(fs.readFileSync("database.json"));

const reverseIndex = {};
const stopwords = require("./stopwords.json");

function compileReverseIndex() {
  db.forEach((d) => {
    d.summary
      .toLowerCase() // nice
      //   .replaceAll("ã", "a")
      .split(" ")
      //   .split(",")
      //   .split("/")
      //   .split(";") // court/playground;,-
      //   .split(".")
      //   .split(":")
      //   .split("-")
      //   .split("+")
      //   .split("!")
      //   .split("?")
      //   .split("%")
      //   .split("&")
      //   .split("(")
      //   .split(")")
      //   .split("[")
      //   .split("]")
      //   .split("]")
      .filter((word) => !stopwords.includes(word))
      .forEach((k) => {
        if (k.length === 0) return;
        if (!reverseIndex[k]) {
          reverseIndex[k] = [d._id];
        } else {
          !reverseIndex[k].includes(d._id) && reverseIndex[k].push(d._id);
        }
      });
    //   } else if (item.description.includes(query)) {
    //     return true;
    //   } else if (item.summary.includes(query)) {
    //     return true;
    //   } else if (item.host.host_about.includes(query)) {
    //     return true;
    //   } else {
    //     return false;
    //   }
  });
}
compileReverseIndex();
fs.writeFileSync("reverseIndex.json", JSON.stringify(reverseIndex));
