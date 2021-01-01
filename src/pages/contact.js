import React from "react"
import Layout from "../components/layout"

const ContactFormPage = () => (
  <Layout>
    <h1>Contact</h1>

    <form name="contact" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />
 
    <table>
  <tr>
    <td><label>Your Name:</label></td>
    <td><input type="text" name="name" /></td>
  </tr>
  <tr>
    <td><label>Your Contact No:</label> </td>
    <td><input type="text" name="contactno" /> </td>
  </tr>
  <tr>
    <td><label>Your Email:</label> </td>
    <td><input type="email" name="email" /> </td>
  </tr>
  <tr>
    <td><label>Message:</label></td>
    <td><textarea name="message"></textarea> </td>
  </tr>
  <tr>
    <td colspan="2" align="center"><button type="submit">Send</button></td>    
  </tr>
</table>
 
</form>
  </Layout>
)
export default ContactFormPage