/*
t("BFE.dev is {{{evaluation}", { evaluation: "fantastic" });
// "BFE.dev is {{{evaluation}"

t("BFE.dev is {{{evaluation}}}", { "{evaluation": "fantastic" });
// "BFE.dev is fantastic}"

t("BFE.dev is {{evalu ation}}", { "evalu ation": "fantastic" });
// "BFE.dev is fantastic"

*/

function t(str, data = {}) {
  while (str.includes("{{") && str.includes("}}")) {
    let startIndex = str.indexOf("{{");
    let endIndex = str.indexOf("}}", startIndex);

    let word = str.slice(startIndex + 2, endIndex);

    let replace = "";
    if (word in data) {
      replace = data[word];
    }

    str = str.replace(`{{${word}}}`, replace);
  }

  return str;
}

console.log(t("BFE.dev is {{{evaluation}", { evaluation: "fantastic" }));
console.log(t("BFE.dev is {{{evaluation}}}", { "{evaluation": "fantastic" }));
console.log(t("BFE.dev is {{evalu ation}}", { "evalu ation": "fantastic" }));
console.log(t("BFE.dev is {{evaluation}}"));
console.log(t("{{website}} {{verb}} {{evaluation}} {{period}} ")); // '    '

console.log(t("BFE.dev is {{evaluation"));
