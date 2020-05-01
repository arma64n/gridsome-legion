<template>
  <Layout>
    <pre>{{$page}}</pre>
  </Layout>
</template>

<page-query>
query ($id: ID!){
  city: strapiCities (id: $id) {
    title
    matches {
      date
      id
      opponent
      legioners 
    }
  }
}
</page-query>

<script>
export default {
  computed: {
    totalCount() {
      return this.$page.city.matches.reduce((sum, item) => {
        return sum + item.legioners.length;
      }, 0);
    }
  }
};
</script>