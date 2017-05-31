export const createMap = (domNode) => {
  return {
    type: 'CREATE_MAP',
    domNode
  }
}

export const addFeatures = (map) => {
  return {
    type: 'ADD_FEATURES',
    map
  }
}
