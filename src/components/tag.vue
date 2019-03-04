<template>
  <div class="card widget">
    <div class="card-content">
      <div class="menu">
        <h3 class="menu-label">TAGS</h3>
        <div class="field is-grouped is-grouped-multiline">
          <div class="control" v-for="tag in tags" :key="tag.name">
            <a class="tags has-addons" href="javascript:;">
              <span class="tag" :style="{ color: tag.color }">{{
                tag.name
              }}</span>
              <span class="tag is-grey">{{ tag.count }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => []
    }
  }
}
</script>
