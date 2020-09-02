import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Step1({ nextStep }) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      nextStep();
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="githubUrl">
        <Form.Label>GitHub Repository URL</Form.Label>
        <Form.Control type="text" placeholder="GitHub URL" required />
        <Form.Control.Feedback type="invalid">
          Please provide the url to you Github repository.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="zenodoAccessToken">
        <Form.Label>Zenodo Access Token</Form.Label>
        <Form.Control type="text" placeholder="Zenodo Access Token" />
        <Form.Text className="text-muted">
          Please login to Zenodo and{' '}
          <a
            href="https://zenodo.org/account/settings/applications/tokens/new/"
            target="_blank"
            rel="noopener noreferrer"
          >
            generate an access token
          </a>{' '}
          with write permissions. We do not store your token. Do not want to
          share your token? <a href="/faq">Please refer to our FAQ.</a>
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Next
      </Button>
    </Form>
  );
}

export default Step1;
