<script>
import render from '@/components/render/render.js'
import * as DESIGN_PROPERTIES from '@/config/design_properties.js';

const ruleTrigger = {
	'el-input': 'blur',
	'el-input-number': 'blur',
	'el-select': 'change',
	'el-radio-group': 'change',
	'el-checkbox-group': 'change',
	'el-cascader': 'change',
	'el-time-picker': 'change',
	'el-date-picker': 'change',
	'el-rate': 'change'
}

/**
 * @Desc: 渲染表单
 */
function renderFrom(h) {
	const { formConfCopy } = this

	return (
		<el-row gutter={formConfCopy.gutter}>
			<el-form
				size={formConfCopy.size}
				label-position={formConfCopy.labelPosition}
				disabled={formConfCopy.disabled}
				label-width={`${formConfCopy.labelWidth}px`}
				ref={formConfCopy.__config__.formRef}
				// model不能直接赋值 https://github.com/vuejs/jsx/issues/49#issuecomment-472013664
				props={{ model: this[formConfCopy.__config__.formModel] }}
				rules={this[formConfCopy.__config__.formRules]}
			>
				{renderFormItem.call(this, h, formConfCopy.__config__.children)}
				{formConfCopy.formBtns && formBtns.call(this, h)}
			</el-form>
		</el-row>
	)
}

/**
 * @Desc: 渲染按钮
 * @param h [createElement 的别名]
 */
function formBtns(h) {
	return <el-col>
		<el-form-item size="large">
			<el-button type="primary" onClick={this.submitForm}>提交</el-button>
			<el-button onClick={this.resetForm}>重置</el-button>
		</el-form-item>
	</el-col>
}

/**
 * @Desc: 渲染表单子项
 * @param h [createElement 的别名]
 * @param elementList [子组件列表]
 */
function renderFormItem(h, elementList) {
	return elementList.map(scheme => {
		const config = scheme.__config__
		const layout = layouts[config.layout]

		if (layout) {
			return layout.call(this, h, scheme)
		}
		throw new Error(`没有与${config.layout}匹配的layout`)
	})
}

function renderChildren(h, scheme) {
	const config = scheme.__config__
	if (!Array.isArray(config.children)) return null
	return renderFormItem.call(this, h, config.children)
}

/**
 * @Desc: 布局组件 StatelessWidget
 */
const layouts = {
	/**
	 * @Desc: 块级表单子项 引入render.js,处理数据
	 * @param scheme [widget object]
	 */
	[DESIGN_PROPERTIES.LAYOUT_TYPE_COL_FORM_ITEM]: function (h, scheme) {
		const config = scheme.__config__
		let labelWidth = config.labelWidth ? `${config.labelWidth}px` : null
		if (config.showLabel === false) labelWidth = '0'
		return (
			<el-col span={config.span}>
				<el-form-item label-width={labelWidth} prop={scheme.__vModel__}
					label={config.showLabel ? config.label : ''}>
					<render conf={scheme} onInput={event => {
						this.$set(config, 'defaultValue', event)
						this.$set(this[this.widget.__config__.formModel], scheme.__vModel__, event)
					}} />
				</el-form-item>
			</el-col>
		)
	},
  /**
	 * @Desc: 行级表单子项
	 * @param scheme [widget object]
	 */
	[DESIGN_PROPERTIES.LAYOUT_TYPE_ROW_FORM_ITEM]: function (h, scheme) {
		const config = scheme.__config__
		let child = renderChildren.apply(this, arguments) //处理子widget渲染
		const className = `${scheme.padding} ${scheme.margin}`;
		if (scheme.type === 'flex') {
			child = <el-row type={scheme.type} justify={scheme.justify} align={scheme.align}>
				{child}
			</el-row>
		}
		return (
			<el-col span={config.span}>
				<el-row gutter={config.gutter} class={className}>
					{child}
				</el-row>
			</el-col>
		)
	}
}

export default {
	name: 'lwc-form',
	components: {
		render
	},
	props: {
		widget: {
			type: Object,
			required: true
		}
	},
	data() {
		//初始化传入表单配置参数
		const data = {
			formConfCopy: JSON.parse(JSON.stringify(this.widget)),
			[this.widget.__config__.formModel]: {},
			[this.widget.__config__.formRules]: {}
		}
		//初始化表单数据
		this.initFormData(data.formConfCopy.__config__.children, data[this.widget.__config__.formModel])
		this.buildRules(data.formConfCopy.__config__.children, data[this.widget.__config__.formRules])
		return data
	},
	methods: {
	  /**
	   * @Desc: 初始化表单
	   * @param componentList [子Widget列表]
	   * @param formData [表单默认数据]
	   */
		initFormData(componentList, formData) {
			componentList.forEach(cur => {
				const config = cur.__config__
				if (cur.__vModel__) formData[cur.__vModel__] = config.defaultValue
				if (config.children) this.initFormData(config.children, formData)
			})
		},
		/**
		 * @Desc: 处理表单验证规则
			* @param componentList [子Widget列表]
			* @param rules [规则列表]
		 */
		buildRules(componentList, rules) {
			componentList.forEach(cur => {
				const config = cur.__config__

				//是否有验证规则
				if (Array.isArray(config.regList)) {

					//如果是必填项, 则默认用占位符内容提示
					if (config.required) {
						/**
						 * const 声明时，允许指向内存地址不改动而更新值，所以可以更新 Array、Object 中属性
						 * 以下代码运行成功
						 * const a = {k: 1}
						 * a.k = 2
						 *
						 * 以下代码运行失败 TypeError: Assignment to constant variable.
						 * a = {k: 2}
						 */
						const required = { required: config.required, message: cur.placeholder }

						//判断是否为多选，array
						if (Array.isArray(config.defaultValue)) {
							required.type = 'array'
							required.message = `请至少选择一个${config.label}`
						}
						required.message === undefined && (required.message = `${config.label}不能为空`)

						config.regList.push(required)
					}

					//组装验证规则，设置触发方式
					rules[cur.__vModel__] = config.regList.map(item => {
						item.pattern && (item.pattern = eval(item.pattern))
						item.trigger = ruleTrigger && ruleTrigger[config.tag]
						return item
					})
				}

				//继续处理子级规则
				if (config.children) this.buildRules(config.children, rules)
			})
		},
		/**
		 * @Desc: 重置表单
		 */
		resetForm() {
			this.formConfCopy = JSON.parse(JSON.stringify(this.widget))
			this.$refs[this.widget.__config__.formRef].resetFields()
		},
		/**
		 * @Desc: 提交表单
		 */
		submitForm() {
			this.$refs[this.widget.__config__.formRef].validate(valid => {
				if (!valid) return false
				console.log('表单收集的数据: ', this[this.widget.__config__.formModel])
				// 触发sumit事件
				// this.$emit('submit', this[this.widget.__config__.formModel])
				return true
			})
		}
	},
	render(h) {
		return renderFrom.call(this, h)
	}
}
</script>
