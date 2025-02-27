import React, { useState } from 'react';



const CardForCommonChars: React.FC = () => {
    // const [inputValue, setInputValue] = useState('');
    // const [outputValue, setOutputValue] = useState('');
    const [toggle, setToggle] = useState(false);
    const handleMouseUp = () => {
        if (toggle) {
            const selectedText = window.getSelection()?.toString();
            if (selectedText) {
                navigator.clipboard.writeText(selectedText).then(() => {
                    console.log('Text copied to clipboard:', selectedText);
                }).catch(err => {
                    console.error('Failed to copy text: ', err);
                });
            }
        }
    };

    const commonChars = "※ 「 」 【 】 《 》 ・ → ← ↑ ↓ ★ ☆ ▲ ▼ ▶ ◀";

    return (
        <>
            <div className="card">
                <h2>Common characters</h2>
                <label className="inline-flex items-center mb-5 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" onClick={() => setToggle(!toggle)}/>
                    <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Copy on select</span>
                </label>
                <div className="flex justify-between mt-4 w-full">

                    <div className="output text-gray-200 mt-4 w-full" style={{ fontSize: 20 }} onMouseUp={handleMouseUp}>
                        <div className="flex justify-between items-center">
                            <span>{commonChars}</span>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default CardForCommonChars;