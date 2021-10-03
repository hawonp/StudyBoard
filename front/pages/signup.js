import React, { useState } from 'react';
import Head from 'next/head';
import { Button, Checkbox, Form, Input } from 'antd';

import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';

const Signup = () => {
    const [passwordCheck, setPasswordCheck] = useState('');
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);

    const [id, onChangeId] = useInput('');
    const [nick, onChangeNick] = useInput('');
    const [password, onChangePassword] = useInput('');

    const onSubmit = () => {
        if (password !== passwordCheck) {
            setPasswordError(true);
            return;
        }
        if (!term) {
            setTermError(true);
            return;
        }
        console.log({
            id,
            nick,
            password,
            passwordCheck,
            term,
        });
    };

    const onChangePasswordCheck = (e) => {
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    };

    const onChangeTerm = (e) => {
        setTermError(false);
        setTerm(e.target.checked);
    };

    return (
        <>
            <Head>
                <title>NodeBird</title>
            </Head>
            <AppLayout>
                <Form onFinish={onSubmit} style={{ padding: 10 }}>
                    <div>
                        <label htmlFor="user-id">ID</label>
                        <br />
                        <Input name="user-id" value={id} required onChange={onChangeId} />
                    </div>
                    <div>
                        <label htmlFor="user-nick">Nickname</label>
                        <br />
                        <Input name="user-nick" value={nick} required onChange={onChangeNick} />
                    </div>
                    <div>
                        <label htmlFor="user-password">Password</label>
                        <br />
                        <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
                    </div>
                    <div>
                        <label htmlFor="user-password-check">Password again</label>
                        <br />
                        <Input
                            name="user-password-check"
                            type="password"
                            value={passwordCheck}
                            required
                            onChange={onChangePasswordCheck}
                        />
                        {passwordError && <div style={{ color: 'red' }}>Password is not match</div>}
                    </div>
                    <div>
                        <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>You need to listen what I said</Checkbox>
                        {termError && <div style={{ color: 'red' }}>Check the Box.</div>}
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <Button type="primary" htmlType="submit">Sign In</Button>
                    </div>
                </Form>
            </AppLayout>
        </>
    );
};

export default Signup;