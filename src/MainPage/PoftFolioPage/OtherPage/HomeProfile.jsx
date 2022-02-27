import React, { Component } from 'react';
import ME from '../../assets/ME.jpeg'

export default class Home extends Component {
    
    render() {
        return (
            <div className='container mt-5'>
                {/* <div className='' style={{ marginLeft: '18vw', }}> */}
                <div className=' border border-solid p-3' style={{ marginTop: '100px' }}>
                    <div className="row">


                        <div className="col-8">
                            <div className="text-danger">
                                <ul style={{ listStyle: 'none' }}>
                                    <li>
                                        <h1><u>Introduction :-</u></h1>
                                        <ol type='1'>
                                            <li>This  is  Jitendra  Maurya. </li>
                                            <li>A passionate Programmer.</li>
                                            <li>Persuing B.Sc. in Computer Science</li>
                                        </ol>
                                    </li>
                                    <hr />
                                    <li className='mt-2'>
                                        <h1><u>Education:-</u></h1>
                                        <ol type='1'>
                                            <li>
                                                Graduation
                                                <ol className='mb-2' type='i'>
                                                    <li>
                                                        Persuing B.Sc. in computer science with 49.05%
                                                    </li>
                                                </ol>
                                            </li>
                                            <li>
                                                Intermediate
                                                <ol className='mb-2' type='i'>
                                                    <li>
                                                        Passed 12th with 86.00%
                                                    </li>
                                                </ol>
                                            </li>
                                            <li>
                                                Highschool
                                                <ol className='mb-2' type='i'>
                                                    <li>
                                                        Passed 10th with 84.00%
                                                    </li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </li>
                                    <hr />
                                    <li>
                                        <h1><u>Skills :-</u></h1>
                                        <ol type='1'>
                                            <li>
                                                <h3>Main Skills</h3>
                                                <ol type='i'>
                                                    <li>HTML5/CSS3 </li>
                                                    <li>Bootstrap-5</li>
                                                    <li>Reactjs, JavaScript</li>
                                                </ol>
                                            </li>
                                            <li>
                                                Additional Knowledge
                                                <ol type='i'>
                                                    <li>Python</li>
                                                    <li>
                                                        <p>Python's Library</p>
                                                        <ol type='a'>
                                                            <li>Numpy, Pandas</li>
                                                            <li>Matplotlib, Seaborn</li>
                                                        </ol>
                                                    </li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </li>
                                    <hr />
                                    <li>
                                        <h1><u>Projects :-</u></h1>
                                        <ol type='1'>
                                            <li>Build Todo list Prgramme in reatjs. </li>
                                            <li>Build a portfolio website.</li>
                                            <li>Build a Facebook like application</li>
                                        </ol>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-4 ">
                            <div className="card border border-solid" style={{borderLeft:"-25px"}}>
                                <div className="card-body">
                                    <h1 className="card-title mt-2 text-success">
                                        <b><u> Jitendra Maurya</u></b>
                                    </h1>
                                    <img src={ME} alt="phto" className="card-img-top" style={{ height: "20rem" }} />
                                    <div className='border border-danger text-center p-2 mt-2'>
                                        <p className="card-text">A Passionate Programmer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
