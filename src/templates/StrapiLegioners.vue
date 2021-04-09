<template>
  <Layout>
    <p class="legioner__title">{{ $page.legioner.title }}</p>
    <!-- <yearly-chart :matches="$page.legioner.matches"></yearly-chart> -->
    <!-- <div class="legioner__map" id="map"></div> -->
    <g-link
      v-for="match in $page.legioner.matches"
      class="legioner__match"
      :key="match.date"
      :to="`/matches/${match.id}`"
    >
      <!-- <div class="opponent__left">
        <opponent-logo
          class="opponent__logo"
          :opponent="opponent.node.title"
          small
        ></opponent-logo>
      </div>-->
      <p>{{ visitedCities.find((x) => x.id == match.city).title }}</p>
      <p>{{ new Date(match.date).toDateString() }}</p>
    </g-link>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  legioner: strapiLegioners(id: $id) {
    title
    matches {
      id
      date
      opponent
      city
    }
  }
  allStrapiCities  {
    edges {
      node {
        id
        title
        latitude
        longitude
      }
    }
  }
}
</page-query>

<script>
import YearlyChart from "@/components/YearlyChart";

export default {
  components: {
    YearlyChart
  },
  computed: {
    visitedCities() {
      let filtered = this.$page.legioner.matches.map(x => x.city);
      return this.$page.allStrapiCities.edges
        .map(x => x.node)
        .filter(y => filtered.includes(y.id));
    }
  },
  mounted() {
    // var map;
    // DG.then(() => {
    //   map = DG.map("map", {
    //     center: [48, 68],
    //     zoom: 3,
    //     zoomControl: false
    //   });
    //   for (let i of this.visitedCities) {
    //     DG.marker([i.latitude, i.longitude])
    //       .addTo(map)
    //       .bindPopup(i.title);
    //   }
    // });
  }
};
</script>

<style lang="scss" scoped>
.legioner {
  &__title {
    font-size: 2.8rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  &__map {
    margin: 1rem 0;
    width: calc(100vw - 2.8rem);
    height: calc(60vw - 2.8rem);
    border-radius: 10px;
  }

  &__match {
    background: var(--bg-block);
    border-radius: 8px;
    display: flex;
    margin-bottom: 1rem;
    justify-content: space-between;
    padding: 1rem;
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--color-white);
    overflow: hidden;
    position: relative;
    align-items: center;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
