import React from "react";
import {Link} from "react-router-dom";
import { observer } from "mobx-react";
import { observable, computed, action, decorate } from "mobx";

const Data = () => {
  return (
    <div>
    <Link to="/time" >back</Link>
    <div align='right'><Link to="/currency" >next</Link></div>
      <center><h3>Data</h3></center>
      <hr/>
      <UserList ></UserList>
    </div>
  );
}

class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {names: [],
      isLoading: false};
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole')
    .then(response => response.json())
          .then(data => this.setState({ names: data, isLoading: false }));  }

  render() {
    const persons = this.state.names.map(item => ({...item,fullName: `${item.first} ${item.last}` || ""}));
      if (this.state.isLoading) {
            return <p>Loading ...</p>;
          }
    return (
      <div >
        {persons.map((q) => <div>{q.fullName}</div>)}
      </div>
    );
  }
}
decorate(UserList,{
  state:observable
});
export default Data;
