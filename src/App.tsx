import React from 'react';
import {ApisInstance} from './common/util/Apis';
import {Routers} from './routers';
import axios from 'axios';

// contexts
import {AppContextProvider} from './context/app';
import {PopupContextProvider} from './context/popup';
import {UserAccountContextProvider} from './context/user';

// styles
import './App.scss';

const App = () => {

  ApisInstance.init(
    axios.create({baseURL: "http://localhost/software_store_api/apis/v1"})
  );

  return (
    <div className="App">
      <AppContextProvider>
        <UserAccountContextProvider>
          <PopupContextProvider>
            <Routers />
          </PopupContextProvider>
        </UserAccountContextProvider>
      </AppContextProvider>
    </div>
  );
}

export default App;
