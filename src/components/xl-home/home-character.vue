<template>
    <div class="xl_character">
        <div class="xl_character_product">
            <a href="#/" class="character_product_item" v-for="(item,index) in characterList[flag].peak" :key="index">
                <div class="character-item-img">
                    <img :src="item.src" />
                    <div class="shade jian">
                        <div class="xl_product-tag">
                            <span class="tag tag-green" :style="`background-color:`+item.color">{{item.tip}}</span>
                        </div>
                    </div>
                    <div class="xl_product-price">
                        <span>¥{{item.price}}<b>起</b></span>
                    </div>
                </div>
                <div class="xl_item-infor">
                    <h3 class="xl_item-tit desc">{{item.title}}</h3>
                    <p class="xl_item-des">{{item.details}}</p>
                    <div class="tag-wrap" v-if="item.tag">
                        <p>
                            <span class="tag-green" v-for="(titem,tindex) in item.tag" :key="tindex">
                                {{titem}}
                            </span></p>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home-character",
        props:['flag',"characterList"]

    }
</script>

<style scoped>
    @import "../../assets/css/xl_home_css/xl_home_css.css";
</style>