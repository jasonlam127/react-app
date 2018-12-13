import React, { Component } from 'react';
import Nevigation from './Components/Nevigation/Nevigation';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import './App.css';
import Clarifai from 'clarifai';


const Clarifaiapp = new Clarifai.App({
  apiKey: 'ca78a2909be34e4e9bc864ba01c0343a'
});


class App extends Component {
  constructor(){
    super();
    this.state ={
      input:'',
      imageUrl:'',
      box: {},
      faceDetected: 0,
    }
  }

  func = () =>{

  }

  calFaceLocation = (data) => {
    
    const image = document.getElementById('inputImage');

    const width = Number(image.width);
    const height = Number(image.height);

    let face_bounding_boxs =[] ;
    for (let i =0 ; i< data.outputs[0].data.regions.length; i++)
    {

      const clarifaiFace = data.outputs[0].data.regions[i].region_info.bounding_box;
      let box = {
        leftCol: clarifaiFace.left_col *width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      };

      face_bounding_boxs.push(box);
    }


    //increase face number
    let num = this.state.faceDetected + data.outputs[0].data.regions.length;
    this.setState({faceDetected: num});


    return face_bounding_boxs;

  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({imageUrl:this.state.input})

    Clarifaiapp.models.predict("a403429f2ddf4b49b307e318f00e528b", this.state.input)
    .then(response => this.displayFaceBox(this.calFaceLocation(response)))
    .catch(err => console.log(err));
    
    

  }

  createBox = (box) => {
    let table = []

    for (let i =0; i<box.length; i++){
        //Create the parent and add the children
      table.push(
        <div key={i}
          className = "bounding-box" 
          style = {{  top:box[i].topRow,
                right:box[i].rightCol,
                bottom:box[i].bottomRow,
                left:box[i].leftCol
              }}>
      </div>
        )
    }

    return table;
  }

  render() {
    return (
      <div className="App">

        <link rel="stylesheet" href="https://unpkg.com/tachyons@4/css/tachyons.min.css"/>

        <Nevigation />
        <Logo />
        <Rank num={this.state.faceDetected} />
        
        <ImageLinkForm onInputChange = {this.onInputChange} onButtonSubmit ={this.onButtonSubmit} />
        <FaceRecognition box = {this.createBox(this.state.box)} imageUrl = {this.state.imageUrl} />



      </div>
    );
  }
}

export default App;
