import React, {Component} from 'react'
import axios from 'axios'
import Main from '../template/Main'
 
const headerProps = {
  icon: 'users',
  title: 'Users',
  subtitle: 'User Registration: Create, Read, Update, Delete'
}
 
const baseUrl = 'http://localhost:3001/users'
 
const initialState = {
  user: { name: '', email: ''},
  list: []
}
 
export default class UserCrud extends Component {
  state = { ...initialState }
 
  componentWillMount() {
    axios(baseUrl).then(resp => {
      this.setState({list: resp.data})
    })
  }
 
  //clear inputed data (only user) when form is submitted
  clear() {
    this.setState({ user: initialState.user})
  }
 
  //create a new or update an existing user
  //when creating: post request - user does not have an id yet
  //when updating: put request
  save() {
    const user = this.state.user
    const method = user.id ? 'put' : 'post'
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
    axios[method](url, user)
      .then(resp => {
        const list = this.getUpdatedList(resp.data) //resp.data is the user that was obtained from json server
        this.setState({user: initialState.user, list})
      })
  }
 
  getUpdatedList(user){
    const list = this.state.list.filter(u => u.id !== user.id)
    list.unshift(user)
    return list
  }
 
  updateField(event){
    const user = {...this.state.user}
    //input name to search for the property inside the state
    //in this case user[name and email] 
    user[event.target.name] = event.target.value
    this.setState({user})
  }
 
  renderForm() {
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Name</label>
              <input 
                type="text" 
                className="form-control" 
                name="name" 
                value={this.state.user.name}
                onChange={e => this.updateField(e)}
                placeholder="Inform the name..." />
            </div> 
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>E-mail</label>
              <input 
                type="text" 
                className="form-control" 
                name="email" 
                value={this.state.user.email}
                onChange={e => this.updateField(e)}
                placeholder="Inform the e-mail..." />
            </div> 
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-primary" onClick={e => this.save(e)}>Save</button>
            <button className="btn btn-secondary ml-2" onClick={e => this.clear(e)}>Cancel</button>
          </div>
        </div>  
      </div>
    )
  }
 
  load(user) {
    this.setState({user})
  }
 
  remove(user) {
    axios.delete(`${baseUrl}/${user.id}`).then(resp => {
      const list = this.state.list.filter(u => u !== user)
      this.setState({list})
    })
  }
 
  renderTable() {
    return (
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>E-mail</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    )
  }
 
  renderRows() {
    return this.state.list.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <button className="btn btn-warning"
              onClick={() => this.load(user)}>
              <i className="fa fa-pencil"></i>
            </button>
            <button className="btn btn-danger ml-2"
              onClick={() => this.remove(user)}>
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      )
    })
  }
 
  render() {
    return (
      <Main {...headerProps}>
        {this.renderForm()}
        {this.renderTable()}
      </Main>
    )
  }
} 