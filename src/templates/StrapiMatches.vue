<template>
  <Layout>
    <div class="match__header">
      <opponent-logo :opponent="$page.match.opponent.title" class="match__opponent" />
      <div class="match__score">{{ $page.match.conceded }}-{{ $page.match.scored }}</div>
      <g-image :src="require(`!!assets-loader!@/assets/clubs/jenis.png`)" class="match__logo"></g-image>
    </div>
    <div
      class="match__info"
    >{{ $page.match.city.title}}, {{ new Date($page.match.date).toLocaleDateString() }}</div>
    <ol class="match__legioners">
      <li v-for="user in $page.match.legioners">{{user.title}}</li>
    </ol>
  </Layout>
</template>

<page-query>
query($id: ID!) {
  match: strapiMatches(id: $id) {
    date
    scored
    conceded
    images {
      url
    }
    opponent {
      title
    }
    city {
      title
    }
    legioners {
      title
    }
  }
}
</page-query>

<script>
import OpponentLogo from "@/components/OpponentLogo";

export default {
  components: {
    OpponentLogo
  }
};
</script>

<style lang="scss" scoped>
.match {
  &__opponent {
    margin-left: auto;
  }

  &__header {
    display: grid;
    grid-template-columns: 1fr 100px 1fr;
    align-items: center;
  }

  &__info {
    margin-top: 1rem;
    text-align: center;
    font-size: 14px;
  }

  &__score {
    font-size: 30px;
    text-align: center;
  }

  &__legioners {
    font-size: 16px;
  }

  &__logo {
    width: 6.2rem;
    height: 6.2rem;
    object-fit: contain;
  }
}
</style>