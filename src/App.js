
import React, {Component} from 'react'
import FaceRecognition from './components/FaceRecoginition/FaceRecoginition'
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import './App.css'
import Particles from 'react-particles-js';
import  Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey:'a1a4b467e32e45c4870ebeb720261d17'
})


const particlesOptions={
  particles:{
    number:{
      value:70,
      density:{
        enable:true,
        value_area:800
      }
    }
  }
}
class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
      imageUrl:'',
      faceSentiment:''
    }
  }

  calculateFaceLocation =(data)=>{
    // console.log(data.outputs[0].data.concepts)
    const myArray = data.outputs[0].data.concepts
    let largestProb=0
    myArray.forEach((element, index, array) => {
      // console.log(element.value);
      // console.log(element.name);
      if (element.value >  largestProb){
        largestProb=element.value
        this.setState({faceSentiment:element.name})
      }
      // console.log(this.state.faceSentiment)
  });
    
  }

  onInputChange =(event)=>{
    this.setState({input:event.target.value})
  }

  onButtonSubmit=(event)=>{
    this.setState({imageUrl:this.state.input})
    app.models.predict('31025e019a18970a1acc55ba6a184dc6',
    this.state.input)
    .then(response=> this.calculateFaceLocation(response))
    .catch(err=> console.log(err));
  }

  render(){
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl} faceSentiment={this.state.faceSentiment}/>
      </div>

    );
  }
}

export default App;
