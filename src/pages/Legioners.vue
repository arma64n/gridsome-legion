<template>
  <Layout>
    <h1>Legioners</h1>
    <ul>
      <li v-for="legioner in $page.legioners.edges">
        <g-link :to="`/legioners/${legioner.node.id}`">
          {{ legioner.node.title }}
          {{ legioner.node.matches.length }}
        </g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query {
  legioners: allStrapiLegioners (sortBy: "matches") {
    edges {
      node {
        id
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
export default {
  metaInfo: {
    title: "Legioners"
  }
};
</script>
