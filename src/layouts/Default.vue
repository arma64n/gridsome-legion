<template>
  <div>
    <g-link to="/"> <h6>Back to Main</h6></g-link>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.content {
  padding: 1.4rem;
}
</style>
