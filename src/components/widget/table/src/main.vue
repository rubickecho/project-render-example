<template>
	<el-table :data="data">
		<el-table-column
			:prop="column.prop"
			:label="column.label"
			:width="column.width ? column.width : null"
			v-for="(column, index) in attrs.__slot__.tableColumn"
			:key="index"
		></el-table-column>
	</el-table>
</template>

  <script>
export default {
	name: 'lwc-table',
	props: {
		attrs: {
			type: Object,
			default: _ => new Object()
		},
		page: {
			type: Object,
			default: _ => new Object()
		}
	},
	computed: {
		data() {
			if (!this.attrs) {
				return [];
			} else {
				return this.page.data[this.attrs.__config__.tableData];
			}
		}
	}
}
  </script>
