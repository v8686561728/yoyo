import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
 


export default class index extends Component {
     responseFacebook = (response) => {
        console.log(response);
      }
   responseGoogle = (response) => {
        console.log(response);
      }
    render() {
        return (
            <div>
               
                <FacebookLogin
    appId="1984794631826117"
    autoLoad={true}
    fields="name,email,picture"
    callback={this.responseFacebook}
    cssClass="my-facebook-button-class"
    icon="fa-facebook"
  />,
           <GoogleLogin
    clientId="170084332667-mfcodrlla6eq1mkqu68kf4289sl11pe6.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={this.responseGoogle}
    onFailure={this.responseGoogle}
    cookiePolicy={'single_host_origin'}
  />,  
            </div>
        )
    }
}
