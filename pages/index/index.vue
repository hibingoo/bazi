<template>
	<view>
		<view class="uni-padding-wrap">
			<form @submit="formSubmit">
				<view>
					<view class="uni-title">姓</view>
					<view class="uni-list">
						<view class="uni-list-cell">
							<input class="uni-input" name="xing" placeholder="请填写您的姓" v-model="xing" />
						</view>
					</view>
				</view>
				<view>
					<view class="uni-title">名</view>
					<view class="uni-list">
						<view class="uni-list-cell">
							<input class="uni-input" name="ming" placeholder="请填写您的名" v-model="ming" />
						</view>
					</view>
				</view>
				<view>
					<view class="uni-title">性别</view>
					<radio-group class="uni-flex" name="gender" @change="radioChange">
						<label>
							<radio value="0" />男</label>
						<label>
							<radio value="1" />女</label>
					</radio-group>
				</view>

				<view class="btn" @click="showDateDialog(2, 'words')">生日{{date}}时间{{time}}</view>

				<zan-calendar :date="date" :time="time" :year="year" :month="month" :day="day" :hour="hour" :isHourShow="isHourShow"
				 :isMinShow="isMinShow" :show="dateDialog" :lunarType="lunarType" @closeDialog="closeDialog" @confirmDialog="confirmDialog">
				</zan-calendar>



				<view class="uni-btn-v uni-common-mt">
					<button class="btn-submit" formType="submit" type="primary">开始排盘</button>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
	import zanCalendar from '@/components/quick-calendar/calendar';
	var api = require('@/common/api.js');
	var graceChecker = require("../../common/graceChecker.js");

	export default {
		data() {

			return {
				xing: '',
				ming: '',
				sex: '',
				date: '2019-01-22', //日期
				year: '',
				month: '',
				day: '',
				hour: '',
				time: '13:00', //时间
				isHourShow: false, //是否显示时辰（小时）
				isMinShow: false, //是否显示分钟

				lunarType: 'number', //年月日显示方式

				dateDialog: false //是否弹出日历组件

			}
		},
		//注册主键（参考vue文档）
		components: {
			zanCalendar
		},
		methods: {
			//示例，展示三种不同的选择调度
			showDateDialog: function(type, lunarType) {
				switch (type) {
					case 1:
						this.isHourShow = false;
						this.isMinShow = false;
						break;
					case 2:
						this.isHourShow = true;
						this.isMinShow = false;
						break;
					case 3:
						this.isHourShow = true;
						this.isMinShow = true;
						break;
				}

				this.dateDialog = true;
				this.lunarType = lunarType;
			},
			//示例，在为确认是就点击了取消，直接关闭弹窗
			closeDialog: function() {
				this.dateDialog = false;
			},
			//示例，点击了确认后的相关操作，并再次点击确认时间后的返回，这里可以写自己的操作了
			confirmDialog: function(e) {
				console.log(e);
				this.date = e.date
				this.time = e.time
				this.year = e.year
				this.month = e.month
				this.day = e.day
				this.hour = e.hour
				this.dateDialog = false

			},

			formSubmit: function(e) {
				//将下列代码加入到对应的检查位置
				//定义表单规则
				var rule = [{
						name: "xing",
						checkType: "string",
						checkRule: "1,3",
						errorMsg: "姓应为1-3个字符"
					},
					{
						name: "ming",
						checkType: "string",
						checkRule: "1,3",
						errorMsg: "名应为1-3个字符"
					},
					{
						name: "gender",
						checkType: "in",
						checkRule: "0,1",
						errorMsg: "请选择性别"
					}
				];
				//进行表单检查
				var formData = e.detail.value;
				var checkRes = graceChecker.check(formData, rule);
				if (checkRes) {
					uni.showToast({
						title: "验证通过!",
						icon: "none"
					});
					//console.log(this.name)
					api.post({
						url: 'bazi/history/setHistory',
						data: {
							xing: this.xing,
							ming: this.ming,
							date: this.date + ' ' + this.time,
							gd: this.sex,


						},
						success: data => {
							console.log(data)
						}
					});
					api.post({
						url: 'bazi/paipan/Paipan',
						data: {
							date: this.date + ' ' + this.time,
							gd: this.sex,
							yy: this.year,
							mm: this.month,
							dd: this.day,
							hh: this.hour,


						},
						success: data => {
							console.log(data)
						}
					});
					uni.navigateTo({
						url: '../paipan/paipan'
					});
				} else {
					uni.showToast({
						title: graceChecker.error,
						icon: "none"
					});
				}
			},

			radioChange: function(e) {
				this.sex = e.detail.value
			},
		},



	}
</script>

<style>
	picker-view {
		width: 100%;
		height: 600upx;
		margin-top: 20upx;
	}

	.item {
		line-height: 100upx;
		text-align: center;
	}
</style>
