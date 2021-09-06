import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
  return (
    <div>
      <div class="container py-3" id="aboutMe">
            <div class="row heading">
                <div class="col-4">
                    <div class="card">
                        <img src="images/seniorPortrait.jpeg" class="card-img-bottom" alt=""></img>
                    </div>
                </div>
                <div class="col-8">
                    <div class="card">
                        <h5 class="card-header font-head change text-light">Alec McGlone</h5>
                        <div class="card-body change">
                            <h5 class="card-title font-head text-light">About Me</h5>
                            <p class="card-text font-text text-light">I am currently a student of the UConn Coding 
                                Bootcamp for Full Stack Web Development. My goals are to learn efficient ways to build 
                                multifaceted user driven applications. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
