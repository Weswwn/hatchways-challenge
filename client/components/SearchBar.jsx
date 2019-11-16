import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        searchValue: ''
      }
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    let { searchQuery } = this.props;
    searchQuery(e);
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange} id="name-input" type="text" placeholder="Search name here!"></input>
        </form>
      </div>
    )
  }
}
export default SearchBar;