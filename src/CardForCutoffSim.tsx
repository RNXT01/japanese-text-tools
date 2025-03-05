import React, { useState } from 'react';
import CopyButton from "./elements/CopyButton";
import ClearButton from "./elements/ClearButton";

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
                    className="block p-2.5 w-full text-sm rounded-md border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:border-2 focus:border-teal-800"
                    maxLength={MAX_INPUT_LENGTH}
                />
                {inputValue.length >= MAX_INPUT_LENGTH && <p className="text-red-600 text-sm p-2">Maximum input length: {MAX_INPUT_LENGTH}</p>}
                <div className="buttonRow">
                    <div className="actionButtonContainer">
                        <input
                            type="range"
                            value={cutoffLength}
                            min="1"
                            max="50"
                            onChange={(e) => handleCutoffLength(parseInt(e.target.value))}
                            className='slider '
                        />
                        <label className='ml-2 text-sm'>{cutoffLength}</label>
                    </div>
                    <ClearButton onClick={handleClear} className="ml-2" />
                </div>
                <div className="flex justify-between mt-4 w-full">
                    <div className="output text-gray-200 mt-4 w-full" style={{ fontSize: `${Math.max(12, 20 - Math.max(outputValue.length - 50, 0) * .1)}px` }}>
                        <div className="flex justify-between items-center">
                        <span className="outputContent">{outputValue}</span>
                            <CopyButton text={outputValue} className="ml-2" />
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default CardForCutoffSim;
