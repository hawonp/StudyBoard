import React, {useMemo} from "react";
import { Form, Input } from "antd";

const NicknameEditForm = () => {
    //적용완료
    const style = useMemo(() => ({ marginTop: '10px', marginBottom:'10px', border: '1px solid #d9d9d9', padding: '30px'}),[])

    return(
        <Form style={style}>
            <Input.Search addonBefore="Nickname" enterButton="edit" />
        </Form>
    )
};

export default NicknameEditForm;