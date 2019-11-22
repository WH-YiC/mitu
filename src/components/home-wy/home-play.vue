<template>
    <div class="play">
        <a class="play-productList" :key="index" v-for="(p,index) in play">
            <img :src="p.src"/>
            <p class="title">{{p.title}}</p>
            <p class="price"><span>￥ {{p.price}}</span> 起</p>
        </a>
    </div>
</template>

<script>
    export default {
        name: "home-play",
        props:["play"]
    }
</script>

<style scoped>
    .play{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        text-align: left;
    }
    .play-productList>img{
        width: 1.05rem;
        height: 0.85rem;
        border-radius: 0.08rem;
    }
    .play-productList>.title{
        width: 1.05rem;
        height: 0.3rem;
        line-height: 0.3rem;
        font-size: 0.14rem;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }
    .play-productList>.price{
        font-size: 0.14rem;
        color: rgb(237,122,89);
        margin-bottom: 0.15rem;
    }
    .play-productList>.price>span{
        font-size: 0.18rem;
    }
</style>