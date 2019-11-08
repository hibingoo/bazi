<template>
	<view class="warp">
		<view class="example-title">天干</view>
		<view class="example-body">
			<uni-grid :column="4" :show-border="true" :square="true" :hor="35" :ver="-45" @change="change">
				<uni-grid-item marker="dot">

					<text class="text">新浪</text>
				</uni-grid-item>
				<uni-grid-item marker="badge" text="99" type="success">
					
					<text class="text">微信</text>
				</uni-grid-item>
				<uni-grid-item marker="badge" type="error" text="热">
					
					<text class="text">QQ</text>
				</uni-grid-item>
				<uni-grid-item :hor="35" :ver="-45" :img-width="25" marker="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/recommend.png">
					
					<text class="text">抖音</text>
				</uni-grid-item>
			</uni-grid>
		</view>
		<view class="example-title">地支</view>
		<view class="example-body">
			<uni-grid :column="4" :show-border="true" :square="true" :hor="35" :ver="-45" @change="change">
				<uni-grid-item marker="dot">
		
					<text class="text">新浪</text>
				</uni-grid-item>
				<uni-grid-item marker="badge" text="99" type="success">
					
					<text class="text">微信</text>
				</uni-grid-item>
				<uni-grid-item marker="badge" type="error" text="热">
					
					<text class="text">QQ</text>
				</uni-grid-item>
				<uni-grid-item :hor="35" :ver="-45" :img-width="25" marker="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/recommend.png">
					
					<text class="text">抖音</text>
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
				tg: [{
						text: '新浪'
					},
					{
						text: '微信'
					},
					{
						text: 'QQ'
					},
					{
						text: '抖音'
					},

				],
				dz: [{
						text: '新浪'
					},
					{
						text: '微信'
					},
					{
						text: 'QQ'
					},
					{
						text: '抖音'
					},
				
				]
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
