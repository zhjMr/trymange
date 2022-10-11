<template>
    <div>
        <ul>
            <li>
                <p>0</p>
                <div>今日支付订单</div>
            </li>
            <li>
                <p>0</p>
                <div>今日待发货</div>
            </li>
            <li>
                <p>0</p>
                <div>今日已发货订单</div>
            </li>
            <li>
                <p>0</p>
                <div class="div">今日异常</div>
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
    justify-content: space-evenly;
    :nth-child(4) {
        background-color: #dd4b39;
    }

    li {
        width: 48%;
        height: 120px;
        background-color: #00c0ef;
        margin-bottom: 20px;
        border-radius: 4px;

        p {
            width: 100%;
            height: 80%;
            display: flex;
            margin-left: 30px;
            align-items: center;
            font-size: 40px;
            color: #fff;
        }

        div {
            width: 100%;
            height: 20%;
            display: flex;
            align-items: center;
            color: #fff;
            background-color: #3399ff;
        }

        .div {
            background-color: #c64333;
        }
    }
}
</style>