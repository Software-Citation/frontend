import React from 'react';
import { Form } from 'react-bootstrap';

function CffForm(props) {
  return (
    <Form>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Title" />
      </Form.Group>
      <Form.Group controlId="formVersion">
        <Form.Label>Version</Form.Label>
        <Form.Control type="text" placeholder="Version" />
      </Form.Group>
      <Form.Group controlId="formDate">
        <Form.Label>Date Released</Form.Label>
        <Form.Control type="date" placeholder="Date" />
      </Form.Group>
      <Form.Group controlId="formAuthors">
        <Form.Label>Authors</Form.Label>
        <Form.Control type="text" placeholder="Authors" />
      </Form.Group>
      <Form.Group controlId="formDoi">
        <Form.Label>DOI</Form.Label>
        <Form.Control type="text" placeholder="URL" />
      </Form.Group>
      <Form.Group controlId="formWebsite">
        <Form.Label>Website</Form.Label>
        <Form.Control type="text" placeholder="Landing page URL" />
      </Form.Group>
      <Form.Group controlId="formUrl">
        <Form.Label>Repository URL</Form.Label>
        <Form.Control type="text" placeholder="Source code URL" />
      </Form.Group>
      <Form.Group controlId="formAbstract">
        <Form.Label>Abstract</Form.Label>
        <Form.Control as="textarea" rows="3" placeholder="Abstract" />
      </Form.Group>
      <Form.Group controlId="formKeywords">
        <Form.Label>Keywords</Form.Label>
        <Form.Control type="text" placeholder="open source, open science" />
        <Form.Text className="text-muted">Comma separated keywords.</Form.Text>
      </Form.Group>
      <Form.Group controlId="formLicense">
        <Form.Label>License</Form.Label>
        <Form.Control type="text" placeholder="Apache-2.0" />
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

export default CffForm;
