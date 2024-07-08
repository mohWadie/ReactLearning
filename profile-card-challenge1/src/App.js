import "./styles.css";

function App() {
  return (
    <div className="App, card">
      <div className="data">
        <Avatar />
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img className="avatar" src="profileImage.png" alt="Jonas Schmedtmann" />
  );
}

function Intro() {
  return (
    <div>
      <h1>Jonas Schmedtmann</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skillDesc="C++" emoji="💪" backColor="blue" />
      <Skill skillDesc="Javascript" emoji="💪" backColor="orange" />
      <Skill skillDesc="C#" emoji="💪" backColor="yellow" />
      <Skill skillDesc=".Net Core" emoji="👶" backColor="red" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.backColor }}>
      <h4>{props.skillDesc}</h4>
      <div>{props.emoji}</div>
    </div>
  );
}

export default App;
