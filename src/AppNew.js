import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { userInputs } from "./formSource";
import PublicRoute from "./components/routes/PublicRoute";
import PrivateRoute from "./components/routes/PrivateRoute";

const Organization = React.lazy(() =>
  import("./pages/Organization/Organization")
);

const Home = React.lazy(() => import("./pages/home/Home"));
const Login = React.lazy(() => import("./pages/login/Login"));
const Register = React.lazy(() => import("./pages/register/Register"));
const Reset = React.lazy(() => import("./pages/resetpassword/Reset"));
const Contactus = React.lazy(() => import("./pages/contactus/Contactus"));

const Dashboard = React.lazy(() => import("./pages/dashboard/dashboard"));
const ProfileStepper = React.lazy(() => import("./pages/profile/"));
const Credentials = React.lazy(() => import("./pages/credentials/Credentials"));

const List = React.lazy(() => import("./pages/list/List"));
const Single = React.lazy(() => import("./pages/single/Single"));
const New = React.lazy(() => import("./pages/new/New"));

const Error = React.lazy(() => import("./pages/Error/Error"));

function AppNew() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset" element={<Reset />} />
          </Route>

          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route index element={<Dashboard />} />
            <Route path="edit-profile" element={<ProfileStepper />} />
            <Route path="organization" element={<Organization />} />
            <Route path="credentials" element={<Credentials />} />
            <Route path="admins">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New Admin" />}
              />
            </Route>
          </Route>
          {/* <Route path="/" element={<PrivateRoute />}> */}
          <Route path="/complete-profile" element={<ProfileStepper />} />
          {/* </Route> */}

          <Route path="/contact-us" element={<Contactus />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppNew;
