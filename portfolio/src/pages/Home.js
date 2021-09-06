import React from 'react';

export default function Home() {
  return (
    <div>
      <header>
        {/* <!-- As a link to sections of the page --> */}
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark nav-tabs font-head">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Full Stack Web Development</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#aboutMe">About Me</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                                aria-expanded="false">Featured Projects</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#recipes">Cocktail and Drink Recipes</a></li>
                                <li><a class="dropdown-item" href="#codequiz">Code Quiz</a></li>
                                <li><a class="dropdown-item" href="#worksched">WorkDay Planner</a></li>
                                <li><a class="dropdown-item" href="#weather">Weather Dashboard</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#foot">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    </div>
  );
}
