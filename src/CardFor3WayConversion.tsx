import React, { useState } from 'react';
import CopyButton from "./elements/CopyButton";
import ClearButton from "./elements/ClearButton";
import *  as wanakana from 'wanakana';


const CardFor3WayConversion: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.target.value);
    };

    const convertToRomaji = () => {
        setOutputValue(wanakana.toRomaji(inputValue));
    };
    const convertToKatakana = () => {
        setOutputValue(wanakana.toKatakana(inputValue));
    };
    const convertToHiragana = () => {
        setOutputValue(wanakana.toHiragana(inputValue));
    };

    const handleClear = () => {
        setInputValue('');
        setOutputValue('');
    };

    return (
        <>
            <div className="card">
                <h2>Kana conversion</h2>
                <textarea
                    id="message"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="block p-2.5 w-full text-sm rounded-md border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:border-2 focus:border-teal-800"
                    placeholder="Enter romaji / katakana / hiragana">
                </textarea>
                <div className="buttonRow">
                    <div className="actionButtonContainer">
                        <button type="button" onClick={convertToRomaji} className="actionButton">
                            <span className="text-teal-600 mr-1">A</span>
                            To Romaji
                        </button>
                        <button type="button" onClick={convertToKatakana} className="actionButton">
                        <span className="text-teal-600 mr-1">ア</span>
                        To Katakana
                        </button>
                        <button type="button" onClick={convertToHiragana} className="actionButton">
                        <span className="text-teal-600 mr-1">あ</span>
                        To Hiragana</button>
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
            </div >
        </>
    );
};

export default CardFor3WayConversion;