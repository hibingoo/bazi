<template>
	<view>
		<!-- #ifndef MP-BAIDU || MP-ALIPAY || MP-TOUTIAO -->
		<uni-list v-for="(value,key) in list" :key="key">
			<uni-swipe-action :options="options2" @click="bindClick($event,value.id)">
				<uni-list-item :show-arrow="false" :title="value.xing" :note="value.date" />
			</uni-swipe-action>
		</uni-list>
		
		<!-- #endif -->

	</view>
</template>

<script>
	var api = require('@/common/api.js');
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	export default {
		components: {
			uniSwipeAction,
			uniList,
			uniListItem
		},
		data() {
			return {
				list:'',
				id:'',
				options2: [{
					text: '查看',
				
					style: {
						backgroundColor: '#007aff'
					}
				}, {
					text: '删除',
					style: {
						backgroundColor: '#dd524d'
					}
				}],
			}
		},
		onReady() {
			this.$nextTick(() => {
				this.isOpened = true
			})
		},
		onShow() {
			api.get({
				url: 'bazi/history/getHistory',
				success: data => {
					if (data.code == 1) {
							this.list = data.data
							console.log(data);
			
							//  成功
						}
			
						if (data.code == 0) {
							//  失败
						}
						//console.log(data);
				}
			});
		},
		onLoad() {
			
		},
		methods: {
		bindClick (e,id){
			console.log(e)
		if (e.index==0) {
			api.post({
				url: 'bazi/paipan/GetInfo',
				data: {
					id: id,
				},
				success: data => {
					console.log(data)
				}
			});
			uni.navigateTo({
				url: '../paipan/paipan'
			});
			console.log('点击内容是'+e.index+e.content.text)
		} else{
			api.post({
				url: 'bazi/history/delHistory',
				data: {
					id: id,
				},
				success: data => {
					console.log(data);
					api.get({
						url: 'bazi/history/getHistory',
						success: data => {
							if (data.code == 1) {
									this.list = data.data
					//  成功
								}
					
						}
					});
				}
			});
			console.log('点击内容是'+e.index+e.content.text)
			
		}   
			    },
		}
	}
</script>

<style>
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4
	}

	view {
		font-size: 28upx;
		line-height: inherit
	}

	.example {
		padding: 0 30upx 30upx
	}

	.example-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32upx;
		color: #464e52;
		padding: 30upx 30upx 30upx 50upx;
		margin-top: 20upx;
		position: relative;
		background-color: #fdfdfd;
		border-bottom: 1px #f5f5f5 solid
	}

	.example-title__after {
		position: relative;
		color: #031e3c
	}

	.example-title:after {
		content: '';
		position: absolute;
		left: 30upx;
		margin: auto;
		top: 0;
		bottom: 0;
		width: 6upx;
		height: 32upx;
		background-color: #ccc
	}

	.example .example-title {
		margin: 40upx 0
	}

	.example-body {
		padding: 30upx;
		background: #fff
	}

	.example-info {
		padding: 30upx;
		color: #3b4144;
		background: #fff
	}

	.cont {
		height: 90upx;
		line-height: 90upx;
		padding: 0 30upx;
		position: relative;
		background: #fff;
	}

	.cont::before {
		position: absolute;
		z-index: 3;
		left: 0;
		right: 0;
		top: 0;
		height: 1px;
		content: '';
		transform: scaleY(0.5);
		background-color: $uni-border-color;
	}

	.cont::after {
		position: absolute;
		z-index: 3;
		left: 0;
		right: 0;
		bottom: 0;
		height: 1px;
		content: '';
		transform: scaleY(0.5);
		background-color: $uni-border-color;
	}

	.example-body {
		display: flex;
		flex-direction: row;
		justify-content: center;
		padding: 20upx 0;
	}

	/* .button-view {
		display: flex;
		flex-direction: row;
		justify-content: center;
		padding: 20upx 0;
		background: #fff;
	} */

	.button {
		border: 1px solid #E7E7E7;
		padding: 8upx 16upx;
		border-radius: 8upx;
	}
	.uni-list-item__content-title {
		font-size: 32upx;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: inherit;
		line-height: 1.5;
		overflow: hidden
	}
</style>