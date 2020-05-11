<template>
  <MainMenu>
    <opponent-block
      v-for="opponent in $page.opponents.edges"
      :key="opponent.node.title"
      :opponent="opponent"
    ></opponent-block>
  </MainMenu>
</template>

<page-query>
query {
  opponents: allStrapiOpponents(sortBy: "title", order: ASC) {
    edges {
      node {
        title
        path
        matches {
          id
        }
      }
    }
  }
}
</page-query>

<script>
import OpponentBlock from "@/components/OpponentBlock";

export default {
  metaInfo: {
    title: "Соперники",
  },
  components: {
    OpponentBlock,
  },
};
</script>
