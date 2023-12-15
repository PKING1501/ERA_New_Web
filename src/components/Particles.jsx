import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Particles = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'particles.js';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'app.js';
    script2.async = true;
    document.body.appendChild(script2);
  }, []);

  return (
    // Your component JSX
    // Make sure to include the Helmet component
    <Helmet>
      <script src="particles.js" />
      <script src="app.js" />
    </Helmet>
  );
};

export default Particles;
