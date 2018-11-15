import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';

const carYear = Math.round(Math.random()*100);

class App extends Component {

  state = {
    cars: [
      {name: 'Ford', year: "19" + Math.round(Math.random()*100)},
      {name: 'Audi', year: "19" + Math.round(Math.random()*100)},
      {name: 'Mazda', year: "19" + carYear}
    ],
    pageTitle: 'React Car Shop',
    showCars: false
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  handleInput = event => {
    this.setState({
      pageTitle: event.target.value
    })
  }

    onChangeName(name, index) {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({
      cars: cars
    })
  }

  deleteHandler(index) {
    const cars = this.state.cars.concat()
    cars.splice(index, 1)

    this.setState({cars}) 
  }

  render() { 
    const divStyle = {
      'textAlign': 'center'
    }

    // let cars = null

    // if (this.state.showCars) {
    //   cars = this.state.cars.map((car, index) => {
    //     return (
    //       <Car 
    //         key={index }
    //         name={car.name}
    //         year={car.year}
    //         onChangeTitle={() => this.changeTitleHandler(car.name)}
    //       />
    //     )
    //   })
    // }

    // const cars = this.state.cars

    return (
      <div className="App" style={divStyle}>
        <h1> {this.state.pageTitle} </h1>

        <input type="text" onChange={this.handleInput}/>

        {/* <button 
          onClick={this.changeTitleHandler.bind(this, 'Changed!')}
        > Change title</button> */}

        <button
          className={"appButton"}
          onClick={this.toggleCarsHandler}
        > Toggle cars</button>

        <div srtyle={{
          width: 400, 
          margin: 'auto',
          paddingTop: '20px'
        }}>
          { 
            // cars
            this.state.showCars ?
              this.state.cars.map((car, index) => {
                return (
                  <Car 
                    key={index }
                    name={car.name}
                    year={car.year}
                    onDelete={this.deleteHandler.bind(this, index)}
                    onChangeName={event => this.onChangeName(event.target.value, index)}
                  />
                )
              }) : null
          }
        </div>

        {/* <Car 
          name={cars[0].name} 
          year={cars[0].year}
          onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}
        />
        <Car 
          name={cars[1].name} 
          year={cars[1].year}
          onChangeTitle={() => this.changeTitleHandler(cars[1].name)}
          />
        <Car 
          name={cars[2].name} 
          year={cars[2].year}/> */}

      </div>
    );

    // return React.createElement (
    //   'div',
    //   {
    //     className: 'App'
    //   },
    //   React.createElement (
    //     'h1',
    //     null,
    //     "hello world!"
    //   )
    // )
  }
}

export default App; 
