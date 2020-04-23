<template>
  <Layout>
    <van-cell-group>
      <van-cell
        v-for="match in $static.matches.edges"
        :to="match.node.path"
        :title="match.node.opponent.title"
        :key="match.node.date"
        :value="match.node.date"
        :label="match.node.city.title"
        is-link
      />
    </van-cell-group>
  </Layout>
</template>

<static-query>
query {
  matches: allStrapiMatches (sortBy: "date") {
    edges {
      node {
        path
        date
        city {
          title
        }
        opponent {
          title
        }
      }
    }
  }
}
</static-query>

<script>
export default {
  metaInfo: {
    title: "Матчи"
  }
};
</script>
