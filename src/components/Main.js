import PropTypes from 'prop-types'
import React from 'react'
import code from '../images/code.svg'
import infra from '../images/infra.svg'
import mtnc from '../images/maintenance.svg'
import pic03 from '../images/pic03.jpg'
import nodejs from '../images/nodejs.png'
import python from '../images/python.png'
import aws from '../images/aws.png'
import tf from '../images/terraform.svg'
import jk from '../images/jenkins.png'
import docker from '../images/docker.png'

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/.netlify/functions/send-contact-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    })
      .then(() => {
        form.innerHTML += `<div class="thanks"><h3>Thank you for the email! I'll be in contact<h3></div>`;
      })
      .catch((error) => alert("Error " + error))
  }

  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Experience</h2>
          <span className="image tool">
            <img src={code} alt="" />
            <span className="text">
              <h3>Coding</h3>
              <p>
                Since 2017, I've worked on Frontend and Backend development, from
                scripting to fully fledged applications. My toolbelt includes Java, NodeJS 
                and Python. 
              </p>
            </span>
          </span>

          <span className="image tool">
            <img className="imageAbove" src={infra} alt="" />
            <span className="textLeft">
              <h3>Infrastructure</h3>
              <p>
                I also have experience with building architecture on the cloud, mainly
                with AWS tools, and a little bit with GCP services. I'm very keen on IaaC, 
                so I've implemented Terraform, the Serverless framework and more recently, 
                Troposphere (Cloudformation). 
              </p>
            </span>
            <img className="imageBelow" src={infra} alt="" />
          </span>

          <span className="image tool">
            <img src={mtnc} alt="" />
            <span className="text">
              <h3>DevOps</h3>
              <p>
              Aside from that, I really enjoy working on the DevOps side: CI/CD 
              pipelines, server maintenance and process automation are some of the
              tasks I do almost every day. 
            </p>
            </span>
            
          </span>

          <h3 className="used">Used Tools</h3>

          <span className="toolbar">
            <div className="toollogo">
              <a className="link" target="_blank" href="https://nodejs.org/en/"><span className="icon"><img src={nodejs} alt="" /></span></a>
            </div>
            <div className="toollogo">
              <a className="link" target="_blank" href="https://www.python.org/"><span className="icon"><img src={python} alt="" /></span></a>
            </div>
            <div className="toollogo">
              <a className="link" target="_blank" href="https://aws.amazon.com/"><span className="icon"><img src={aws} alt="" /></span></a>
            </div>
            <div className="toollogo">
              <a className="link" target="_blank" href="https://www.terraform.io/"><span className="icon"><img src={tf} alt="" /></span></a>
            </div>
            <div className="toollogo">
              <a className="link" target="_blank" href="https://jenkins.io/"><span className="icon"><img src={jk} alt="" /></span></a>
            </div>
            <div className="toollogo">
              <a className="link" target="_blank" href="https://www.docker.com/"><span className="icon"><img src={docker} alt="" /></span></a>
            </div>
          </span>
          
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Who am I?</h2>
          <span className="image main">
            <img src={pic03} alt="personal photo" />
          </span>
          <p>
            My name is Tatiana Barrios. I'm an Electronics Engineer with 2 years of experience on Backend 
            development and infrastructure support, who likes to participate on the build up and 
            growth of software projects. Big fan of singing while programming, doing yoga, long 
            walks and crocheting. If you want to know more about me, you can download my resume 
            on the icon below.
          </p>
          <div className="logo">
            <span className="tooltiptext">Download resume.pdf</span>
            <a href="https://drive.google.com/open?id=1WSENL4JWIPPRsDU4yAdjKa8ayYMXsrMv" target="_blank"><span className="icon fa-file-pdf-o"></span></a>
          </div>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Mail Me</h2>
          <form name="contact" method="post" action="/thanks/" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={this.handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <div hidden aria-hidden="true">
              <label>
                Don’t fill this out if you're human: 
                <input name="bot-field" onChange={this.handleChange}/>
              </label>
            </div>
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" onChange={this.handleChange}/>
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" onChange={this.handleChange}/>
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" onChange={this.handleChange}></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/tatiana-barrios-montenegro-b80415127/"
                className="icon fa-linkedin"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/tiannymonti" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
           <li>
              <a
                href="https://twitter.com/villaintianny"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
