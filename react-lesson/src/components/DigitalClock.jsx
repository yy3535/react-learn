
import React from 'react';

class DigitalClock extends React.Component {
    constructor(props){
        super(props);
        this.state={
            date:new Date()
        }
    }
    render(){
        return (<div className="digital-clock-component">
            <h1>{this.state.date.toLocaleTimeString()}</h1>
        </div>)
    }
    componentDidMount(){
        this.timer=setInterval(()=>{
            this.setState({
                date:new Date()
            })
        },3000)
    }
    componentDidUpdate(prevProps,prevState){
        console.log(prevState);
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
}

export default DigitalClock;