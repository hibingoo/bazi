<template>
	<view class="warp">
		<view class="example-body">
			<uni-grid :column="5" :show-border="true" :square="true" :hor="35" :ver="-45" @change="change">
				<uni-grid-item>

					<text class="text">时间</text>
				</uni-grid-item>
				<uni-grid-item>

					<text class="text">时柱</text>
				</uni-grid-item>
				<uni-grid-item>

					<text class="text">日柱</text>
				</uni-grid-item>
				<uni-grid-item>

					<text class="text">月柱</text>
				</uni-grid-item>
				<uni-grid-item>

					<text class="text">年柱</text>
				</uni-grid-item>

			</uni-grid>
		</view>
		<view class="example-body">
			<uni-grid :column="5" :show-border="true" :square="true" :hor="35" :ver="-45" @change="change">
				<uni-grid-item>

					<text class="text">十神</text>
				</uni-grid-item>
				<uni-grid-item>

					<text class="text">{{ss[sssindex].name}}</text>
				</uni-grid-item>
				<uni-grid-item>

					<text class="text">日元</text>
				</uni-grid-item>
				<uni-grid-item>

					<text class="text">{{ss[yssindex].name}}</text>
				</uni-grid-item>
				<uni-grid-item>

					<text class="text">{{ss[nssindex].name}}</text>
				</uni-grid-item>

			</uni-grid>
		</view>

		<view class="example-body">
			<uni-grid :column="5" :show-border="true" :square="true" :hor="35" :ver="-45" @change="change">
				<uni-grid-item>

					<text class="text">天干</text>
				</uni-grid-item>
				<uni-grid-item marker="dot">

					<text class="text" :sgindex="sgindex" :range="tg" range-key="name">{{tg[sgindex].name}}{{sgindex}}</text>
				</uni-grid-item>
				<uni-grid-item marker="badge" text="99" type="success">

					<text class="text" :value="rgindex" :range="tg" range-key="name">{{tg[rgindex].name}}{{rgindex}}</text>
				</uni-grid-item>
				<uni-grid-item marker="badge" type="error" text="热">

					<text class="text" :value="ygindex" :range="tg" range-key="name">{{tg[ygindex].name}}{{ygindex}}</text>
				</uni-grid-item>
				<uni-grid-item :hor="35" :ver="-45" :img-width="25" marker="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/recommend.png">

					<text class="text" :value="ngindex" :range="tg" range-key="name">{{tg[ngindex].name}}{{ngindex}}</text>
				</uni-grid-item>
			</uni-grid>
		</view>
		<view class="example-body">
			<uni-grid :column="5" :show-border="true" :square="true" :hor="35" :ver="-45" @change="change">
				<uni-grid-item>

					<text class="text">地支</text>
				</uni-grid-item>
				<uni-grid-item marker="dot">

					<text class="text" :value="szindex" :range="dz" range-key="name">{{dz[szindex].name}}{{szindex}}</text>
				</uni-grid-item>
				<uni-grid-item marker="badge" text="99" type="success">

					<text class="text" :value="rzindex" :range="dz" range-key="name">{{dz[rzindex].name}}{{rzindex}}</text>
				</uni-grid-item>
				<uni-grid-item marker="badge" type="error" text="热">

					<text class="text" :value="yzindex" :range="dz" range-key="name">{{dz[yzindex].name}}{{yzindex}}</text>
				</uni-grid-item>
				<uni-grid-item :hor="35" :ver="-45" :img-width="25" marker="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/recommend.png">

					<text class="text" :value="nzindex" :range="dz" range-key="name">{{dz[nzindex].name}}{{nzindex}}</text>
				</uni-grid-item>
			</uni-grid>
		</view>
		<view class="example-body">
			<uni-grid :column="5" :show-border="true" :square="true" :hor="35" :ver="-45" @change="change">
				<uni-grid-item>

					<text class="text">藏干</text>
				</uni-grid-item>
				<uni-grid-item>

					<text class="text"></text>
				</uni-grid-item>
				<uni-grid-item>

					<text class="text"></text>
				</uni-grid-item>
				<uni-grid-item>

					<text class="text"></text>
				</uni-grid-item>
				<uni-grid-item>

					<text class="text"></text>
				</uni-grid-item>

			</uni-grid>
		</view>
		<view class="example-body">
			<uni-grid :column="5" :show-border="true" :square="true" :hor="35" :ver="-45" @change="change">
				<uni-grid-item>

					<text class="text">副星</text>
				</uni-grid-item>
				<uni-grid-item>

					<text class="text"></text>
				</uni-grid-item>
				<uni-grid-item>

					<text class="text"></text>
				</uni-grid-item>
				<uni-grid-item>

					<text class="text"></text>
				</uni-grid-item>
				<uni-grid-item>

					<text class="text"></text>
				</uni-grid-item>

			</uni-grid>
		</view>
		<view class="example-body">
			<uni-grid :column="5" :show-border="true" :square="true" :hor="35" :ver="-45" @change="change">
				<uni-grid-item>
					<text class="text">纳音</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text"></text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text"></text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text"></text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text"></text>
				</uni-grid-item>
			</uni-grid>
		</view>
		<view class="example-body">
			<uni-grid :column="5" :show-border="true" :square="true" :hor="35" :ver="-45" @change="change">
				<uni-grid-item>
					<text class="text">星运</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text"></text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text"></text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text"></text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text"></text>
				</uni-grid-item>
			</uni-grid>
		</view>
		<view class="example-body">
			<uni-grid :column="5" :show-border="true" :square="true" :hor="35" :ver="-45" @change="change">
				<uni-grid-item>
					<text class="text">自坐</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text"></text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text"></text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text"></text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text"></text>
				</uni-grid-item>
			</uni-grid>
		</view>
		<view class="example-body">
			<uni-grid :column="5" :show-border="true" :square="true" :hor="35" :ver="-45" @change="change">
				<uni-grid-item>
					<text class="text">空亡</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text"></text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text"></text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text"></text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text"></text>
				</uni-grid-item>
			</uni-grid>
		</view>
		<view class="example-body">
			<uni-grid :column="5" :show-border="true" :square="true" :hor="35" :ver="-45" @change="change">
				<uni-grid-item>
					<text class="text">神煞</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text"></text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text"></text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text"></text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text"></text>
				</uni-grid-item>
			</uni-grid>
		</view>
	</view>
</template>

<script>
	import uniGrid from '@/components/uni-grid/uni-grid.vue'
	import uniGridItem from '@/components/uni-grid-item/uni-grid-item.vue'
	export default {
		components: {
			uniGrid,
			uniGridItem
		},
		data() {
			return {
				list: '',
				tg: [{
						name: '甲'
					},
					{
						name: '乙'
					},
					{
						name: '丙'
					},
					{
						name: '丁'
					},
					{
						name: '戊'
					},
					{
						name: '己'
					},
					{
						name: '庚'
					},
					{
						name: '辛'
					},
					{
						name: '壬'
					},
					{
						name: '癸'
					},
				],
				dz: [{
						name: '子'
					},
					{
						name: '丑'
					},
					{
						name: '寅'
					},
					{
						name: '卯'
					},
					{
						name: '辰'
					},
					{
						name: '巳'
					},
					{
						name: '午'
					},
					{
						name: '未'
					},
					{
						name: '申'
					},
					{
						name: '酉'
					},
					{
						name: '戌'
					},
					{
						name: '亥'
					},
				],
				ss: [{
						name: '正印0'
					},
					{
						name: '偏印1'
					},
					{
						name: '正官2'
					},
					{
						name: '七杀3'
					},
					{
						name: '正财4'
					},
					{
						name: '偏财5'
					},
					{
						name: '劫财6'
					},
					{
						name: '比肩7'
					},
					{
						name: '伤官8'
					},
					{
						name: '食神9'
					}
				],
				sgindex: '',
				rgindex: '',
				ygindex: '',
				ngindex: '',
				szindex: '',
				rzindex: '',
				yzindex: '',
				nzindex: '',
				nssindex:'',
				yssindex:'',
				sssindex:'',
			}
		},

		onLoad() {

			uni.getStorage({
				key: 'paipan_key',
				success: data => {
					//console.log(data);
					this.list = data.data.data
					this.sgindex = data.data.data.tg[3]
					this.rgindex = data.data.data.tg[2]
					this.ygindex = data.data.data.tg[1]
					this.ngindex = data.data.data.tg[0]
					
					this.szindex = data.data.data.dz[3]
					this.rzindex = data.data.data.dz[2]
					this.yzindex = data.data.data.dz[1]
					this.nzindex = data.data.data.dz[0]
				},
			});
			//先判断日干是什么，然后判断日干和年干的关系
		
			if (this.rgindex==0) {
				//日干0为甲，年干和日干的关系
				if(this.ngindex==0){
					this.nssindex=7
					console.log('比肩7');
				}else if(this.ngindex==1){
					this.nssindex=6
				console.log('劫财6');}
				else if(this.ngindex==2){
					this.nssindex=8
				console.log('伤官8');}
				else if(this.ngindex==3){
					this.nssindex=9
				console.log('食神9');}
				else if(this.ngindex==4){
					this.nssindex=5
				console.log('偏财5');}
				else if(this.ngindex==5){
					this.nssindex=4
				console.log('正财4');}
				else if(this.ngindex==6){
					this.nssindex=3
				console.log('七杀3');}
				else if(this.ngindex==7){
					this.nssindex=1
				console.log('正官2');}
				else if(this.ngindex==8){
					this.nssindex=1
				console.log('偏印1');}
				else if(this.ngindex==9){
					this.nssindex=0
				console.log('正印0');}
				
			} 
			if(this.rgindex==9) {
				//日干9为癸，年干和日干的关系
				if(this.ngindex==0){
					this.nssindex=8
					console.log('伤官8');
				}else if(this.ngindex==1){
					this.nssindex=9
				console.log('食神9');}
				else if(this.ngindex==2){
					this.nssindex=4
				console.log('正财4');}
				else if(this.ngindex==3){
					this.nssindex=5
				console.log('偏财5');}
				else if(this.ngindex==4){
					this.nssindex=2
				console.log('正官2');}
				else if(this.ngindex==5){
					this.nssindex=3
				console.log('七杀3');}
				else if(this.ngindex==6){
					this.nssindex=0
				console.log('正印0');}
				else if(this.ngindex==7){
					this.nssindex=1
				console.log('偏印1');}
				else if(this.ngindex==8){
					this.nssindex=6
				console.log('劫财6');}
				else if(this.ngindex==9){
					this.nssindex=7
				console.log('比肩7');}
				
			}
			if(this.rgindex==9) {
				//日干9为癸，月干和日干的关系
				if(this.ygindex==0){
					this.yssindex=8
					console.log('伤官8');
				}else if(this.ygindex==1){
					this.yssindex=9
				console.log('食神9');}
				else if(this.ygindex==2){
					this.yssindex=4
				console.log('正财4');}
				else if(this.ygindex==3){
					this.yssindex=5
				console.log('偏财5');}
				else if(this.ygindex==4){
					this.yssindex=2
				console.log('正官2');}
				else if(this.ygindex==5){
					this.yssindex=3
				console.log('七杀3');}
				else if(this.ygindex==6){
					this.yssindex=0
				console.log('正印0');}
				else if(this.ygindex==7){
					this.yssindex=1
				console.log('偏印1');}
				else if(this.ygindex==8){
					this.yssindex=6
				console.log('劫财6');}
				else if(this.ygindex==9){
					this.yssindex=7
				console.log('比肩7');}
			}
			if(this.rgindex==9) {
				//日干9为癸，月干和日干的关系
				if(this.sgindex==0){
					this.sssindex=8
					console.log('伤官8');
				}else if(this.sgindex==1){
					this.sssindex=9
				console.log('食神9');}
				else if(this.sgindex==2){
					this.sssindex=4
				console.log('正财4');}
				else if(this.sgindex==3){
					this.sssindex=5
				console.log('偏财5');}
				else if(this.sgindex==4){
					this.sssindex=2
				console.log('正官2');}
				else if(this.sgindex==5){
					this.sssindex=3
				console.log('七杀3');}
				else if(this.sgindex==6){
					this.sssindex=0
				console.log('正印0');}
				else if(this.sgindex==7){
					this.sssindex=1
				console.log('偏印1');}
				else if(this.sgindex==8){
					this.sssindex=6
				console.log('劫财6');}
				else if(this.sgindex==9){
					this.sssindex=7
				console.log('比肩7');}
				
			}
			else{
				
			}
		},
		methods: {
			change(e) {
				let {
					index
				} = e.detail
				console.log(index)
			}
		}
	}
</script>

<style>

</style>
