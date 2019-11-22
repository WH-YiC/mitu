<template>
    <div class="tripLife">
        <div class="tripLife-div" :key="index" v-for="(t,index) in tripLife">
            <a href="#">
                <img :src="t.src" />
                <div>
                    <p class="tip">{{t.tip}}</p>
                    <h2 class="title">{{t.title}}</h2>
                </div>
            </a>
            <home-tripLife-productList :productList="t.productList"></home-tripLife-productList>
        </div>
    </div>
</template>

<script>
    import homeTripLifeProductList from './homee-tripLife-productList'
    export default {
        name: "home-tripLife",
        props:["tripLife"],
        components:{
            homeTripLifeProductList
        }
    }
</script>

<style scoped>
    .tripLife-div>a{
        position: relative;
    }
    .tripLife-div>a>div{
        width: 3.75rem;
        position: absolute;
        left: 0.2rem;
        bottom: 0.2rem;
    }
    .tripLife-div>a>div>p{
        width: 0.7rem;
        height: 0.2rem;
        line-height: 0.2rem;
        font-size: 0.14rem;
        background-color: #fff;
        border-radius: 0.05rem;
    }
    .tripLife-div>a>div>h2{
        font-size: 0.19rem;
        color: #fff;
        font-weight: 400;
        text-align: left;
    }
</style>