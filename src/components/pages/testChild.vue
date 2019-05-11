<template>
    <div>
        <h1>{{ address }}</h1>
        <ul>
            <li
                v-for="(item,index) in obj"
                :key="index"
            >
                {{ item }}
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        props: {
            address: {
                type: String,
                default: "",
            },
            obj: {
                type: Object,
                default: () => null
            }
        },
        watch: {
            address (val) {
                console.log(val, 'val')
            },
            obj (val) {
                console.log(val, 'obj')
            },
        }
    }
</script>
