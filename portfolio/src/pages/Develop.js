import React from 'react';
import project1 from '../resources/images/project1.png';
import project2 from '../resources/images/century.png';
import project3 from '../resources/images/theTomFund.png';
import project4 from '../resources/images/codeQuiz.png';
import project5 from '../resources/images/workDaySched.png';
import project6 from '../resources/images/dynamicWeather.png';
import project7 from '../resources/images/noteTaker.png';
import project8 from '../resources/images/techBlog.png';
import project9 from '../resources/images/fitnessApp.png';
import project10 from '../resources/images/budget.png';
import project11 from '../resources/images/book.png';

export default function Blog() {
  return (
    <div>
      <main>
        <div class="container developed">
          {/* <!-- Showcase Project --> */}
          <div class="row align-items-center my-5" id="showcase">
            <div class="col-12">
              <div class="card border-danger" id="recipes">
                <img src={project1} class="card-img-top"
                  alt="showcase of cocktail and recipe generator"></img>
                <div class="card-body text-center color-card">
                  <h5 class="card-title font-head">Cocktail and Recipe Generator</h5>
                  <a href="https://adamspiegel.github.io/Group-Project-1/" target="_blank" class="btn btn-primary mx-3">Live
                    Webpage</a>
                  <a href="https://github.com/AdamSpiegel/Group-Project-1" target="_blank" class="btn btn-primary mx-3">Github
                    Repo</a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Project 2! --> */}
          <div class="container developed">
            {/* <!-- Showcase Project --> */}
            <div class="row align-items-center my-5" id="showcase" id='fitness'>
              <div class="col-12">
                <div class="card border-danger" id="recipes">
                  <img src={project2} class="card-img-top"
                    alt="showcase of 21stcenturyfitness project"></img>
                  <div class="card-body text-center color-card">
                    <h5 class="card-title font-head">21st Century Fitness</h5>
                    <h6>Full Stack Application</h6>
                    <a href="https://centuryfitness.herokuapp.com/" target="_blank" class="btn btn-primary mx-3">Live
                      Webpage</a>
                    <a href="https://github.com/Alec74/21stCenturyFitness" target="_blank" class="btn btn-primary mx-3">Github
                      Repo</a>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Project 3 --> */}
            <div class="row align-items-center my-5" id="showcase">
              <div class="col-12">
                <div class="card border-danger" id="fund">
                  <img src={project3} class="card-img-top"
                    alt="showcase of The Tom Fund"></img>
                  <div class="card-body text-center color-card">
                    <h5 class="card-title font-head">The Tom Fund</h5>
                    <h6>MERN Stack Application</h6>
                    <a href="https://thetomfund.herokuapp.com/" target="_blank" class="btn btn-primary mx-3">Live
                      Webpage</a>
                    <a href="https://github.com/Alec74/tommysFund" target="_blank" class="btn btn-primary mx-3">Github
                      Repo</a>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- CodeQuiz --> */}
            <div class="row featured">
              <div class="col-lg-4 col-sm-12 my-5">
                <div class="card border-info" id="codequiz">
                  <img src={project4} class="card-img-top" alt="showcase of code quiz"></img>
                  <div class="card-body text-center color-card">
                    <h5 class="card-title font-head">Code Quiz!</h5>
                    <a href="https://alec74.github.io/codeQuiz/" target="_blank" class="btn btn-primary mx-3">Live
                      Webpage</a>
                    <a href="https://github.com/Alec74/codeQuiz" target="_blank" class="btn btn-primary mx-3">Github
                      Repo</a>
                  </div>
                </div>
              </div>
              {/* <!-- Workday Scheduler --> */}
              <div class="col-lg-4 col-sm-12 my-5">
                <div class="card border-info" id="worksched">
                  <img src={project5} class="card-img-top" alt="showcase of work day scheduler"></img>
                  <div class="card-body text-center color-card">
                    <h5 class="card-title font-head">Workday Planner</h5>
                    <a href="https://alec74.github.io/workdayPlanner/" target="_blank" class="btn btn-primary mx-3">Live
                      Webpage</a>
                    <a href="https://github.com/Alec74/workdayPlanner" target="_blank" class="btn btn-primary mx-3">Github
                      Repo</a>
                  </div>
                </div>
              </div>
              {/* <!-- Weather Dashboard --> */}
              <div class="col-lg-4 col-sm-12 my-5">
                <div class="card border-info" id="weather">
                  <img src={project6} class="card-img-top" alt="showcase of weather dashboard"></img>
                  <div class="card-body text-center color-card">
                    <h5 class="card-title font-head">Weather Dashboard</h5>
                    <a href="https://alec74.github.io/weatherDashboard/" target="_blank" class="btn btn-primary mx-3">Live
                      Webpage</a>
                    <a href="https://github.com/Alec74/weatherDashboard" target="_blank" class="btn btn-primary mx-3">Github
                      Repo</a>
                  </div>
                </div>
              </div>
              {/* <!-- Note Taker --> */}
              <div class="col-lg-4 col-sm-12 my-5">
                <div class="card border-info" id="notes">
                  <img src={project7} class="card-img-top" alt="showcase of note taker"></img>
                  <div class="card-body text-center color-card">
                    <h5 class="card-title font-head">Note Taker</h5>
                    <a href="https://take-your-note.herokuapp.com/" target="_blank" class="btn btn-primary mx-3">Live
                      Webpage</a>
                    <a href="https://github.com/Alec74/NoteTaker" target="_blank" class="btn btn-primary mx-3">Github
                      Repo</a>
                  </div>
                </div>
              </div>
              {/* <!-- Tech Blog --> */}
              <div class="col-lg-4 col-sm-12 my-5">
                <div class="card border-info" id="blog">
                  <img src={project8} class="card-img-top" alt="showcase of tech blog"></img>
                  <div class="card-body text-center color-card">
                    <h5 class="card-title font-head">Tech Blog</h5>
                    <a href="https://tranquil-sierra-39705.herokuapp.com/" target="_blank" class="btn btn-primary mx-3">Live
                      Webpage</a>
                    <a href="https://github.com/Alec74/TechBlog" target="_blank" class="btn btn-primary mx-3">Github
                      Repo</a>
                  </div>
                </div>
              </div>

              {/* <!-- Fitness App --> */}
              <div class="col-lg-4 col-sm-12 my-5">
                <div class="card border-info" id="fitness2">
                  <img src={project9} class="card-img-top" alt="showcase of Fitness App"></img>
                  <div class="card-body text-center color-card">
                    <h5 class="card-title font-head">Fitness App</h5>
                    <a href="https://fitnessforyou.herokuapp.com/" target="_blank" class="btn btn-primary mx-3">Live
                      Webpage</a>
                    <a href="https://github.com/Alec74/fitnessApp" target="_blank" class="btn btn-primary mx-3">Github
                      Repo</a>
                  </div>
                </div>
              </div>
              {/* <!-- PWA Budget Tracker --> */}
              <div class="col-lg-4 col-sm-12 my-5">
                <div class="card border-info" id="budget">
                  <img src={project10} class="card-img-top" alt="showcase of budget tracker"></img>
                  <div class="card-body text-center color-card">
                    <h5 class="card-title font-head">PWA Budget Tracker</h5>
                    <h6>Progressive Web Application</h6>
                    <a href="https://vast-ocean-80593.herokuapp.com/" target="_blank" class="btn btn-primary mx-3">Live
                      Webpage</a>
                    <a href="https://github.com/Alec74/BudgetTracker" target="_blank" class="btn btn-primary mx-3">Github
                      Repo</a>
                  </div>
                </div>
              </div>

              {/* <!-- Book Search Engine --> */}
              <div class="col-lg-4 col-sm-12 my-5">
                <div class="card border-info" id="book">
                  <img src={project11} class="card-img-top" alt="showcase of Book Search Engine"></img>
                  <div class="card-body text-center color-card">
                    <h5 class="card-title font-head">Book Search Engine</h5>
                    <h6>MERN Stack Application</h6>
                    <a href="https://serene-inlet-26362.herokuapp.com/" target="_blank" class="btn btn-primary mx-3">Live
                      Webpage</a>
                    <a href="https://github.com/Alec74/BookSearchEngine" target="_blank" class="btn btn-primary mx-3">Github
                      Repo</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container backend" id='backend'>
            <div class="row featured">
              <div class="card col-lg-3 col-sm-12 my-5 mx-2" >
                <div class="card-header">
                  Dynamic Readme
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"><a href="https://github.com/Alec74/dynamicREADME" class='btn btn-primary mx-3' target="_blank">Github Repo</a></li>
                </ul>
              </div>
              <div class="card col-lg-3 col-sm-12 my-5 mx-2" >
                <div class="card-header">
                  Team Profile Generator
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"><a href="https://github.com/Alec74/TeamProfileGenerator" class='btn btn-primary mx-3' target="_blank">Github Repo</a></li>
                </ul>
              </div>

              <div class="card col-lg-3 col-sm-12 my-5 mx-2" >
                <div class="card-header">
                  ECommerce Backend
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"><a href="https://github.com/Alec74/ECommerceBackend" class='btn btn-primary mx-3' target="_blank">Github Repo</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div id="devSpacing"></div>
    </div>
  );
}
