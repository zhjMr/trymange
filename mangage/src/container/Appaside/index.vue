<template>
  <div>
    <Appmenu :MenuList="MenuList"></Appmenu>
  </div>
</template>
<script>

export default {
  name: "Appaside",
  components: {
    Appmenu: () => import('../../components/menu.vue')
  },
  data() {
    return {
      // MenuList: [],
    };
  },
  computed:{
    MenuList(){
      return this.$store.getters.menuList
    }

  },
  methods: {
  
  },
  created() {

  },
};
</script>
<style scoped lang="scss">

</style>
