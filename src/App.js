import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {MyWorks} from "./myWorks/MyWorks";
import {Telework} from "./telework/telework";
import {Contacts} from "./сontacts/Contacts";
import {Footer} from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <Telework/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
