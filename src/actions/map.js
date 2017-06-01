export const createMap = (domNode) => {
  return {
    type: 'CREATE_MAP',
    domNode
  }
}

export const toggleFeature = (items) => {
  return {
    type: 'TOGGLE_FEATURE',
    items
  }
}
