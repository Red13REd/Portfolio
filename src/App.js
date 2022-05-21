import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/projects";
import {Hire} from "./hire/Hire";
import {Contacts} from "./сontacts/Contacts";
import {Footer} from "./footer/Footer";
import {SkillsSS} from "./skillsss/SkillsSS";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            {/*<Skills/>*/}
            <SkillsSS/>
            <Projects/>
            <Hire/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
