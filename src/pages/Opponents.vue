<template>
  <Layout>
    <van-cell-group>
      <van-cell
        v-for="opponent in $static.opponents.edges"
        :to="opponent.node.path"
        :title="opponent.node.title"
        :key="opponent.node.title"
        :value="opponent.node.matches.length"
        is-link
      />
    </van-cell-group>
  </Layout>
</template>

<static-query>
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
</static-query>

<script>
export default {
  metaInfo: {
    title: "Соперники"
  }
};
</script>
