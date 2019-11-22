<template>
    <div class="putPrice">
        <div class="putPrice-title">
            <van-count-down class="countdown" :time="time" format="DD 天 HH 时 mm 分 ss 秒">
                <template v-slot="timeData">
                    <span class="orgin">距离结束</span>
                    <span class="item">{{ timeData.days }}</span>天
                    <span class="item">{{ timeData.hours }}</span>:
                    <span class="item">{{ timeData.minutes }}</span>:
                    <span class="item" style="color: rgb(227,121,74);">{{ timeData.seconds }}</span>
                </template>
            </van-count-down>
            <img :src="putPrice.src"/>
            <div class="price">
                <del>原价￥{{putPrice.delprice}}</del>
                <h3>￥{{putPrice.price}}起</h3>
            </div>
            <h1>{{putPrice.title}}</h1>
            <p>{{putPrice.tip}}</p>
        </div>
        <div class="putPrice-product">
            <home-putPrice-product :productList="putPrice.productList"></home-putPrice-product>
        </div>
    </div>
</template>

<script>
    import { CountDown } from 'vant';
    import homePutPriceProduct from './home-putPrice-product'
    export default {
        name: "home-putPrice",
        components:{
            [CountDown.name]:CountDown,
            homePutPriceProduct
        },
        props:["putPrice"],
        data() {
            return {
                time: 30 * 60 * 60 * 1000
            };
        }
    }
</script>

<style scoped>
    .putPrice{
        font-size: 0.12rem;
        position: relative;
    }
    .countdown{
        height: 0.25rem;
        line-height: 0.25rem;
        background-color: rgb(243,249,252);
        border-radius: 0 0.2rem 0.2rem 0;
        position: absolute;
        top: 0.09rem;
    }
    .item {
        display: inline-block;
        width: 0.18rem;
        height: 0.2rem;
        line-height: 0.21rem;
        margin-right: 5px;
        text-align: center;
    }
    .orgin{
        color: rgb(227,121,74);
        font-size: 0.16rem;
        font-weight: 600;
        margin: 0 0.1rem;
    }
    .putPrice-title>img{
        width: 100%;
        height: 1.55rem;
        border-radius: 0.08rem;
    }
    .price{
        width: 0.92rem;
        height: 0.35rem;
        background-color: rgb(239,119,97);
        position: absolute;
        top: 1.1rem;
        right: 0.1rem;
        border-radius: 0.2rem;
    }
    .price>del{
        color: rgb(246,199,190);
    }
    .price>h3{
        color: rgb(254,254,254);
        font-size: 0.14rem;
        font-weight: lighter;
    }
    .putPrice-title>h1{
        padding: 0.1rem 0;
        font-size: 0.17rem;
        font-weight: 500;
        text-align: left;
    }
    .putPrice-title>p{
        text-align: left;
        color: rgb(192,192,192);
    }
</style>