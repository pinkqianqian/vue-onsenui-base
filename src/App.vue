<template>
    <div>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { LOGIN_CODE } from 'Config';


export default {
    methods: {
        ...mapActions(['getUserInfo']),
        bindEvent() {
            GLOBAL.vbus.$on('ajax_handle_error', (resData) => {
                if(!!resData.config.noShowDefaultError) return
                if (resData.data.resCode === LOGIN_CODE) {
                    this.$store.commit('SET_TO_LOGIN_PATH', this.$route.path)
                    this.$store.commit('SET_TO_LOGIN', true)
                    return
                }

            })
            GLOBAL.vbus.$on('request_error', (resData) => {
            })
            GLOBAL.vbus.$on('response_error', (resData) => {
            })
            GLOBAL.vbus.$on('scrollToTop', (resData) => {
            })
        },
        init() {
            this.getUserInfo()

        }
    },
    created() {
        this.init()
        this.bindEvent()
    }
}
</script>
<style>
@import './assets/style/index.scss';
</style>

