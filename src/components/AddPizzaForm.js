import * as React from 'react'

export default class AddPizzaForm extends React.Component {
  state = {
    name: "",
    description: "",
    ingredients: ""
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.state.name && this.state.description) {
      this.props.addPizza({
        name: this.state.name,
        description: this.state.description,
        ingredients: [this.state.ingredients]
      })
    }
    this.setState({
      name: "",
      description: "",
      ingredients: ""
    })
  }


  render() {
    return (<div>
      <h2>Add a pizza</h2>

      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
        </label>
        <label>
          <br></br>
          Description:
          <input type="text" name="description" onChange={this.handleChange} value={this.state.description} />
        </label>
        <label>
        <br></br>
          Ingredients:
          <input type="text" name="ingredients" onChange={this.handleChange} value={this.state.ingredients} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>)
  }
}