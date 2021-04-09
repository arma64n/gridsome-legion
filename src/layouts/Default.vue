<template>
  <div>
    <div class="header">
      <g-link to="/" class="header__link">На главную</g-link>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.header {
  position: sticky;
  top: 0;
  width: 100%;
  background: var(--bg-main);
  padding: 0 1.6rem;
  box-sizing: border-box;
  border-radius: 0px 0px 12px 12px;
  height: 40px;
  border-bottom: 1px solid var(--bg-block);
  font-size: 20px;
  z-index: 1;
  display: flex;
  align-items: center;

  &__link {
    color: white;
  }
}

.content {
  padding: 1.4rem;
}
</style>
