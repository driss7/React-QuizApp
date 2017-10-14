import React from 'react';


const Question = (props) => {
        return (
            <div>
                {!props.score && <button className="back-button" onClick={props.handleBack}>Back</button> 
                }
                {props.score && <button onClick={props.handleReset}>Restart</button> }               
                <div className="q-a">
                    <p className="q-a__q">{props.question}</p>
                    <p>{props.score}</p>
                    {   
                        Object.values(props.options).map( function(v) {
                        return (
                            <button 
                            onClick={(e) => props.handleOptionClick(v)} 
                            key={v}>{v}</button>
                        )
                        })               
                    }
                </div>
            </div>
        )
}


export default Question