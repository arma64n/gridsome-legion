<template>
  <Layout>
    <div>
      <transition-group name="fade">
        <match-block
          v-for="match in loadedMatches"
          :key="match.node.date"
          :match="match"
        ></match-block>
      </transition-group>
      <ClientOnly>
        <infinite-loading @infinite="infiniteHandler" spinner="spiral">
          <div slot="no-more"></div>
          <div slot="no-results">
            Sorry, no posts yet :(
          </div></infinite-loading
        >
      </ClientOnly>
    </div>
  </Layout>
</template>

<page-query>
query($page: Int) {
  matches: allStrapiMatches(sortBy: "date", perPage: 10, page: $page)
    @paginate {
    pageInfo {
      totalPages
      currentPage
    }
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
        legioners {
          id
        }
      }
    }
  }
}
</page-query>

<script>
import MatchBlock from "@/components/MatchBlock";

export default {
  metaInfo: {
    title: "Матчи",
  },
  components: {
    MatchBlock,
  },
  data() {
    return {
      loadedMatches: [],
      currentPage: 1,
    };
  },
  created() {
    this.loadedMatches.push(...this.$page.matches.edges);
  },
  methods: {
    async infiniteHandler($state) {
      if (this.currentPage + 1 > this.$page.matches.pageInfo.totalPages) {
        $state.complete();
      } else {
        const { data } = await this.$fetch(`/matches/${this.currentPage + 1}`);
        if (data.matches.edges.length) {
          this.currentPage = data.matches.pageInfo.currentPage;
          this.loadedMatches.push(...data.matches.edges);
          $state.loaded();
        } else {
          $state.complete();
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: ease opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
