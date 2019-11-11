<template>
	<view class="warp">
		<view class="example-title">天干</view>
		<view class="example-body">
			<uni-grid :column="4" :show-border="true" :square="true" :hor="35" :ver="-45" @change="change">
				<uni-grid-item marker="dot">

					<text class="text" :sgindex="sgindex" :range="tg" range-key="name">{{tg[sgindex].name}}</text>
				</uni-grid-item>
				<uni-grid-item marker="badge" text="99" type="success">

					<text class="text" :value="rgindex" :range="tg" range-key="name">{{tg[rgindex].name}}</text>
				</uni-grid-item>
				<uni-grid-item marker="badge" type="error" text="热">

					<text class="text" :value="ygindex" :range="tg" range-key="name">{{tg[ygindex].name}}</text>
				</uni-grid-item>
				<uni-grid-item :hor="35" :ver="-45" :img-width="25" marker="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/recommend.png">

					<text class="text" :value="ngindex" :range="tg" range-key="name">{{tg[ngindex].name}}</text>
				</uni-grid-item>
			</uni-grid>
		</view>
		<view class="example-title">地支</view>
		<view class="example-body">
			<uni-grid :column="4" :show-border="true" :square="true" :hor="35" :ver="-45" @change="change">
				<uni-grid-item marker="dot">

					<text class="text" :value="szindex" :range="dz" range-key="name">{{dz[szindex].name}}</text>
				</uni-grid-item>
				<uni-grid-item marker="badge" text="99" type="success">

					<text class="text" :value="rzindex" :range="dz" range-key="name">{{dz[rzindex].name}}</text>
				</uni-grid-item>
				<uni-grid-item marker="badge" type="error" text="热">

					<text class="text" :value="yzindex" :range="dz" range-key="name">{{dz[yzindex].name}}</text>
				</uni-grid-item>
				<uni-grid-item :hor="35" :ver="-45" :img-width="25" marker="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/recommend.png">

					<text class="text" :value="nzindex" :range="dz" range-key="name">{{dz[nzindex].name}}</text>
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
				sgindex: '',
				rgindex: '',
				ygindex: '',
				ngindex: '',
				szindex: '',
				rzindex: '',
				yzindex: '',
				nzindex: '',
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
