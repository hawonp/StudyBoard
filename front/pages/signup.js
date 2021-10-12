import React, { useCallback, useState } from 'react';
import Head from 'next/head';
import { Button, Checkbox, Form, Input } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
// eslint-disable-next-line import/no-unresolved
import useInput from '../hooks/useInput';
import { SIGN_UP_REQUEST } from '../reducers/user';

const Signup = () => {
  const dispatch = useDispatch();
  const { signUpLoading } = useSelector((state) => state.user);

  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNick] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [hashtag, onChangeHashtag] = useInput('');

  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback((e) => {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  }, []);

  const [term, setTerm] = useState('');
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    dispatch({
      type: SIGN_UP_REQUEST,
      data: { email, password, nickname },
    });
  }, [email, password, passwordCheck, term]);

  return (
    <>
      <Head>
        <title>NodeBird</title>
      </Head>
      <AppLayout>
        <Form onFinish={onSubmit} style={{ padding: 10 }}>
          <div>
            <label htmlFor="user-email">Email</label>
            <br />
            <Input name="user-email" type="email" value={email} required onChange={onChangeEmail} />
          </div>
          <div>
            <label htmlFor="user-nick">Nickname</label>
            <br />
            <Input name="user-nick" value={nickname} required onChange={onChangeNick} />
          </div>
          <div>
            <label htmlFor="user-password">Password</label>
            <br />
            <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
          </div>
          <div>
            <label htmlFor="user-password-check">Confirm your password</label>
            <br />
            <Input
              name="user-password-check"
              type="password"
              value={passwordCheck}
              required
              onChange={onChangePasswordCheck}
            />
            {passwordError && <div style={{ color: 'red' }}>Password does not match!</div>}
          </div>
          <div>
            <label htmlFor="user-hash">Enter at least three hashtags that you are interested in</label>
            <br />
            <Input name="user-hash" type="Hashtag" value={hashtag} onChange={onChangeHashtag} />
          </div>
          <div>
            <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>Agree to Terms and Conditions</Checkbox>
            {termError && <div style={{ color: 'red' }}>Check the Box.</div>}
          </div>
          <div style={{ marginTop: 10 }}>
            <Button type="primary" htmlType="submit" loading={signUpLoading}>Sign In</Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

export default Signup;
