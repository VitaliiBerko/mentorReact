import { Component } from 'react';
import PropTypes from 'prop-types'
export class Form extends Component {
  static ={}
    state = {
    name: '',
    email: '',
  };
    handleChange = ({target: {name, value}}) => {
        
        this.setState({ [name]: value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addUser({ ...this.state })
        this.setState({
            name: "",
            email: ""
        })
    }
    render() {
      const{name, email} = this.state
    return (
      <>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">Name
            <input  type="text" name='name' value={name} onChange={this.handleChange}/>
                </label>
                <label htmlFor="">Email<input type="email" name='email' value={email} onChange={this.handleChange}/></label>
                <button type='submit'>Save</button>
        </form>
      </>
    );
  }
}
