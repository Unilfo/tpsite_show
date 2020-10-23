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
        <Route path="/tpsite_show/contacts" component={Contacts} />
        <Route path="/tpsite_show/about" component={About} />
        <Route path="/tpsite_show/cooperation" component={Cooperation} />
        <Route path="/tpsite_show/production" component={Production} />
        <Route path="/tpsite_show/procurement" component={Procurement} />
        <Route path="/tpsite_show/anticorruption" component={Anticorruption} />
        <Route path="/tpsite_show/rent" component={Rent} />
        <Route exact path="/tpsite_show/" component={Sidebar} />
        <Route path="/tpsite_show/news/:id" component={News} />
        <Route path="/tpsite_show/employer" component={Employer} />
        <Route path="/tpsite_show/*">
          <NoMatch />
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
