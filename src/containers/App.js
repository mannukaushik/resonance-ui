import React from 'react';
import { Route, Link } from 'react-router-dom';
import CustomNavBar from '../components/CustomNavBar';
import ImageLoader from '../components/ImageLoader';
import SoundBars from '../components/SoundBars';

const App = () => (
  <div>
    <header>
      <Route exact path = "/*" component={CustomNavBar} />
    </header>

    <main>
      <Route exact path="/" component={ImageLoader} />
      <Route exact path="/hometheaters/soundbars" component={SoundBars} />
    </main>
  </div>
)

export default App