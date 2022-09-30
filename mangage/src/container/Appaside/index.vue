<template>
  <div>
    <el-col>
      <el-menu
        v-for="(item, index) in MenuList"
        :key="index"
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#fff"
        text-color="#000"
        active-text-color="#21a3f1"
      >
        <el-submenu index="1">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{ item.label }}</span>
          </template>
          <el-menu-item-group
            v-for="(ele, index) in item.children"
            :key="index"
          >
            <el-menu-item index="1-1">
              <i :class="ele.icon"></i>{{ ele.label }}</el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </div>
</template>
<script>
import menua from "../../api/menu";
export default {
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
<style scoped lang="scss"></style>
