import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/search';
import './App.css';
import CategorySection from './components/categorySection';

function App() {


  return (
    <div className="container">
       <Search/> 
       <CategorySection/>
    </div>
  )
}

export default App
