import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Components from './pages/Components';
import Themes from './pages/Themes';
import Examples from './pages/Examples';
import Github from './pages/Github';
import Docs from './pages/Docs';
import Footer from './components/Footer';
import Installation from './pages/subpage/Installation';
import Theming from './pages/subpage/Theming';
import Darkmode from './pages/subpage/Darkmode';
import Cli from './pages/subpage/Cli';
import Typo from './pages/subpage/Typo';
import Figma from './pages/subpage/Figma';
import Changelog from './pages/subpage/Changelog';


const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="docs" element={<Docs />} />
        <Route path="docs/components" element={<Components />} />
        <Route path="themes" element={<Themes />} />
        <Route path="examples" element={<Examples />} />
        <Route path="github" element={<Github />} />
        <Route path="docs/installation" element={<Installation />} />
        <Route path="docs/theming" element={<Theming />} />
        <Route path="docs/dark-mode" element={<Darkmode />} />
        <Route path="docs/cli" element={<Cli />} />
        <Route path="docs/typography" element={<Typo />} />
        <Route path="docs/figma" element={<Figma />} />
        <Route path="docs/changelog" element={<Changelog />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App