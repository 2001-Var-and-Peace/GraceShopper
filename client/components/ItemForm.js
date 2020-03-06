import React from 'react'
import {connect} from 'react-redux'
import {updateProductThunk} from '../store/product'

export class ItemForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.product
    // {
    //   name: '',
    //   type: '',
    //   material: '',
    //   price: '',
    //   color: '',
    //   description: ''
    // };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const formatted = {
      ...this.state,
      price: Number(this.state.price)
    }
    this.props.updateProductThunk(formatted)
    this.setState({
      name: '',
      type: '',
      material: '',
      price: '',
      color: '',
      description: ''
    })
  }

  render() {
    console.log(this.props)
    const product = this.props.product
    return (
      <div>
        <form onSubmit={() => this.handleSubmit}>
          <label htmlFor="item-name">Item name: </label>
          <input
            onChange={this.handleChange}
            name="name"
            type="text"
            value={this.state.name}
          />
          <br />
          <label htmlFor="item-type">Item type: </label>
          <input
            onChange={this.handleChange}
            name="type"
            type="text"
            value={this.state.type}
          />
          <br />
          <label htmlFor="item-materal">Item material: </label>
          <input
            onChange={this.handleChange}
            name="material"
            type="text"
            value={this.state.material}
          />
          <br />
          <label htmlFor="item-price">Item price: </label>
          <input
            onChange={this.handleChange}
            name="price"
            type="text"
            value={this.state.price}
          />
          <br />
          <label htmlFor="item-color">Item color: </label>
          <input
            onChange={this.handleChange}
            name="color"
            type="text"
            value={this.state.color}
          />
          <br />
          <label htmlFor="item-description">Item description: </label>
          <input
            onChange={this.handleChange}
            name="description"
            type="text"
            value={this.state.description}
          />
          <br />
          <button type="submit">UPDATE ITEM</button>
          <br />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  product: state.products.product
})

const mapDispatchToProps = dispatch => ({
  updateProductThunk: product => dispatch(updateProductThunk(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm)