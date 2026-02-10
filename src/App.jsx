import "./App.css";
import { Footer } from "./component/layout/Footer";
import { Navbar } from "./component/layout/Navbar";
import AppRoutes from "./route/AppRoutes";
import DevelopmentPopup from "./route/DevelopmentPopup";

function App() {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <DevelopmentPopup />
                <Navbar />
                <main className="flex-grow">
                    <AppRoutes />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
