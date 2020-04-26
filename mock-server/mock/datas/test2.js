let Mock = require('mockjs')

module.exports = {
    test2: Mock.mock({
        "status": 200,
        "msg": "test",
        "data": {
            'table|5': [{
                id: '@id()',
                pid: '@id()',
                image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1500976021,4250726245&fm=26&gp=0.jpg',
                title: '@cname()',
                created_at: '@datetime()',
                status: 1,
                shenhe_time: '@datetime()'
            }],
            form: {
                id: '@id()',
                pid: '@id()',
                image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1500976021,4250726245&fm=26&gp=0.jpg',
                title: '@cname()',
                created_at: '@datetime()',
                status: 1,
                shenhe_time: '@datetime()'
            }
        }
    })
}
