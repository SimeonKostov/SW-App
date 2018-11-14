import React,{Component} from 'react';
import options from './options';
import SideBar from '../../components/sideBar/SideBar';
import 'tachyons';
import './general.css';
import ResultsList from '../../components/mainContent/ResultsList';

class GeneralContainer extends Component{
    constructor(){
        super();
        this.state={
            type: '',
            content: []
        }
        this.onContentChange=this.onContentChange.bind(this);
    }

    componentDidMount(){
        fetch('https://swapi.co/api/people/?format=json')
        .then(resp=>resp.json())
        .then(json=>this.setState({content: json.results, type: 'people'}));
    }

    onContentChange=(event)=>{
        let id=event.target.id;
        fetch(`https://swapi.co/api/${event.target.id}/?format=json`)
        .then(resp=>resp.json())
        .then(json=>this.setState({content: json.results, type: id}));
    }

    render(){
        let {type, content}=this.state;
        console.log(content);
        return(
            <div className='flex flex-wrap flex-column'>
                <SideBar options={options} onContentChange={this.onContentChange}/>
                <ResultsList cont={content} contType={type}/>
            </div>
        )
    }
}

export default GeneralContainer;
