import React, { useState } from 'react';
import CopyButton from "./CopyButton";

const CardForCutoffSim: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState('');
    const [cutoffLength, setCutoffLength] = useState(10);

    const MAX_INPUT_LENGTH = 200;

    function handleInputChange(inputValue: string) {
        setInputValue(inputValue);
        setOutputValue(inputValue.slice(0, cutoffLength));
    }

    const handleClear = () => {
        setInputValue('');
        setOutputValue('');
    };

    const handleCutoffLength = (length: number) => {
        setCutoffLength(length);
        setOutputValue(inputValue.slice(0, length));
        console.log(cutoffLength);
    }

    return (
        <>
            <div className="card">
                <h2>Text cutoff simulator</h2>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => handleInputChange(e.target.value)}
                    placeholder="Enter text..."
                    className="border border-gray-400 rounded-md p-2 mb-4 w-full"
                    maxLength={MAX_INPUT_LENGTH}
                />
                {inputValue.length >= MAX_INPUT_LENGTH && <p className="text-red-600 text-sm p-2">Maximum input length: {MAX_INPUT_LENGTH}</p>}
                
                <input 
                    type="range" 
                    value={cutoffLength}
                    min="1"
                    max="50"
                    onChange={(e) => handleCutoffLength(parseInt(e.target.value))}
                />
                <label>{cutoffLength}</label>

                <button onClick={handleClear} type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-5 py-2.5 mb-2">Clear</button>
                <div className="flex justify-between mt-4 w-full">
                    <div className="output text-gray-200 mt-4 w-full" style={{ fontSize: `${Math.max(12, 20 - Math.max(outputValue.length - 50, 0) * .1)}px` }}>
                        <div className="flex justify-between items-center">
                            <span>{outputValue}</span>
                            <CopyButton text={outputValue} className="ml-2" />
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default CardForCutoffSim;
