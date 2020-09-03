import React from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';

import { updateCff } from '../../../store/actions/cffInit';

class CffForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cffObj: {},
    };
  }

  inputUpdateHandler = (event, fieldName) => {
    const cffObj = { ...this.state.cffObj };
    cffObj[fieldName] = event.target.value;
    this.setState({ cffObj });
    this.props.updateCff(cffObj);
  };

  render() {
    return (
      <Form>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Software Citation"
            onChange={(e) => this.inputUpdateHandler(e, 'title')}
          />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="Please cite the following works when using this software."
            onChange={(e) => this.inputUpdateHandler(e, 'message')}
          />
        </Form.Group>
        <Form.Group controlId="formVersion">
          <Form.Label>Version</Form.Label>
          <Form.Control
            type="text"
            placeholder="1.2.0"
            onChange={(e) => this.inputUpdateHandler(e, 'version')}
          />
        </Form.Group>
        <Form.Group controlId="formDate">
          <Form.Label>Date Released</Form.Label>
          <Form.Control
            type="date"
            onChange={(e) => this.inputUpdateHandler(e, 'releaseDate')}
          />
        </Form.Group>
        <Form.Group controlId="formAuthors">
          <Form.Label>Authors</Form.Label>
          <Form.Control
            type="text"
            placeholder="Authors"
            onChange={(e) => this.inputUpdateHandler(e, 'authors')}
          />
        </Form.Group>
        <Form.Group controlId="formDoi">
          <Form.Label>DOI</Form.Label>
          <Form.Control
            type="text"
            placeholder="DOI only, eg: 10.12688/f1000research"
            onChange={(e) => this.inputUpdateHandler(e, 'doi')}
          />
        </Form.Group>
        <Form.Group controlId="formWebsite">
          <Form.Label>Website URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="https://biojs.net"
            onChange={(e) => this.inputUpdateHandler(e, 'websiteUrl')}
          />
        </Form.Group>
        <Form.Group controlId="formUrl">
          <Form.Label>Repository URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Source code URL"
            onChange={(e) => this.inputUpdateHandler(e, 'repoUrl')}
          />
        </Form.Group>
        <Form.Group controlId="formAbstract">
          <Form.Label>Abstract</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="Abstract"
            onChange={(e) => this.inputUpdateHandler(e, 'abstract')}
          />
        </Form.Group>
        <Form.Group controlId="formKeywords">
          <Form.Label>Keywords</Form.Label>
          <Form.Control
            type="text"
            placeholder="open source, open science"
            onChange={(e) => this.inputUpdateHandler(e, 'keywords')}
          />
          <Form.Text className="text-muted">
            Comma separated keywords.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formLicense">
          <Form.Label>License</Form.Label>
          <Form.Control
            type="text"
            placeholder="Apache-2.0"
            onChange={(e) => this.inputUpdateHandler(e, 'license')}
          />
          <Form.Text className="text-muted">
            Use one of the authorized license abbreviations. See the{' '}
            <a
              href="https://github.com/spdx/license-list-data/blob/6b77c7a2840009663ee0b083523fc0ad25376b57/json/licenses.json"
              target="_blank"
            >
              complete list here
            </a>
            .
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formLicense">
          <Form.Label>License URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="URL to non-standard license"
            onChange={(e) => this.inputUpdateHandler(e, 'licenseUrl')}
          />
          <Form.Text className="text-muted">
            Only for non-standard licenses not included in the{' '}
            <a
              href="https://github.com/spdx/license-list-data/blob/6b77c7a2840009663ee0b083523fc0ad25376b57/json/licenses.json"
              target="_blank"
            >
              list
            </a>
            .
          </Form.Text>
        </Form.Group>
      </Form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCff: (cffObj) => dispatch(updateCff(cffObj)),
  };
};

export default connect(null, mapDispatchToProps)(CffForm);
