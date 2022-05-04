import React from 'react';

export default class Login extends React.Component {
	render() {
		return (
			<div className="container" id="login">
				<div className="card bg-dark border-info">
					<div className="card-body text-info">
						<h3 className="card-title">Log In</h3>
              <div className="form-group">
                <div className="input-container">
                  <label>Username </label>
                  <br></br>
                  <input type="text" className="form-control"></input>
                </div>
                <div className="input-container">
                  <label>Password </label>
                  <br></br>
                  <input type="password" className="form-control"></input>
                </div>
                <br></br>
                <div className="button-container">
                  <button className="btn btn-info">Login</button>
                </div>
              </div>
					</div>
				</div>
			</div>
		);
	}
}