<template>
<el-col :span="widget.__config__.span">
	<el-row :type="widget.type" :justify="widget.justify" :align="widget.align" :gutter="widget.__config__.gutter">
		<slot></slot>
		<!-- <lwc-hoc v-for="(el, i) in widget.__config__.children" :key="i" :widget="el" :page="page"></lwc-hoc> -->
	</el-row>
</el-col>
</template>

<script>
export default {
	name: "lwc-row",
	props: {
		widget: Object,
		page: Object,
		hasChild: false
	}
};

</script>
