import React, { useState } from 'react';
import CopyButton from "./elements/CopyButton";
import ClearButton from "./elements/ClearButton";

const CardForInitials: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState('');
    const MAX_INPUT_LENGTH = 200;


    function handleInputChange(inputValue: string) {
        setInputValue(inputValue);
        let outValue = ""
        if (isValidNumber(inputValue)) {
            if (inputValue.includes("万") || inputValue.includes("億") || inputValue.includes("兆") || inputValue.includes("京")) {
                const parsed = parseJapaneseNumber(inputValue);
                if (!isNaN(parsed)) {
                    outValue = parsed.toLocaleString();
                }
            } else {
                outValue = formatJapaneseNumber(Number(inputValue));
            }
        }
        setOutputValue(outValue);
    }

    function isValidNumber(inputValue: string) {
        return /^\d+(\.\d+)?[万億兆京]?$/.test(inputValue);
    }
    const JAPANESE_UNITS = [
        { value: 1e16, symbol: '京' },
        { value: 1e12, symbol: '兆' },
        { value: 1e8,  symbol: '億' },
        { value: 1e4,  symbol: '万' }
      ];

      function parseJapaneseNumber(input: string) {
        const cleaned = input.replace(/,/g, '').trim();
        const match = cleaned.match(/^(\d+(\.\d+)?)([万億兆京])?$/);
        if (!match) return NaN;
      
        const number = parseFloat(match[1]);
        const unit = match[3];
      
        if (!unit) return number;
      
        const unitMap = {
          '万': 1e4,
          '億': 1e8,
          '兆': 1e12,
          '京': 1e16
        };
      
        return number * unitMap[unit as keyof typeof unitMap];
      }
      function formatJapaneseNumber(num: number, decimalPlaces = 2) {
        for (let unit of JAPANESE_UNITS) {
          if (num >= unit.value) {
            const formatted = (num / unit.value).toFixed(decimalPlaces).replace(/\.?0+$/, '');
            return formatted + unit.symbol;
          }
        }
        return num.toString(); 
      }

    const handleClear = () => {
        setInputValue('');
        setOutputValue('');
    };

    return (
        <div className="card ">
            <h2>Numbers</h2>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder="Enter a number, such as 10,000 or 1万"
                className="block p-2.5 w-full text-sm rounded-md border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:border-2 focus:border-teal-800"
                maxLength={MAX_INPUT_LENGTH}
            />
            <div className="buttonRow">
                <div className="actionButtonContainer">
                    
                    {inputValue.length >= MAX_INPUT_LENGTH && <p className="text-red-600 text-sm p-2">Maximum input length: {MAX_INPUT_LENGTH}</p>}



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
    );
};

export default CardForInitials;
