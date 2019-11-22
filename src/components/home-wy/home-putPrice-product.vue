<template>
    <div class="productList">
        <a href="#" class="product" :key="index" v-for="(p,index) in productList">
            <span>立省{{p.savePrice}}</span>
            <img :src="p.src"/>
            <p class="price">￥{{p.price}} <del>￥{{p.delprice}}起</del></p>
            <p class="title">{{p.title}}</p>
        </a>

    </div>
</template>

<script>
    export default {
        name: "home-putPrice-product",
        props:["productList"]
    }
</script>

<style scoped>
    .productList{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0.3rem 0 0.1rem;
    }
    .product{
        width: 48.4%;
        padding-bottom: 0.15rem;
        position: relative;
    }
    .product>span{
        display: inline-block;
        width: 0.6rem;
        height: 0.2rem;
        color: white;
        background-color: #ff812f;
        border-radius: 0 0 0.05rem 0.05rem;
        position: absolute;
        left: 0.1rem;
    }
    .product>img{
        width: 100%;
        height: 1.09rem;
        border-radius: 0.06rem;
    }
    .price{
        height: 0.32rem;
        line-height: 0.32rem;
        font-size: 0.16rem;
        color: #fc5a3f;
        text-align: left;
    }
    .price>del{
        font-size: 0.14rem;
        color: #999;
    }
    .title{
        font-size: 0.14rem;
        text-align: left;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }
</style>