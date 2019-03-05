<template>
  <div class="card widget">
    <div class="card-content">
      <div class="menu">
        <h3 class="menu-label">{{ title }}</h3>
        <ul class="menu-list">
          <li v-for="link in list" :key="link.name">
            <a
              class="level is-mobile"
              v-if="link.url"
              :href="link.url"
              target="_blank"
            >
              <span class="level-left">
                <span class="level-item">{{ link.name }}</span>
              </span>
              <span class="level-right">
                <span class="level-item tag">{{ link.tag }}</span>
              </span>
            </a>
            <router-link class="level is-mobile" v-else :to="link.to">
              <span class="level-left">
                <span class="level-item">{{ link.name }}</span>
              </span>
              <span class="level-right">
                <span class="level-item tag">{{ link.tag }}</span>
              </span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  border-radius: 4px;
}
</style>
