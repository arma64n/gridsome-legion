<template>
  <Layout>
    <h1>Legioner</h1>
    <pre>{{ $page }}</pre>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  legioner: strapiLegioners(id: $id) {
    title
    matches {
      date
    }
  }
}
</page-query>
