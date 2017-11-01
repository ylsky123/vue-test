<template>
    <div class="page">
            <home-header/>
            {{msg}}
    </div>
</template>

<script>
    import Header from "./header";

    export default {
        data() {
                return {
                        msg: 'hello'
                }
        },
        components: {
                "home-header": Header
        }


    }
</script>

<style scoped>
    .page {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            min-height: 100%;
            background: #f5f5f5;
    }
</style>
