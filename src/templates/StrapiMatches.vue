<template>
  <Layout>
    OK!
    <pre>{{ $page }}</pre>
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