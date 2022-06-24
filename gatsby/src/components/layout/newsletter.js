import React from 'react'
import styled from 'styled-components';
import addToMailchimp from "gatsby-plugin-mailchimp"


// markup
class Newsletter extends React.Component {

    constructor() {
      super()
      this.state = {
        message: "Recibe más información para leer en tu inbox. Prometemos no enviarte spam.",
        name: "",
        email: "",
        result: null,
      }
    }
  
    handleSubmit = e => {
      e.preventDefault()
      addToMailchimp(this.state.email, {
        FNAME: this.state.name,
      }) // listFields are optional if you are only capturing the email address.
        .then(data => {
  
          this.setState({ message: data.msg })
          // I recommend setting data to React state
          // but you can do whatever you want (including ignoring this `then()` altogether)
          console.log(data)
        })
        .catch(() => {
          // unnecessary because Mailchimp only ever
          // returns a 200 status code
          // see below for how to handle errors
        })
      this.setState({ email: "", name: "" })
    }
  
    handleEmailChange = event => {
      this.setState({ email: event.target.value })
    }
  
    handleNameChange = event => {
      this.setState({ name: event.target.value })
    }
  
    render() {
  
      return (
        <NewsletterWrapper>
            <h3 className='meta'>Newsletter</h3>
  
          <p>{this.state.message}</p>
  
  
          <div className='links'>
              <form className="subscribe" onSubmit={this.handleSubmit}>
                  <input
                      type="email"
                      value={this.state.email}
                      onChange={this.handleEmailChange}
                      name="EMAIL"
                      id="mce-EMAIL"
                      className="subscribe-email"
                      placeholder="Escribe tu correo aquí"
                      required
                  />
              <button className="btn_sent" type="submit">Enviar</button>
              </form>
          </div>
  
        </NewsletterWrapper>
  
      )
    }
  }


const  NewsletterWrapper = styled.section`
h3 {
    font-family: var(--mono);
    text-transform: uppercase;
    margin-bottom: 10px;
}
p {
    margin-bottom: 10px;
}
form {
    padding-bottom: 20px;
    input {
        display: block;
        width: 60%;
        border-top: none;
        border-right: none;
        border-left: none;
        border-bottom: solid 1px var(--gra);
        padding: 10px 0 10px 0;
        color: var(--orange);
        outline: none;
        margin-bottom: 10px;
        background-color: var(--gray);
        ::placeholder,
        ::-webkit-input-placeholder {
            color: var(--orange);
        }
        :-ms-input-placeholder {
            color: var(--orange);
        }
        @media (max-width: 680px) {
            width: 100%;
        }
    }
}

`

  
export default Newsletter