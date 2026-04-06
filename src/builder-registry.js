import { Builder } from '@builder.io/react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

Builder.registerComponent(Header, {
  name: 'Header',
  inputs: [
    { name: 'title', type: 'string' }
  ]
});

Builder.registerComponent(Sidebar, {
  name: 'Sidebar'
});
