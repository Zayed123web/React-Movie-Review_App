import React from "react";

export default function HeaderSingle() {
  return (
    <>
      <div class="top-header span_top">
        <div class="logo">
          <a href="index.html">
            <img src="images/logo.png" alt="" />
          </a>
          <p>Movie Theater</p>
        </div>
        <div class="search v-search">
          <form>
            <input
              type="text"
              value="Search.."
              onfocus="this.value = '';"
              onblur="if (this.value == '') {this.value = 'Search..';}"
            />
            <input type="submit" value="" />
          </form>
        </div>
        <div class="clearfix"></div>
      </div>
    </>
  );
}
