import React from "react";

export default function VideoBlock() {
  return (
    <div class="content-grid last-grid">
      <a class="play-icon popup-with-zoom-anim" href="#small-dialog">
        <img src="images/gridallbum1.jpg" title="allbum-name" />
      </a>
      <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
      <ul>
        <li>
          <a href="#">
            <img src="images/likes.png" title="image-name" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="images/views.png" title="image-name" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="images/link.png" title="image-name" />
          </a>
        </li>
      </ul>
      <a class="button play-icon popup-with-zoom-anim" href="#small-dialog">
        Watch now
      </a>
    </div>
  );
}
