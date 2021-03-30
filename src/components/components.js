import Home from "../Home";

export function Content ( props ) {
    return (
        <main class="content">
        <Switch>
            <Route path="/"></Route>
            <Home />
            </Switch>    
            </main>  
         )
        }

export default Content