import { Route, RouteProps, Navigate } from 'react-router-dom'

interface PrivateRouteProps extends RouteProps {
  // tslint:disable-next-line:no-any
  component?: any
  // tslint:disable-next-line:no-any
  children?: any
  isLoggedIn: boolean
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, children, ...rest } = props

  return (
    <Route
      {...rest}  
      element={(routeProps: any) =>
        props.isLoggedIn ? ( 
            Component ? <Component {...routeProps} /> : children
        ) : (
            <Navigate
                to={'/'}
                state={routeProps.location }
            />
        )
      }
    />
  )
}

export default PrivateRoute
