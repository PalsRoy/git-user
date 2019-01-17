import React, { Component } from 'react';
import axios from 'axios';

class GitUsers extends Component{

  constructor(){
    super();
    this.state={users:[]};
  }

  componentDidMount(){
    axios.get('git.json')
    .then(({data}) => {
     console.log(data);
     this.setState({users:data});
    });


  }

  render(){
    const {users} = this.state;
    return(
    <div>
    {users && users.map((user) =>
      <table className="table">
       <tr>
        <td>{user.login}</td>
        <td><img src={user.avatar_url}/></td>
        <td>{user.repos_url}</td>
       </tr>
      </table>
    )}
    </div>
    );

  }


}

export default GitUsers;
