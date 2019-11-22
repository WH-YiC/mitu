<template>
	<div class="home">
		<header>
			<img class="phone" src="../assets/images/home-wy/phone.png"/>
			<img class="scan" src="../assets/images/home-wy/scan.png"/>
			<img class="information" src="../assets/images/home-wy/information.png"/>
		</header>
		<wy-banner :banner="home.banner"></wy-banner>
		<div class="logo-search">
			<div :class="searchFixed == true ? 'searchBarIsFixed' :''">
				<!--logo-->
				<span class="logo"></span>
				<a href="#/homeSelect" class="search">
					2020春节北非包机
				</a>
			</div>
		</div>

		<table class="menu-bar">
			<tr>
				<td rowspan="2" class="menu-one">
					<a class="celly" href="#">特惠精选</a>
				</td>
				<td class="menu-two">
					<a class="celly" href="#">跟团游</a>
				</td>
				<td class="menu-three">
					<a class="celly" href="#">定制旅行</a>
					<span>Hot</span>
				</td>
			</tr>
			<tr>
				<td class="menu-two">
					<a class="celly" href="#">自由行</a>
				</td>
				<td class="menu-two">
					<a class="celly" href="#">国内游</a>
				</td>
			</tr>
			<tr>
				<td rowspan="2" class="menu-four">
					<a class="celly" href="#">抢游惠</a>
					<span style="left: -16px">周三放价</span>
				</td>
				<td class="menu-five">
					<a class="celly" href="#">酒店+</a>
				</td>
				<td class="menu-five">
					<a class="celly" href="#">当地玩乐</a>
				</td>
			</tr>
			<tr>
				<td class="menu-five">
					<a class="celly" href="#">游学/摄影</a>
				</td>
				<td class="menu-five" style="border-radius: 0 0 0.05rem 0;">
					<a class="celly" href="#">阳光遨游</a>
					<span style="left: -10px">金融</span>
				</td>
			</tr>
		</table>
		<a class="text-slider" href="#/discover">
			<span class="newslogo"></span>
			<p class="news-box">旅行，是生活之“光”。</p>
		</a>

		<!--周三放价putPrice-->
		<div class="active">
			<div class="title">
				<h1>周三放价</h1>
				<p>您不容错过的抢游惠</p>
			</div>
			<home-put-price :putPrice="home.putPrice"></home-put-price>
		</div>

		<!--热门当地玩乐play-->
		<div class="active">
			<div class="title">
				<h1>热门当地玩乐</h1>
				<p>古北水镇/北京周边...</p>
			</div>
			<home-play :play="home.play"></home-play>
		</div>

		<!--热门目的地destination-->
		<div class="active">
			<div class="title">
				<h1>热门目的地</h1>
				<p>大家都想去才是真的好</p>
			</div>
			<home-destination></home-destination>
		</div>

		<!--旅行生活tripLife-->
		<div class="active-life">
			<div class="title" :class="tripLifeOffsetTop == true ? 'tripLifeIsFixed' :''">
				<h1>
					旅行 . 生活
					<span>换一换</span>
				</h1>
				<p>遨游四海，行乐千山</p>
			</div>
			<home-tripLife :tripLife="home.tripLife"></home-tripLife>
		</div>
		<!-- 旅游圈开始-->
		<xl-home-tourism :tourCircle="home.tourCircle"></xl-home-tourism>
		<!-- 错峰特惠开始-->
		<div class="xl_character_tab">
			<div :class="searchBarFixed == true ? 'isFixed' :''" >
				<div class="xl_tab-item" @click="flag=0" :class="{xl_tab_active:flag===0}"> 错峰特惠  </div>
				<div class="xl_tab-item" @click="flag=1" :class="{xl_tab_active:flag===1}"> 为你系列  </div>
				<div class="xl_tab-item" @click="flag=2" :class="{xl_tab_active:flag===2}"> 设计师说  </div>
				<div class="xl_tab-item" @click="flag=3" :class="{xl_tab_active:flag===3}"> 嗨玩周末  </div>
			</div>
		</div>

		<xl-home-character :flag="flag" :characterList="home.characterList"></xl-home-character>
		<!--footer开始-->
		<xl-home-footer></xl-home-footer>
	</div>
</template>

<script>
	import banner from '../components/home-wy/banner'
	import homePutPrice from  '../components/home-wy/home-putPrice'
	import homePlay from '../components/home-wy/home-play'
	import homeDestination from '../components/home-wy/home-destination'
	import homeTripLife from  '../components/home-wy/home-tripLife'
	import xlHomeTourism from '../components/xl-home/xl-home-tourism'
	import xlHomeCharacter from '../components/xl-home/home-character'
	import xlHomeFooter from '../components/xl-home/xl-home-footer'
	export default{
		name:"home",
		components:{
			wyBanner:banner,
			homePutPrice,
			homePlay,
			homeDestination,
			homeTripLife,
			"xl-home-tourism":xlHomeTourism,
			"xl-home-character":xlHomeCharacter,
			"xl-home-footer":xlHomeFooter
		},
		methods:{
			handleScroll () {
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				let searchOffsetTop = document.querySelector('.logo-search').offsetTop;
				let tripLifeOffsetTop = document.querySelector('.active-life').offsetTop;
				scrollTop > searchOffsetTop ? this.searchFixed = true : this.searchFixed = false;
				scrollTop > tripLifeOffsetTop && scrollTop < 2570 ? this.tripLifeOffsetTop = true : this.tripLifeOffsetTop = false;
				var offsetTop = document.querySelector('.xl_character_tab').offsetTop
				if(scrollTop > offsetTop) {
					this.searchBarFixed = true
				} else {
					this.searchBarFixed = false
				}
			}
		},
		mounted () {
			window.addEventListener('scroll', this.handleScroll)
		},
		destroyed () {
			window.removeEventListener('scroll', this.handleScroll)
		},
		data(){
			return{
				searchFixed:false,
				searchBarFixed:false,
				tripLifeOffsetTop:false,
				flag:0,
				//首页
				home:{
					//轮播图
					banner:['./images/home-wy/1.jpg','./images/home-wy/2.jpg','./images/home-wy/3.jpg','./images/home-wy/4.jpg','./images/home-wy/5.jpg','./images/home-wy/6.jpg','./images/home-wy/7.jpg','./images/home-wy/8.jpg'],
					//周三放价
					putPrice:{
						src:"./images/home-wy/putPrice-one.jpg",
						delprice:4699,
						price:3999,
						title:'【初遇关西】日本大阪一地6晚7天半自助【赠送大阪京都奈良经典一日游?超低起价】',
						tip:'大阪广场酒店或同级6晚  99元增订京都和服体验',
						productId:0,
						productList:[
							{
								savePrice:500,
								src:'./images/home-wy/putPrice-two.jpg',
								price:5799,
								delprice:6299,
								title:'越南富国岛5晚6-7日半自助游【5晚五星珍珠度假村/一价全含/野生动物园&珍珠游乐园畅玩/接送机/富国夜市）】',
								productId:1
							},
							{
								savePrice:1000,
								src:'./images/home-wy/putPrice-three.jpg',
								price:10999,
								delprice:11999,
								title:'【初次赴美优选】美国东西海岸印象11-12日游',
								productId:2
							},
							{
								savePrice:5000,
								src:'./images/home-wy/putPrice-four.jpg',
								price:27999,
								delprice:32999,
								title:'芬兰一地8日游【体验玻璃屋酒店/破冰船/赠挪威捕捞帝王蟹】',
								productId:3
							},
							{
								savePrice:600,
								src:'./images/home-wy/putPrice-five.jpg',
								price:13980,
								delprice:14580,
								title:'欧洲-【经典升级】德法意瑞一价全含12日游【雪朗峰/滴滴湖 /双游船/匹萨特色餐】',
								productId:4
							}
						]
					},
					//当地玩乐
					play:[
						{
							src:'./images/home-wy/play-one.jpg',
							title:'古北水镇门票',
							price:100,
							productId:5
						},
						{
							src:'./images/home-wy/play-two.jpg',
							title:'古北水镇一日游',
							price:278,
							productId:6
						},
						{
							src:'./images/home-wy/play-three.jpg',
							title:'古北水镇酒店',
							price:780,
							productId:7
						},
						{
							src:'./images/home-wy/play-four.jpg',
							title:'八达岭长城+八达岭长城',
							price:148,
							productId:8
						},
						{
							src:'./images/home-wy/play-five.jpg',
							title:'九华温泉酒店+',
							price:699,
							productId:8
						},
						{
							src:'./images/home-wy/play-six.jpg',
							title:'古北温泉酒店',
							price:1090,
							productId:9
						}
					],
					//旅行生活
					tripLife:[
						{
							tip:'风向标',
							title:'十二月去哪儿玩？',
							src:'./images/home-wy/tripLife-1.jpg',
							productList:[
								{
									pic:'./images/home-wy/tripLife-1-1.jpg',
									title:'日本北海道北国之恋6-7日游【札幌直飞全国联运/米其林夜景/浪漫小樽/朝日酒厂参观】',
									price:6280,
									productId:10
								},
								{
									pic:'./images/home-wy/tripLife-1-2.jpg',
									title:'【五星爆款】阿联酋迪拜5晚6天百变自由行【万豪侯爵酒店/早订享专车接送服务/ 免费班车至购物中心/A380体验】',
									price:7099,
									productId:11
								},
							]
						},
						{
							tip:'北非包机',
							title:'沉醉在一千零一夜',
							src:'./images/home-wy/tripLife-2.jpg',
							productList:[
								{
									pic:'./images/home-wy/tripLife-2-1.jpg',
									title:'【世界文化遗产】【春节北非包机】突尼斯8日游【五大世界文化遗产/蓝白小镇/撒哈拉沙漠】',
									price:14999,
									productId:14
								},
								{
									pic:'./images/home-wy/tripLife-2-2.jpg',
									title:'【世界文化遗产】【春节北非包机】阿尔及利亚突尼斯摩洛哥11日游【春节盛大包机/突尼斯蓝白小镇/五晚五星酒店/8大世界文化遗产】',
									price:21999,
									productId:15
								},
							]
						}
					],
					//旅友圈
					tourCircle:[
						{
							"src":"https://images1.aoyou.com/basedataoperation/201910/xt66xv30150654.jpg",
							"name":"Sharon",
							"sign":"喜欢探寻当地历史文化与地道生活之所在。",
							"common":" 新品尝鲜！往返国航直飞。解锁新加坡的“海上后花园”巴淡岛。这里是印尼仅次于巴厘岛的第二大旅游目的地拿起护照，说走就走，巴淡岛落地免签。3晚巴淡岛度假酒店+1晚新加坡，特别安排巴淡岛一整天自由活动，可体验芒果岛出海，也可自由DIY！",
							"pic":"http://images1.aoyou.com/productlist/201605/x4hv6h30112057.jpg?imageView2/1/w/285/h/158/q/90",
							"price":"2999",
							"title":"【新巴物语】新加坡+巴淡岛6-7日游",
							"details":"精选国航/小红书疯狂推荐蜜月海岛/1天自由活动/全程四星酒店/网红打卡哈之巷+滨海湾花园+双螺旋桥"
						},
						{
							"src":"https://images1.aoyou.com/basedataoperation/201910/xt66xv30150654.jpg",
							"name":"Sharon",
							"sign":"喜欢探寻当地历史文化与地道生活之所在。",
							"common":" 新品尝鲜！往返国航直飞。解锁新加坡的“海上后花园”巴淡岛。这里是印尼仅次于巴厘岛的第二大旅游目的地拿起护照，说走就走，巴淡岛落地免签。3晚巴淡岛度假酒店+1晚新加坡，特别安排巴淡岛一整天自由活动，可体验芒果岛出海，也可自由DIY！",
							"pic":"http://images1.aoyou.com/productlist/201605/x4hv6h30112057.jpg?imageView2/1/w/285/h/158/q/90",
							"price":"2999",
							"title":"【新巴物语】新加坡+巴淡岛6-7日游",
							"details":"精选国航/小红书疯狂推荐蜜月海岛/1天自由活动/全程四星酒店/网红打卡哈之巷+滨海湾花园+双螺旋桥"
						}
					],
					//错峰特惠开始
					characterList:
							[
								{
									"peak":[
										{
											"src":"http://images1.aoyou.com/productlist/201607/t0b80612144428.jpg?imageView2/1/w/335/h/180/q/90",
											"tip":"跟团游",
											"price":"9999",
											"title":"遨游保障|英国+爱尔兰乐享品质12日游【莫赫悬崖/巨人堤/黑暗树篱/爱尔兰农场做面包学舞打手鼓】",
											"details":"托莱多+毕加索故居马拉加+斗牛发源地龙达+马德里皇宫+葡式餐+拒签全退+自由活动",
											"tag":["4钻"],
											'color':" #FF5C5D"
										},
										{
											"src":"http://images1.aoyou.com/productlist/201607/t0b80612144428.jpg?imageView2/1/w/335/h/180/q/90",
											"tip":"跟团游",
											"price":"9999",
											"title":"遨游保障|英国+爱尔兰乐享品质12日游【莫赫悬崖/巨人堤/黑暗树篱/爱尔兰农场做面包学舞打手鼓】",
											"details":"托莱多+毕加索故居马拉加+斗牛发源地龙达+马德里皇宫+葡式餐+拒签全退+自由活动",
											"tag":[
												"4钻",
												"圣诞节",
												"元旦"
											],
											'color':" #FF5C5D"
										},
										{
											"src":"http://images1.aoyou.com/productlist/201607/t0b80612144428.jpg?imageView2/1/w/335/h/180/q/90",
											"tip":"自由行",
											"color":"#3FADFF",
											"price":"9999",
											"title":"遨游保障|英国+爱尔兰乐享品质12日游【莫赫悬崖/巨人堤/黑暗树篱/爱尔兰农场做面包学舞打手鼓】",
											"details":"托莱多+毕加索故居马拉加+斗牛发源地龙达+马德里皇宫+葡式餐+拒签全退+自由活动",
											"tag":["4钻"]
										},
										{
											"src":"http://images1.aoyou.com/productlist/201607/t0b80612144428.jpg?imageView2/1/w/335/h/180/q/90",
											"tip":"自由行",
											"color":"#3FADFF",
											"price":"9999",
											"title":"遨游保障|英国+爱尔兰乐享品质12日游【莫赫悬崖/巨人堤/黑暗树篱/爱尔兰农场做面包学舞打手鼓】",
											"details":"托莱多+毕加索故居马拉加+斗牛发源地龙达+马德里皇宫+葡式餐+拒签全退+自由活动",
											"tag":[
												"5钻",
												"春节"
											]
										}
									]
								},
								{
									"peak":[
										{
											"src":"http://images1.aoyou.com/productlist/201601/znx48621193934.jpg?imageView2/1/w/335/h/180/q/90",
											"tip":"跟团游",
											"price":"9999",
											"title":"遨游保障|英国+爱尔兰乐享品质12日游【莫赫悬崖/巨人堤/黑暗树篱/爱尔兰农场做面包学舞打手鼓】",
											"details":"托莱多+毕加索故居马拉加+斗牛发源地龙达+马德里皇宫+葡式餐+拒签全退+自由活动",
											"tag":["4钻"],
											'color':" #FF5C5D"
										},
										{
											"src":"http://images1.aoyou.com/productlist/201601/znx48621193934.jpg?imageView2/1/w/335/h/180/q/90",
											"tip":"跟团游",
											"price":"9999",
											"title":"遨游保障|英国+爱尔兰乐享品质12日游【莫赫悬崖/巨人堤/黑暗树篱/爱尔兰农场做面包学舞打手鼓】",
											"details":"托莱多+毕加索故居马拉加+斗牛发源地龙达+马德里皇宫+葡式餐+拒签全退+自由活动",
											"tag":["4钻"],
											'color':" #FF5C5D"
										},
										{
											"src":"http://images1.aoyou.com/productlist/201601/znx48621193934.jpg?imageView2/1/w/335/h/180/q/90",
											"tip":"跟团游",
											"price":"9999",
											"title":"遨游保障|英国+爱尔兰乐享品质12日游【莫赫悬崖/巨人堤/黑暗树篱/爱尔兰农场做面包学舞打手鼓】",
											"details":"托莱多+毕加索故居马拉加+斗牛发源地龙达+马德里皇宫+葡式餐+拒签全退+自由活动",
											"tag":["4钻"],
											'color':" #FF5C5D"
										}
									]
								},
								{
									"peak":[
										{
											"src":"http://images1.aoyou.com/productlist/201709/0z4bn807140602.jpg?imageView2/1/w/335/h/180/q/90",
											"tip":"跟团游",
											"price":"9999",
											"title":"遨游保障|英国+爱尔兰乐享品质12日游【莫赫悬崖/巨人堤/黑暗树篱/爱尔兰农场做面包学舞打手鼓】",
											"details":"托莱多+毕加索故居马拉加+斗牛发源地龙达+马德里皇宫+葡式餐+拒签全退+自由活动",
											"tag":["4钻"],
											'color':" #FF5C5D"
										},
										{
											"src":"http://images1.aoyou.com/productlist/201607/t0b80612144428.jpg?imageView2/1/w/335/h/180/q/90",
											"tip":"跟团游",
											"price":"9999",
											"title":"遨游保障|英国+爱尔兰乐享品质12日游【莫赫悬崖/巨人堤/黑暗树篱/爱尔兰农场做面包学舞打手鼓】",
											"details":"托莱多+毕加索故居马拉加+斗牛发源地龙达+马德里皇宫+葡式餐+拒签全退+自由活动",
											"tag":["4钻"],
											'color':" #FF5C5D"
										},
										{
											"src":"http://images1.aoyou.com/productlist/201607/t0b80612144428.jpg?imageView2/1/w/335/h/180/q/90",
											"tip":"半自助",
											"color":"#3FADFF",
											"price":"9999",
											"title":"遨游保障|英国+爱尔兰乐享品质12日游【莫赫悬崖/巨人堤/黑暗树篱/爱尔兰农场做面包学舞打手鼓】",
											"details":"托莱多+毕加索故居马拉加+斗牛发源地龙达+马德里皇宫+葡式餐+拒签全退+自由活动",
											"tag":["4钻"]
										}
									]
								},
								{
									"peak":[
										{
											"src":"http://images1.aoyou.com/productlist/201907/0z060202141434.jpg?imageView2/1/w/335/h/180/q/90",
											"tip":"跟团游",
											"price":"9999",
											"title":"遨游保障|英国+爱尔兰乐享品质12日游【莫赫悬崖/巨人堤/黑暗树篱/爱尔兰农场做面包学舞打手鼓】",
											"details":"托莱多+毕加索故居马拉加+斗牛发源地龙达+马德里皇宫+葡式餐+拒签全退+自由活动",
											"tag":["4钻"],
											'color':" #FF5C5D"
										},
										{
											"src":"http://images1.aoyou.com/productlist/201607/t0b80612144428.jpg?imageView2/1/w/335/h/180/q/90",
											"tip":"酒店",
											"price":"9999",
											"title":"遨游保障|英国+爱尔兰乐享品质12日游【莫赫悬崖/巨人堤/黑暗树篱/爱尔兰农场做面包学舞打手鼓】",
											"details":"托莱多+毕加索故居马拉加+斗牛发源地龙达+马德里皇宫+葡式餐+拒签全退+自由活动",
										},
										{
											"src":"http://images1.aoyou.com/productlist/201607/t0b80612144428.jpg?imageView2/1/w/335/h/180/q/90",
											"tip":"当地玩乐",
											"color":"#0BBE4A",
											"price":"9999",
											"title":"遨游保障|英国+爱尔兰乐享品质12日游【莫赫悬崖/巨人堤/黑暗树篱/爱尔兰农场做面包学舞打手鼓】",
											"details":"托莱多+毕加索故居马拉加+斗牛发源地龙达+马德里皇宫+葡式餐+拒签全退+自由活动",
										}
									]
								},
							]
				}
			}
		}
	}
</script>

<style scoped>
	@import "../assets/css/xl_home_css/xl_home_css.css";
	.home{
		width: 100%;
		margin-bottom: 0.5rem;
		overflow: hidden;
	}
	header{
		z-index: 9;
		width: 100%;
		position: absolute;
		padding: 0.1rem 0;
		background-image: linear-gradient(180deg,rgba(0,0,0,.3),transparent);
	}
	header img{
		width: 0.2rem;
		height: 0.2rem;
	}
	.scan{
		margin-left: 2.65rem;
		margin-right: 0.15rem;
	}
	.logo-search>div{
		width: 100%;
		display: flex;
		padding: 0.16rem 0;
	}
	.logo{
		margin-left: 0.2rem;
		margin-right: 0.08rem;
		width: 0.61rem;
		background: url("../assets/images/home-wy/logo.png") no-repeat;
		background-size: 100%;
	}
	.search{
		display: inline-block;
		width: 2.66rem;
		height: 0.3rem;
		line-height: 0.3rem;
		border: 1px solid #fc5a3f;
		border-radius: 0.26rem;
		font-size: 0.15rem;
		color: rgb(95,95,95);
		background-color: white;
		background-image: url("../assets/images/home-wy/search.png");
		background-repeat: no-repeat;
		background-size: 0.14rem;
		background-position: 0.5rem 0.07rem;
	}
	.menu-bar{
		margin: 0 0.2rem;
		font-size: 0.15rem;
		color: white;
		text-align: left;
	}
	.menu-bar td{
		position: relative;
	}
	.menu-bar a{
		display: inline-block;
		width: 1.11rem;
		line-height: 0.4rem;
		color: white;
		padding-left: 0.2rem;
		background-size: 100%;
		box-sizing: border-box;
	}
	.menu-bar span{
		transform: scale(0.6);
		line-height: 0.2rem;
		padding: 0 0.1rem;
		background-color: red;
		border-radius: 0 0.2rem 0.2rem 0;
		position: absolute;
		top: -4px;
		left: -8px;
	}
	.menu-one a,.menu-four a{
		height: 0.8rem;
	}
	.menu-two a,.menu-three a,.menu-five a{
		height: 0.4rem;
	}
	.menu-one{
		background-image: url("../assets/images/home-wy/menu-bar-1.png");
		border-radius: 0.05rem 0 0 0;
	}
	.menu-two{
		background-image: url("../assets/images/home-wy/menu-bar-2.png");
	}
	.menu-three{
		background-image: url("../assets/images/home-wy/menu-bar-3.png");
		border-radius: 0 0.05rem 0 0;
	}
	.menu-four{
		background-image: url("../assets/images/home-wy/menu-bar-4.png");
		border-radius: 0 0 0 0.05rem;
	}
	.menu-five{
		background-image: url("../assets/images/home-wy/menu-bar-5.png");
	}
	.text-slider{
		font-size: 0.14rem;
		line-height: 0.3rem;
		display: flex;
		padding: 0.08rem 0.2rem;
		border-bottom: 3px solid rgb(247,247,247);
	}
	.newslogo{
		display: block;
		width: 23%;
		height: 30px;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: 50%;
		background-image:url("../assets/images/home-wy/toutiao.png");
		margin-right: 0.1rem;
	}

	.active{
		padding: 0 0.2rem;
		border-bottom: 3px solid rgb(247,247,247);
	}
	.active>.title{
		padding: 0.17rem 0;
		background: url("../assets/images/home-wy/arrows.png") no-repeat;
		background-size: 10%;
		background-position: 100% 50%;
	}
	.active>.title>h1,.active-life>.title>h1{
		line-height: 0.26rem;
		font-size: 0.19rem;
		font-weight: initial;
		text-align: left;
		color: #333;
		position: relative;
	}
	.active>.title>p,.active-life>.title>p{
		font-size: 0.12rem;
		text-align: left;
		color: #999;
	}
	.active-life{
		border-bottom: 3px solid rgb(247,247,247);
	}
	.active-life>.title{
		width: 100%;
		padding: 0.17rem 0.2rem;
	}
	.active-life>.title>h1>span{
		font-size: 0.14rem;
		position: absolute;
		top: 0.1rem;
		left: 75%;
	}
	.searchBarIsFixed{
		position:fixed;
		background-color:#fc5a3f;
		top:0;
		z-index:999;
	}
	.tripLifeIsFixed{
		position:fixed;
		background-color:#Fff;
		top: 0.64rem;
		z-index:999;
	}
	.searchBarIsFixed>span{
		background: url("../assets/images/home-wy/logo.jpg") no-repeat;
		background-size: 100%;
	}
</style>
