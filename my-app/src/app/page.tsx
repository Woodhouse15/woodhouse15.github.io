import styles from "./page.module.css";

export const metadata = {
  title: "Eleanor Woodhouse",
  description: "Portfolio of Eleanor Woodhouse"
}

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Welcome to my portfolio page</h1>
      <p>My name is Eleanor Woodhouse, I'm a recent graduate from the University of Nottingham.<br></br>Here are some programming languages and frameworks I'm experienced in:
      </p>
      <ul>
        <li>Java</li>
        <li>Python</li>
        <li>C#</li>
        <li>C++</li>
        <li>HTML/CSS/Javascript and React</li>
        <li>... and more!</li>
      </ul>
      <p>I'm always working on side projects so make sure to watch my <a href="https://github.com/Woodhouse15">github</a></p>
    </div>
  );
}
