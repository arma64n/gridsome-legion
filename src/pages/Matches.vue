<template>
  <Layout>
    <h1>Matches</h1>
    <ul>
      <li v-for="match in $page.allStrapiMatches.edges">
        {{ match.node.date }}
        {{ match.node.city.title }}
        {{ match.node.opponent.title }}
      </li>
    </ul>
  </Layout>
</template>

<page-query>
{
allStrapiMatches {
  edges {
    node {
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
</page-query>

<script>
export default {
  metaInfo: {
    title: "Matches",
  },
};
</script>
