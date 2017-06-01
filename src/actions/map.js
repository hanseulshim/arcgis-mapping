export const createMap = (domNode) => {
  return {
    type: 'CREATE_MAP',
    domNode
  }
}

export const toggleFeature = (index) => {
  return {
    type: 'TOGGLE_FEATURE',
    index
  }
}
