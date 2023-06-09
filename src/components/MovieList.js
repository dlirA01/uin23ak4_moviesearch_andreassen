import React from 'react';
import {NavLink} from "react-router-dom";

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie) => (
                <section className="movie" key={movie.imdbID}>
                    <img className="movie-blur" src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Poster+Available"} alt={movie.Title} />
                    <div className="movie-left">
                        <div className="movie-left-rating">
                            <p className="movie-left-rating-text">
                                <svg className="movie-left-rating-text-icon" viewBox="0 0 24 24" version="1.1">
                                    <g id="star-ico-outer" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                                        <g id="star-ico" transform="translate(3.000000, 3.000000)" stroke-width="1.5">
                                            <path d="M9,0 C6.96384545,0 6.77134103,3.54652262 5.55911318,4.79957421 C4.34688533,6.05262581 0.578198764,4.61991709 0.0545867365,6.84402682 C-0.467925266,9.06927362 2.92235261,9.82428837 3.34036221,11.7334296 C3.76057187,13.6425708 1.68922429,16.3249199 3.45916494,17.6598406 C5.2291056,18.9936242 7.13434937,15.9747022 9,15.9747022 C10.8656351,15.9747022 12.7708788,18.9936242 14.5408195,17.6598406 C16.3107602,16.3249199 14.2405126,13.6425708 14.6596222,11.7334296 C15.0787319,9.82428837 18.4679097,9.06927362 17.9453977,6.84402682 C17.4228857,4.61991709 13.6530991,6.05262581 12.4419713,4.79957421 C11.2297434,3.54652262 11.036139,0 9,0 Z" id="Stroke-1"/>
                                        </g>
                                    </g>
                                </svg>
                                <span>{movie.imdbRating}</span>
                            </p>
                        </div>
                        <img className="movie-left-poster" src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Poster+Available"} alt={movie.Title} />
                        <img className="movie-left-poster-blur" src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Poster+Available"} alt={movie.Title} />
                    </div>
                    <div className="movie-details">
                        <div className="movie-details-inner">
                            <NavLink className="movie-details-inner-link" to="/movie" state={{ from: movie.imdbID }}>
                                <button className="movie-details-inner-button">
                                    <span>Mer om filmen</span>
                                </button>
                            </NavLink>
                            <h2 className="movie-details-inner-title">{movie.Title}</h2>
                            <p className="movie-details-inner-year"><span>Year:</span> {movie.Year}</p>
                            <p className="movie-details-inner-genre"><span>Genre:</span> {movie.Genre}</p>
                            <p className="movie-details-inner-director"><span>Director:</span> {movie.Director}</p>
                            <p className="movie-details-inner-actors"><span>Actors:</span> {movie.Actors}</p>
                            <p className="movie-details-inner-rating"><span>Rating:</span> {movie.imdbRating}</p>
                            <p className="movie-details-inner-awards"><span>Awards:</span> {movie.Awards}</p>
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
};

export default MovieList;