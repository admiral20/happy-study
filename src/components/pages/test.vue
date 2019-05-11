<template>
    <div>
        <children :address="address" :obj="obj"/>
    </div>
</template>
<script>
    import children from './testChild.vue'
    export default {
        data () {
            return {
                address: '北京',
                obj: {
                    name: "zhangsan",
                    age: 28,
                    height: 180,
                    weigth: 80,
                }
            }
        },
        components: {
            children,
        },
        mounted () {
            this.draw()
        },
        methods: {
            draw () {
                console.log(123456)
            },
        }
    }
</script>
