import React, {useEffect, useState} from "react"
// import myImage from "../assets/meme.png"
// import memesData from "./memesData";

function Meme() {
    const [meme , setMeme] = React.useState({
        topText : "" ,
        bottomText : "" ,
        randomImage : "http://i.imgflip.com/1bij.jpg"
    }) ; 
    
    
    const [memesData , setMemesData] = useState([]) ;

    useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(mydata => setMemesData(mydata.data.memes))

    } , []) ; 


    function getMemeImage() {
        const memesArray = memesData
        const randomNumber = Math.floor(Math.random() * memesArray.length)
         setMeme(prevState => ({
            ...prevState,
            randomImage: memesArray[randomNumber].url 
        }));
        
    }
    
    // const [image , setImage] = useState("https://i.imgflip.com/30b1gx.jpg") 
    
    // function getImage(){
    //     const num = Math.floor(Math.random() * 100)
    //     const url = memesData.data.memes[num].url 
    //     setImage(prevState => url)
    // }

    function handleChange(event){
        const {name , value} = event.target 
        setMeme(prevState => ({
            ...prevState ,
            [name] : value 
        }))
    }

    return (
        <main>
            <div className="grid-container">
                <input 
                    type="text" 
                    className="top-text-input" 
                    placeholder="Please Enter"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    className="bottom-text-input" 
                    placeholder="Please Enter"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    onClick = {getMemeImage}
                >
                Get a new image
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )

}

export default Meme;