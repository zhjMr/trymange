<template>
    <el-tabs v-model="editableTabsValue" type="card" closable @tab-click="pathchange" @edit="handleTabsEdit"
        class="tabs-box">
        <el-tab-pane :key="item.name" v-for="(item, index) in editableTabs" :label="item.title" :name="item.name">
            {{item.content}}
        </el-tab-pane>
    </el-tabs>
</template>
<script>
export default {
    name: "menuTag",
    data() {
        return {

        }
    },
    computed: {
        editableTabsValue: {
            get() {
                return this.$store.getters.editableTabsValue;
            },
            set(val) {

            }
        },
        editableTabs: {
            get() {
                return this.$store.getters.editableTabs;
            },
            set(val) {
                this.$store.commit("Tags/seteditableTabs", val)
            }
        }
    },
    watch: {
        $route: {
            handler(newVal) {
                this.$store.commit("Tags/setTabsValue", newVal.name)
                let data = {
                    title: newVal.meta.title,
                    name: newVal.name
                }
                let a = this.editableTabs.findIndex(item => item.name == newVal.name)
                if (a == -1) {
                    this.$store.commit('Tags/newTitle', data)
                }

            },
            immediate: true,
            deep: true
        }

    },
    methods: {
        pathchange(val) {
            this.$router.push({ name: val.name })

        },

        handleTabsEdit(targetName, action) {
            console.log(targetName);
            if (targetName == 'one') return
            if (action === 'remove') {
                let tabs = this.editableTabs;
                let activeName = this.editableTabsValue;
                if (activeName === targetName) {
                    tabs.forEach((tab, index) => {
                        if (tab.name === targetName) {
                            let nextTab = tabs[index + 1] || tabs[index - 1];
                            if (nextTab) {
                                activeName = nextTab.name;
                            }
                        }
                    });
                }

                this.editableTabsValue = activeName;
                this.editableTabs = tabs.filter(tab => tab.name !== targetName);

                this.$store.commit("Tags/setTabsValue", activeName)
                this.$router.push({ name: activeName })
            }
        }
    }
}
</script>
<style scoped lang="scss">
.tabs-box {
    width: 100%;
}
</style>