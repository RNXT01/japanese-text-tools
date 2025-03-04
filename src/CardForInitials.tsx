import React, { useState, useEffect } from 'react';
import CopyButton from "./elements/CopyButton";
import ClearButton from "./elements/ClearButton";

const CardForInitials: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState('');
    const [isToggled, setIsToggled] = useState(false);
    const MAX_INPUT_LENGTH = 200;

    useEffect(() => {
        handleInputChange(inputValue);
    }, [isToggled]);

    const toggle = () => {
        setIsToggled(!isToggled);
    }

    const romajiToKatakana: { [key: string]: string } = {
        A: "エー",
        B: "ビー",
        C: "シー",
        D: "ディー",
        E: "イー",
        F: "エフ",
        G: "ジー",
        H: "エイチ",
        I: "アイ",
        J: "ジェイ",
        K: "ケー",
        L: "エル",
        M: "エム",
        N: "エヌ",
        O: "オー",
        P: "ピー",
        Q: "キュー",
        R: "アール",
        S: "エス",
        T: "ティー",
        U: "ユー",
        V: "ブイ",
        W: "ダブリュー",
        X: "エックス",
        Y: "ワイ",
        Z: "ゼット"
    };
    const romajiToHiragana: { [key: string]: string } = {
        A: "えー",
        B: "びー",
        C: "しー",
        D: "でぃー",
        E: "いー",
        F: "えふ",
        G: "じー",
        H: "えいち",
        I: "あい",
        J: "じぇい",
        K: "けー",
        L: "える",
        M: "えむ",
        N: "えぬ",
        O: "おー",
        P: "ぴー",
        Q: "きゅー",
        R: "あーる",
        S: "えす",
        T: "てぃー",
        U: "ゆー",
        V: "ぶい",
        W: "だぶりゅー",
        X: "えっくす",
        Y: "わい",
        Z: "ぜっと"
    };

    function handleInputChange(inputValue: string) {
        setInputValue(inputValue);
        let outValue = "";
        if (isToggled) {
            outValue = inputValue
                .split("")
                .map(char => romajiToHiragana[char.toUpperCase()] || '')
                .join(" ");
        }
        else {
            outValue = inputValue
                .split("")
                .map(char => romajiToKatakana[char.toUpperCase()] || '')
                .join(" ");
        }
        setOutputValue(outValue);
    }

    const handleClear = () => {
        setInputValue('');
        setOutputValue('');
    };

    return (
        <div className="card ">
            <h1>Initials</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder="Enter alphabetical initials..."
                className="border border-gray-400 rounded-md p-2  w-full"
                maxLength={MAX_INPUT_LENGTH}
            />
            <div className="buttonRow">
                <div className="actionButtonContainer">
                    <span className={`${isToggled ? "text-gray-500 dark:text-gray-500" : "text-gray-100 dark:text-gray-100"} text-sm `}>Katakana</span><span className={`ml-1 ${isToggled ? "text-gray-500" : "text-teal-600"}`}>ア</span>

                    <label className="inline-flex items-center mx-3 cursor-pointer">
                        <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                            onClick={toggle}
                            defaultChecked={false}
                        ></input>
                        <div className="relative w-11 h-6 bg-slate-600 rounded-full peer peer-focus:ring-slate-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-100 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-600 "></div>
                    </label>
                    {inputValue.length >= MAX_INPUT_LENGTH && <p className="text-red-600 text-sm p-2">Maximum input length: {MAX_INPUT_LENGTH}</p>}
                    <span className={`mr-1 ${isToggled ? "text-teal-600" : "text-gray-500"}`}>あ</span>
                    <span className={`${isToggled ? "text-gray-100 dark:text-gray-100" : "text-gray-500"} text-sm `}>Hiragana</span>


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
