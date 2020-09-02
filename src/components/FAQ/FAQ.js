import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function FAQ() {
  return (
    <>
      <h1>FAQ</h1>
      <span className="lead">
        Could not find your answer?{' '}
        <a href="mailto:sarthaksehgal00@gmail.com">Contact Us</a>
      </span>

      <Container>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Is CFF an established standard?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Yes, the Citation File Format (CFF) is an established standard
                and is not governed by the Software Citation Project.{' '}
                <a
                  href="https://citation-file-format.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn mode about CFF.
                </a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Why do I need a <code>CITATION.cff</code> file?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                It is very easy to correctly cite a paper: all the necessary
                information (metadata) can be found on the title page or the
                article website. Software has no title page, the relevant
                information is often less obvious. People who want to cite your
                software may ask questions like:
                <ul>
                  <li>
                    What is the name of the software (given that it’s probably
                    not <code>my_scripts/run.m</code> or{' '}
                    <code>analysis.py</code>)?
                  </li>
                  <li>
                    What label should I use to uniquely identify the version of
                    the software I have used?
                  </li>
                  <li>
                    What is the appropriate set of people that should be
                    identified as authors?
                  </li>
                </ul>
                The person who wants to cite your software will probably not be
                able to answer these questions accurately and consistently
                themselves, but you can! Give them all the right information in
                a <code>CITATION.cff</code> file, and they can cite your
                software correctly.
                <br></br>
                Source:{' '}
                <a
                  href="https://citation-file-format.github.io/#why-you-should-add-a-citationcff-file-to-your-repository"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CFF Official Website
                </a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                What do I do after downloading the CFF file?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <ol>
                  <li>
                    Upload the CFF file on your GitHub repository, preferably in
                    the root directory. Optionally, update your{' '}
                    <code>README.md</code> file to inform user about the{' '}
                    <code>CITATION.cff</code> file
                  </li>
                  <li>
                    Create a new release on GitHub with the release version
                    mentioned in the CFF file. Please update the CFF file if you
                    want to release a different version.
                    <br />
                    Download the <code>tar.gz</code> release file from GitHub.
                  </li>
                  <li>
                    Login to Zenodo and{' '}
                    <a
                      href="https://zenodo.org/deposit/new/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      create a new upload
                    </a>
                    .
                  </li>
                  <li>
                    In the DOI field, mention the DOI which is in the{' '}
                    <code>CITATION.cff</code> file.
                  </li>
                </ol>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                Are BibTeX, Zotero or GitLab supported?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                No. We are aiming to support BibTeX and Zotero in the next
                release.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="4">
                How do I contribute to the project?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                If you think that something would make the Software Citation
                Project better, or you have found something that didn't work as
                you would have expected: Please check out how you can share your
                idea or bug report in the{' '}
                <a
                  href="https://github.com/sarthak-sehgal/software-citation/blob/master/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  contributing guide on GitHub
                </a>
                .
                <br />
                Thanks for your contribution!{' '}
                <span class="material-icons favourite-icon">favorite</span>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="5">
                I do not want to share my Zenodo token
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                We recommend sharing the Zenodo token for a hassle-free
                experience. We do not store any information, including the
                Zenodo token. Our servers store the generated CFF file
                temporarily (please note that it does not contain your token).
                <br />
                If you do not wish to share your access token, please follow
                these steps:
                <ol>
                  <li>
                    Reserve a DOI on Zenodo. The instructions are there on{' '}
                    <a
                      href="https://help.zenodo.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Zenodo FAQ page
                    </a>{' '}
                    <i>(Tip: Search for "Reserve DOI")</i>
                  </li>
                  <li>
                    Leave the "Zenodo Access Token" field blank in the first
                    step.
                  </li>
                  <li>Enter the reserved DOI in the next step</li>
                </ol>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    </>
  );
}

export default FAQ;
