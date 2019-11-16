import React from 'react';

class TagSearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this);
  }
  
  onChange(e) {
    let { searchQuery } = this.props;
    searchQuery(e);
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render () {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input id="tag-input" onChange={this.onChange} type="text" placeholder="Search tags here!"/>
        </form>
      </div>
    )
  }
}
export default TagSearchBar;