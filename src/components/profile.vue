<template>
  <div class="card widget">
    <div class="card-content">
      <nav class="level">
        <div class="level-item has-text-centered">
          <div>
            <figure class="image container is-128x128 has-mb-6">
              <img
                class="is-rounded"
                :src="author.avatar_url"
                :alt="author.login"
              />
            </figure>
            <p class="is-size-4 is-block">{{ author.login }}</p>
            <p class="is-size-6 is-block">{{ author.bio }}</p>
            <p class="is-size-6 is-flex is-flex-center has-text-grey">
              <i class="fas fa-map-marker-alt has-mr-7"></i>
              <span>{{ author.location }}</span>
            </p>
          </div>
        </div>
      </nav>
      <nav class="level is-mobile">
        <div
          class="level-item has-text-centered is-marginless"
          v-for="item in author.infos"
          :key="item.title"
        >
          <div>
            <p class="heading">{{ item.title }}</p>
            <p class="title has-text-weight-normal">{{ item.count }}</p>
          </div>
        </div>
      </nav>
      <div class="level">
        <a
          class="level-item button is-link is-rounded"
          href="https://github.com/JZLeung"
        >
          Follow</a
        >
      </div>
      <div class="level is-mobile">
        <a
          class="level-item button is-white is-marginless"
          target="_blank"
          v-for="(item, index) in author.icons"
          :key="index"
          :title="item.name"
          :href="item.url"
        >
          <i :class="['fab', 'fa-' + item.icon]"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// import Card from "./Card";
// import { getAuthorInfo } from "../api/user";

export default {
  props: {
    author: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
