import Container from "@mui/material/Container";
import ProfileCard from "../components/ProfileCard";
import * as React from "react";
import Button from "@mui/material/Button";
import { useRef, useState } from "react";
import EditPost from "../components/EditPost";
import DetailPost from "../components/DetailPost";
import { CommentBox } from "../components/CommentBox";
import IconButton from "@mui/material/IconButton";
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';

const dummy_prop = {
    id: "1",
    user: "pk",
    title: "Dummy Data title",
    images:
        "https://woulduin.com/assets/users/_meta/2021/07/18/39bd9107-13df-4172-af6a-3674215d3054_KakaoTalk_20210717_191956085.gif",
    content: "Dummy Data Content",
    tags: "#math",
};


const DetailWrapper = ({ style, children }) => {
    return (
        <div
            style={{
                alignItems: "center",
                border: "0.1rem solid lightgray",
                backgroundColor: "white",
                borderRadius: "8px",
                boxSizing: "border-box",
                padding: "10px 12px",
                ...style,
            }}
        >
            {" "}
            {children}{" "}
        </div>
    );
};

export default function Detail() {
    const [isEdit, setIsEdit] = useState(false);

    return (
        <div style={{ display: "flex" }}>
            <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
                <Container sx={{ marginBottom: "16px", marginTop: "20px" }}>
                    {isEdit ? (
                        <EditPost postCard={dummy_prop} finish={() => setIsEdit(false)}/>
                    ) : (
                        <DetailPost postData={dummy_prop} edit={() => setIsEdit(true)} />
                    )}
                </Container>

                { !isEdit && <Container>
                    <DetailWrapper>

                        {/*comment*/}
                        <CommentBox/>

                    </DetailWrapper>
                </Container> }
            </div>

            <ProfileCard />
        </div>
    );
}
