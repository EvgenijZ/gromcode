import { createRoot } from 'react-dom/client';
import './styles.css';

const container = document.querySelector('#root');

const renderGreeting = elem => {
  const root = createRoot(elem);

  root.render(
    <div className="greeting">
      <div className="greeting__title">Hello, world!</div>
      <div className="greeting__text">I'm learning React</div>
    </div>
  );

}

renderGreeting(container);

