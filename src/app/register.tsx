import React, { useState, useContext } from 'react';
import { useRegisterMutation } from '../gql/generated/graphql';
//import { useHistory } from 'react-router-dom';
import { AppStateContext } from './provider';

export const Register: React.FC = () => {
    //const history = useHistory();
    const { gqlError } = useContext(AppStateContext);
    const [register] = useRegisterMutation();
 
    const [ email, setEmail ] = useState('');
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmation, setConfirmation ] = useState('');
    const [ show, setShow ] = useState(false);
    const [ success, setSuccess ] = useState(false);

    if(success) {
        return (
            <div>
                <div>Register page</div>
                <div>Registration successful! Please check your email for your email confiramtion link.</div>
            </div>
        )
    }
    return (
        <div>
            <div>Register page</div>
            { show ? <div>{gqlError.msg}</div> : undefined }
            <form onSubmit={ async e => {
                e.preventDefault();
                try {
                    setShow(false);
                    const { data } = await register({ variables : { email, password, confirmation, username }});
                    if (data === undefined || data?.register === undefined ) {
                        throw new Error('Invalid credentials');
                    }
                    //history.replace(`/confirm/${data?.register?.tmp_confirm_token}`);
                    setSuccess(true);
                } catch (err) {
                    setShow(true);
                }
            }
            }>
                <div>
                    <input value={email} placeholder='email을 입력하여주세요.' onChange={(e) => { setEmail(e.target.value); } }/>
                </div>
                <div>
                    <input value={username} placeholder='사용자명을 입력하여주세요.' onChange={(e) => { setUsername(e.target.value); } }/>
                </div>
                <div>
                    <input value={password} type="password" placeholder='패스워드를 입력하여주세요.' onChange={(e) => { setPassword(e.target.value); } }/>
                </div>
                <div>
                    <input value={confirmation} type="password" placeholder='패스워드를 한번 더 입력해주세요.' onChange={(e) => { setConfirmation(e.target.value); } }/>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
