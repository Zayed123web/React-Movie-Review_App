import Footer from "../component/Footer";
import HeaderSingle from "../component/HeaderSingle";
import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <div class="main">
        <div class="error-content">
          <HeaderSingle />
          <div class="error-404 text-center">
            <h2>404</h2>
            <p>Sorry this was unexpected</p>
            <Link class="b-home" to="/">
              Back to Home
            </Link>
          </div>
          <Footer />
        </div>
        <div class="clearfix"></div>
      </div>
    </>
  );
}
