import React,{Component} from "react";
import "../style.css";

interface CounterProps{
    currentNumber:number;
    maxNum:number,
}

function numberGenerator(pos:number,currentNum:number,max:number):number | undefined{
    if(currentNum+pos >= 0 && currentNum+pos <= max){
        return currentNum+pos;
    }
    else return undefined;
}


export const Counter : React.FC<CounterProps> =(props)=>{
    let currentNum = props.currentNumber;
    let maxNum = props.maxNum
    
    const item = [];

    for(let i =0; i<maxNum; i++){
        item.push(<div className="box">{numberGenerator(0-maxNum+i,currentNum,maxNum)}</div>);
    }

    item.push(<div className="box red">{currentNum}</div>);

    for(let i =0; i<maxNum; i++){
        item.push(<div className="box">{numberGenerator(1+i,currentNum,maxNum)}</div>);
    }

    return (
        <div>
            {item}
        </div>
    );
    // return(   
    //     <div className="outer">
    //         <div className="box">{numberGenerator(-9,currentNum)}</div>
    //         <div className="box">{numberGenerator(-8,currentNum)}</div>
    //         <div className="box">{numberGenerator(-7,currentNum)}</div>
    //         <div className="box">{numberGenerator(-6,currentNum)}</div>
    //         <div className="box">{numberGenerator(-5,currentNum)}</div>
    //         <div className="box">{numberGenerator(-4,currentNum)}</div>
    //         <div className="box">{numberGenerator(-3,currentNum)}</div>
    //         <div className="box">{numberGenerator(-2,currentNum)}</div>
    //         <div className="box">{numberGenerator(-1,currentNum)}</div>
    //         <div className="box red">{currentNum}</div>
    //         <div className="box">{numberGenerator(1,currentNum)}</div>
    //         <div className="box">{numberGenerator(2,currentNum)}</div>
    //         <div className="box">{numberGenerator(3,currentNum)}</div>
    //         <div className="box">{numberGenerator(4,currentNum)}</div>
    //         <div className="box">{numberGenerator(5,currentNum)}</div>
    //         <div className="box">{numberGenerator(6,currentNum)}</div>
    //         <div className="box">{numberGenerator(7,currentNum)}</div>
    //         <div className="box">{numberGenerator(8,currentNum)}</div>
    //         <div className="box">{numberGenerator(9,currentNum)}</div>
    //     </div>
    // );

}