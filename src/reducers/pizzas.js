const reducer = (state = initialState, action = {}) => {
  // console.log('Intitial state: ', state)
  // console.log('Action: ', action.type)    -> gebruik devTools
  switch (action.type) {
  default:
    return state
  }
}

const initialState = [
  {
    id: 1,
    name: 'Pizza Margarita',
    description: 'Minimalism is key!',
    ingredients: [
      'tomato',
      'mozarella',
      'basil'
    ]
  },
  {
    id: 2,
    name: 'Pizza Napoletana',
    description: 'Like Margarita, but without the basil.',
    ingredients: [
      'tomato',
      'mozarella'
    ]
  },
  {
    id: 3,
    name: 'Pizza Bianca',
    description: 'Did somebody say oil?',
    ingredients: [
      'olive oil',
      'salt',
      'rosemary'
    ]
  }
]



export default reducer