let Mock = require('mockjs')

module.exports = {
    test4: Mock.mock({
        status: 200,
        data: {
            "form": {
                'id': '@id()',
                'status' : 2,
                'category': [2, 202],
                'shenhe_time': '@datetime()',
                'deny_hint': '没有意见',
                'company': '荣成市崖头跑酷汽车装饰用品经销部',
                'main_category': '传说中得主分类',
                'child_category': '传说中得行业子分类',
                'color': '#3E93F5',
                'logo': ['http://img5.imgtn.bdimg.com/it/u=1896636181,374650240&fm=26&gp=0.jpg', 'http://img4.imgtn.bdimg.com/it/u=2628025389,1336417939&fm=26&gp=0.jpg']
            },
            'table|5': [{
                name: '@cname'
            }],
            'page': {
                total: 100
            }
        }
    })
}
