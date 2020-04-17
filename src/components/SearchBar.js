import React from 'react';

 class SearchBar extends React.Component {

  state = {
    term: ''
  };

onInputChange = (event) => {
   this.setState({term: event.target.value})
}

daFormSubmit = (event) => {
   event.preventDefault();
// make sure we call callback from parent component
this.props.daFormSubmit(this.state.term);

}

   render() {
      return (
        <div className="search-bar ui segment" style={{backgroundColor:"#202020"}}>
          {/* anytime the form submits we call onFormSubmit */}
          <form onSubmit={this.daFormSubmit} className="ui form">
            <div className="field">
              <label style={{color: "#fff"}}>Video Search</label>
              <input type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              />
            </div>
          </form>
        </div>
)
   }
 }


export default SearchBar;
