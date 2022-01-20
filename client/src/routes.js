import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {MainPage} from './pages/MainPage'
import {AuthPage} from './pages/AuthPage'

//exact - откликается исключительно на данную ссылку 
//isAuthenticated - пользователь зарегестрирован в системе

export const useRoutes = (isAuthenticated, isAdmin) => {

    if(isAuthenticated && isAdmin) {
        return (
            <Switch>
            <Route path = "/main" exact>
                <MainPage />
            </Route>
            <Redirect to = "/main" />
        </Switch>
        )
    }

    if(isAuthenticated) {
        return (
            <Switch>
            <Route path = "/main" exact>
                <MainPage />
            </Route>
            <Redirect to = "/main" />
        </Switch>
        )
    }

    //если isAuthenticated = false
    return (
        <Switch>
            <Route path = "/" exact>
                <AuthPage />
            </Route>
            <Redirect to = "/" /> 
        </Switch>
    )
}

//файл для определения всех ссылок 