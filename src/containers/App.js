import React,{Component} from 'react';
import HeaderContainer from './headerContainer/HeaderContainer';
import GeneralContainer from './generalContainer/GeneralContainer';

class App extends Component{
    render(){
        return(
            <div>
                <HeaderContainer />
                <GeneralContainer />    
            </div>
        )
    }
}

export default App;
