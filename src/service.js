export default {
  services: new Map(),
  register (serviceName, serviceFunction) {
    this.services.set(serviceName, serviceFunction());
  },
  getDependencies (componentInit) {
    const dependencyNames = getParamNames(componentInit);

    return dependencyNames.map(dependencyName => this.services.get(dependencyName));
  }
};

// http://stackoverflow.com/questions/1007981/how-to-get-function-parameter-names-values-dynamically-from-javascript
const STRIP_COMMENTS = /(\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s*=[^,\)]*(('(?:\\'|[^'\r\n])*')|("(?:\\"|[^"\r\n])*"))|(\s*=[^,\)]*))/mg;
const ARGUMENT_NAMES = /([^\s,]+)/g;
function getParamNames(func) {
  const fnStr = func.toString().replace(STRIP_COMMENTS, '');
  const result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);

  return result || [];
}
