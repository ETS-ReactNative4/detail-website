import React, {Component} from 'react';
import axios from 'axios';
// import cars_controller from '../../../../server/controllers/cars_controller'

export default class AddACar extends Component {
    constructor(){
        super()

        this.state = {
            carsList: [],
            year: '',
            make: '',
            model: '',
            rowsOfSeats: 0,
            licensePlate: ''
        }
        this.handleAddCar = this.handleAddCar.bind(this);
    }

    componentDidMount(){
        axios.get('/api/cars').then(res => {
            this.setState({carsList: res.data})
        })
    }

    yearHandler (input){
        this.setState({year: input})
    }
    
    makeHandler (input){
        this.setState({make: input})
    }
    
    modelHandler (input){
        this.setState({model: input})
    }
    
    rowsOfSeatsHandler (input){
        this.setState({rowsOfSeats: input})
    }
    
    licensePlateHandler (input){
        this.setState({licensePlate: input})
    }
    
    handleAddCar (){
        let newCar = {
            year: this.state.year,
            make: this.state.make,
            model: this.state.model,
            rowsofseats: this.state.rowsOfSeats,
            licenseplate: this.state.licensePlate
        }
        // Axios (POST) from the react 3 mini code line 119 in app.js
        //then setState with the response

        let promise = axios.post('/api/car', newCar)
        promise.then((response) => {
            this.state.carsList.push(response)
        })
    }
    
    render (){
        console.log(this.state)
        let mappedCarsList = this.state.carsList.map( (element, index) => {
            return (
                <div key={'carsMapKey'+index}>
                    <button
                        onClick={() => {
                            axios.put('/api/car/' + element.id)
                        }}
                    >edit</button>
                    <button 
                        onClick={() => {
                            axios.delete('/api/car/' + element.id)
                            .then(() => this.state.carsList)}
                        }>delete</button> 

                    <p key={'year'+index}>Year: {element.year}</p>
                    <p key={'make'+index}>Make: {element.make}</p>
                    <p key={'model'+index}>Model: {element.model}</p>
                    <p key={'licplate'+index}>License Plate #: {element.licenseplate}</p>
                    <p key={'rows'+index}>Rows of Seats: {element.rowsofseats}</p>
                    <br></br>
                </div>
            )
        })
        return (
            <div>
                <div>
                    <h3>Add A Car</h3>
                    <form>
                        <input  
                            placeholder="Year" 
                            value={this.state.year} 
                            onChange={(e) => this.yearHandler(e.target.value)} 
                        />
                        <input 
                            placeholder="Make" 
                            value={this.state.make}
                            onChange={(e) => this.makeHandler(e.target.value)} 
                        />
                        <input 
                            placeholder="Model" 
                            value={this.state.model}
                            onChange={(e) => this.modelHandler(e.target.value)} 
                        />
                        Rows of Seats: <select 
                            value={this.state.rowsOfSeats}
                            onChange={(e) => this.rowsOfSeatsHandler(e.target.value)} 
                            >
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <input 
                            placeholder="License Plate #" 
                            value={this.state.licensePlate}
                            onChange={(e) => this.licensePlateHandler(e.target.value)} 
                        />

                        <button onClick={this.handleAddCar}>Add</button>
                    </form>
                </div>
                <div>
                    <br></br>
                    <br></br>
                    {mappedCarsList}
                </div>
            </div>
        )
    }
}