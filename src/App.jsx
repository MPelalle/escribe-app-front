import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Header from "../pages/components/Header";
import Footer from "../pages/components/Footer";
import Error from "../pages/components/Error";
import Notes from "../pages/Notes";
import VerifyMessage from "../pages/components/verifyMessage";
import Profile from "../pages/Profile";
import ProtectedRoute from "../pages/components/ProtectedRoute";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/verify-message" element={<VerifyMessage />} />
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
