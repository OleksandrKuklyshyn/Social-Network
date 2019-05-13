import React from "react";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div>
      <section class="landing">
        <div class="dark-overlay">
          <div class="landing-inner">
            <h1 class="x-large">Social Network</h1>
            <p class="lead">
              Create a profile/portfolio, share posts and get help from other
              people's
            </p>
            <div class="buttons">
              <Link to="/register" class="btn btn-primary">
                Sign Up
              </Link>
              <Link to="/login" class="btn btn-light">
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
