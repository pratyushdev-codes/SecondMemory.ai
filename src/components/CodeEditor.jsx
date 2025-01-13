import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import EditorToolbar from './EditorToolbar';

const CodeEditor = () => {
  const defaultCode = `// Upload or Paste your Code here
function example() {
  console.log("Hello, World!");
}

// Start coding here...`;

  const [code, setCode] = useState(defaultCode);

  const handleFileUpload = (content) => {
    setCode(content);
  };

  const handleClear = () => {
    setCode('');
  };

  return (
    <div className="h-full w-full bg-gradient-to-b from-[#1C1E29] to-[#0F1117]  rounded-3xl flex flex-col">
      <EditorToolbar onFileUpload={handleFileUpload} onClear={handleClear} />
      <div className="flex-1">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          value={code}
          onChange={(value) => setCode(value || '')}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            acceptSuggestionOnCommitCharacter: true,
            codeLens: true,
            cursorBlinking: "blink",
            wordWrap: 'on',
            automaticLayout: true,
            padding: { top: 20 },
            scrollBeyondLastLine: false,
            colorDecorators: true,
            lineNumbers: 'on',
            roundedSelection: true,
            renderLineHighlight: 'all',
            fontFamily: 'monospace',
            rulers: [],
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;