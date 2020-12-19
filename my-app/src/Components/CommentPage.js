import React from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Form, FormGroup } from 'react-bootstrap';
class CommentPage extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      content: '',
      comments: [],
      ComShown: 1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  componentDidMount() {
    gsap.from('.comment-container', {
      duration: 1.5,
      opacity: 0,
      delay: 0.5,
    });
  }
  revealCom = () => {
    gsap.to(".comment-show", {
      duration: 0.5,
      y: 0,
      height: '50vh',
    });
    gsap.to('.show', {
      duration: 0.5,
    });
    let InfoShown = { ...this.state.ComShown };
    InfoShown = 1;
    this.setState({ ComShown: InfoShown });
  }

  hideCom = () => {
    gsap.to(".comment-show", {
      duration: 0.5,
      y: 1000,
      height: 0,
    });
    gsap.to('.show', {
      duration: 0.5,
    });
    let InfoShown = { ...this.state.ComShown };
    InfoShown = 0;
    this.setState({ ComShown: InfoShown });
  }

  runCommentAnimation = () => {
    this.fetchComment();
    if (this.state.ComShown === 0) {
      this.revealCom();
    }
    else {
      this.hideCom();
    }
  }

  fetchComment() {
    const Com = async () => {
      const response = await fetch('http://localhost:4000/findComment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      const Comlist = await response.json();
      Promise.resolve(Comlist).then((value) => {
        if (value.length == 0) {
          alert('Get Commentlist failed, checking you network')
        } else {
          this.state.comments = value;
        }
      });
    }
    Com();
  }

  handleSubmit(e) {
    e.preventDefault();
    var flag = 1;
    const data = { title: this.state.title, content: this.state.content }
    console.log(JSON.stringify(data));
    fetch('http://localhost:4000/addComment', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    });
    if(this.state.title == ''){alert("The title cannot be null"); flag = 0;}
    if(this.state.content == ''){alert("The content cannot be null"); flag = 0;}
    if(flag){
      this.fetchComment();
      this.props.history.push('/comment');
    }else{
      alert("Submit Failed");
    }
  }
  render() {
    var Com = [];
    if (this.state.comments) {
      for (var i = 0; i < this.state.comments.length; i++) {
        Com.push(<h3 className="comment-dom">{this.state.comments[i].title} : {this.state.comments[i].content}</h3>);
      }
    }
    return (
      <>
        <div className="comment-container">
          <div className="home-button">
            <div className="home-button-container">
              <Link to='/mainpage'><button className="home-arrow"></button></Link>
              <button className="home">Home</button>
            </div>
          </div>
          <div className="center-container">
            <h2 className="welcome-text">WELCOME TO THE COMMENT BAR</h2>
            <div className="comment-pull">
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <label className="comment-label">Title</label>
                  <br />
                  <input name="title" type="text" className="comment-text-title" onChange={this.handleChange} />
                </FormGroup>
                <br />
                <FormGroup>
                  <label className="comment-label">Content</label>
                  <br />
                  <textarea name="content" type="text" className="comment-text-content" onChange={this.handleChange} />
                </FormGroup>
                <br />
                <Form.Group>
                  <button className="grey-button-like">Submit</button>
                </Form.Group>
              </Form>
            </div>
          </div>
          <br />
          <div className="show">
            <button className="grey-button-like" onClick={this.runCommentAnimation}>Show Previous Comment</button>
          </div>
          <div className="comment-show">
            <div className="comment-playground">{Com}</div>
          </div>
        </div>
      </>
    )
  }
}
export default CommentPage;