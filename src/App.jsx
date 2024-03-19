import {PokemonList} from "./pages/PokemonList.jsx";
import {PokemonDetails} from "./pages/PokemonDetails.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {PageNotFound} from "./pages/PageNotFound.jsx";
import {PokemonEdit} from "./pages/PokemonEdit.jsx";
import {PokemonAdd} from "./pages/PokemonAdd.jsx";
import {Login} from "./pages/Login.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

function App() {

    return <Router>
               <div>
                   <nav>
                       <div className="nav-wrapper teal">
                           <Link to="/" className="brand-logo center">Pokédex</Link>
                       </div>
                   </nav>
                   <Routes>
                       <Route exact path="/" element={
                           <PrivateRoute>
                               <PokemonList />
                           </PrivateRoute>
                       }/>
                       <Route exact path="/login" element={<Login />} />
                       <Route exact path="/pokemons" element={
                           <PrivateRoute>
                               <PokemonList />
                           </PrivateRoute>
                       }/>
                       <Route path="/pokemons/:id" element={
                           <PrivateRoute>
                               <PokemonDetails />
                           </PrivateRoute>
                       }/>
                       <Route path="pokemons/edit/:id" element={
                           <PrivateRoute>
                               <PokemonEdit />
                           </PrivateRoute>
                       }/>
                       <Route path="pokemon/add" element={
                           <PrivateRoute>
                               <PokemonAdd />
                           </PrivateRoute>
                       }/>
                       <Route path="*" element={<PageNotFound />} />
                   </Routes>
               </div>
           </Router>
}

export default App
