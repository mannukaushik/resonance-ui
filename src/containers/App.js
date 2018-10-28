import React from 'react';
import { Route} from 'react-router-dom';
import CustomNavBar from '../components/CustomNavBar';
import ImageLoader from '../components/ImageLoader';
import soundBars from '../components/SoundBars';
import footer from '../components/footer';

const App = () => (
  <div>
    <header>
      <Route exact path = "/*" component={CustomNavBar} />
    </header>

    <main>
      <Route exact path="/" component={ImageLoader} />
      <Route exact path="/products/soundbars" component={soundBars} />
    </main>

    <footer>
      <Route exact path="/*" component={footer} />  
    </footer>
  </div>
  
)

export default App;