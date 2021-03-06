import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './scss/style.scss'
import './assets/css/my-custom-styles.css'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const FrontPageLayout = React.lazy(() => import('./views/pages/FrontPage'))
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

class App extends Component {
  render() {
    return (
      <Router>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route
              exact
              path="/dokargi/login"
              name="Login Page"
              render={(props) => <Login {...props} />}
            />
            <Route
              exact
              path="/dokargi/register"
              name="Register Page"
              render={(props) => <Register {...props} />}
            />
            <Route
              exact
              path="/dokargi/404"
              name="Page 404"
              render={(props) => <Page404 {...props} />}
            />
            <Route
              exact
              path="/dokargi/500"
              name="Page 500"
              render={(props) => <Page500 {...props} />}
            />

            {/* Route Admin */}
            <Route path="/dokargi/admin" component={DefaultLayout} />

            {/* Route Landing Page */}
            <Route path="/dokargi" render={(props) => <FrontPageLayout {...props} />} />

            {/* <Route path="/" name="Home" render={(props) => <DefaultLayout {...props} />} /> */}
            <Redirect from="/" to="/dokargi" />
          </Switch>
        </React.Suspense>
      </Router>
    )
  }
}

export default App
