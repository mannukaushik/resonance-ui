import React from 'react';
import { Route} from 'react-router-dom';
import CustomNavBar from '../components/CustomNavBar';
import ImageLoader from '../components/ImageLoader';
import soundBars from '../components/SoundBars';

const App = () => (
  <div>
    <header>
      <Route exact path = "/*" component={CustomNavBar} />
    </header>

    <main>
      <Route exact path="/" component={ImageLoader} />
      <Route exact path="/products/soundbars" component={soundBars} />
    </main>
  </div>
)

export default App;