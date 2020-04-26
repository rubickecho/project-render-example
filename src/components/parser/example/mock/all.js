export default {
	"fields": [{
	  "__config__": {
		"label": "单行文本",
		"labelWidth": null,
		"showLabel": true,
		"changeTag": true,
		"tag": "el-input",
		"tagIcon": "input",
		"required": true,
		"layout": "colFormItem",
		"span": 24,
		"document": "https://element.eleme.cn/#/zh-CN/component/input",
		"regList": [],
		"formId": 101,
		"renderKey": 1587390751828
	  },
	  "__slot__": {
		"prepend": "",
		"append": ""
	  },
	  "placeholder": "请输入单行文本",
	  "style": {
		"width": "100%"
	  },
	  "clearable": true,
	  "prefix-icon": "",
	  "suffix-icon": "",
	  "maxlength": null,
	  "show-word-limit": false,
	  "readonly": false,
	  "disabled": false,
	  "__vModel__": "field101"
	}, {
	  "__config__": {
		"label": "多行文本",
		"labelWidth": null,
		"showLabel": true,
		"tag": "el-input",
		"tagIcon": "textarea",
		"required": true,
		"layout": "colFormItem",
		"span": 24,
		"regList": [],
		"changeTag": true,
		"document": "https://element.eleme.cn/#/zh-CN/component/input",
		"formId": 102,
		"renderKey": 1587390844910
	  },
	  "type": "textarea",
	  "placeholder": "请输入多行文本",
	  "autosize": {
		"minRows": 4,
		"maxRows": 4
	  },
	  "style": {
		"width": "100%"
	  },
	  "maxlength": null,
	  "show-word-limit": false,
	  "readonly": false,
	  "disabled": false,
	  "__vModel__": "field102"
	}, {
	  "__config__": {
		"label": "密码",
		"showLabel": true,
		"labelWidth": null,
		"changeTag": true,
		"tag": "el-input",
		"tagIcon": "password",
		"layout": "colFormItem",
		"span": 24,
		"required": true,
		"regList": [],
		"document": "https://element.eleme.cn/#/zh-CN/component/input",
		"formId": 103,
		"renderKey": 1587390846574
	  },
	  "__slot__": {
		"prepend": "",
		"append": ""
	  },
	  "placeholder": "请输入密码",
	  "show-password": true,
	  "style": {
		"width": "100%"
	  },
	  "clearable": true,
	  "prefix-icon": "",
	  "suffix-icon": "",
	  "maxlength": null,
	  "show-word-limit": false,
	  "readonly": false,
	  "disabled": false,
	  "__vModel__": "field103"
	}, {
	  "__config__": {
		"label": "计数器",
		"showLabel": true,
		"changeTag": true,
		"labelWidth": null,
		"tag": "el-input-number",
		"tagIcon": "number",
		"span": 24,
		"layout": "colFormItem",
		"required": true,
		"regList": [],
		"document": "https://element.eleme.cn/#/zh-CN/component/input-number",
		"formId": 104,
		"renderKey": 1587390847574
	  },
	  "placeholder": "计数器",
	  "step": 1,
	  "step-strictly": false,
	  "controls-position": "",
	  "disabled": false,
	  "__vModel__": "field104"
	}, {
	  "__config__": {
		"label": "下拉选择",
		"showLabel": true,
		"labelWidth": null,
		"tag": "el-select",
		"tagIcon": "select",
		"layout": "colFormItem",
		"span": 24,
		"required": true,
		"regList": [],
		"changeTag": true,
		"document": "https://element.eleme.cn/#/zh-CN/component/select",
		"formId": 105,
		"renderKey": 1587390849425
	  },
	  "__slot__": {
		"options": [{
		  "label": "选项一",
		  "value": 1
		}, {
		  "label": "选项二",
		  "value": 2
		}]
	  },
	  "placeholder": "请选择下拉选择",
	  "style": {
		"width": "100%"
	  },
	  "clearable": true,
	  "disabled": false,
	  "filterable": false,
	  "multiple": false,
	  "__vModel__": "field105"
	}, {
	  "__config__": {
		"label": "级联选择",
		"showLabel": true,
		"labelWidth": null,
		"tag": "el-cascader",
		"tagIcon": "cascader",
		"layout": "colFormItem",
		"defaultValue": [],
		"dataType": "dynamic",
		"span": 24,
		"required": true,
		"regList": [],
		"changeTag": true,
		"document": "https://element.eleme.cn/#/zh-CN/component/cascader",
		"formId": 106,
		"renderKey": 1587390851008
	  },
	  "options": [{
		"id": 1,
		"value": 1,
		"label": "选项1",
		"children": [{
		  "id": 2,
		  "value": 2,
		  "label": "选项1-1"
		}]
	  }],
	  "placeholder": "请选择级联选择",
	  "style": {
		"width": "100%"
	  },
	  "props": {
		"props": {
		  "multiple": false,
		  "label": "label",
		  "value": "value",
		  "children": "children"
		}
	  },
	  "show-all-levels": true,
	  "disabled": false,
	  "clearable": true,
	  "filterable": false,
	  "separator": "/",
	  "__vModel__": "field106"
	}, {
	  "__config__": {
		"label": "单选框组",
		"labelWidth": null,
		"showLabel": true,
		"tag": "el-radio-group",
		"tagIcon": "radio",
		"changeTag": true,
		"layout": "colFormItem",
		"span": 24,
		"optionType": "default",
		"regList": [],
		"required": true,
		"border": false,
		"document": "https://element.eleme.cn/#/zh-CN/component/radio",
		"formId": 107,
		"renderKey": 1587390852790
	  },
	  "__slot__": {
		"options": [{
		  "label": "选项一",
		  "value": 1
		}, {
		  "label": "选项二",
		  "value": 2
		}]
	  },
	  "style": {},
	  "size": "medium",
	  "disabled": false,
	  "__vModel__": "field107"
	}, {
	  "__config__": {
		"label": "多选框组",
		"tag": "el-checkbox-group",
		"tagIcon": "checkbox",
		"defaultValue": [],
		"span": 24,
		"showLabel": true,
		"labelWidth": null,
		"layout": "colFormItem",
		"optionType": "default",
		"required": true,
		"regList": [],
		"changeTag": true,
		"border": false,
		"document": "https://element.eleme.cn/#/zh-CN/component/checkbox",
		"formId": 108,
		"renderKey": 1587390854717
	  },
	  "__slot__": {
		"options": [{
		  "label": "选项一",
		  "value": 1
		}, {
		  "label": "选项二",
		  "value": 2
		}]
	  },
	  "style": {},
	  "size": "medium",
	  "disabled": false,
	  "__vModel__": "field108"
	}, {
	  "__config__": {
		"label": "开关",
		"tag": "el-switch",
		"tagIcon": "switch",
		"defaultValue": false,
		"span": 24,
		"showLabel": true,
		"labelWidth": null,
		"layout": "colFormItem",
		"required": true,
		"regList": [],
		"changeTag": true,
		"document": "https://element.eleme.cn/#/zh-CN/component/switch",
		"formId": 109,
		"renderKey": 1587390858614
	  },
	  "style": {},
	  "disabled": false,
	  "active-text": "",
	  "inactive-text": "",
	  "active-color": null,
	  "inactive-color": null,
	  "active-value": true,
	  "inactive-value": false,
	  "__vModel__": "field109"
	}],
	"formRef": "elForm",
	"formModel": "formData",
	"size": "medium",
	"labelPosition": "right",
	"labelWidth": 100,
	"formRules": "rules",
	"gutter": 15,
	"disabled": false,
	"span": 24,
	"formBtns": true
  }
