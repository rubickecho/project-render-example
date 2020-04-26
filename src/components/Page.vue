<template>
	<el-row>
		<el-row v-for="(c, index) in page.children" :key="index">
			<lwc-hoc :widget="c" :page="page"></lwc-hoc>
		</el-row>
	</el-row>
</template>
<script>
import UtilsApi from '@/utils/api/data'
export default {
	data() {
		return {
			jsonApi: '/page-form',
			page: {}
		}
	},
	methods: {
		initPage() {
			this.$axios({
				method: 'get',
				url: this.jsonApi,
				data: {}
			}).then(({data}) => {
				let apiReqs = []; //异步请求集合
				data.result.apiList.forEach((item) => {
					apiReqs.push(this.loadData(item));
				})

				Promise.all(apiReqs).then((res) => {
					let pageData = {}
					res.forEach((o, i) => pageData[data.result.apiList[i].label] = o) //组装page页面数据对象
					this.page = data.result;
					this.page.data = pageData;
				})

				console.log('this.page', this.page)
			});
		},
		/**
		 * @Author: TangLiangcheng
		 * @Date: 2020-04-26 10:29:33
		 * @Desc: 根据api地址请求数据
		 * @param api [api对象]
		 * @return Promise
		 */
		loadData(api) {
			return new Promise((resolve, reject) => {
				const {params} = UtilsApi.computedParams(api.value);
				this.$axios({
					method: 'get',
					url: api.value,
					data: params
				}).then(({data}) => {
					resolve(data.result);
				});
			})
		}
	},
	created() {
		this.initPage();
	}
}
</script>
