export default {
	fields: [
		{
			__config__: {
				label: "单行文本",
				labelWidth: null,
				showLabel: true,
				changeTag: true,
				tag: "el-input",
				tagIcon: "input",
				defaultValue: "13028158007",
				required: true,
				layout: "colFormItem",
				span: 24,
				document: "https://element.eleme.cn/#/zh-CN/component/input",
				regList: [
					{
						pattern: "/^1(3|4|5|7|8|9)\\d{9}$/",
						message: "手机号格式错误"
					}
				]
			},
			__slot__: {
				prepend: "",
				append: ""
			},
			__vModel__: "mobile",
			placeholder: "请输入手机号",
			style: {
				width: "100%"
			},
			clearable: true,
			"prefix-icon": "el-icon-mobile",
			"suffix-icon": "",
			maxlength: 11,
			"show-word-limit": true,
			readonly: false,
			disabled: false
		},
		{
			__config__: {
				label: "日期范围",
				tag: "el-date-picker",
				tagIcon: "date-range",
				defaultValue: null,
				span: 24,
				showLabel: true,
				labelWidth: null,
				required: true,
				layout: "colFormItem",
				regList: [],
				changeTag: true,
				document:
					"https://element.eleme.cn/#/zh-CN/component/date-picker",
				formId: 101,
				renderKey: 1585980082729
			},
			style: {
				width: "100%"
			},
			type: "daterange",
			"range-separator": "至",
			"start-placeholder": "开始日期",
			"end-placeholder": "结束日期",
			disabled: false,
			clearable: true,
			format: "yyyy-MM-dd",
			"value-format": "yyyy-MM-dd",
			readonly: false,
			__vModel__: "field101"
		},
		{
			__config__: {
				layout: "rowFormItem",
				tagIcon: "row",
				label: "行容器",
				layoutTree: true,
				children: [
					{
						__config__: {
							label: "评分",
							tag: "el-rate",
							tagIcon: "rate",
							defaultValue: 0,
							span: 24,
							showLabel: true,
							labelWidth: null,
							layout: "colFormItem",
							required: true,
							regList: [],
							changeTag: true,
							document:
								"https://element.eleme.cn/#/zh-CN/component/rate",
							formId: 102,
							renderKey: 1586839671259
						},
						style: {},
						max: 5,
						"allow-half": false,
						"show-text": false,
						"show-score": false,
						disabled: false,
						__vModel__: "field102"
					}
				],
				document: "https://element.eleme.cn/#/zh-CN/component/layout",
				formId: 101,
				span: 24,
				renderKey: 1586839668999,
				componentName: "row101",
				gutter: 15
			},
			type: "default",
			justify: "start",
			align: "top"
		}
	],
	formRef: "elForm",
	formModel: "formData",
	size: "small",
	labelPosition: "right",
	labelWidth: 100,
	formRules: "rules",
	gutter: 15,
	disabled: false,
	span: 24,
	formBtns: true,
	unFocusedComponentBorder: false
};
