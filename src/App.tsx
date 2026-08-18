import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Tracker from './pages/Tracker';
import LocationDetails from './pages/LocationDetails';
import TreeDetails from './pages/TreeDetails';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tracker" element={<Tracker />} />
          <Route path="tracker/:locationId" element={<LocationDetails />} />
          <Route path="trees/:treeId" element={<TreeDetails />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
