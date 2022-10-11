import Vue from 'vue'
import store from '../store'
Vue.directive("button", {
    bind(el, binding) {
        let value = binding.value
        let a = store.getters.authList

        if (!a.includes(value)) {
            el.style.dispaly = "none"
            setTimeout(() => {
                el.parentNode.removeChild(el)
            }, 0)

        }

    }
})