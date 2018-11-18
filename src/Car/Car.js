import React from 'react';
// import Radium from 'radium'
// import './Car.css'
import PropTypes from 'prop-types'
import classes from './Car.css'
import withClass from '../hoc/withClass'

// function Car() {
//     return (
//         <h2> this is car component </h2>
//     )
// }

// ***********************************************************

// const Car = () => {
//     return (
//         <h2> this is car component </h2>
//     )
// }

// ***********************************************************

// const Car = () => (
//     <div> 
//         this is car component 
//         <strong> Test </strong>
//     </div>
// )


class Car extends React.Component {

    // componentWillReceiveProps(nextProps) {
    //     console.log("Car componentWillReceiveProps", nextProps)
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("Car shouldComponentUpdate()", nextProps, nextState)
    //     return nextProps.name.trim() !== this.props.name.trim()
    // }

    // componentWillUpdate(nextProps, nextState) {
    //     console.log("Car  componentWillUpdate()", nextProps, nextState)
    // }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log("getDriveStateFromProps()",nextProps, prevState)

    //     return prevState
    // }

    // componentDidUpdate() {
    //     console.log("Car componentDidUpdate()")
    // }

    // getSnapshotBeforeUpdate() {
    //     console.log("getSnapshotBeforeUpdate()")
    // }

    // componentWillUnmount() {
    //     console.log('componentWillUnmount')
    // }

    constructor(props) {
        super(props)

        this.inputRef = React.createRef()
    }

    componentDidMount() {
        if(this.props.index === 0)
            this.inputRef.current.focus()
    }

    render() {

        // if(Math.random() > 0.7) {
        //     throw new Error('Car random Error')
        // }

        const inputClasses = [classes.input]

        if (this.props.name !== "") {
            inputClasses.push(classes.green)
        } else {
            inputClasses.push(classes.red)
        }

        if (this.props.name.length > 4) {
            inputClasses.push(classes.bold)
        }

        return (
            <React.Fragment > 
                <h3>Car name: {this.props.name}</h3>
                <p>Year: <strong>{this.props.year}</strong></p> 
                <input 
                    ref={this.inputRef}
                    type="text" 
                    onChange={this.props.onChangeName} 
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </React.Fragment>
        )

    }
}

Car.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.string,
    index: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func
}

export default withClass(Car, classes.Car) 