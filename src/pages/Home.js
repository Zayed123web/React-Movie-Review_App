import React from "react";
import Header from "../component/Header";
import ReviewSlider from "../component/ReviewSlider";

export default function Home(movies) {
  const movi = movies.movies;
  return (
    <>
      <div class="main">
        <Header />
        <ReviewSlider movie={movi} />
        <div class="video">
          <iframe
            src="https://www.youtube.com/embed/2LqzF5WauAw"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div class="news">
          <div class="col-md-6 news-left-grid">
            <h3>Don’t be late,</h3>
            <h2>Book your ticket now!</h2>
            <h4>Easy, simple & fast.</h4>
            <a href="#">
              <i class="book"></i>BOOK TICKET
            </a>
            <p>
              Get Discount up to <strong>10%</strong> if you are a member!
            </p>
          </div>
          <div class="col-md-6 news-right-grid">
            <h3>News</h3>
            <div class="news-grid">
              <h5>Lorem Ipsum Dolor Sit Amet</h5>
              <label>Nov 11 2014</label>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo.
              </p>
            </div>
            <div class="news-grid">
              <h5>Lorem Ipsum Dolor Sit Amet</h5>
              <label>Nov 11 2014</label>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo.
              </p>
            </div>
            <a class="more" href="#">
              MORE
            </a>
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="more-reviews">
          <ul id="flexiselDemo2">
            <li>
              <img src="images/m1.jpg" alt="" />
            </li>
            <li>
              <img src="images/m2.jpg" alt="" />
            </li>
            <li>
              <img src="images/m3.jpg" alt="" />
            </li>
            <li>
              <img src="images/m4.jpg" alt="" />
            </li>
          </ul>
        </div>
        <div class="footer">
          <h6>Disclaimer : </h6>
          <p class="claim">
            This is a freebies and not an official website, I have no intention
            of disclose any movie, brand, news.My goal here is to train or
            excercise my skill and share this freebies.
          </p>
          <a href="example@mail.com">example@mail.com</a>
          <div class="copyright">
            <p>Developed By Zayed</p>
          </div>
        </div>
      </div>
    </>
  );
}
