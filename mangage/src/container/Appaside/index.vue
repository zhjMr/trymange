<template>
  <div>
     <Appmenu :MenuList="MenuList"></Appmenu>
  </div>
</template>
<script>
import menua from "../../api/menu";
export default {
  name: "Appaside",
  components: {
    Appmenu: () => import('../../components/menu.vue')
  },
  data() {
    return {
      MenuList: [],
    };
  },
  methods: {
    async menuas() {
      try {
        let response = await menua.Menu();
        console.log(response, "response ");
        this.MenuList = response.data.data.menuList;
      } catch (e) {
        console.log(e);
      }
    },
  },
  created() {
    this.menuas();
  },
};
</script>
<style scoped lang="scss">

</style>
