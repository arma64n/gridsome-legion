<template>
  <Layout>
    <p class="legioner__title">{{ $page.legioner.title }}</p>
    <bar-chart :finalObj="filteredMatches"></bar-chart>
    <div v-if="sortedMatches.length >= 10" class="legioner__highlights">
      <h2>ТОП-3</h2>
      <ol>
        <li v-for="item in highlights" :key="item.id">
          {{item.title}}
          <span style="color: var(--bg-footer)">{{item.count}}</span>
        </li>
        <p v-if="!showAll" @click="showAll = true" class="legioner__toggle">Показать все</p>
      </ol>
    </div>
    <!-- <div class="legioner__map" id="map"></div> -->
    <g-link
      v-for="match in sortedMatches"
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
      <p>{{ new Date(match.date).toLocaleDateString() }}</p>
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
import BarChart from "@/components/BarChart";

export default {
  components: {
    BarChart
  },
  data() {
    return {
      showAll: false
    };
  },
  computed: {
    visitedCities() {
      let filtered = this.$page.legioner.matches.map(x => x.city);
      return this.$page.allStrapiCities.edges
        .map(x => x.node)
        .filter(y => filtered.includes(y.id));
    },
    sortedMatches() {
      return this.$page.legioner.matches.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    },
    filteredMatches() {
      const years = this.sortedMatches.map(x => new Date(x.date).getFullYear());
      const uniqueYears = [...new Set(years)];
      const minYear = Math.min(...uniqueYears);
      const maxYear = Math.max(...uniqueYears);

      let obj = {};
      for (let i = minYear; i <= maxYear; i++) {
        obj[i] = years.filter(x => x == i).length;
      }
      return obj;
    },
    topThree() {
      let newArr = [];
      for (let i of this.sortedMatches) {
        if (newArr.find(x => x.id == i.city)) {
          newArr.find(x => x.id == i.city).count++;
        } else {
          newArr.push({
            id: i.city,
            title: this.visitedCities.find(x => x.id == i.city).title,
            count: 1
          });
        }
      }
      return newArr.sort((a, b) => b.count - a.count);
    },
    highlights() {
      return this.showAll ? this.topThree : this.topThree.slice(0, 3);
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

  &__highlights {
    font-size: 1.5rem;
    background: var(--bg-gradient);
    padding: 0.5rem;
    margin: 1rem 0;
    border-radius: 5px;
  }

  &__toggle {
    cursor: pointer;
    color: var(--color-accent);
  }
}
</style>
