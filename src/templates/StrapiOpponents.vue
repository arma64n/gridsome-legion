<template>
  <Layout>
    <pre>{{ $page }}</pre>
  </Layout>
</template>

<page-query>
query ($id: ID!){
  opponent: strapiOpponents (id: $id) {
    title
    matches {
      date
      id
      city
      legioners 
    }
  }
}
</page-query>
