import service from './service';

export default {
	components: new Map(),
	register (componentName, componentObject) {
		this.components.set(componentName, componentObject);
	},
	bootstrap () {
		for (var [componentName, componentObject] of this.components) {
			let componentDOM = document.querySelector(componentName);
			let dependencies = service.getDependencies(componentObject.init);
			componentObject.init.apply(componentObject, dependencies).then(scope => {
				componentDOM.innerHTML = Handlebars.compile(componentObject.template)(scope);
			});
		}
	}
};
