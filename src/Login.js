import React from "react";

export default function Login() {
  return (
    <div>
      <header class="header">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <a href="#" class="head-left float-left">
                <img src="assets/images/logo.svg" />
              </a>

              <div class="head-right float-right">
                <a href="#" class="head-icon">
                  <i class="far fa-bell"></i>
                </a>

                <a href="#" class="head-icon">
                  <i class="far fa-user"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="page-header">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <nav class="sec-nav">
                <li class="sec-item">
                  <a href="#">Home</a>
                </li>

                <li class="sec-item active" aria-current="page">
                  My Account
                </li>
              </nav>

              <h1>My Account</h1>
            </div>
          </div>
        </div>
      </div>

      <div class="login-form">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="login">
                <div class="heading">
                  <h2>Login</h2>
                </div>

                <form action="#">
                  <label for="login-email">
                    Username or email address
                    <span class="required">*</span>
                  </label>
                  <input
                    type="email"
                    class="form-input form-wide"
                    id="login-email"
                    required
                  />

                  <label for="login-password">
                    Password
                    <span class="required">*</span>
                  </label>
                  <input
                    type="password"
                    class="form-input form-wide"
                    id="login-password"
                    required
                  />

                  <div class="form-footer">
                    <a class="float-left" href="signup.html">
                      SignUp
                    </a>

                    <a class="float-right" href="forgot_password.html">
                      Forgot Password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    class="btn log-btn btn-dark btn-md w-100"
                  >
                    LOGIN
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer class="footer">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <h2 class="foot-title">
                2021 © <a href="#">Buyamia.com</a>
              </h2>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
