import React from "react"
import styled from 'styled-components'

const Wrap = styled.div`
  padding: 3em 4em;
`

export default () => <div>
  <Wrap>
    Hello World
    <form method="post" netlify-honeypot="bot-field" data-netlify="true">
      <input type="hidden" name="bot-field" />
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Phone:
        <input type="int" name="phone" />
      </label>
      <label>
        Email:
        <input type="text" name="email" />
      </label>
      <label>
        Subject:
        <input type="subject" name="subject" />
      </label>
      <label>
        Message:
        <textarea name="message">
        </textarea>     
      </label>
      <button type="submit">Submit</button>
    </form>
  </Wrap>
</div>
