import { Routes, Route } from 'react-router-dom'

import NavigationBar from './components/NavigationBar.jsx'
import Home from './pages/Home.jsx'
import Compendium from './pages/Compendium.jsx'
import Lore from './pages/Lore.jsx'
import Rules from './pages/Rules.jsx'
import NotFound from './pages/NotFound.jsx'

// Declarative routing: routes are described as JSX <Route> elements rather than
// a createBrowserRouter config object. The NavigationBar renders on every page.
export default function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compendium" element={<Compendium />} />
        <Route path="/lore" element={<Lore />} />
        <Route path="/rules" element={<Rules />} />
        {/* Catch-all: any unmatched hash route renders the 404 page. */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
