export default {
	name: "RenderDemo",

	componentName: "RenderDemo",

	props: {
	},

	computed: {
		style() {
			const ret = {};
			return ret;
		},
	},

	render(h) {
        return h('h2',
            'Hello World',
			{
                class: null,
                style: null
            }
		);
	},
};
