import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Body2 from './components/Body2';
import Post from './components/Post';


function App() {
  
  return (
    <div>
     <Header/>
     <Body/>
     <Body2 username={"ssar"} password={"1234"} />
     <Post/>
    </div>
  );
}

export default App;
