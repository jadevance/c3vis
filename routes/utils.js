module.exports = {
  registeredCpu: function (instance) {
    return instance["registeredResources"].find(function (element, index, array) {return element.name == 'CPU'}).integerValue;
  },
  registeredMemory: function (instance) {
    return instance["registeredResources"].find(function (element, index, array) {return element.name == 'MEMORY'}).integerValue;
  },
  registeredPorts: function (instance) {
    return instance["registeredResources"].find(function (element, index, array) {return element.name == 'PORTS'}).integerValue;
  },
  remainingCpu: function (instance) {
    return instance["remainingResources"].find(function (element, index, array) {return element.name == 'CPU'}).integerValue;
  },
  remainingMemory: function (instance) {
    return instance["remainingResources"].find(function (element, index, array) {return element.name == 'MEMORY'}).integerValue;
  },
  remainingPorts: function (instance) {
    return instance["remainingResources"].find(function (element, index, array) {return element.name == 'PORTS'}).integerValue;
  },
  az: function (instance) {
    return instance["attributes"].find(function (element, index, array) {return element.name == 'ecs.availability-zone'}).value;
  }
};