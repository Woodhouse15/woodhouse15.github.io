import styles from "./page.module.css";
import { SocialIcon } from "react-social-icons";

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

interface ProfileProps {
  profile: {
    avatar_url: string;
    name: string;
    bio: string;
    html_url: string;
  };
  repositories: Repository[];
}

const GithubDisplay = () => {
  return (
    <div className="repoCard">
      <h2 className="repoName">Repository Name</h2>
      <p className="language">Language</p>
      <p className="date">Date</p>
    </div>
  );
};

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
        <div className={styles.container}>
          <SocialIcon className="social" network="github" url="https://github.com/Woodhouse15"/>
          <SocialIcon className="social" url="https://www.linkedin.com/in/eleanor-woodhouse-b7a685218/"/>
        </div>
      </div>
  );
}
