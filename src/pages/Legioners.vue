<template>
  <Layout>
    <div v-for="(item, index) in finalArray" :key="item.count">
      <h2
        v-if="item.array.length"
        class="heading"
        :class="{ 'heading--first': !index }"
      >
        {{ item.count ? `${item.count}+` : `до ${step}` }}
        выездов
      </h2>
      <common-block
        v-for="legioner in item.array"
        :key="legioner.node.title"
        :common="legioner"
      ></common-block>
    </div>
  </Layout>
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
  name: "legioners-page",
  metaInfo: {
    title: "Легионеры",
  },
  components: {
    CommonBlock,
  },
  data() {
    return {
      finalArray: [],
      step: 5,
    };
  },
  computed: {
    legioners() {
      return this.$page.legioners;
    },
  },
  mounted() {
    let maxValue = Math.max(
      ...this.legioners.edges.map((x) => x.node.matches.length)
    );
    for (let i = Math.floor(maxValue / this.step); i >= 0; i--) {
      this.finalArray.push({
        count: i * this.step,
        array: [],
      });
    }
    for (let legioner of this.legioners.edges) {
      let found = this.finalArray.findIndex(
        (x) => legioner.node.matches.length >= x.count
      );
      this.finalArray[found].array.push(legioner);
    }
  },
};
</script>

<style lang="scss" scoped>
.heading {
  color: var(--color-accent);
  margin-top: 2.5rem;

  &--first {
    margin-top: 0;
  }
}
</style>
