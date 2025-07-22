import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect, lazy } from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

// Pages - Solo Home carga inmediatamente
import Home from "./pages/Home";

// Lazy loading para las demás páginas
const Realms = lazy(() => import("./pages/Realms"));
const Store = lazy(() => import("./pages/Store"));
const Rules = lazy(() => import("./pages/Rules"));
const Support = lazy(() => import("./pages/Support"));

// Componente interno para manejar el scroll
function AppContent() {
  const location = useLocation();

  // Scroll directo al top cuando cambia la ruta
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-forest-darkest">
      {/* Header fijo */}
      <Header />

      {/* Contenido principal */}
      <main className="flex-1 pt-20">
        {/* Sin Suspense - React Router maneja el loading automáticamente */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/realms" element={<Realms />} />
          <Route path="/store" element={<Store />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/support" element={<Support />} />
          {/* Ruta 404 - redirige a Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
