import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

class MonacoEditor extends Component {
  constructor(props) {
    super(props);
    this.initMonaco(props);
  }

  componentDidMount() {
    this.initMonaco();
  }

  initMonaco = ({ value, language, options }) => {
    const editorOptions = {
      value,
      language,
      ...options
    };

    this._editor = monaco.editor.create(this._node, editorOptions);
  };

  render() {
    return (
      <div>
        Monaco editor
        <div
          style={{ height: 600 }}
          ref={c => {
            this._node = c;
          }}
        />
      </div>
    );
  }
}

function noop() {}

MonacoEditor.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.string,
  language: PropTypes.string,
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
  options: {},
  editorDidMount: noop,
  editorWillMount: noop,
  onChange: noop
};

export default MonacoEditor;
