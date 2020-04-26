/**
 * 高阶组件，传递参数生成另一个组件
 */
export default {
	name: "lwc-hoc",
	props: {
		// value: [Object, Array, String, Number, Boolean],
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
		console.log("this.$props", this.$props);
		const widgetName = this.$props.widget.__config__.tag;
		return h(widgetName, {
			on: this.$listeners,
			attrs: this.$attrs, //未被声明的属性
			props: this.$props //高阶组件接收到的props属性
		});
	}
};
