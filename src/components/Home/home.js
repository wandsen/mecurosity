import React from 'react';
import styles from './style.css';


class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div>

<div className={styles.pad}></div>

            <div class='ui grid'>
              <div class='row'>
                <div class='four wide column'></div>
                <div class='eight wide column'>
                  <div class='ui small centered header'>
                    Blessed is the one who finds wisdom, and the one who gets understanding, for the gain from her is better than gain from silver and her profit better than gold. She is more precious than jewels, and nothing you desire can compare with her. Long life is in her right hand; in her left hand are riches and honor. Her ways are ways of pleasantness, and all her paths are peace. ~Proverbs 3:13-18
                  </div>

                </div>
                <div class='four wide column'></div>
              </div>

        <div className={styles.pad}></div>

              <div class='row'>
                <div class='two wide column'></div>
                <div class='three wide column'>
                  <div class='ui small header'>
                    Web Development Immersive (WDI)
                  </div>
                </div>
                <div class='seven wide column'>
                  <div class='ui small header'>
                    General Assembly (Singapore)
                  </div>
                    A project based full time immersive program on full stack web development, completed in 12 weeks.

                  <ul class='ui list'>
                    <li>Front-end Development: HTML, CSS , Javascript, React.js, Bootstrap, Semantic UI</li>
                    <li>Backend Development: Node.js, Ruby on Rails, MVC framework, PostgreSql</li>
                    <li>Programming Fundamentals: Networks, Data Structures, Version Control System (Github), Test Driven Development, Agile Software Development</li>
                  </ul>
                </div>
                <div class='two wide column'>
                      Sep 2018 – Nov 2018
                </div>

                <div class='two wide column'></div>
              </div>
              <div class='row'>
                <div class='two wide column'></div>
                <div class='three wide column'>
                  <div class='ui small header'>
                    Bachelor of Arts (Economics)
                  </div>


                </div>
                <div class='seven wide column'>
                  <div class='ui small header'>
                   National University of Singapore (NUS)
                  </div>
                  National University of Singapore was ranked 21st in QS World University Ranking (2015) for their Economics programme.

                  <ul class='ui list'>
                    <li>Economics Major: Microeconomics, Macroeconomics, Econometrics, Public Finance, Development Economics, Money and Banking, Financial Economics, Game Theory & Application to Economics, Industrial Organisation, Economy of Modern China</li>
                    <li>Humanities: Introduction to Philosophy, Major Political Philosophers, Hume and Kant, Introduction to Psychology</li>
                    <li>Language Studies and Culture and others: French 3, Intensive Elementary Greek, Music in Global Context, Introduction to Japanese Studies, Postwar Japanese Film and Anime, The Theatre Experience, Singapore Urban History and Architecture, Financial Accounting, Einstein's Universe & Quantum Mechanics</li>
                  </ul>
                </div>
                <div class='two wide column'>
                      Aug 2012 – June 2015
                </div>
                <div class='two wide column'></div>
              </div>

              <div class='row'>
                <div class='two wide column'></div>
                <div class='three wide column'>
                  <div class='ui small header'>
                    Goethe-Zertificat B1
                  </div>


                </div>
                <div class='seven wide column'>
                  <div class='ui small header'>
                   Goethe-Institut (Mannheim, Germany)

                  </div>
                  The Goethe-Institut is the Federal Republic of Germany’s cultural institute, active worldwide. They promote the study of German abroad and encourage international cultural exchange.
                  <ul class='ui list'>
                    <li>Full time language immersion course. Experienced European culture through extended interaction with local students in activities such as joining heritage programs organized by the school.</li>

                  </ul>
                </div>
                <div class='two wide column'>
                      Mar 2012 – Aug 2012
                </div>
                <div class='two wide column'></div>
              </div>
            </div>

    <div className={styles.pad}></div>

        </div>
    );
  }
}

export default Home;