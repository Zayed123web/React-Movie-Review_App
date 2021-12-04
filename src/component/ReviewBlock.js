import React from "react";

export default function ReviewBlock(movie) {
  console.log(movie.movies);
  const {
    title,
    release_date,
    vote_average,
    vote_count,
    original_language,
    poster_path,
  } = movie.movies;

  return (
    <div class="review">
      <div class="movie-pic">
        <a href="single.html">
          <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
        </a>
      </div>
      <div class="review-info">
        <a class="span" href="single.html">
          <i>{title}</i>
        </a>
        <p class="dirctr">
          <a href="">Language : {original_language} </a>Release : {release_date}
        </p>
        <p class="ratingview">Critic's Rating:</p>
        <div class="rating">
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
        </div>
        <p class="ratingview">&nbsp;{vote_average}/10</p>
        <div class="clearfix"></div>
        <p class="ratingview c-rating">Total Vote:</p>
        <div class="rating c-rating">
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
        </div>
        <p class="ratingview c-rating">&nbsp; {vote_count}</p>
        <div class="clearfix"></div>
        <div class="yrw">
          <div class="dropdown-button">
            <select
              class="dropdown"
              tabindex="9"
              data-settings='{"wrapperClass":"flat"}'
            >
              <option value="0">Your rating</option>
              <option value="1">1.Poor</option>
              <option value="2">1.5(Below average)</option>
              <option value="3">2.Average</option>
              <option value="4">2.5(Above average)</option>
              <option value="5">3.Watchable</option>
              <option value="6">3.5(Good)</option>
              <option value="7">4.5(Very good)</option>
              <option value="8">5.Outstanding</option>
            </select>
          </div>
          <div class="rtm text-center">
            <a href="#">REVIEW THIS MOVIE</a>
          </div>
          <div class="wt text-center">
            <a href="#">WATCH THIS TRAILER</a>
          </div>
          <div class="clearfix"></div>
        </div>
        <p class="info">
          CAST:&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Will
          Smith, Margot Robbie, Adrian Martinez, Rodrigo Santoro, BD Wong,
          Robert Taylor
        </p>
        <p class="info">
          DIRECTION: &nbsp;&nbsp;&nbsp;&nbsp;Glenn Ficarra, John Requa
        </p>
        <p class="info">
          GENRE:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Crime
        </p>
        <p class="info">DURATION:&nbsp;&nbsp;&nbsp; &nbsp; 1 hour 45 minutes</p>
      </div>
      <div class="clearfix"></div>
    </div>
  );
}
