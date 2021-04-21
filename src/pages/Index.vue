<template>
  <MainMenu>
    <h1>Сезон 2014</h1>
    <common-block
      v-for="legioner in filtered"
      :key="legioner.node.title"
      :common="legioner"
    ></common-block>
  </MainMenu>
</template>

<page-query>
query {
  legioners: allStrapiLegioners (sortBy: "matches") {
    edges {
      node {
        path
        title
        matches {
          id
          date
        }
      }
    }
  }
}
</page-query>

<script>
import CommonBlock from "@/components/CommonBlock";

export default {
  metaInfo: {
    title: "Легионеры",
  },
  components: {
    CommonBlock,
  },
  computed: {
    filtered() {
      let a = this.$page.legioners.edges.map((x) => x.node);
      let arr = [];
      for (let i of a) {
        let check = i.matches;
        check = i.matches.filter((x) => x.date > "2014");

        if (check.length) {
          arr.push({
            node: {
              path: i.path,
              title: i.title,
              matches: check,
            },
          });
        }
      }
      return arr.sort((a, b) => b.node.matches.length - a.node.matches.length);
    },
  },
};
</script>
