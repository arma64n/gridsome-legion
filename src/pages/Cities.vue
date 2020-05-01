<template>
  <Layout>
    <common-block v-for="city in $page.cities.edges" :key="city.node.title" :common="city"></common-block>
  </Layout>
</template>

<page-query>
query {
  cities: allStrapiCities(sortBy: "title", order: ASC) {
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
    title: "Города"
  },
  components: {
    CommonBlock
  }
};
</script>
