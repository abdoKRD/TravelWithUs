import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css";
import LoadingIndicator from "./LoadingIndicator";
import backgroundImage from "../Assets/Essaouira.jpg";
import loginPhoto from "../Assets/finalbackground.png";
import { useAuth } from "../AuthContext";

function Form({ route, method }) {
    const { isLoggedIn, login } = useAuth();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const name = method === "login" ? "Login" : "Register";

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            if (method === "register" && password !== confirmPassword) {
                throw new Error("Passwords do not match");
            }

            const requestData = method === "register"
                ? { username, email, password }
                : { username, password };

            const res = await api.post(route, requestData);

            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                login(); // Update login status
                navigate("/");
            } else {
                navigate("/login");
            }
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleOtherButtonClick = () => {
        if (method === "login") {
            navigate("/register");
        } else {
            navigate("/login");
        }
    };

    return (
        <div>
            <div className="video-background">
                <img src={backgroundImage} alt="" />
            </div>
            <div className="form-container">
                <div className="first">
                    <form onSubmit={handleSubmit}>
                        <h1>{name}</h1>
                        <input
                            className="form-input"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            autoComplete="username"
                        />
                        {method === "register" && (
                            <input
                                className="form-input"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                            />
                        )}
                        <input
                            className="form-input"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                        {method === "register" && (
                            <input
                                className="form-input"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm Password"
                            />
                        )}
                        {loading && <LoadingIndicator />}
                        <div className="btn-field">
                            <button className="form-button" type="submit">
                                {name}
                            </button>
                            <button className="other-button" type="button" onClick={handleOtherButtonClick}>
                                {method === "login" ? "Register" : "Login"}
                            </button>
                        </div>
                        {method === "login" && (
                            <div className="mdpCont">
                                <div className="mdp">
                                    <span>
                                        <input type="checkbox" value="remember me" name="remember" /> 
                                        <label htmlFor="remember" className="rememberMe">Remember me</label>
                                    </span>
                                    <span className="recover">
                                        <a href="blank">Recover password</a>
                                    </span>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
                <div className="second">
                    <img src={loginPhoto} alt="" />
                </div>
            </div>
        </div>
    );
}
export default Form;
