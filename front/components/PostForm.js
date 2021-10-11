import React, { useRef, useCallback, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../reducers/post';
import useinput from '../hooks/useinput';

const PostForm = () => {
  const { imagePaths, addPostDone } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const [text, OnChangetext, setText] = useinput('');

  const imageInput = useRef();
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  useEffect(() => {
    if (addPostDone) {
      setText('');
    }
  }, [addPostDone]);

  // 리듀서에있는 디스페치 포스트를 가져와서 ADD해준다 ADDPOST는 객체다다
  const onSubmit = useCallback(() => {
    dispatch(addPost(text));
    setText('');
  }, [text]);

  return (
    <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onFinish={onSubmit}>
      <Input.TextArea value={text} onChange={OnChangetext} maxLength={140} placeholder="Write your Question & Hashtag ex) #quiz #CSE" />
      <div>
        {/* ref가 실제 도메인에 접근하는거 이미지 인풋넣으려면 파일타입으로 */}
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>Image Upload</Button>
        <Button type="primary" style={{ float: 'right' }} htmlType="submit">POST</Button>
      </div>
      <div>
        {/* 이미지경로를 반복문돌려서 업로드하는거임 */}
        {imagePaths.map((v) => (
          <div key={v} style={{ display: 'inline-block' }}>
            <img src={`http://localhost:3000/${v}`} style={{ width: '200px' }} alt={v} />
            <div>
              <Button>Delete</Button>
            </div>
          </div>
        ))}
      </div>
    </Form>
  );
};

export default PostForm;
