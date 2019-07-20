import React, {Component} from "react";
import {Counter} from "./Counter"

interface ControlProps{

}

interface ControlStates{
    secondOnes:number;
    secondTens:number;
    minuteOnes:number;
    minuteTens:number;
    hourOnes:number;
    hourTens:number;
    // visibility:boolean;
}

export default class Control extends Component<ControlProps,ControlStates>{
    constructor(props:ControlProps){
        super(props);

        this.state={
            secondOnes:0,
            secondTens:0,
            minuteOnes:0,
            minuteTens:0,
            hourOnes:0,
            hourTens:0,
            // visibility:false
        };

        // this.toggleModal=this.toggleModal.bind(this);

    }
    componentDidMount(){
        let today = new Date();
        let hour = today.getHours();
        let minute = today.getMinutes();
        let second = today.getSeconds();

        this.setState({
            secondOnes:second%10,
            secondTens:Math.floor(second/10),
            minuteOnes:minute%10,
            minuteTens:Math.floor(minute/10),
            hourOnes:hour%10,
            hourTens:Math.floor(hour/10),
        });
    }

    // toggleModal(){
    //     this.setState(prevState=>({visibility:!prevState.visibility}))
    // }

    componentDidUpdate(){
        let today = new Date();
        let hour = today.getHours();
        let minute = today.getMinutes();
        let second = today.getSeconds();

        setTimeout(()=>{
            this.setState({
                secondOnes:second%10,
                secondTens:Math.floor(second/10),
                minuteOnes:minute%10,
                minuteTens:Math.floor(minute/10),
                hourOnes:hour%10,
                hourTens:Math.floor(hour/10),
            })
        },1000);
    }

    render(){
        // const {visibility}=this.state;
        return(
            <div style={{margin:"50px auto",width:"130px"}}>
            {/* <button onClick={this.toggleModal}>Toggle</button> */}
            {/* {visibility && <div>Deneme</div>} */}
                <table>
                    <tr>
                        <td><Counter currentNumber={this.state.hourTens} maxNum={2}></Counter></td>
                        <td><Counter currentNumber={this.state.hourOnes} maxNum={9}></Counter></td>

                        <td> : </td>

                        <td><Counter currentNumber={this.state.minuteTens} maxNum={5}></Counter></td>
                        <td><Counter currentNumber={this.state.minuteOnes} maxNum={9}></Counter></td>

                        <td> : </td>

                        <td><Counter currentNumber={this.state.secondTens} maxNum={5}></Counter></td>
                        <td><Counter currentNumber={this.state.secondOnes} maxNum={9}></Counter></td>
                    </tr>
                </table>
            </div>
        );
        
        
    }
}