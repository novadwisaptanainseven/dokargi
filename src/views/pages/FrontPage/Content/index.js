import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { baseRoutePath } from 'src/helpers/url'

// routes front page config
import routesFront from 'src/routes_front'
import { LoadingScreen } from '../Components'

const Content = () => {
  return (
    <div className="content">
      <Suspense fallback={<LoadingScreen />}>
        <Switch>
          {routesFront.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={baseRoutePath + route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => (
                    <>
                      <route.component {...props} />
                    </>
                  )}
                />
              )
            )
          })}
        </Switch>
      </Suspense>
    </div>
  )
}

export default React.memo(Content)
