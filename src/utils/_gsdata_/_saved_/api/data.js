import api from './index';
var _ = require('lodash');

export default {
	findApi(url) {
		let result;
		api.forEach((item) => {
			result = _.find(item.children, (item) => {
				return item.url === url;
			});
		})
		return result
	},
	computedParams() {
		let result;
		api.forEach((item) => {
			result = _.find(item.children, (item) => {
				return item.url === url;
			});
		})

		if (result) {
			if (result.paramRules.length > 0) {
				let params = {};
				result.paramRules.forEach((rule) => {
					let value = null;
					switch(rule.type) {
						case 'default':
							value = rule.default;
							break;
						case 'global':
							break;
						case 'parent':
							break;
						case 'route':
							break;
					}
					params[rule.targetKey ? rule.targetKey : rule.sourceKey] = value;
				})

				result.params = params;
			} else {
				result.params = {}
			}

			return result;
		} else {
			throw new Error('未找到对应api');
		}
	}
}
