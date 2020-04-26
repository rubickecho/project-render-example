export default [
	{
		url: "user-detail",
		label: "查询用户",
		paramRules: [{ type: "route", sourceKey: "id" }]
	},
	{
		url: "user-list",
		label: "获取用户列表",
		paramRules: [
			{ sourceKey: "page", type: "default", default: 1 },
			{ sourceKey: "rows", type: "default", default: 10 },
			{ sourceKey: "active", type: "default" },
			{ sourceKey: "companyId", type: "global" }
		]
	}
];
