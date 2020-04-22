<template>
  <Layout>
    <h1>Legioners</h1>
    <ul>
      <li v-for="legioner in $page.allStrapiLegioners.edges">
        {{ legioner.node.title }}
        {{ legioner.node.matches.length }}
      </li>
    </ul>
  </Layout>
</template>

<page-query>
{
  allStrapiLegioners {
    totalCount
    edges {
      node {
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
    title: "Legioners",
  },
};
</script>
