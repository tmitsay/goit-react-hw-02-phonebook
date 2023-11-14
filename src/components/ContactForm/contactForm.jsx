import { Component } from 'react';
import css from './contactForm.module.css';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handelSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);

    this.reset();
  };

  handelChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handelSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            onChange={this.handelChange}
            name="name"
            value={this.state.name}
            required
          />
        </label>
        <label htmlFor={this.numberInputId}>
          Number
          <input
            type="tel"
            onChange={this.handelChange}
            name="number"
            value={this.state.number}
            required
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
