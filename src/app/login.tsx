import { trace } from 'console';
import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useLoginMutation } from '../gql/generated/graphql';
import { AppStateContext } from './provider';

export const Login : React.FC = () => {
    const history = useHistory();
    const { appSetLogin, gqlError } = useContext(AppStateContext);
    const [ login ] = useLoginMutation();
    
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ show, setShow ] = useState(false);

    return (
        <div>
            <div>Login page</div>
            {show? <div>{gqlError.msg} </div> : undefined}
            <form onSubmit={ async e => {
                e.preventDefault();
                try{
                    setShow(false);
                    const { data } = await login({ variables : { email, password }});
                    if(data === undefined || data?.login === undefined || data.login?.access_token === undefined){
                        throw new Error('Invalid credentials');
                    }
                    console.log(data);
                    appSetLogin(data.login?.access_token!, data.login?.email! , data.login?.username!);
                    history.replace('/dashboard');
                } catch(err) {
                    setShow(true);
                }
            }}>
                <div>
                    <input type="text" value={email} placeholder="이메일을 입력해주세요." onChange={e => {setEmail(e.target.value)} } />
                </div>
                <div>
                    <input type="password" value={password} placeholder="패스워드를 입력해주세요." onChange={ e=> {setPassword(e.target.value)}} />
                </div>
                <button type="submit">Login</button>
            </form>
            <div><Link to="/forgot-password">Forgot your password?</Link></div>
            <div><Link to="/resend-confirm">Resend confirmation?</Link></div>
        </div>
    )
}
