import React from "react";

export default function Signup() {
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
                  <h2>Sign Up</h2>
                </div>
                <form action="#">
                  <label for="register-name">
                    Company Name
                    <span class="required">*</span>
                  </label>
                  <input
                    type="email"
                    class="form-input form-wide"
                    id="register-email"
                    required
                  />
                  <label for="register-name">
                    Contact Person Full Name
                    <span class="required">*</span>
                  </label>
                  <input
                    type="email"
                    class="form-input form-wide"
                    id="register-email"
                    required
                  />

                  <div class="radio-btn">
                    <label for="register-name">
                      I am precisely described as
                      <span class="required">*</span>
                      <i
                        style={{ marginLeft: "10px" }}
                        class="far fa-question-circle"
                        title="help"
                      ></i>
                    </label>
                    <input
                      style={{ marginLeft: "30px", marginRight: "5px" }}
                      type="radio"
                      name="tab"
                      value="igotnone"
                      onclick="show1();"
                    />
                    Single Seller
                    <input
                      style={{ marginLeft: "20px", marginRight: "5px" }}
                      type="radio"
                      name="tab"
                      value="igottwo"
                      onclick="show2();"
                    />
                    Company
                    <div id="div1" class="hide">
                      <div class="radio-data">
                        <div class="radio-btn">
                          <p>I am a:</p>
                          <input type="radio" id="age1" name="age" value="30" />

                          <label for="age1">Manufacture</label>
                          <br />

                          <input type="radio" id="age2" name="age" value="60" />

                          <label for="age2">Trader</label>
                          <br />

                          <input
                            type="radio"
                            id="age3"
                            name="age"
                            value="100"
                          />

                          <label for="age3"> An Agent</label>
                          <br />
                          <br />
                        </div>

                        <label for="register-name">Company Type</label>
                        <input
                          list="browsers"
                          type="email"
                          class="form-input form-wide"
                          id="register-email"
                          required
                          placeholder="Type of Company"
                        />

                        <datalist id="browsers">
                          <option value="Companey" />
                          <option value="Companey" />
                          <option value="Companey" />
                          <option value="Companey" />
                          <option value="Companey" />
                        </datalist>

                        <label for="register-name">Business category</label>
                        <input
                          list="browsers"
                          type="email"
                          class="form-input form-wide"
                          id="register-email"
                          required
                          placeholder="Select Category"
                        />

                        <datalist id="browsers">
                          <option value="Consultant" />
                          <option value="Consultant" />
                          <option value="Consultant" />
                          <option value="Consultant" />
                          <option value="Consultant" />
                        </datalist>
                      </div>
                    </div>
                  </div>

                  <label class="radio-btn" for="register-name">
                    User Name
                  </label>

                  <input
                    type="email"
                    class="form-input form-wide"
                    id="register-email"
                    required
                    placeholder="Enter Your Email Id or Phone#"
                  />

                  <label for="register-password">
                    Password
                    <span class="required">*</span>
                    <i
                      style={{ marginLeft: "10px" }}
                      class="far fa-question-circle"
                      title="use one uppercase and one lowercase character"
                    ></i>
                  </label>

                  <input
                    type="password"
                    class="form-input form-wide"
                    id="register-password"
                    required
                  />

                  <label for="register-password">
                    Confirm Password
                    <span class="required">*</span>
                  </label>

                  <input
                    type="password"
                    class="form-input form-wide"
                    id="register-password"
                    required
                  />

                  <div class="form-footer mb-2">
                    <button
                      type="submit"
                      class="btn log-btn btn-dark btn-md w-100"
                    >
                      Register
                    </button>

                    <div class="form-footer text-center">
                      <a class="login-text" href="login.html">
                        Login
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
