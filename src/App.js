import './App.css';
import AboutMe from "./AboutMe";
import ProfessionalExperience from "./ProfessionalExperience";
import MyProjects from "./MyProjects";
import ContactMe from "./ContactMe";

export default function App() {
  return (
    <div className="App">
    <div className="container">
        <h1>
          Monica Ledesma
        </h1>
        
        <h3>
          HTML5 / CSS / ES6 / GIT / REACT 
        </h3>
        <AboutMe />
        <ProfessionalExperience />
        <MyProjects />
        <ContactMe />
</div>
    </div>
  );
}


