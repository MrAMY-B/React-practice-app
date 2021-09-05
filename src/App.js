import React,{Component} from 'react'
import './App.css';
import MyNavbar from './Header/MyNavbar';
import { BrowserRouter as Router, } from 'react-router-dom'

import MyFooter from './Footer/MyFooter';
import { Col, Container, Row } from 'react-bootstrap';
import MyRouterSwitch from './AllRoutes/MyRouterSwitch';
import AdminSideNav from './SideNav/AdminSideNav';
import UserSideNav from './SideNav/UserSideNav';
import DefaultSideNav from './SideNav/DefaultSideNav';


class App extends Component{
    constructor(props){
      super(props);

      this.state=({
        user_type:"ADMIN"
      })

      this.changeUser = ()=>{
        if(this.state.user_type==='ADMIN')
          this.setState({user_type:'USER'})
        else if(this.state.user_type==='USER')
          this.setState({user_type:'DEFALUT'})
        else
          this.setState({user_type:'ADMIN'})

        
      } 

    }
  render(){
  return (
      <div className="App">
        <Router>

           <MyNavbar changeUser={this.changeUser}/>

            <Container fluid>

              <Row>
                  <Col className="col-lg-2 py-3 col-md-3 d-md-block d-none bg-light border-end min-vh-100">
                        {this.state.user_type === 'ADMIN' ?  <AdminSideNav /> : this.state.user_type ==='USER' ? <UserSideNav/> : <DefaultSideNav />}
                  </Col>
                  <Col className="col-lg-10 col-md-9 py-3">
                    <MyRouterSwitch/>
                  </Col>
              </Row>

             
            </Container>

          <MyFooter />
          
        </Router>
      </div>
    )
  }
}

export default App;
