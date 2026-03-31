
import React, { useMemo, useState } from 'react';
import brandLogo from './acron.png';

const collegeOptions = [
  'Abilene Christian University','Adelphi University','American University','Arizona State University','Auburn University',
  'Babson College','Baylor University','Belmont University','Binghamton University','Boston College',
  'Boston University','Bowdoin College','Brandeis University','Brown University','Bucknell University',
  'Butler University','California Lutheran University','Case Western Reserve University','Chapman University','Clark University',
  'Clemson University','Colby College','Colgate University','College of the Holy Cross','Colorado College',
  'Colorado School of Mines','Connecticut College','Creighton University','Davidson College','Denison University',
  'DePaul University','Dickinson College','Drexel University','Duke University','Elon University',
  'Emerson College','Emory University','Fairfield University','Florida Institute of Technology','Fordham University',
  'George Washington University','Georgetown University','Georgia State University','Gettysburg College','Gonzaga University',
  'Hamilton College','Harvard University','Hofstra University','Howard University','Indiana University Bloomington',
  'Ithaca College','Johns Hopkins University','Kenyon College','Lafayette College','Lehigh University',
  'Loyola Marymount University','Marist University','Marquette University','Miami University','Michigan State University',
  'Middlebury College','New York University','Northeastern University','Northwestern University','Occidental College',
  'Ohio State University','Pace University','Pepperdine University','Providence College','Purdue University',
  'Quinnipiac University','Reed College','Rensselaer Polytechnic Institute','Rice University','Rochester Institute of Technology',
  'Santa Clara University','Siena College','Skidmore College','Southern Methodist University','St. Lawrence University',
  'Stanford University','Stevens Institute of Technology','Syracuse University','Temple University','Texas Christian University',
  'The New School','The University of Alabama','Trinity University','Tufts University','Tulane University',
  'University of Arizona','University of Colorado Boulder','University of Connecticut','University of Delaware','University of Denver',
  'University of Georgia','University of Miami','University of Minnesota Twin Cities','University of Pittsburgh','University of Rochester'
];

const latest = {
  title: 'SAT March 14, 2026 Administration',
  testedOn: 'Mar 14, 2026',
  grade: '11th Grade',
  total: 1500,
  rw: 750,
  math: 750,
  totalRange: '1480-1520',
  rwRange: '730-770',
  mathRange: '730-770',
};

const history = [
  { title: 'SAT March 14, 2026 Administration', date: 'March 14, 2026', grade: '11th Grade', total: 1500, rw: 750, math: 750 },
  { title: 'SAT December 06, 2025 Administration', date: 'December 6, 2025', grade: '11th Grade', total: 1260, rw: 620, math: 640 },
  { title: 'PSAT/NMSQT Fall 2025 Administration', date: 'October 8, 2025', grade: '11th Grade', total: 970, rw: 500, math: 470 },
  { title: 'SAT Practice 10', date: 'March 9, 2026', grade: 'Practice Test', total: 1150, rw: 600, math: 550 },
];

const practiceIcons = [
  { label: 'Take a Practice Test', icon: 'calendar-pencil', route: 'practice-test' },
  { label: 'Prepare for the SAT', icon: 'calendar-pencil', route: 'practice-prepare' },
  { label: 'Get Practice Materials', icon: 'calendar-pencil', route: 'practice-materials' },
];

const collegeIcons = [
  { label: 'Finish your student profile', icon: 'person-check' },
  { label: 'Earn scholarships by planning for college', icon: 'calendar-note' },
];

const nextStepItems = [
  { label: 'Send Your Scores', icon: 'scores', route: 'send-scores' },
  { label: 'Explore Practice Options', icon: 'practice', route: 'practice-prepare' },
  { label: 'Retake the SAT', icon: 'laptop', route: 'practice-test' },
  { label: 'Help Colleges Find You', icon: 'building' },
  { label: 'Get Your Personalized AP Course Recommendations', icon: 'ap' },
];


const practicePages = {
  'practice-test': {
    title: 'Open the Practice App',
    lineOne: 'Launch the StudentBoard practice experience on your device.',
    lineTwo: 'Use timed sections, digital tools, and realistic pacing before test day.',
    lineThree: 'When you are ready, open the practice area and start your session.',
    button: 'Open Practice Hub',
    cards: [
      { heading: 'Timed practice', copy: 'Run a full-length digital session with an exam-style timer and simple progress tracking.' },
      { heading: 'Device-ready setup', copy: 'Check that your laptop or desktop is ready before you begin a practice test.' },
      { heading: 'Quick launch', copy: 'Jump straight into a practice flow without leaving your StudentBoard portal.' },
    ],
  },
  'practice-prepare': {
    title: 'Prepare for the SAT',
    lineOne: 'Build a study routine with guided review and practice checkpoints.',
    lineTwo: 'Focus on reading, writing, and math with a cleaner prep workflow.',
    lineThree: 'Use the button below to jump to your preparation checklist.',
    button: 'Open Study Planner',
    cards: [
      { heading: 'Weekly plan', copy: 'Organize short review sessions and keep your prep schedule simple and consistent.' },
      { heading: 'Skill check', copy: 'Review which sections need the most attention before your next full practice run.' },
      { heading: 'Ready-to-use tips', copy: 'Keep strategy notes and reminders in one place so they are easy to revisit.' },
    ],
  },
  'practice-materials': {
    title: 'Get Practice Materials',
    lineOne: 'Open your practice resources, study notes, and printable review items.',
    lineTwo: 'Everything stays inside the same StudentBoard demo so it feels like one portal.',
    lineThree: 'Use the button below to jump to your resource section.',
    button: 'Open Resource Library',
    cards: [
      { heading: 'Digital resources', copy: 'Collect links, notes, and review prompts in one place for faster access.' },
      { heading: 'Printable prep', copy: 'Keep checklists and summary sheets ready for offline study sessions.' },
      { heading: 'Simple organization', copy: 'Separate test practice, prep reminders, and study materials by category.' },
    ],
  },
};

const footerCols = {
  Programs: ['SAT®', 'PSAT/NMSQT®', 'PSAT™ 10', 'PSAT™ 8/9', 'SpringBoard®', 'Pre-AP®', 'AP®', 'BigFuture®', 'Search'],
  "Student Board": ['About This Demo', 'Careers', 'Membership', 'Newsroom', 'Research', 'Accessibility Services'],
  Help: ['Help', 'Contact Us', 'Privacy Center', 'Privacy Settings', 'Legal Terms', 'Report Issues'],
};

const rwSkills = [
  { name: 'Information and Ideas', score: 95 },
  { name: 'Craft and Structure', score: 93 },
  { name: 'Expression of Ideas', score: 96 },
  { name: 'Standard English Conventions', score: 95 },
];

const mathSkills = [
  { name: 'Algebra', score: 97 },
  { name: 'Advanced Math', score: 95 },
  { name: 'Problem-Solving and Data Analysis', score: 94 },
  { name: 'Geometry and Trigonometry', score: 93 },
];

const comparisonSets = {
  total: [
    { label: 'Your Score', value: 1500, width: 94 },
    { label: 'Your School’s Average Score', value: 1320, width: 82 },
    { label: 'State Average', value: 1090, width: 68 },
    { label: 'National Average', value: 1050, width: 66 },
  ],
  rw: [
    { label: 'Your Score', value: 750, width: 94 },
    { label: 'Your School’s Average Score', value: 680, width: 85 },
    { label: 'State Average', value: 540, width: 68 },
    { label: 'National Average', value: 520, width: 65 },
  ],
  math: [
    { label: 'Your Score', value: 750, width: 94 },
    { label: 'Your School’s Average Score', value: 640, width: 80 },
    { label: 'State Average', value: 550, width: 69 },
    { label: 'National Average', value: 530, width: 66 },
  ],
};

export default function App() {
  const [route, setRoute] = useState('dashboard');
  const [subjectTab, setSubjectTab] = useState('rw');
  const [comparisonTab, setComparisonTab] = useState('total');

  return (
    <>
      {route === 'dashboard' && <DashboardPage setRoute={setRoute} />}
      {route === 'summary' && <SummaryPage setRoute={setRoute} />}
      {route === 'details' && (
        <DetailsPage
          setRoute={setRoute}
          subjectTab={subjectTab}
          setSubjectTab={setSubjectTab}
          comparisonTab={comparisonTab}
          setComparisonTab={setComparisonTab}
        />
      )}
      {route === 'send-scores' && <SendScoresPage setRoute={setRoute} />}
      {route === 'practice-test' && <PracticePage setRoute={setRoute} variant="practice-test" />}
      {route === 'practice-prepare' && <PracticePage setRoute={setRoute} variant="practice-prepare" />}
      {route === 'practice-materials' && <PracticePage setRoute={setRoute} variant="practice-materials" />}
    </>
  );
}

function MainTopBar() {
  return (
    <div className="utility-bar">
      <div className="utility-inner">
        <div className="utility-left">
          <div className="utility-chevron">⌄</div>
          <div className="demo-logo-box">
            <img src={brandLogo} alt="Custom logo" className="brand-logo-img" />
            <span>StudentBoard</span>
          </div>
        </div>
        <div className="utility-right">
          <span>Hi, Krish</span>
          <div className="user-dot"><PersonIcon /></div>
        </div>
      </div>
    </div>
  );
}

function SuiteTopBar({ setRoute }) {
  return (
    <div className="utility-bar">
      <div className="utility-inner">
        <div className="utility-left">
          <button className="demo-suite-mark clickable-reset" onClick={() => setRoute('dashboard')}>
            <div className="demo-suite-icon"><img src={brandLogo} alt="Custom logo" className="brand-logo-img suite-logo-img" /></div>
            <div className="demo-suite-text">Test Suite</div>
          </button>
        </div>
        <div className="utility-right">
          <span>Hi, Krish</span>
          <div className="user-dot"><PersonIcon /></div>
        </div>
      </div>
    </div>
  );
}

function BannerTexture() {
  return <div className="banner-texture" aria-hidden="true" />;
}

function DashboardPage({ setRoute }) {
  return (
    <>
      <MainTopBar />
      <div className="home-banner-wrap">
        <div className="home-banner">
          <div className="home-banner-center">
            <h1>Hello Krish</h1>
            <p>Manage your test registrations and scores.</p>
            <button className="yellow-pill">Register for the SAT</button>
          </div>
        </div>
      </div>

      <main className="dashboard-shell">
        <section className="code-card rounded-box">
          <div className="code-head">
            <div className="code-icon">⌂</div>
            <h2>Got a Code?</h2>
            <div className="code-collapse">−</div>
          </div>
          <p>
            Enter your code here. Ask your counselor for more details about fee waivers -
            <a href="#" onClick={(e) => e.preventDefault()}> learn if you're eligible.</a>
          </p>
          <div className="code-form">
            <input placeholder="Enter code" />
            <button>Submit Code</button>
          </div>
        </section>

        <section className="steps-section">
          <h2>Don't Forget These Steps</h2>
          <p>Get deadlines and details for test-related tasks.</p>
          <button className="task-card rounded-box clickable-reset" onClick={() => setRoute('send-scores')}>
            <div className="task-left">
              <div className="round-blue"><Icon name="tag" /></div>
              <span>Don't forget to send your available scores.</span>
            </div>
            <span className="task-arrow">→</span>
          </button>
        </section>

        <div className="dash-grid main-grid">
          <section className="scores-column">
            <section className="upcoming-tests-block">
              <h3>My Upcoming Tests</h3>
              <div className="upcoming-test-card rounded-box">
                <div className="upcoming-test-title">You Don’t Have Any Upcoming Tests.</div>
                <div className="upcoming-test-rule" />
                <div className="upcoming-test-copy">Taking the SAT at school? Your test date will show when you get scores.</div>
              </div>
            </section>

            <div className="scores-section-divider" />

            <h3>My Scores</h3>
            <div className="subtle-copy">
              To see where you've already sent your scores or to check the status of recently placed
              orders, visit the <a href="#" onClick={(e) => e.preventDefault()}>Score Sends application</a>.
            </div>

            <div className="mini-card-list">
              {history.map((item, idx) => (
                <article className="mini-score-card rounded-box" key={item.title}>
                  <div className="mini-score-top">
                    <div className="mini-score-title">{item.title}</div>
                    <div className="mini-score-meta">
                      <span>{item.date}</span>
                      <span className="pipe">|</span>
                      <span>{item.grade}</span>
                    </div>
                  </div>
                  <div className="mini-score-body">
                    <div className="mini-score-grid">
                      <ScoreBlock label="TOTAL SCORE" value={item.total} range="400 - 1600" large />
                      <ScoreBlock label="Reading and Writing" value={item.rw} range="200 - 800" />
                      <ScoreBlock label="Math" value={item.math} range="200 - 800" />
                    </div>
                    <button className="outline-score-btn main-card-btn" onClick={() => idx === 0 ? setRoute('summary') : null}>
                      See Score Details →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside className="side-column">
            <SideList title="Practice for the SAT" items={practiceIcons} setRoute={setRoute} />
            <SideList title="Next Steps Towards College" items={collegeIcons} setRoute={setRoute} />
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}

function SummaryPage({ setRoute }) {
  return (
    <>
      <SuiteTopBar setRoute={setRoute} />
      <div className="page-report-bar"><div className="page-report-inner">Your Score Reports</div></div>
      <div className="summary-banner">
        <BannerTexture />
        <div className="summary-banner-inner">
          <div className="summary-content">
            <h1>Your Latest Test</h1>
            <div className="summary-line">{latest.title}</div>
            <div className="summary-line">Tested on: {latest.testedOn}, {latest.grade}</div>
          </div>
        </div>
      </div>

      <main className="summary-shell">
        <div className="summary-grid summary-grid-tight">
          <section className="summary-main">
            <div className="summary-card rounded-box">
              <div className="summary-stats">
                <ScoreBlock label="TOTAL SCORE" value={latest.total} range="400 - 1600" large />
                <ScoreBlock label="Reading and Writing" value={latest.rw} range="200 - 800" />
                <ScoreBlock label="Math" value={latest.math} range="200 - 800" />
              </div>

              <div className="rule" />

              <p className="summary-benchmark">
                You meet or exceed our college and career readiness benchmarks in Reading and Writing and Math!
              </p>

              <button className="outline-score-btn summary-btn" onClick={() => setRoute('details')}>
                → See Score Details
              </button>

              <button className="download-btn">↓ Download Report</button>

              <div className="heavy-rule" />
              <div className="additional-scores-row">
                <span>See Additional Scores</span>
                <button className="plus-button">+</button>
              </div>
            </div>

            <div className="insight-card rounded-box">
              <h2>Score Insight</h2>
              <BarBlock label="Your Score" value="1500" width={94} />
              <BarBlock label="Average Score" value="1050" width={66} />
              <BarBlock label="Your School’s Average Score" value="1320" width={82} />

              <div className="info-link-row">
                <div>
                  <div className="small-gray">Your State</div>
                  <div className="strong-line">96th Percentile</div>
                </div>
                <a href="#" onClick={(e) => e.preventDefault()}>See All Percentile Comparisons →</a>
              </div>

              <div className="info-link-row">
                <div>
                  <div className="small-gray">Knowledge and Skills</div>
                  <div className="tiny-gray">Dig deeper into your SAT section performance.</div>
                </div>
                <div className="link-stack">
                  <a href="#" onClick={(e) => { e.preventDefault(); setRoute('details'); }}>See Reading and Writing Skills →</a>
                  <a href="#" onClick={(e) => { e.preventDefault(); setRoute('details'); }}>See Math Skills →</a>
                </div>
              </div>
            </div>
          </section>

          <aside className="summary-side">
            <div className="next-steps-card rounded-box">
              <h2>Next Steps</h2>
              {nextStepItems.map((item) => (
                <div className="next-row" key={item.label} onClick={() => item.route ? setRoute(item.route) : null}>
                  <div className="next-left">
                    <div className="round-dark"><Icon name={item.icon} /></div>
                    <span>{item.label}</span>
                  </div>
                  <span className="task-arrow">›</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}

function DetailsPage({ setRoute, subjectTab, setSubjectTab, comparisonTab, setComparisonTab }) {
  const skills = useMemo(() => (subjectTab === 'rw' ? rwSkills : mathSkills), [subjectTab]);
  const comparison = comparisonSets[comparisonTab];

  return (
    <>
      <SuiteTopBar setRoute={setRoute} />
      <div className="page-report-bar details-report-bar"><div className="page-report-inner">Your Score Reports</div></div>
      <div className="breadcrumb-bar"><div className="page-report-inner"><a href="#" onClick={(e)=>{e.preventDefault(); setRoute('dashboard')}}>Home</a><span>/</span><span>Score Details</span></div></div>
      <div className="details-banner">
        <BannerTexture />
        <div className="details-banner-inner details-hero-inner">
          <div className="details-hero-copy">
            <h1>Score Details</h1>
            <div className="summary-line">{latest.title}</div>
            <div className="summary-line">Tested on: {latest.testedOn}, {latest.grade}</div>
          </div>
          <button className="send-scores-pill" onClick={() => setRoute('send-scores')}>Send Your Scores ↗</button>
        </div>
      </div>

      <main className="details-shell">
        <section className="details-top-card rounded-box details-card-tight">
          <div className="top-kicker">TOTAL SCORE <span>{latest.total}</span></div>
          <div className="top-range">Score Range {latest.totalRange}</div>
          <div className="rule" />

          <h1>Section Scores</h1>
          <p className="details-copy">
            The SAT Reading and Writing section and Math section both focus on the necessary skills
            for college and career success. View your section scores and compare them against our
            readiness benchmarks. <a href="#" onClick={(e) => e.preventDefault()}>Learn more about benchmarks.</a>
          </p>

          <div className="circle-grid">
            <CircleScore title="Reading and Writing" score={latest.rw} benchmark="You've met the Reading and Writing benchmark (480)!" range={latest.rwRange} />
            <CircleScore title="Math" score={latest.math} benchmark="You've met the Math benchmark (530)!" range={latest.mathRange} />
          </div>
        </section>

        <section className="knowledge-box rounded-box">
          <h2>Knowledge and Skills</h2>
          <div className="tiny-gray">Dig deeper into your SAT section performance.</div>

          <div className="tabs">
            <button className={subjectTab === 'rw' ? 'active' : ''} onClick={() => setSubjectTab('rw')}>Reading and Writing</button>
            <button className={subjectTab === 'math' ? 'active' : ''} onClick={() => setSubjectTab('math')}>Math</button>
          </div>

          <div className="score-band-box rounded-soft">
            <div className="small-gray">Your {subjectTab === 'rw' ? 'Reading and Writing' : 'Math'} Score</div>
            <div className="band-score">{subjectTab === 'rw' ? latest.rw : latest.math}</div>
          </div>

          <div className="skill-heading">{subjectTab === 'rw' ? 'Reading and Writing Skills Performance' : 'Math Skills Performance'}</div>

          {skills.map((skill) => (
            <div className="skill-card-row" key={skill.name}>
              <div className="skill-row-top">
                <span>{skill.name}</span>
                <a href="#" onClick={(e) => e.preventDefault()}>View skills and examples in the score band</a>
              </div>
              <div className="tiny-gray">Performance: {skill.score}/100</div>
              <div className="seg-bar rounded-soft">
                <div className="seg-fill" style={{ width: `${skill.score}%` }} />
              </div>
            </div>
          ))}
        </section>

        <section className="comparison-box rounded-box">
          <h2>Score Comparisons</h2>

          <div className="tabs">
            <button className={comparisonTab === 'total' ? 'active' : ''} onClick={() => setComparisonTab('total')}>Total</button>
            <button className={comparisonTab === 'rw' ? 'active' : ''} onClick={() => setComparisonTab('rw')}>Reading and Writing</button>
            <button className={comparisonTab === 'math' ? 'active' : ''} onClick={() => setComparisonTab('math')}>Math</button>
          </div>

          <div className="comparison-title">
            {comparisonTab === 'total' ? 'Total Score Comparisons' : comparisonTab === 'rw' ? 'Reading and Writing Comparisons' : 'Math Comparisons'}
          </div>

          {comparison.map((row) => (
            <BarBlock key={row.label} label={row.label} value={String(row.value)} width={row.width} />
          ))}

          <div className="comparison-title extra-space">Total Score Percentile Comparisons</div>
          <div className="mini-circle-grid">
            <MiniCircle title="Your State" value="96" subtitle="96th Percentile" />
            <MiniCircle title="U.S. Test Takers" value="96" subtitle="96th Percentile" />
            <MiniCircle title="All Testers" value="96" subtitle="96th Percentile" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


function PracticePage({ setRoute, variant }) {
  const page = practicePages[variant] || practicePages['practice-test'];

  return (
    <>
      <SuiteTopBar setRoute={setRoute} />
      <div className="practice-banner">
        <div className="practice-banner-inner">
          <div className="practice-hero">
            <h1>{page.title}</h1>
            <p>{page.lineOne}</p>
            <p>{page.lineTwo}</p>
            <p>{page.lineThree}</p>
            <button
              className="practice-cta"
              onClick={() => {
                const el = document.getElementById('practice-actions');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {page.button}
            </button>
          </div>
        </div>
      </div>

      <main className="practice-shell">
        <section className="practice-card rounded-box" id="practice-actions">
          <div className="practice-card-rule" />
          <h2>Practice Tools</h2>
          <div className="practice-card-grid">
            {page.cards.map((card) => (
              <article className="practice-mini-card rounded-soft" key={card.heading}>
                <div className="practice-mini-title">{card.heading}</div>
                <div className="practice-mini-copy">{card.copy}</div>
              </article>
            ))}
          </div>

          <div className="practice-link-row">
            <button className="outline-score-btn practice-secondary-btn" onClick={() => setRoute('dashboard')}>
              ← Back to Dashboard
            </button>
            <button className="outline-score-btn practice-secondary-btn" onClick={() => setRoute('summary')}>
              Go to Score Report →
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function SendScoresPage({ setRoute }) {
  const [selectedCollege, setSelectedCollege] = useState('');
  const [showSent, setShowSent] = useState(false);
  const [added, setAdded] = useState([]);
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return collegeOptions.filter((c) => !q || c.toLowerCase().includes(q));
  }, [search]);

  const addCollege = () => {
    if (!selectedCollege) return;
    if (!added.includes(selectedCollege)) setAdded([...added, selectedCollege]);
  };

  return (
    <>
      <SuiteTopBar setRoute={setRoute} />
      <div className="send-banner">
        <div className="send-banner-inner">
          <h1>Send Scores</h1>
          <p>Select your top institutions and send the scores that matter.</p>
        </div>
      </div>
      <main className="send-shell">
        <section className="send-card">
          <div className="send-rule" />
          <h2>Send Available or Upcoming Scores</h2>
          <p>Select to send available SAT scores or send scores from an upcoming SAT Administration.</p>

          <label className="select-label">Score Sends</label>
          <input
            className="college-search"
            placeholder="Search colleges..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select className="fake-select real-select" value={selectedCollege} onChange={(e) => setSelectedCollege(e.target.value)}>
            <option value="">Select...</option>
            {filtered.map((college) => (
              <option key={college} value={college}>{college}</option>
            ))}
          </select>

          <button className="continue-btn active-btn" onClick={addCollege} disabled={!selectedCollege}>Add College</button>

          {!!added.length && (
            <div className="added-list">
              <div className="added-title">Selected recipients</div>
              {added.map((college) => (
                <div key={college} className="added-item">{college}</div>
              ))}
            </div>
          )}

          <div className="bottom-divider" />
          <button className="send-collapse clickable-reset" onClick={() => setShowSent(!showSent)}>
            <span>See where you've already sent scores</span>
            <span>{showSent ? '−' : '+'}</span>
          </button>
          {showSent && (
            <div className="sent-list">
              <div className="sent-item">River City State University — Sent</div>
              <div className="sent-item">North Valley College — Sent</div>
              <div className="sent-item">Coastal Tech Institute — Pending</div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

function Footer() {
  return (
    <>
      <div className="footer-top-strip">
        <div className="footer-top-accent" />
        <button
          className="footer-top-button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Top
        </button>
      </div>
      <footer className="site-footer">
      <div className="footer-grid">
        {Object.entries(footerCols).map(([title, items]) => (
          <div className="footer-col" key={title}>
            <h4>{title}</h4>
            <div className="footer-rule" />
            {items.map((item) => (
              <div className="footer-link" key={item}>{item}</div>
            ))}
          </div>
        ))}
      </div>
    </footer>
    </>
  );
}

function SideList({ title, items, setRoute }) {
  return (
    <section className="side-list-box">
      <h4>{title}</h4>
      {items.map((item) => (
        <button
          className="side-list-row clickable-reset"
          key={item.label}
          onClick={() => item.route ? setRoute(item.route) : null}
        >
          <div className="side-row-left">
            <div className={title.includes('Practice') ? 'round-practice' : 'round-college'}>
              <Icon name={item.icon} />
            </div>
            <span>{item.label}</span>
          </div>
          <span className="task-arrow">›</span>
        </button>
      ))}
    </section>
  );
}

function ScoreBlock({ label, value, range, large = false }) {
  return (
    <div>
      <div className={`score-label ${large ? 'bold-kicker' : ''}`}>{label}</div>
      <div className={large ? 'score-large' : 'score-medium'}>{value}</div>
      <div className="score-range">{range}</div>
    </div>
  );
}

function BarBlock({ label, value, width }) {
  return (
    <div className="bar-block">
      <div className="bar-head">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="bar-shell rounded-soft">
        <div className="bar-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

function CircleScore({ title, score, benchmark, range }) {
  return (
    <div className="circle-score">
      <h3>{title}</h3>
      <div className="ring-score">
        <div className="ring-inner">
          <div className="ring-value">{score}</div>
          <div className="ring-word">SCORE</div>
        </div>
        <div className="ring-min">200</div>
        <div className="ring-max">800</div>
      </div>
      <div className="benchmark-line">{benchmark}</div>
      <div className="range-line">Score Range <strong>{range}</strong></div>
    </div>
  );
}

function MiniCircle({ title, value, subtitle }) {
  return (
    <div className="mini-circle-card">
      <div className="small-gray center">{title}</div>
      <div className="mini-ring">
        <div className="mini-ring-core">{value}</div>
      </div>
      <div className="mini-subtitle">{subtitle}</div>
    </div>
  );
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="icon-svg" aria-hidden="true">
      <circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5 20c1.4-3.7 4-5.5 7-5.5s5.6 1.8 7 5.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ShieldLeafMark() {
  return (
    <svg viewBox="0 0 24 24" className="shield-leaf" aria-hidden="true">
      <path d="M12 3l6 2.8v5.3c0 4.6-2.6 7.7-6 9.9-3.4-2.2-6-5.3-6-9.9V5.8L12 3z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M12 7c2 0 3.5 1.7 3.5 3.7 0 2.8-1.8 4.4-3.5 5.8-1.7-1.4-3.5-3-3.5-5.8C8.5 8.7 10 7 12 7z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 6c1 .2 1.8-.6 2.1-1.8" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function Icon({ name }) {
  const c = { fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (name === 'calendar-pencil') return <svg viewBox="0 0 24 24" className="icon-svg"><rect x="4" y="5" width="14" height="14" rx="2" {...c} /><path d="M8 3v4M14 3v4M4 9h14" {...c} /><path d="M16.5 16.5l3.8-3.8 1.2 1.2-3.8 3.8-2 .7z" {...c} /></svg>;
  if (name === 'person-check') return <svg viewBox="0 0 24 24" className="icon-svg"><circle cx="10" cy="8" r="4" {...c} /><path d="M3.5 19c1.6-3.3 4.1-5 6.5-5s4.9 1.7 6.5 5" {...c} /><path d="M17 17l2 2 3-4" {...c} /></svg>;
  if (name === 'calendar-note') return <svg viewBox="0 0 24 24" className="icon-svg"><rect x="4" y="5" width="15" height="15" rx="2" {...c} /><path d="M8 3v4M15 3v4M4 9h15M8 13h7M8 16h5" {...c} /></svg>;
  if (name === 'scores') return <svg viewBox="0 0 24 24" className="icon-svg"><path d="M4 19h16" {...c} /><path d="M6 19v-7M11 19V8M16 19v-4M20 6l-7 7-3-3-4 4" {...c} /></svg>;
  if (name === 'practice') return <svg viewBox="0 0 24 24" className="icon-svg"><path d="M4 18l5-5M8 20l2-2M12 4l8 8M15 3l6 6M3 15l6 6 3-3-6-6z" {...c} /></svg>;
  if (name === 'laptop') return <svg viewBox="0 0 24 24" className="icon-svg"><rect x="5" y="6" width="14" height="10" rx="1.5" {...c} /><path d="M3 19h18" {...c} /></svg>;
  if (name === 'building') return <svg viewBox="0 0 24 24" className="icon-svg"><path d="M4 20h16M6 20V9l6-4 6 4v11M9 12h.01M12 12h.01M15 12h.01M9 16h.01M12 16h.01M15 16h.01" {...c} /></svg>;
  if (name === 'ap') return <svg viewBox="0 0 24 24" className="icon-svg ap-icon"><text x="12" y="15" textAnchor="middle" fontSize="10" fontWeight="700" fill="currentColor">AP</text></svg>;
  if (name === 'tag') return <svg viewBox="0 0 24 24" className="icon-svg"><path d="M11 4H6L3 7v5l9 9 9-9V7l-3-3z" {...c} /><circle cx="8" cy="8" r="1" {...c} /></svg>;
  return null;
}
