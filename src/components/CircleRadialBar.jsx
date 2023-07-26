import React, { Component } from 'react'


export default function CircleRadialBar({percentage,circleWidth , className , textclassName , storkeWidth }) {
    const radius= circleWidth/2 -storkeWidth;
    const dashArrey = radius * Math.PI *2;
    const dashOffset = dashArrey-(dashArrey*percentage)/100; 
    return(
        <div className={className}>
            <svg width={circleWidth} height={circleWidth} viewBox={`0 0 ${circleWidth} ${circleWidth}`}>
                <circle cx={circleWidth/2} cy={circleWidth/2} strokeWidth={`${storkeWidth}px`} r={radius} className='circle-background stroke-gray-300 dark:stroke-gray-700 fill-none'/>
                <circle cx={circleWidth/2} cy={circleWidth/2} strokeWidth={`${storkeWidth}px`} r={radius} className={`circle-progress  fill-none`} style={{strokeDasharray:dashArrey,strokeDashoffset:dashOffset}} transform={`rotate(-90 ${circleWidth/2} ${circleWidth/2})`}/>                                    
                <text x="50%" y="50%" dy="0.3em" textAnchor='middle' className={textclassName}> 
                    {percentage}%
                </text>
            </svg>
        </div>
    );
}
