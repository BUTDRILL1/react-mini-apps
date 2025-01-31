import { useState } from "react";
import axios from "axios";

const projectID = "59e056a9-2f7e-44bd-9f7f-05d6d73d988d";

const LoginForm = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {'Project-ID': projectID, 'User-Name': username, 'User-Secret': password};

        try{
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.loacation.reload();
            setError('');
        } catch(err){
            setError('Oops!! Incorrect Login Credential')
        }
    };

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                </form>
                <h1>{error}</h1>
            </div>
        </div>
    );
};

export default LoginForm;