import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Spinner from "./shared/components/Spinner";

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
  }

  render() {
    let routes = (
        <Switch>
          <Route exact path="/" component={Welcome}/>
        </Switch>
    );

    return (
        <div className='bootstap-layout'>
          <div className='container'>
            <BrowserRouter>
              <div className='root-component'>
                <Spinner show={this.props.isLoading}/>
                {routes}
              </div>
            </BrowserRouter>
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.config.isLoading,
});


export default connect(mapStateToProps, null)(App);
