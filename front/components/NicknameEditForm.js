import React, { useMemo } from 'react';
import { Form, Input } from 'antd';

const NicknameEditForm = () => {
  // 적용완료
  const style = useMemo(() => ({ marginTop: '10px', marginBottom: '10px', border: '1px solid #d9d9d9', padding: '30px' }), []);

  return (
    <Form style={style}>
      <Input.Search addonBefore="Nickname" enterButton="edit" style={{ marginBottom: '10px', padding: '30px' }} />
      <Input.Search addonBefore="Hash Tag" enterButton="edit" style={{ padding: '30px' }} />
    </Form>
  );
};

export default NicknameEditForm;
