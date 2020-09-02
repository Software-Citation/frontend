import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import classNames from 'classnames/bind';
import styles from './About.module.css';

const cx = classNames.bind(styles);
const imageClass = cx('cffImg');

function About() {
  return (
    <>
      <h1>About</h1>
      <span className="lead">
        “Enabling research software engineers to add citability in open source
        software without hassle”
      </span>
      <Container>
        <p>
          The Software Citation Project started when a group of research
          software engineers realised that a <i>"chicken and egg"</i> (discussed
          below) problem exists with citing softwares. The project was discussed
          in great detail at various sprints and hackathons by researchers and
          software engineers from all around the globe. The need to solve this
          problem resonated with the whole community. The project took its shape
          in the{' '}
          <a
            href="https://elifesciences.org/labs/fdcb6588/innovation-leaders-2020-introducing-the-cohort"
            target="_blank"
            rel="noopener noreferrer"
          >
            eLife Innovation Leaders 2020
          </a>{' '}
          program and is currently managed by{' '}
          <a
            href="https://sarthaksehgal.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sarthak Sehgal
          </a>
          .
        </p>
        <hr class="divider" />
        <p>
          Open source softwares, packages, datasets and the alike should be as
          easily citable as research articles. A common problem the authors of
          such softwares face is establishing citability to their softwares.
          Attaching a{' '}
          <a
            href="https://en.wikipedia.org/wiki/Digital_object_identifier"
            target="_blank"
            rel="noopener noreferrer"
          >
            Digital Object Identifier (DOI)
          </a>{' '}
          to your software is highly recommended but it may not be enough. A DOI
          is a persistent identifier or handle used to identify objects
          uniquely, standardized by the International Organization for
          Standardization (ISO).
        </p>
        <p>
          Ideally, your project should have a DOI to uniquely identify your work
          and a{' '}
          <a
            href="https://citation-file-format.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>CITATION.cff</code>
          </a>{' '}
          file which provides rich meta-data and information about citing your
          software. CITATION.cff files are plain text files with human- and
          machine-readable citation information for software. Code developers
          can include them in their repositories to let others know how to
          correctly cite their software. Read more about the{' '}
          <strong>Citation File Format (CFF)</strong>{' '}
          <a
            href="https://citation-file-format.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          . A <code>CITATION.cff</code> looks like:
        </p>
        <Row className="justify-content-center">
          <img
            src="https://i.imgur.com/IrrEh0w.png"
            alt="CITATION.cff file"
            className={imageClass}
          />
        </Row>
        <p>
          <strong>The "chicken and egg" problem:</strong> The existing workflow
          does not allow you to incorporate a DOI (using tools like{' '}
          <a
            href="https://zenodo.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zenodo
          </a>{' '}
          and{' '}
          <a
            href="https://www.zotero.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zotero
          </a>
          ) and a <code>CITATION.cff</code> easily. Zenodo provides you with a
          DOI for your software once you release the version and upload the
          release file on Zenodo. Only after obtaining the DOI can you include
          it in the CFF file. As a result, your GitHub repository might contain
          the CFF file but it would not be in the release package (as you
          released the new version before updating your CFF file).
        </p>
        <p>
          The Software Citation Project aims to solve this problem. Using our
          platform, you can generate a DOI and a CFF file for your upcoming
          release. Then, once you update the CFF file on your repository, create
          a release and publish it using Zenodo!
        </p>
        <p>
          <i>
            Coming soon: Publish release using our platform integration with
            Zenodo!
          </i>
        </p>
        <Row className="justify-content-center">
          <img
            src="https://i.imgur.com/V8QQNnI.png"
            alt="Citation Workflow"
            className={imageClass}
          />
        </Row>
      </Container>
    </>
  );
}

export default About;
