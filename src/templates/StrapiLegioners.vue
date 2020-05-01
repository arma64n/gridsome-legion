<template>
  <Layout>
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
