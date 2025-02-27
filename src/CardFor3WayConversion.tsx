import React, { useState } from 'react';
import CopyButton from "./CopyButton";
import * as wanakana from 'wanakana';



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
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter romaji / katakana / hiragana">
                </textarea>
                <button type="button" onClick={convertToRomaji} className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">To Romaji</button>
                <button type="button" onClick={convertToKatakana} className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">To Katakana</button>
                <button type="button" onClick={convertToHiragana} className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">To Hiragana</button>
                <button type="button" onClick={handleClear} className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-md text-sm px-5 py-2.5 mb-2">Clear</button>
                <div className="flex justify-between mt-4 w-full">
                    <div className="output text-gray-200 mt-4 w-full" style={{ fontSize: `${Math.max(12, 20 - Math.max(outputValue.length - 50, 0) * .1)}px` }}>
                        <div className="flex justify-between items-center">
                            <span>{outputValue}</span>
                            <CopyButton text={outputValue} className="ml-2" />
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default CardFor3WayConversion;