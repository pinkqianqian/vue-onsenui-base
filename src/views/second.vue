<template>
    <div class="wrap">
        <div class="formBox">
            <div class="itemBox">
                <span class="item-text">邀请码</span>
                <input class="item-input" type="text" v-model="code">
            </div>
            <div class="itemBox">
                <span class="item-text">姓名</span>
                <input class="item-input" type="text" v-model="name">
            </div>
            <div class="itemBox">
                <span class="item-text">电话</span>
                <input class="item-input" type="number" v-model="phone">
            </div>
            <div class="itemBox">
                <span class="item-text">门店</span>
                <input class="item-input" type="text" v-model="store">
            </div>
            <div class="itemBox">
                <span class="item-text">机型</span>
                <input class="item-input" type="text" v-model="model">
            </div>
            <div class="itemBox">
                <div class="item-button" @click="check">验证</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            code: '',
            name: '',
            phone: '',
            store: '',
            model: ''
        }
    },
    computed: {
        startCheck(){
            return this.code && this.name && this.phone && this.store && this.model
        }
    },
    methods: {
        check(){
            // console.log(this.startCheck, 'startCheck')
            // if(!this.startCheck) return
            // this.$loading.show()
            this.$apis['codeCheck/codeCheck']({
                code: this.code,
                name: this.name,
                phone: this.phone,
                store: this.store,
                model: this.model,
            }).then((res) => {
                // this.$loading.hide()
                console.log(res)
            })
        }
    }
}
</script>
