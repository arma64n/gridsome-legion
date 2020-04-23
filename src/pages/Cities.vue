<template>
  <Layout>
    <van-cell-group>
      <van-cell
        v-for="city in $static.cities.edges"
        :to="city.node.path"
        :title="city.node.title"
        :key="city.node.title"
        :value="city.node.matches.length"
        is-link
      />
    </van-cell-group>
  </Layout>
</template>

<static-query>
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
</static-query>

<script>
export default {
  metaInfo: {
    title: "Города"
  }
};
</script>
