let Mock = require('mockjs')

module.exports = {
    test3: Mock.mock({
        "status": 200,
        "msg": "test",
        "data": {
            form: {},
            'table|4': [{
                'title': '@cname()',
                'created_at': '@datetime()',
                'status': 1,
                'shenhe_time': '2018-10-20 22:21:00'
            }],
            page: {
                total: 100,
                current: 1
            }
        }
    })
}
