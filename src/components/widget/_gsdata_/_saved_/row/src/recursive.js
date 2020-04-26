function hocLayout (element) {
	return (
		<lwc-hoc widget={element}></lwc-hoc>
	)
}

export default {
	renderChildren(element) {
		console.log('element123', element)
		const config = element.__config__
		if (!Array.isArray(config.children)) return null
		return config.children.map((el, i) => {
			if (hocLayout) {
				return hocLayout.call(el)
			} else {}
		})
	}
}
