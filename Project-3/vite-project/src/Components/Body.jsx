import React, {useState} from "react";
import memeData from '../Database/info.js';

function Body() {
    //State for Meme Images
    const [memeImage, setMemeImage] = useState({
                topText: "",
                bottomText: "",
                randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemeImages, setAllMemeImages] = useState(memeData); 
    function memeGenerator() {
        const memes = memeData.data.memes;
        const MemeNumber = Math.floor((Math.random() * memes.length));
        setMemeImage(memes[MemeNumber].url);    //Since we don't care about the previous state of the state variable
        const memeContainer = document.querySelector(".memes-container");
        memeContainer.classList.remove('inactive');
    }

    return (
        <div className="hero">
            <div className="initial-section">
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
            
            <div className="memes-container inactive">
                <img src={memeImage} loading="eager" />
            </div>
        </div>
    );
}

export default Body;