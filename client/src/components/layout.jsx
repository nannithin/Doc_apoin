import Home from "./home/home";
import { Routes, Route } from 'react-router-dom';
import Doctors from "./doctors/doctor";
import DoctorInfo from "./doctors/onedoctor";
import Login from "./auth/login/login";
import Signup from "./auth/login/sigup";
import AddDoc from "./admin/add_doctor";
import Private from "./privateroutes/privateroute";

const Layout = () => {
    return (
        <div>
            <Routes>
                <Route path="/signin" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route element={<Private />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/doctors" element={<Doctors />} />
                    <Route path="/doctors/:id" element={<DoctorInfo />} />
                    <Route path="/adddoctor" element={<AddDoc />} />

                </Route>
            </Routes>
        </div>
    )
}

export default Layout;