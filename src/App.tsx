import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { HoudiniPage } from './pages/HoudiniPage';
import { EmpresasPage } from './pages/EmpresasPage';
import { BodasPage } from './pages/BodasPage';
import { CocteleriasPage } from './pages/CocteleriasPage';
import { GaleriaPage } from './pages/GaleriaPage';
import { SobreMiPage } from './pages/SobreMiPage';
import { ContactoPage } from './pages/ContactoPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <BrowserRouter basename="/demos">
      <ScrollToTop />
      <div className="min-h-screen bg-[#040406] text-zinc-100 flex flex-col font-sans">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/el-rey-de-trebol" element={<HoudiniPage />} />
            <Route path="/empresas" element={<EmpresasPage />} />
            <Route path="/bodas" element={<BodasPage />} />
            <Route path="/coctelerias" element={<CocteleriasPage />} />
            <Route path="/galeria" element={<GaleriaPage />} />
            <Route path="/sobre-mi" element={<SobreMiPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
