<template>
  <MainMenu>
    <common-block
      v-for="legioner in $page.legioners.edges"
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
};
</script>
