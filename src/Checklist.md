# Create store and provide it to our app

1. Create store.js
2. Import library etc. etc.
2. Copy paste store setup (recommended)
3. Create './reducer.js/
4. Make a simple reducer function with initialState (use default params, maybe a string 'hello')
5. Inside (App.js or) index.js imort { Provider } from 'react-redux'
6. Import store from './store'
7. Wrap your app in the provider


Now TEST
1. Go to redux devTools
2. Check state tab for initialstate


# Set initial state and use in component

1. Go to redux devtools
2. Check state taf for initialstate


# Make a component

1. Make component (should render something)
2. Import it in App to render it

Check 
1. Open browser
2. Use eyeballs


# Connect component
1. In component import { connect } from react-redux
2. Wrap your component in 'connect' as you export it:
    'export default connect()(PizzalistContainer)'

Check
1. Open react devtools
2. Check props of component, should contain 'dispatch'


# MapStateToProps
1. Define mapStateToProps (outside of your component, but in de same file)
2. MapStateToProps gets the state as a parameter, return an object with parts of the state you need
2. Put mapStateToProps into connect as a first argument

Check

1. Open react devtools.
2. Check if parts of the state are in your props (pizzas in this case)

# Use the state in your component

1. Map over things, use interpolation or something

