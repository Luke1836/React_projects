import React, {useState} from "react";
import memeData from '../Database/info.js';

function Body() {

    const [memeImage, setmemeImage] = useState("");
    function memeGenerator() {
        const memes = memeData.data.memes;
        const MemeNumber = Math.floor((Math.random() * memes.length));
        setmemeImage(memes[MemeNumber].url);    //Since we don't care about the previous state of the state variable
        const randomMeme = memes[MemeNumber];
        console.log(randomMeme);
    }
    return (
        <div className="hero">
            <div className="input-container">
                <div className="form">
                    <label htmlFor="ttext">Top Text</label>
                    <input type="text" placeholder="Enter" id="ttext" name="ttext" />
                </div>
                
                <div className="form">
                    <label htmlFor="btext">Bottom Text</label>
                    <input type="text" placeholder="Enter" id="btext" name="btext" />
                </div>
            </div>

            <div className="buttons">
                <button type="button" className="generator" onClick={memeGenerator}><span>Get a new meme image</span><img src="../Public/Geneartor.png" /></button>
            </div>
        </div>
    );
}

export default Body;