import { createRoot } from 'react-dom/client';
import './styles.css';

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(
  <h1 class="title">Todo List</h1>
);

