import React from "react";
import "./styles.scss";

import Navbar from "../../components/navbar";
import Timeline from "../../components/timeline";
import Tools from "../../components/tools";
import Mentors from "../../components/mentors";
import Footer from "../../components/footer";

import OrangeBlob from "../../assets/images/program/orange-blob.png";
import Star from "../../assets/images/program/star.svg";

function ProgramOverview() {
  return (
    <div className="overview">
      <Navbar />

      <header className="header">
        <div className="header-title">
          <h1>Program Overview</h1>
        </div>
        <div className="header-desc">
          <p>
            Throughout 12 weeks, apprentices will work through 3 phases: Short
            Exercises, Breadth, and Branding. The final phase will include a
            brand project that you can include in your portfolio, especially if
            you are an aspiring graphic/visual/brand designer. Most of the
            assignments are largely individual, but the final project can be
            done collaboratively.
          </p>
        </div>
      </header>
      <section className="schedule">
        <div className="schedule-desc">
          <h2>Meetings & Prompts</h2>
          <p>
            All-hands meetings will take place in-person on Thursdays @ 6:30pm.
            The majority of the assignments can be done remotely, but we will
            teach how to use different design software during in-person
            all-hands meetings while reserving time for critiques & work
            sessions.
          </p>
          <p className="schedule-desc-prompt">
            To view the full description of prompts, deadlines, and what each
            all-hands meeting will consist of:
          </p>
          <a
            href="https://docs.google.com/document/d/1-4NKe8hzJQHk2rPEHwm2LjtCA0BsY9IGj0udLRmt2d8/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <span>View Full Timeline</span>
            <img src={Star} alt="star" />
          </a>
        </div>
        <img
          className="orange-blob"
          src={OrangeBlob}
          alt="Orange Decorative Illustration"
        />
      </section>
      <Timeline />
      <Tools />
      <Mentors />
      <Footer />
    </div>
  );
}

export default ProgramOverview;
