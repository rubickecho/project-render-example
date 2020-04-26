import recursive from "./recursive";
export default {
	name: "lwc-row",
	props: {
		widget: {
			type: Object,
			default: _ => new Object()
		}, // 此容器组件的所有配置信息
		page: {
			type: Object,
			default: _ => new Object()
		} // 此组件所在页面的数据，容器组件才会
	},
	/**
	 * 通过JSX语法渲染节点
	 */
	render(h) {
		console.log('this.$props', this.$props)
		const element = this.$props.widget;
		let child = recursive.renderChildren.apply(h, element);;
		return h(<el-col
				span={span}
			>
				<el-row gutter={element.__config__.gutter}>
					{child}
				</el-row>
			</el-col>, {
			on: this.$listeners,
			attrs: this.$attrs, //未被声明的属性
			props: this.$props //高阶组件接收到的props属性
		});
	}
};
