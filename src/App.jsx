import Reset from "./styles/reset.style";
import GlobalStyles from "./styles/global.style";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp.jsx";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Reset />
                <GlobalStyles />
                <Routes>
                    <Route path="/sign-up" element={<SignUp />} />
                    {/* <Route path="/" element={<SignIn />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/success" element={<Success />} /> */}
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;