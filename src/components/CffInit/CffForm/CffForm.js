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

  inputUpdateHanlder = (event, fieldName) => {
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
            placeholder="Title"
            onChange={(e) => this.inputUpdateHanlder(e, 'title')}
          />
        </Form.Group>
        <Form.Group controlId="formVersion">
          <Form.Label>Version</Form.Label>
          <Form.Control
            type="text"
            placeholder="Version"
            onChange={(e) => this.inputUpdateHanlder(e, 'version')}
          />
        </Form.Group>
        <Form.Group controlId="formDate">
          <Form.Label>Date Released</Form.Label>
          <Form.Control
            type="date"
            placeholder="Date"
            onChange={(e) => this.inputUpdateHanlder(e, 'date')}
          />
        </Form.Group>
        <Form.Group controlId="formAuthors">
          <Form.Label>Authors</Form.Label>
          <Form.Control
            type="text"
            placeholder="Authors"
            onChange={(e) => this.inputUpdateHanlder(e, 'authors')}
          />
        </Form.Group>
        <Form.Group controlId="formDoi">
          <Form.Label>DOI</Form.Label>
          <Form.Control
            type="text"
            placeholder="URL"
            onChange={(e) => this.inputUpdateHanlder(e, 'doi')}
          />
        </Form.Group>
        <Form.Group controlId="formWebsite">
          <Form.Label>Website</Form.Label>
          <Form.Control
            type="text"
            placeholder="Landing page URL"
            onChange={(e) => this.inputUpdateHanlder(e, 'websiteUrl')}
          />
        </Form.Group>
        <Form.Group controlId="formUrl">
          <Form.Label>Repository URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Source code URL"
            onChange={(e) => this.inputUpdateHanlder(e, 'repoUrl')}
          />
        </Form.Group>
        <Form.Group controlId="formAbstract">
          <Form.Label>Abstract</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="Abstract"
            onChange={(e) => this.inputUpdateHanlder(e, 'abstract')}
          />
        </Form.Group>
        <Form.Group controlId="formKeywords">
          <Form.Label>Keywords</Form.Label>
          <Form.Control
            type="text"
            placeholder="open source, open science"
            onChange={(e) => this.inputUpdateHanlder(e, 'keywords')}
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
            onChange={(e) => this.inputUpdateHanlder(e, 'licenseType')}
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
