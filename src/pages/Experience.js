import React from "react";

function Experience() {
    return (
        <React.Fragment>
            <div className="min-h-screen">
                <div className="container py-5">
                    <h1 className="text-center mb-5">Experience</h1>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card mb-5">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Web Developer <span className="h6"></span></h5>
                                    <p className="mb-0"> 2021 - PRESENT</p>
                                    <small>Junior Web developer able to build a Web presence from the ground up -- from concept, navigation, layout and programming to HTML and CSS.
Skilled at writing well-designed, testable and efficient code using current best practices in Web development.
Fast learner, hard worker who is proficient in an array of scripting languages and multimedia Web tools.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    {<div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Internship <span className="h6">At Coding Gujju</span></h5>
                                    <p className="mb-0">JUNE - 2022</p>
                                    <small>Worked and Experienced on figma, css, html, reactjs, nodejs</small>
                                </div>
                            </div>
                        </div>
                    </div> }
                </div>
            </div>
        </React.Fragment>
    );
}

export default Experience;