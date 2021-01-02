import React from "react"
import Layout from "../components/layout"

const ContactFormPage = () => (
  <Layout>
    <h1>We are excited to contact you back!</h1>

    <form name="contact" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />
 
    <table>
  <tr>
    <td><label>Name:</label></td>
    <td><input type="text" name="name" size="47" required /></td>
  </tr>
  <tr>
    <td><label>Contact No:</label> </td>
    <td><input type="text" name="contact no" size="47" required/> </td>
  </tr>
  <tr>
    <td><label>Email:</label> </td>
    <td><input type="email" name="email" size="47" required /> </td>
  </tr>
  <tr>
    <td><label>Message:</label></td>
    <td><textarea name="message" rows="6" cols="49" required></textarea> </td>
  </tr>
  <tr>
    <td colspan="2" align="center"><button type="submit">Send</button></td>    
  </tr>
</table>
 
</form>
  </Layout>
)
export default ContactFormPage