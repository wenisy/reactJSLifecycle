import React from 'react';
import Hello from './Hello.js';
class AppComponent extends React.Component {
  componentWillMount() {
    console.log("**********Parent***second step**************");
    // this.setState({first:123687127312});
    console.log("state: " + JSON.stringify(this.state));
  }

  componentDidMount() {
    console.log("*******Parent******fourth step**************");
    this.setState({first:123687127312});
  }
  componentWillUpdate(){
    console.debug("will update, will update, will update.")
  }
  componentDidUpdate(){
    console.debug("did update, did update, did update.")
  }
  constructor(props) {
    super(props);
    this.state = {
      first: 1,
      second: 2,
      third: 3,
      fourth: 4,
      fifth: 5
    };
    console.log("********Parent*****first step**************");
  }
  render() {
    console.log("******Parent*******third step**************");
    console.log("state: " + JSON.stringify(this.state));
    return (
      <div>
        <Hello title={this.state.first}/>
      </div>
    );
  }
}
export default AppComponent;
