import React, { useState, useEffect, useRef } from "react";

export default function PostEditor({ setContent, content }) {
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, CustomEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      CustomEditor: require("ckeditor5-custom-build/build/ckeditor"),
    };

    setEditorLoaded(true);
  }, []);

  return editorLoaded ? (
    <div>
      <CKEditor
        style={{ minHeight: 300 }}
        editor={CustomEditor}
        data={content}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          editor.editing.view.change((writer) => {
            writer.setStyle(
              "min-height",
              "200px",
              editor.editing.view.document.getRoot()
            );
          });
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log(typeof data);
          setContent(data);
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </div>
  ) : (
    <div>Editor loading</div>
  );
}
