import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Projects} from "./projects/projects";
import {Hire} from "./hire/Hire";
import {Contacts} from "./сontacts/Contacts";
import {Footer} from "./footer/Footer";
import {Skills} from "./skills/Skills";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Hire/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
