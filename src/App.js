import React from 'react';
import IndividualChart from './components/IndividualChart';
import SignupChart from './components/SignupChart';

import './App.css';

import './assets/reset.css';
import './assets/style.css';
//images
import Funds from './assets/icons/funds.svg';
import History from './assets/icons/history.svg';
import Path from './assets/icons/Path.svg';
import Verification from './assets/icons/verification-window-button.svg';
import Padlock from './assets/icons/padlock.svg';
import Signup from './assets/icons/signups.svg';
import One from './assets/icons/one.JPG';

import '../node_modules/font-awesome/css/font-awesome.min.css';




class App extends React.Component {
    constructor() {
        super();
        let tempDate = new Date();
        let date = tempDate.getDate() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getFullYear();
        let hours = tempDate.getHours() + ':' + tempDate.getMinutes();

        this.state = {
            date: date,
            hour: hours,
            chartObjTop: {
                title: "Individuals",
                color: ['rgba(78, 255, 207)', 'rgba(8, 164, 188)'],
                chartData: [["Jun'19", 0], ["Jul'19", 7.2], ["Aug'19", 2.6], ["Sep'19", 4.5],
                    ["Oct'19", 2.9], ["Nov'19", 4.0], ["Dec'19", 3.0], ["Jan'20", 5.6]
                ]
            },
            chartObjBottom: {
                title: "Companies",
                color: ['rgb(255, 86, 238)', 'rgb(62, 87, 194)'],
                chartData: [["Jun'19", 0], ["Jul'19", 3], ["Aug'19", 1.6], ["Sep'19", 3.5],
                    ["Oct'19", 2.9], ["Nov'19", 4.0], ["Dec'19", 3.0], ["Jan'20", 2.6]],
            }
        }
    }

    render() {
        return <div className='site'>
            <div className='header'>
                <div className="max-width">
                    <div>
                        <img src={One} alt="logo"/>
                    </div>
                    <div className="custom-element">
                        <div className="child-item">ACCOUNT</div>
                        <div className="child-item">CHARTS</div>
                        <div className="child-item">HELP</div>
                        <div className="custom-child-item">
                            <div className="circletag" id="nay">
                                <img src={One} alt="one logo"/>
                            </div>
                            <div>Elsa Anderson</div>
                            <div>
                                <div>{this.state.date}</div>
                                <div>{this.state.hour}PM</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='overview'>
                <div className="parent max-width flex">
                    <div className="child">
                        <div>OVERVIEW
                            <i className="fa fa-caret-down"></i>
                        </div>
                    </div>
                    <div className="child">
                        <div>Total signups</div>
                        <div className="tertiary-color">648</div>
                    </div>
                    <div className="child">
                        <div>Last week</div>
                        <div className="secondary-color">12</div>
                    </div>
                    <div className="child">
                        <div className="primary-color">Total investments</div>
                        <div>102</div>
                    </div>
                    <div className="child">
                        <div>Average investments</div>
                        <div><span>NOK </span> <span className="tertiary-color">345,565</span></div>
                    </div>
                    <div className="child">
                        <div>Total exits</div>
                        <div className="secondary-color">23</div>
                    </div>
                </div>
            </div>
            <div className='wrapper max-width'>
                <div className='row flex'>
                    <div className='column nav'>
                        <div className='icon'>
                            <div className="active">
                                <img src={Signup} alt="sign up"/>
                            </div>
                        </div>
                        <div className='icon'>
                            <div>
                                <img src={Funds} alt={"funds"}/>
                            </div>
                        </div>
                        <div className='icon'>
                            <div>
                                <img src={Path} alt="path"/>
                            </div>
                        </div>
                        <div className='icon'>
                            <div>
                                <img src={History} alt="history"/>
                            </div>
                        </div>
                        <div className='icon'>
                            <div>
                                <img src={Verification} alt="verification"/>
                            </div>
                        </div>
                        <div className='icon'>
                            <div>
                                <img src={Padlock} alt="pad locked"/>
                            </div>
                        </div>
                    </div>
                    <div className='column child-item'>
                        <div className='flex tabs'>
                            <div className="column space-tabs selected"><span>Signups</span></div>
                            <div className="column space-tabs"><span>Investments</span></div>
                            <div className="column space-tabs"><span>Revenue</span></div>
                            <div className="column space-tabs"><span>Exits</span></div>
                            <div className="column space-tabs"><span>Trades</span></div>
                        </div>

                        <div className="flex">
                            <div className="flex-items">
                                <div className="graph child-item"><IndividualChart data={this.state.chartObjTop}/></div>
                                <div className="graph child-item"><IndividualChart data={this.state.chartObjBottom}/>
                                </div>
                            </div>
                            <div className="flex-items">
                                <div className="graph child-item">
                                    <div className="chart-wrapper">
                                        <div>
                                            <SignupChart/>
                                        </div>
                                        <div>
                                            <span>Total Signups</span>
                                            <div> Individuals</div>
                                            <div> Companies</div>
                                        </div>
                                    </div>


                                </div>

                                <div className="graph child-item">
                                    <div className="flex">
                                        <div className="child child-item">
                                            <div>By Gender</div>
                                        </div>
                                        <div className="child child-item">
                                            <div className="primary-text-color">Female
                                                <i className="fa fa-caret-down"></i>
                                            </div>
                                        </div>
                                        <div className="child child-item">
                                            <div className="primary-text-color">Individuals
                                                <i className="fa fa-caret-down"></i>
                                            </div>
                                        </div>
                                        <div className="child child-item">
                                            <div className="tertiary-color">102</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="graph child-item">
                                    <div className="latest_signup">
                                        <div className="latest_signup_inner">
                                            <div className="sign-header">Latest Signups</div>
                                            <div className="sign-wrapper-first">
                                                <div className="sign-name"> Name</div>
                                                <div> Scheduled Meetings</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sign-wrapper">
                                        <div className="bar"></div>
                                        <div className="sign-name-list"> David Hanson</div>
                                        <div> 02-03-2020-2PM</div>
                                    </div>
                                    <div className="sign-wrapper">
                                        <div className="bar"></div>
                                        <div className="sign-name-list"> David Kannan</div>
                                        <div> 03-03-2020-2PM</div>
                                    </div>
                                    <div className="sign-wrapper">
                                        <div className="bar"></div>
                                        <div className="sign-name-list"> Kannan Durais</div>
                                        <div className="sign-name-list-right"> 02-03-2020-2PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer'></div>
        </div>
    }

}

export default App;
