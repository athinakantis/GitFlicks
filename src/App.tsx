import './App.css';

import Main from './components/Main';
import shorten from './utility/shortenerApi';


function App() {

    shorten("https://facebook.com").then(console.log);

    return (
        <Main />
    );
}

export default App;
