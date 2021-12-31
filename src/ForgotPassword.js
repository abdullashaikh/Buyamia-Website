import React from "react";

export default function ForgotPassword() {
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
              <div class="feature-box border-top-primary">
                <div class="feature-box-content">
                  <form class="mb-0" action="#">
                    <p>
                      Lost your password? Please enter your username or email
                      address. You will receive a link to create a new password
                      via email.
                    </p>
                    <div class="form-group mb-0">
                      <label for="reset-email" class="font-weight-normal">
                        Username or email
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="reset-email"
                        name="reset-email"
                        required=""
                      />
                    </div>

                    <div class="form-footer">
                      <a href="/Login">Click here to login</a>

                      <button
                        type="submit"
                        class="btn btn-md font-weight-normal text-transform-none float-right foot-btn"
                      >
                        Reset Password
                      </button>
                    </div>
                  </form>
                </div>
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
