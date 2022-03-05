import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CSpinner } from '@coreui/react'

// routes front page config
import routesFront from 'src/routes_front'

const Content = () => {
  return (
    <div className="content">
      <Suspense fallback={<CSpinner color="primary" />} />
      <Switch>
        {routesFront.map((route, idx) => {
          return (
            route.component && (
              <Route
                key={idx}
                path={route.path}
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
    </div>
  )
}

export default React.memo(Content)
