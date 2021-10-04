//usecallback은 함수를 콜링하는게 유즈 콜백이고
//Use memo는 값을 캐싱하는것
import React, { useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import useInput from '../hooks/useinput';
import { loginRequestAction } from "../reducers/user";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const  LoginForm = () => {
    //엑션을 디스패치한다
    const dispatch = useDispatch();
    const { isLoggingIn } = useSelector((state) => state.user)
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');

    // //리렌더링을 하시는분은
    // const style = useMemo(() => ({ marginTop: 10}), []);
    const onSubmitForm = useCallback(() => {
        console.log(id, password);
        dispatch(loginRequestAction( {id, password}));
    }, [id, password]);


    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">ID</label>
                <br/>
                <Input
                    name="user-id"
                    value={id}
                    onChange={onChangeId}
                    required
                />
            </div>
            <div>
                <label htmlFor="user-password">Pawssword</label>
                <br/>
                <Input
                    name="user-password"
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                    required
                />
            </div>
            {/*style={style} 안에 넣어도 된다*/}
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={isLoggingIn}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    );
}

export default LoginForm;