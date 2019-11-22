<template>
    <div class="xl_tourism">
        <div class="tourism_title">
           <div class="xl_tour_con">
               <p> 旅友圈  </p>
               <span class="xl-label-desc">跟随遨游产品设计师，在陌生的地方发现一种久违的感动</span>
           </div>
        </div>
        <ul class="xl_tourism_list">
            <li class="tourism_list_item" v-for="(item,index) in tourCircle" :key="index">
                <a href="#/">
                    <div class="traveler-img">
                        <img :src="item.src">
                    </div>
                    <div class="tourism_content" :class="index === 1 ?'xl_active':''">
                        <div class="traveler-infor">
                            <p>{{item.name}}</p>
                            <div class="xl-label-desc">
                                <span class="travel-tag">
                                    {{item.sign}}
                                </span>
                            </div>
                        </div>
                        <div class="xl_product_item">
                            <p class="xl_product_recommend">
                                {{item.common}}
                            </p>
                            <div class="xl_item-img">
                                <img :src="item.pic" >
                                <div class="xl_product-price">
                                    <span>¥{{item.price}}<b>起</b></span>
                                </div>
                            </div>
                            <div class="xl_item-infor">
                                <h3 class="xl_item-tit">{{item.title}}</h3>
                                <p class="xl_item-des">{{item.details}}</p>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "xl-home-tourism",
        props:["tourCircle"]
    }
</script>

<style scoped>
    @import "../../assets/css/xl_home_css/xl_home_css.css";
</style>