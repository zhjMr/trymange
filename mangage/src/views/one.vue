<template>
    <div>
        <ul>
            <li>
                <p>0</p>
                <p>今日支付订单</p>
            </li>
            <li>
                <p>0</p>
                <p>今日待发货</p>
            </li>
            <li>
                <p>0</p>
                <p>今日已发货订单</p>
            </li>
            <li>
                <p>0</p>
                <p>今日异常</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {

        };
    },
    methods: {

    }
}
</script>
<style scoped lang="scss">
ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    li {
        width: 49%;
        height: 120px;
        background-color: #00c0ef;
        margin-bottom: 20px;

    }
}
</style>