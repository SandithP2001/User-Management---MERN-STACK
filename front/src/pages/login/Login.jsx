import "./login.css"
import { useContext,useState } from "react"
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
    const[ credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    })

    const {loading,error,dispatch} = useContext(AuthContext)

    const navigate = useNavigate()

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START"});
        try{
            const res = await axios.post("/auth/login", credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data}); 
            navigate("/")   
        } catch (err){
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data});
        }


    };

    const handleChange = (e) => {
        setCredentials(prev=>({...prev,[e.target.id]:e.target.value}));
    }


    return <div className="login">
        <div className="lContainer">

            <input type="text"
            placeholder="username"
            id="username"
            onChange={handleChange}
            className="lInput" />

            <input type="password" 
            placeholder="password" 
            id="password" 
            onChange={handleChange} 
            className="lInput" />

            <button disabled={loading} onClick={handleClick} className="lButton">
                Login
            </button>


            <div className="error-message">
            {error && <span>{error.message}</span>}
            </div>
            

            <div className="register-link">
                Don't have an account?   {""}
                <button className="register-button">
            <Link to="/register" style={{ textDecoration: "none" }}>
              Register
            </Link>
          </button>
            </div>

            
        </div>

    </div>



};

export default Login