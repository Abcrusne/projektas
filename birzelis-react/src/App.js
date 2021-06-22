import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import NavigationComponent from './components/Navigation/NavigationComponent';
import ItemListContainer from './components/Items/ItemListContainer';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import ItemsAdministrationContainer from './components/Items/ItemsAdministrationContainer';
import FormContainer from './components/Items/FormContainer';
import NotReady from './components/NotReady/NotReadyComponent';
import NoMatch from './components/Nomatch/NoMatch';
import UpdateClientContainer from './components/Items/UpdateClientContainer';
import InventorListContainer from './inventor/InventorListContainer';
import InventorFormContainer from './inventor/InventorFormContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <NavigationComponent />
        <Switch>
          <Route exact path="/" component={ItemListContainer} />
          <Route exact path="/clients" component={ItemListContainer} />
          <Route exact path="/clients/:id" component={ItemDetailContainer} />
          <Route exact path="/admin" component={ItemsAdministrationContainer} />
          <Route
            exact
            path="/admin/client/atnaujinti/:id"
            component={UpdateClientContainer}
          />
          <Route exact path="/admin/new" component={FormContainer} />
          <Route exact path="/inventorius" component={InventorListContainer} />
          <Route
            exact
            path="/admin/client/prideti/inventoriu/:id"
            component={InventorFormContainer}
          />
          <Route
            exact
            path="/admin/client/prideti/inventoriu/"
            component={InventorFormContainer}
          />
          <Route exact path="/delete" component={NotReady} />
          <Route path="*" component={NoMatch} />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
