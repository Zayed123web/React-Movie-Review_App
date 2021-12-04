import React from "react";

export default function ReviewSlider(movie) {
  console.log(movie.mov);
  return (
    <div class="review-slider">
      <ul id="flexiselDemo1">
        <li>
          <img src="images/r1.jpg" alt="" />
        </li>
        <li>
          <img src="images/r2.jpg" alt="" />
        </li>
        <li>
          <img src="images/r3.jpg" alt="" />
        </li>
        <li>
          <img src="images/r4.jpg" alt="" />
        </li>
        <li>
          <img src="images/r5.jpg" alt="" />
        </li>
        <li>
          <img src="images/r6.jpg" alt="" />
        </li>
      </ul>
    </div>
  );
}
