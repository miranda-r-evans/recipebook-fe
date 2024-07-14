import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import Recipe from './components/Recipe';

function App() {
  return (
    <Routes>
        <Route path='/' element={<RecipeList />} />
        <Route path='/recipe/:id' element={<Recipe />} />
    </Routes>
  );
}

export default App;
