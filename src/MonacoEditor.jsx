import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

const THEME_KEY = 'theme-key';

class MonacoEditor extends Component {
  constructor(props) {
    super(props);
    this.initMonaco(props);
  }

  componentDidMount() {
    this.initMonaco();
  }

  initMonaco = ({ theme, value, language, options }) => {
    monaco.editor.defineTheme(THEME_KEY, theme);

    const editorOptions = {
      value,
      language,
      ...options,
      theme: THEME_KEY
    };

    this._editor = monaco.editor.create(this._node, editorOptions);
  };

  render() {
    return (
      <div
        style={{ height: 600 }}
        ref={c => {
          this._node = c;
        }}
      />
    );
  }
}

function noop() {}

MonacoEditor.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.string,
  language: PropTypes.string,
  theme: PropTypes.string,
  options: PropTypes.object,
  editorDidMount: PropTypes.func,
  editorWillMount: PropTypes.func,
  onChange: PropTypes.func
};

MonacoEditor.defaultProps = {
  width: '100%',
  height: '100%',
  value: null,
  language: 'javascript',
  theme: null,
  options: {},
  editorDidMount: noop,
  editorWillMount: noop,
  onChange: noop
};

export default MonacoEditor;
