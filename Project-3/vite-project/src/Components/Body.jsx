import React, {useState, useEffect} from "react";
import Button from "./Button.jsx";

function Body() {

    //State for Meme Images
    const [memeImage, setMemeImage] = useState({
                topText: "",
                bottomText: "",
                randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemeImages, setAllMemeImages] = useState([]);
    
    //Side Effect Making API calls to fetch data
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeImages(data.data.memes))
    }, []); //So we don't have any elements in the dependencies array as we are only calling it once when the component is rendered

    //console.log(allMemeImages);

    //Genarating random meme images
    function memeGenerator() {
        const MemeNumber = Math.floor((Math.random() * allMemeImages.length));
        const url = allMemeImages[MemeNumber].url
        setMemeImage(prevState => (
            {
                ...prevState,
                randomImage: url
            }
            )   //Implicit return property
        );
        const memeContainer = document.querySelector(".memes-container");
        memeContainer.classList.remove('inactive');
    }

    function handleChanges(event) {
        const {name, value} = event.target;
        setMemeImage(prevState => ({
            ...prevState,
            [name]: value
        }))
        //console.log(memeImage);
    }

    return (
        <div className="hero">
            <div className="initial-section">
                <div className="input-container">
                    <div className="form">
                        <label htmlFor="ttext">Top Text</label>
                        <input type="text" placeholder="Enter" id="ttext" name="topText" onChange={handleChanges} value={memeImage.topText} />
                    </div>
                    
                    <div className="form">
                        <label htmlFor="btext">Bottom Text</label>
                        <input type="text" placeholder="Enter" id="btext" name="bottomText" onChange={handleChanges} value={memeImage.bottomText} />
                    </div>
                </div>

                <div className="buttons">
                    <Button memeGenerator={memeGenerator} />
                </div>
            </div>
            
            <div className="memes-container inactive">
                <img src={memeImage.randomImage} loading="eager" className="meme-image"/>
                <h2 className="meme--text top">{memeImage.topText}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
            </div>
        </div>
    );
}

export default Body;