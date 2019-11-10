import React, { Component } from 'react'
import "./images/icons/favicon.ico"
import "./vendor/bootstrap/css/bootstrap.min.css"
import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css"
import "./fonts/iconic/css/material-design-iconic-font.min.css"
import "./vendor/animate/animate.css"
import "./vendor/css-hamburgers/hamburgers.min.css"
import "./vendor/animsition/css/animsition.min.css"
import "./vendor/select2/select2.min.css"
import "./vendor/daterangepicker/daterangepicker.css"
import "./css/util.css"
import "./css/main.css"



export default class Login extends Component {
  render() {
    return (
      <div>
        	
	<div className="limiter">
		<div className="container-login100 background-img">
			<div className="wrap-login100">
				<form className="login100-form validate-form">
					<span className="login100-form-logo">
						<i className="zmdi zmdi-landscape"></i>
					</span>

					<span className="login100-form-title p-b-34 p-t-27">
						Log in
					</span>

					<div className="wrap-input100 validate-input" data-validate = "Enter username">
						<input className="input100" type="text" name="email" placeholder="Email" onChange={this.props.change}/>
						<span className="focus-input100" data-placeholder="&#xf207;"></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate="Enter password">
						<input className="input100" type="password" name="password" placeholder="Password" onChange={this.props.change}/>
						<span className="focus-input100" data-placeholder="&#xf191;"></span>
					</div>

					<div className="contact100-form-checkbox">
						<input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
						<label className="label-checkbox100" >
							Remember me
						</label>
					</div>
          <a className='txt1' href="/signup">
              New here? Signup
            </a>
            <br/>
					<div className="container-login100-form-btn">
						<button className="login100-form-btn" onClick={this.props.login}>
							Login
						</button>
					</div>

					<div className="text-center">
						<a className="txt1" href="#">
							Forgot Password?
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
	

	<div id="dropDownSelect1"></div>

      </div>
    )
  }
}