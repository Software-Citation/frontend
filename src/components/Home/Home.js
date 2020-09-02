import React from 'react';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Home() {
  return (
    <Row className="lead justify-content-center align-items-center text-center">
      <h1>Software Citation</h1>
      <p>
        The Software Citation Project provides a hassle-free experience to
        establish better citation standards for your open software. Generate a
        DOI and CFF file for your open source software and upload it on your
        repository before creating a release.{' '}
        <a
          href="http://citation-file-format.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CITATION.cff
        </a>{' '}
        files are plain text file containing citation information for software.
      </p>
      <Button variant="secondary">Learn More</Button>
      <Button variant="primary" href="/wizard?#repo">
        Get Started
      </Button>
      <Button variant="success">
        <a
          href="https://forms.gle/RCbpupGAnUDRrRM4A"
          target="_blank"
          rel="noopener noreferrer"
        >
          Anonymous Feedback
        </a>
      </Button>
    </Row>
  );
}

export default Home;
