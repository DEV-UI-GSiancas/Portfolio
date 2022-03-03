import React from 'react';
import {ApisInstance} from './common/util/Apis';
import {Routers} from './routers';
import axios from 'axios';

// contexts
import {AppContextProvider} from './common/util/Context';

// components
import {Header} from './common/components/header';
import {Footer} from './common/components/footer';

import './App.scss';

const App = () => {

  ApisInstance.init(
    axios.create({baseURL: "http://localhost/software_store_api/apis/v1"})
  );

  return (
    <div className="App">
      <AppContextProvider>
        <Header />
          <Routers />
        <Footer />
      </AppContextProvider>
    </div>
  );
}

export default App;
