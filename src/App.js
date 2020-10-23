import React           from 'react';
import Header          from './components/header/Header'
import './app.scss'
import Sidebar         from './components/sidebar/Sidebar'
import Footer          from './components/footer/Footer'
import {Route, Switch} from 'react-router-dom'
import Contacts        from './components/content/Contacts'
import About           from './components/content/About'
import Production      from './components/content/Production'
import Cooperation     from './components/content/Cooperation'
import NoMatch         from './components/content/NoMatch'
import Procurement     from './components/content/Procurement'
import Anticorruption  from './components/content/Anticorruption'
import Rent            from './components/content/Rent'
import Employer        from "./components/content/Employer";
import News            from './components/content/News'




function App() {
  return (
    <div className="app">
      <Header/>
      <Switch>
        <Route path="/contacts" component={Contacts} />
        <Route path="/about" component={About} />
        <Route path="/cooperation" component={Cooperation} />
        <Route path="/production" component={Production} />
        <Route path="/procurement" component={Procurement} />
        <Route path="/anticorruption" component={Anticorruption} />
        <Route path="/rent" component={Rent} />
        <Route exact path="/" component={Sidebar} />
        <Route path="/news/:id" component={News} />
        <Route path="/employer" component={Employer} />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
