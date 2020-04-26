import api from './index';
var _ = require('lodash');

export default {
	findApi(url) {
		const result = _.find(_.unionBy(api, 'children'), (item) => {
			return item.url === apiName;
		});
		console.log('result: %o', result);
	}
}
