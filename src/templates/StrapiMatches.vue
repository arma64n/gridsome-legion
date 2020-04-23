<template>
  <Layout>
    <div>{{$page.match.date}}</div>
    <pre>{{ $page }}</pre>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  match: strapiMatches(id: $id) {
    date
  }
}
</page-query>