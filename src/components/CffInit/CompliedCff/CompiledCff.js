import React from 'react';
import { connect } from 'react-redux';

class CompiledCff extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      compiledCff: [],
    };
  }

  componentDidMount() {
    const compiledCff = this.compute_cff(this.props.cffObj);
    this.setState({ compiledCff });
  }

  componentDidUpdate(prevProps) {
    if (this.props.cffObj !== prevProps.cffObj) {
      const compiledCff = this.compute_cff(this.props.cffObj);
      this.setState({ compiledCff });
    }
  }

  add_quotes = (s) => {
    let re = new RegExp('^[a-zA-Z0-9]{0,}$');
    if (re.test(s)) {
      return s;
    } else {
      return '"' + this.escape_quotes(s) + '"';
    }
  };

  escape_quotes = (s) => {
    return s.replace(/["]/g, '\\"');
  };

  indent = (s) => {
    return s.replace(/[\n]/g, '\n    ');
  };

  is_multiline = (s) => {
    let re = new RegExp('[\\n|\\r]');
    return re.test(s);
  };

  compute_cff = (cffObj) => {
    var lines = [];
    lines.push('# YAML 1.2');
    lines.push('---');

    lines.push('cff-version: ' + this.add_quotes('1.1.0'));

    if (cffObj.title !== undefined) {
      lines.push('title: ' + this.add_quotes(cffObj.title));
    } else {
      lines.push('title: ');
    }

    if (cffObj.version !== undefined) {
      lines.push('version: ' + this.add_quotes(cffObj.version));
    } else {
      lines.push('version: ');
    }

    lines.push('...');

    return lines;
  };

  render() {
    return (
      <div>
        {this.state.compiledCff.map((line) => (
          <div>{line}</div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cffObj: state.cffReducer.cffObj,
  };
};

export default connect(mapStateToProps)(CompiledCff);
