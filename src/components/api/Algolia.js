import algoliasearch from "algoliasearch";

const client = algoliasearch("S7MN0CIBBE", "ecf8c6a506e3515c1400eb7086879aa2", {
  protocol: "https:"
});
const index = client.initIndex("dev_NewEvolutionProducts");

export default {
  findPattern(productUrl) {
    index.search(
      {
        filters: `ProductUrl:${productUrl.pattern}`
      },
      (err, content) => {
        if (err) {
          console.log(err);
          return;
        } else {
          console.log("content.hits[0]", content.hits[0]);
          return content.hits[0];
          // router.push({ name: "wallpaper", query: { query: query } });2
        }
      }
    );
  }
};
