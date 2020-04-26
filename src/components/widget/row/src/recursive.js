function hocLayout (h, element, index, parent) {
	return (
		<lwc-hoc widget={element}></lwc-hoc>
	)
}

export default {
	renderChildren(h, element, index, parent) {
		const config = element.__config__
		if (!Array.isArray(config.children)) return null
		return config.children.map((el, i) => {
			if (hocLayout) {
				return hocLayout.call(this, h, el, i, config.children)
			} else {}
		})
	}
}
