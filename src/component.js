import service from './service';

export default {
  components: new Map(),
  register (componentName, componentObject) {
    this.components.set(componentName, componentObject);
  },
  bootstrap () {
    for (var [componentName, componentObject] of this.components) {
      const componentDOMElements = document.querySelectorAll(componentName);
      const dependencies = service.getDependencies(componentObject.init);

      componentDOMElements.forEach((componentDOMElement) => {
        const properties = {
          element: componentDOMElement,
          attributes: componentDOMElement.attributes
        };
        const componentObjectInstance = Object.assign({}, properties, componentObject);

        componentObjectInstance.init.apply(componentObjectInstance, dependencies)
          .then((scope) => {
            componentDOMElement.innerHTML = Handlebars.compile(componentObjectInstance.template)(scope);
          });
      });
    }
  }
};
