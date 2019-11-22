<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div :key="index" class="swiper-slide" v-for="(b,index) in banner"><img :src="b"/></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <span class="ad"></span>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    export default {
        name: "banner",
        props:["banner"],
        data () {
            return {
                // banner:['./images/home-wy/1.jpg','./images/home-wy/2.jpg','./images/home-wy/3.jpg','./images/home-wy/4.jpg','./images/home-wy/5.jpg','./images/home-wy/6.jpg','./images/home-wy/7.jpg','./images/home-wy/8.jpg']
            }
        },
        mounted() {
            new Swiper ('.swiper-container', {
                loop: true,
                autoplay:true,
                observer:true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,//修改swiper的父元素时，自动初始化swiper
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination'
                }
            })
        }
    }
</script>

<style scoped>
    .swiper-container {
        width: 100%;
        height: 1.8rem;
        margin: 0 auto;
        position: relative;
    }
    .swiper-pagination{
        font-size: 0.12rem;
    }
    .swiper-container img{
        width: 100%;
        height: 100%;
    }
    .ad{
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 9;
        width: 0.2rem;
        height: 0.1rem;
        background-size: contain;
        background-image: url("../../assets/images/home-wy/ad.png");
    }
</style>