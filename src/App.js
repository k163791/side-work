import React from 'react';
import './App.css';
//Dont forget to import these components from react-Bootstrap
import { Navbar, Nav } from 'react-bootstrap';
class App extends React.Component {

  constructor(){
    super();
    this.state = {
      email: '',
      name: '',
      message: ''
    }
  }

// Now, here we now have to make requests to the server that is on aws, not on our localhost.

  onContact = (event) => {
    event.preventDefault();
    console.log(this.state.email);
    fetch('http://ec2-52-90-94-180.compute-1.amazonaws.com:3001/sendMail', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        name: this.state.name,
        message: this.state.message
      })
    }).then(response => response.json())
    .then(data => console.log(data));
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  onMessageChange = (event) => {
    this.setState({message: event.target.value});
  }

  render(){
    return (
      <div>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img src="logo.png" alt="logo" width="150px" height="50px"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home" style={{color: '#80A994'}}>Home</Nav.Link>
          <Nav.Link href="#about" style={{color: '#80A994'}}>About us</Nav.Link>
          <Nav.Link href="#services" style={{color: '#80A994'}}>Services</Nav.Link>
          <Nav.Link href="#contact" style={{color: '#80A994'}}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Navbar>

      <div className="jumbotron">
        <h3>WebSmartr - Home</h3>
      </div>

        <div className="container">
          <div id="home">
            <h2>Home Page</h2>
            <p>This is the Home Page</p>
          </div>
          <br />
          <br />
          <div id="about">
            <h2>About Us</h2>
            <br/>
            <img src="austin.jpg" alt="austin" width="100%" height="300px"/>
            <br/>
            <p>
            As a team of software engineers, designers and devlopers; we assess your needs specificly and never give a general solution.
            Our diverse team allows an in depth perspective on the scope of your ideas, projects and goals for an application build.
            Our engineers will help make sure your ideas are built structurally sound and lightweight allowing super fast load times.
            We want your project to unique and secure and more importantly tailored towards your brand. Our designers will ensure your unique brand will stick out amongst the rest. As well as the implementing of features no other competitor has.
            The developers take all of the schemes and designs of your ideas and code them into reality. Through proven methodical practices of designing and developing applications. We promise your app will stand out efficiently and effectively.</p>
          </div>
          <br />
          <br />
          <div id="services">
            <h2>Services</h2>
            <div className="card-group">
              <div className="card">
                <img className="card-img-top" alt="" src="plash.jpg"/>
                <div className="card-header">Data Analysis</div>
                <div className="card-body">
                As a team of experienced engineers; we can provide various methods of researching and analysing data. We can build proprietary scripts and programs that exectute on your data sets and will relay the statistics and categories you need to scope in on.</div>
                <div className="card-footer"></div>
              </div>
              <div className="card">
                <img className="card-img-top" alt="" src="cement.jpg"/>
                <div className="card-header">Application Infrastructure</div>
                <div className="card-body">Our mobile and web apps are built with a robust infastructure that keeps maintaining the app simple. Day to day screening allows us to ensure your app will never be offline unless intended to be. Our apps will always scalable as you grow and progress as a company. The security and features of our apps will never be jeopardized because of our 24/7 hour support team.</div>
                <div className="card-footer"></div>
              </div>
              <div className="card">
                <img className="card-img-top" alt="" src="lash.jpg"/>
                <div className="card-header">Website Development</div>
                <div className="card-body">
                  From big business to small business. We have you covered on the size and design of a website you require for your business. From administrative backends to simple landing pages for a product or service. No website is too big or small to help you complete your online presence goals.
                </div>
                <div className="card-footer"></div>
              </div>
              <div className="card">
                <img className="card-img-top" alt="" src="tran.jpg"/>
                <div className="card-header">Mobile App Design</div>
                <div className="card-body">
                  The world is moving in different directions. It is highly probably your business would compete better with a mobile application. We can help you assess that very question. Will a mobile app bring you more business? Either way having a mobile app tailored towards your business will always be a benefit. It allows users who primarily take actions on their mobile device to seamlessly access your business from their device.
                </div>
                <div className="card-footer"></div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div id="contact">
            <h2>Contact Us</h2>
            <form onSubmit={this.onContact}>
              <label>Name: </label>
              <input onChange={this.onNameChange} name="email" placeholder="Name" type="text" className="form-control" required/>
              <label>Email: </label>
              <input onChange={this.onEmailChange} placeholder="Email" type="email" className="form-control" required/>
              <label>Message: </label>
              <textarea onChange={this.onMessageChange} type="text" className="form-control" placeholder="Message"></textarea>
              <br/>
              <button className="btn btn-primary" type="submit">Submit</button>
            </form>
          </div>
          <br/>
          <br/>
        </div>
      </div>
    );
  }

}

export default App;
