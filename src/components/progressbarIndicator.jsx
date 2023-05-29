import React, {useState} from 'react';
import '../styles/progressbar.css'

const steps = [
    {
        index: 0,
        label: 'Step 1',
        text: 'Lorem ipsum dolor sit amet, consectetur.'
    },

    {
        index: 1,
        label: 'Step 2',
        text: 'Lorem ipsum dolor sit amet, consectetur.'
    },

    {
        index: 2,
        label: 'Step 3',
        text: 'Lorem ipsum dolor sit amet, consectetur.'
    },

    {
        index: 3,
        label: 'Step 4',
        text: 'Lorem ipsum dolor sit amet, consectetur.'},
    {
        index:4,
        label: 'FINAL STEP',
        text: 'Lorem ipsum dolor sit amet, consectetur.'
    },

];

const ProgressIndicator = ()=>{
    const [activeIndex, setActiveIndex]  = useState(0);
    return(
        <div className='constainer'>
            <ul className='progress-indicator'>
                {steps.map(step=>(
                    <li
                        key={step.index}
                        className={`
                            progress-step
                            ${activeIndex ===step.index? "active" : "inactive"}
                            ${activeIndex>step.index?"complete" : "incomplete"}

                        `}
                    >
                        <span className='step-number'>{step.index + 1}</span>
                        <div className='label_text'>
                            <p className='ph3'>{step.label}</p>
                            <p className='ph4'>{step.text}</p>
                        </div>
                    </li>    

                ))
                }

            </ul>

            <div className='actions'>
                {activeIndex > 0 &&(
                    <button
                        onClick = {() =>setActiveIndex(activeIndex - 1)}
                        className = 'progress-button prev'
                        >
                            Previous Step
                        </button>
                )}
                {activeIndex < steps.length - 1 && (
                    <button
                    onClick = {() => setActiveIndex(activeIndex + 1)}
                    className = 'progress-button next'>
                        Next Step
                    </button>
                )}
            </div>
        </div>
    );
}
export default ProgressIndicator;



