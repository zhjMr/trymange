<template>
  <div>
    <div class="tap">
      <menuicon></menuicon>
      <menuTag></menuTag>
    </div>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    menuicon: () => import('../../components/menuicon.vue'),
    menuTag: () => import('../../components/menuTag.vue')
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped lang="scss">
.tap {
  display: flex;
}
</style>
