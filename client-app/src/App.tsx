import React, {Component} from 'react';
import { Header, Icon } from 'semantic-ui-react'
import './App.css';
import axios from 'axios';

class App extends Component {

  state = {
    values: []
  }

  componentDidMount(){
    axios.get("http://localhost:5000/api/values", {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then((response) => {
        //console.log(response);
        this.setState({
          values : response.data
        })
      })

    // this.setState({
    //   values : [{id: 1, name: 'Saikat Ghosh'},{id: 2, name: 'Sayantika Ghosh'}, {id: 3, name: 'Priyam Roy Ghosh'}]
    // })
  }

  render(){
    return (
      <div>

          <Header as='h2'>
              <Icon name='users' />
              <Header.Content>User List</Header.Content>
          </Header>
          
          <ul>
            {this.state.values.map((value: any) => (
              <li key={value.id}>{value.name}</li>
            ))}
          </ul>
        
      </div>
    );
  }
  
}

export default App;
