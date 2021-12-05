import React, { useState, useEffect, useRef } from "react";

// functional component for rich text editing (using a custom CKEdit build)
export default function RichTextEditor({ setContent, content }) {
  // ckeditor states
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, CustomEditor } = editorRef.current || {};

  // load in ckeditor build files
  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      CustomEditor: require("ckeditor5-custom-build/build/ckeditor"),
    };

    setEditorLoaded(true);
  }, []);

  // render the ckeditor
  return editorLoaded ? (
    <div>
      <CKEditor
        style={{
          minHeight: 300,
        }}
        editor={CustomEditor}
        data={content}
        config={{ height: 400 }}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          editor.editing.view.change((writer) => {
            writer.setStyle(
              "word-wrap",
              "break-word",
              editor.editing.view.document.getRoot()
            );
          });
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setContent(data);
        }}
        onBlur={(event, editor) => {}}
        onFocus={(event, editor) => {}}
      />
    </div>
  ) : (
    <div>Editor loading</div>
  );
}
