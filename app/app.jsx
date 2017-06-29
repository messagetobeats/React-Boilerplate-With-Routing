var React = require('react'); //question why is this needed? When its not being called below?
var ReactDOM = require('react-dom');
var { BrowserRouter, HashRouter, Route, hashHistory } = require('react-router-dom');

var Main = require('Main');

var Page1 = require('Page1');
var Page2 = require('Page2');
var Page3 = require('Page3');




ReactDOM.render(
                <HashRouter history = { hashHistory }>
                  <div>
                    <Main>
                        <Route exact path= "/" component = { Page1 } />
                        <Route path= "/page2" component = { Page2 } />
                        <Route path= "/page3" component = { Page3 } />
                    </Main>
                  </div>
                </HashRouter>,
                document.getElementById('app')
              );
