import React, { useState } from 'react';
import CopyButton from "./elements/CopyButton";
import ClearButton from "./elements/ClearButton";

const CardForHalfFullWidthConv: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.target.value);
    };

    // Define types for both maps
    type KatakanaMapType = {
        [key: string]: string;
    };

    const KATAKANA_MAP: KatakanaMapType = {
        "。": "｡", "「": "｢", "」": "｣", "、": "､", "・": "･",
        "ア": "ｱ", "イ": "ｲ", "ウ": "ｳ", "エ": "ｴ", "オ": "ｵ",
        "カ": "ｶ", "キ": "ｷ", "ク": "ｸ", "ケ": "ｹ", "コ": "ｺ",
        "サ": "ｻ", "シ": "ｼ", "ス": "ｽ", "セ": "ｾ", "ソ": "ｿ",
        "タ": "ﾀ", "チ": "ﾁ", "ツ": "ﾂ", "テ": "ﾃ", "ト": "ﾄ",
        "ナ": "ﾅ", "ニ": "ﾆ", "ヌ": "ﾇ", "ネ": "ﾈ", "ノ": "ﾉ",
        "ハ": "ﾊ", "ヒ": "ﾋ", "フ": "ﾌ", "ヘ": "ﾍ", "ホ": "ﾎ",
        "マ": "ﾏ", "ミ": "ﾐ", "ム": "ﾑ", "メ": "ﾒ", "モ": "ﾓ",
        "ヤ": "ﾔ", "ユ": "ﾕ", "ヨ": "ﾖ",
        "ラ": "ﾗ", "リ": "ﾘ", "ル": "ﾙ", "レ": "ﾚ", "ロ": "ﾛ",
        "ワ": "ﾜ", "ヲ": "ｦ", "ン": "ﾝ",
        "ガ": "ｶﾞ", "ギ": "ｷﾞ", "グ": "ｸﾞ", "ゲ": "ｹﾞ", "ゴ": "ｺﾞ",
        "ザ": "ｻﾞ", "ジ": "ｼﾞ", "ズ": "ｽﾞ", "ゼ": "ｾﾞ", "ゾ": "ｿﾞ",
        "ダ": "ﾀﾞ", "ヂ": "ﾁﾞ", "ヅ": "ﾂﾞ", "デ": "ﾃﾞ", "ド": "ﾄﾞ",
        "バ": "ﾊﾞ", "ビ": "ﾋﾞ", "ブ": "ﾌﾞ", "ベ": "ﾍﾞ", "ボ": "ﾎﾞ",
        "パ": "ﾊﾟ", "ピ": "ﾋﾟ", "プ": "ﾌﾟ", "ペ": "ﾍﾟ", "ポ": "ﾎﾟ",
        "ヴ": "ｳﾞ", "ァ": "ｧ", "ィ": "ｨ", "ゥ": "ｩ", "ェ": "ｪ", "ォ": "ｫ",
        "ャ": "ｬ", "ュ": "ｭ", "ョ": "ｮ", "ッ": "ｯ",
        "　": " ", "！": "!", "？": "?", "＠": "@", "＃": "#", "＄": "$", "％": "%", "＆": "&", "＊": "*", "：": ":",
        "〜": "~", "（": "(", "）": ")", "｜": "|", "￥": "¥", "＜": "<", "＝": "=", "＞": ">", "｀": "`", "ー": "-", "＿": "_", "／": "/",
        "０": "0", "１": "1", "２": "2", "３": "3", "４": "4", "５": "5", "６": "6", "７": "7", "８": "8", "９": "9",
        "Ａ": "A", "Ｂ": "B", "Ｃ": "C", "Ｄ": "D", "Ｅ": "E", "Ｆ": "F",
        "Ｇ": "G", "Ｈ": "H", "Ｉ": "I", "Ｊ": "J", "Ｋ": "K", "Ｌ": "L",
        "Ｍ": "M", "Ｎ": "N", "Ｏ": "O", "Ｐ": "P", "Ｑ": "Q", "Ｒ": "R",
        "Ｓ": "S", "Ｔ": "T", "Ｕ": "U", "Ｖ": "V", "Ｗ": "W", "Ｘ": "X",
        "Ｙ": "Y", "Ｚ": "Z",
        "ａ": "a", "ｂ": "b", "ｃ": "c", "ｄ": "d", "ｅ": "e", "ｆ": "f",
        "ｇ": "g", "ｈ": "h", "ｉ": "i", "ｊ": "j", "ｋ": "k", "ｌ": "l",
        "ｍ": "m", "ｎ": "n", "ｏ": "o", "ｐ": "p", "ｑ": "q", "ｒ": "r",
        "ｓ": "s", "ｔ": "t", "ｕ": "u", "ｖ": "v", "ｗ": "w", "ｘ": "x",
        "ｙ": "y", "ｚ": "z"
    };

    // Create reverse map with the same type
    const REVERSE_KATAKANA_MAP: KatakanaMapType = Object.fromEntries(
        Object.entries(KATAKANA_MAP).map(([key, value]) => [value, key])
    );

    const convertToFullWidth = () => {
        setOutputValue(inputValue.replace(/./g, char => REVERSE_KATAKANA_MAP[char] || char));
    };

    const convertToHalfWidth = () => {
        setOutputValue(inputValue.replace(/./g, char => KATAKANA_MAP[char] || char));
    };

    const handleClear = () => {
        setInputValue('');
        setOutputValue('');
    };

    return (
        <>
            <div className="card">
                <h2>Half-width / Full-width Converter</h2>
                <textarea
                    id="message"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="block p-2.5 w-full text-sm rounded-md border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:border-2 focus:border-teal-800"
                    placeholder="Enter Japanese text">
                </textarea>
                <div className="buttonRow">
                    <div className='actionButtonContainer'>
                        <button type="button" onClick={convertToFullWidth} className="actionButton">
                            <span className="text-teal-600 mr-2">Ａ</span>
                            To Full-width
                        </button>
                        <button type="button" onClick={convertToHalfWidth} className="actionButton">
                            <span className="text-teal-600 mr-2">A</span>
                            To Half-width</button></div>
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

export default CardForHalfFullWidthConv;