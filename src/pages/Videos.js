import React from "react";
import HeaderSingle from "../component/HeaderSingle";
import VideoBlock from "../component/VideoBlock";

export default function Videos() {
  return (
    <div class="main">
      <div class="video-content">
        <HeaderSingle />
        <div class="right-content">
          <div class="right-content-heading">
            <div class="right-content-heading-left">
              <h3 class="head">Latest Colletcion of videos</h3>
            </div>
          </div>
          <link
            href="css/popuo-box.css"
            rel="stylesheet"
            type="text/css"
            media="all"
          />

          <div class="content-grids">
            <div id="small-dialog" class="mfp-hide">
              <iframe
                src="https://www.youtube.com/embed/2LqzF5WauAw"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>

            <VideoBlock />
            <VideoBlock />
            <VideoBlock />

            <div class="clearfix"> </div>
            <div class="pagenation">
              <ul>
                <li>
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">5</a>
                </li>
                <li>
                  <a href="#">Next</a>
                </li>
              </ul>
            </div>
            <div class="clearfix"> </div>
          </div>
        </div>
        <div class="clearfix"> </div>
      </div>
    </div>
  );
}
