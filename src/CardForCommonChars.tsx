import React, { useState } from 'react';

const CardForCommonChars: React.FC = () => {
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

    const commonChars = "※ 「 」 【 】 《 》 ・ 〒 → ← ↑ ↓ ★ ☆ ▲ ▼ ▶ ◀ ♪";

    return (
        <>
            <div className="card">
                <h2>Common characters</h2>
                <label className="inline-flex items-center mb-5 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" onClick={() => setToggle(!toggle)} />
                    <div className="relative w-9 h-5 bg-gray-400 
rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all
                    peer-checked:bg-teal-600"></div>
                    <span className="ms-3 text-xs text-gray-200">Copy on select</span>
                </label>
                <div className="flex justify-between mt-4 w-full">

                    <div className="output text-gray-200 w-full" style={{ fontSize: 20 }} onMouseUp={handleMouseUp}>
                        <div className="flex justify-between items-center p-2">
                            <span className="text-small">{commonChars}</span>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default CardForCommonChars;