import React from 'react';
class Hello extends React.Component {
  componentWillMount() {
    console.info("**********children***second step**************");
    console.info("state: " + JSON.stringify(this.state));
  }

  componentDidMount() {
    console.info("*******children******fourth step**************");
  }

  componentWillUpdate(){
    console.debug("Children updated, Children updated, Children updated.")
  }
  componentDidUpdate(){
    console.debug("Children did update, Children did update, Children did update.")
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
    console.info("********children*****first step**************");
  }
  render() {
    debugger;
    console.info("*******children******third step**************");
    return (
      <div>
        {this.props.title}
      </div>
    )
  }
}
Hello.defaultProps = {
  title: 'aaaaaaaa'
};
Hello.propTypes = {
  title : React.PropTypes.string.isRequired
};
export default Hello;

