import React from "react"
import Layout from "../components/layout"

const ContactFormPage = () => (
  <Layout>
    <h1>Contact</h1>

    <form 
    name="contact"
    method="post" 
    data-netlify="true" 
    data-netlify-honeypot="bot-field"
    action="/thank-you/"
>   <input type="hidden" name="form-name" value="contact" />
    <input type="hidden" name="bot-field" />
    <div>
        <input type="text" name="name" placeholder="Name" required />
        <br />
        <input type="email" name="email" placeholder="Email" required />
        <br />
        <input type="text" name="subject" placeholder="Subject" required />
        <br />
        <textarea name="message" required></textarea>
    </div>
    <div>
        <button type="submit">Send</button>
        <button type="reset">Clear</button>
    </div>
</form>
  </Layout>
)
export default ContactFormPage