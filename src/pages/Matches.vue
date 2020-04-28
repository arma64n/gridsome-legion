<template>
  <Layout>
    <g-link
      v-for="match in $static.matches.edges"
      :key="match.node.date"
      :to="match.node.path"
    >
      <div>
        <h2>{{ match.node.opponent.title }}</h2>
        <opponent-logo :opponent="match.node.opponent.title"></opponent-logo>
      </div>
    </g-link>
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
import OpponentLogo from "@/components/OpponentLogo";

export default {
  metaInfo: {
    title: "Матчи",
  },
  components: {
    OpponentLogo,
  },
};
</script>
