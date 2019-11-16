import React from 'react';
import styled from 'styled-components';

const SearchBarStyle = styled.input`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 10px;
`

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
      this. state = {
        searchValue: ''
      }
      this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    let { searchQuery } = this.props;
    searchQuery(e);
  }

  render() {
    return (
      <div>
        <form>
          <SearchBarStyle onChange={this.onChange} id="name-input" onChange={this.onChange} type="text" placeholder="Search name here!"></SearchBarStyle>
        </form>
      </div>
    )
  }
}
export default SearchBar;