import { FC } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Footer from '../components/Footer';

const IndexPage: FC = () => {
  return (
    <>
      <Head>
        <title>Formatif</title>
      </Head>
      <div className="container">
        <div className="hero is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <p>
                <img src={`${process.env['prefix']}/images/logo/logo.png`} alt="Formatif Logo" />
              </p>
              <br />
              <h1 className="title is-1">Formatif</h1>
              <p className="subtitle">
                An innovative, open-source learning management system designed to enhance student engagement and learning.
              </p>
              <p> <img src={`${process.env['prefix']}/images/hero.png`} alt="Formatif Hero Image" /></p>
              <br />
              <div className="buttons is-centered">
                <Link href="/guides">
                  <a className="button">
                    <img src={`${process.env['prefix']}/images/book.svg`} alt="Guides" width="18" height="18" />
                    &nbsp; Guides
                  </a>
                </Link>
                <a href="https://blog.doubtfire.io/" target="_blank" className="button">
                  <img src={`${process.env['prefix']}/images/book.svg`} alt="Guides" width="18" height="18" />
                  &nbsp; Blog
                </a>
                <a href="https://github.com/orgs/doubtfire-lms/" className="button" target="_blank">
                  <img src={`${process.env['prefix']}/images/github.svg`} alt="GitHub" width="18" height="18" />
                  &nbsp; GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="hero-foot">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
