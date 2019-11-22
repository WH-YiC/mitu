<template>
    <div class="productList">
        <a href="#" class="product" :key="index" v-for="(p,index) in productList">
            <img :src="p.pic" />
            <div>
                <div>{{p.title}}</div>
                <p><span>￥{{p.price}}</span>起</p>
            </div>
        </a>
    </div>
</template>

<script>
    export default {
        name: "home-tripLife-productList",
        props:["productList"]
    }
</script>

<style scoped>
    .productList{
        padding: 0.15rem 0.2rem;
    }
    .product{
        padding-bottom: 0.15rem;
        display: flex;
        text-align: left;
    }
    .product>div{
        margin-left: 0.1rem;
    }
    .product>div>div{
        font-size: 0.14rem;
        padding-top: 0.01rem;
        margin-bottom: 0.1rem;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }
    .product>div>p{
        font-size: 0.12rem;
        color: #fc5a3f;
    }
    .product>div>p>span{
        font-size: 0.19rem;
    }
</style>