import React from 'react';
import { render } from 'react-dom';
import DummyComponent from './DummyComponent';

const mainDOMNode = document.getElementById('app');
render(<DummyComponent />, mainDOMNode);
