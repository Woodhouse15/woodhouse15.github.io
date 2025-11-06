"use client"
import { SocialIcon } from "react-social-icons";
import {Tabs, TabList, Tab, TabPanel} from "react-tabs"
import "../styles/tabs.css"

export interface Repository{
  title: string;
  description: string;
  html_url: string;
}

export const RepoCard: React.FC<Repository> = (props) => {
  return(
    <a href={props.html_url} className="card">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </a>
  );
};

export default function Home() {
  return (
      <div className="page">
        <h1>Welcome to my portfolio page</h1>
        <Tabs>
          <TabList>
            <Tab>About Me</Tab>
            <Tab>Projects</Tab>
          </TabList>
          <TabPanel>
            <h2>About Me</h2>
            <p>My name is Eleanor Woodhouse, I'm a recent graduate from the University of Nottingham.<br></br>Here are some programming languages and frameworks I'm experienced in:</p>
            <ul>
              <li>Java</li>
              <li>Python</li>
              <li>C#</li>
              <li>C++</li>
              <li>HTML/CSS/Javascript and React</li>
              <li>... and more!</li>
            </ul>
            <p>I'm always working on side projects so make sure to watch my <a href="https://github.com/Woodhouse15">github</a></p>
          </TabPanel>
          <TabPanel>
            <h2>Projects</h2>
            <p>Outside of work and university I've worked on multiple personal projects to improve my skills and learn new languages and frameworks. Below are some of my favourite projects.</p>
            <RepoCard 
              html_url="https://github.com/Woodhouse15/FlashlearnRemade"
              title="Flashlearn Remade"
              description="This is a remake of my A Level computer science project. Implemented using JavaFX and the database is hosted on MongoDB"/>
            <br></br>
            <RepoCard
              html_url="https://github.com/Woodhouse15/Tanks"
              title="Tanks"
              description="A Unity implementation of a game where you play as a tank and destroy enemy tanks."/>
            <br></br>
            <RepoCard
              html_url="https://github.com/Woodhouse15/MatricesInJava"
              title="Matrices in Java"
              description="A calculator for matrices written in Java."/>
            </TabPanel>
        </Tabs>
        <footer>
        <div className="container">
          <SocialIcon className="social" network="github" url="https://github.com/Woodhouse15"/>
          <SocialIcon className="social" url="https://www.linkedin.com/in/eleanor-woodhouse-b7a685218/"/>
        </div>
        </footer>
      </div>
  );
}
