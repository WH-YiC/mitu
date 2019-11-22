<template>
    <div class="home-destination">
        <a href="#"><img src="../../assets/images/home-wy/hotred.png"/>西安</a>
        <a href="#"><img src="../../assets/images/home-wy/hotyellow.png"/>三亚</a>
        <a href="#"><img src="../../assets/images/home-wy/hotblue.png"/>丽江</a>
        <a href="#">成都</a>
        <a href="#">鼓浪屿</a>
        <a href="#">珠海</a>
        <a href="#">桂林</a>
        <a href="#">南宁</a>
        <a href="#">武汉</a>
        <a href="#">哈尔滨</a>
        <a href="#">长沙</a>
        <a href="#">张家界</a>
    </div>
</template>

<script>
    export default {
        name: "home-destination"
    }
</script>

<style scoped>
    .home-destination{
        display: flex;
        flex-wrap: wrap;
        font-size: 0.14rem;
    }
    .home-destination>a{
        width: 25%;
        padding: 0.15rem 0;
        position: relative;
    }
    .home-destination>a>img{
        width: 0.18rem;
        position: absolute;
        top: 0.15rem;
        left: 0;
    }
</style>