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
    return s.replace(/[\n]/g, '\n\xa0\xa0\xa0\xa0');
  };

  is_multiline = (s) => {
    let re = new RegExp('[\\n|\\r]');
    return re.test(s);
  };

  isNonEmptyString = (s) => {
    return s && s.trim();
  };

  compute_cff = (cffObj) => {
    var lines = [];
    lines.push('# YAML 1.2');
    lines.push('---');

    lines.push('cff-version: ' + this.add_quotes('1.1.0'));

    if (this.isNonEmptyString(cffObj.title)) {
      lines.push('title: ' + this.add_quotes(cffObj.title));
    } else {
      lines.push('title: ');
    }

    if (this.isNonEmptyString(cffObj.message)) {
      if (this.is_multiline(cffObj.message)) {
        lines.push(
          'message: |\n\xa0\xa0\xa0\xa0' +
            this.indent(this.add_quotes(cffObj.message))
        );
      } else {
        lines.push('message: ' + this.add_quotes(cffObj.message));
      }
    } else {
      lines.push('message: ');
    }

    if (this.isNonEmptyString(cffObj.version)) {
      lines.push('version: ' + this.add_quotes(cffObj.version));
    } else {
      lines.push('version: ');
    }

    if (this.isNonEmptyString(cffObj.releaseDate)) {
      lines.push(
        'date-released: ' +
          this.add_quotes(
            new Date(cffObj.releaseDate).toISOString().substring(0, 10)
          )
      );
    } else {
      lines.push('date-released: ');
    }

    if (this.isNonEmptyString(cffObj.doi)) {
      lines.push('doi: ' + this.add_quotes(cffObj.doi));
    }

    if (this.isNonEmptyString(cffObj.abstract)) {
      if (this.is_multiline(cffObj.abstract)) {
        lines.push(
          'abstract: |\n\xa0\xa0\xa0\xa0' +
            this.indent(this.add_quotes(cffObj.abstract))
        );
      } else {
        lines.push('abstract: ' + this.add_quotes(cffObj.abstract));
      }
    }

    if (this.isNonEmptyString(cffObj.websiteUrl)) {
      lines.push(`url: ${this.add_quotes(cffObj.websiteUrl)}`);
    }

    if (this.isNonEmptyString(cffObj.repoUrl)) {
      lines.push(`repository: ${this.add_quotes(cffObj.repoUrl)}`);
    }

    if (this.isNonEmptyString(cffObj.license)) {
      lines.push(`license: ${this.add_quotes(cffObj.license)}`);
    }

    if (this.isNonEmptyString(cffObj.licenseUrl)) {
      lines.push(`license-url: ${this.add_quotes(cffObj.licenseUrl)}`);
    }

    if (this.isNonEmptyString(cffObj.keywords)) {
      const keywords = cffObj.keywords.split(',');
      lines.push('keywords: ');
      for (let keyword of keywords) {
        keyword = keyword.trim();
        if (keyword) {
          lines.push('\xa0\xa0-\xa0' + this.add_quotes(keyword));
        }
      }
    }

    lines.push('...');

    return lines;
  };

  render() {
    return (
      <div>
        {this.state.compiledCff.map((line) => (
          <div key={line} style={{ whiteSpace: 'pre-line' }}>
            {line}
          </div>
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
