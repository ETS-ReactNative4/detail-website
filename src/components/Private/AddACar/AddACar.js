import React, {Component} from 'react';
import axios from 'axios';
// import cars_controller from '../../../../server/controllers/cars_controller'

export default class AddACar extends Component {
    constructor(){
        super()

        this.state = {
            carsList: [],
            // year: '',
            // make: '',
            // model: '',
            // rowsOfSeats: 0,
            // licensePlate: ''
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
    
    handleAddCar (year, make, model, rowsOfSeats, licensePlate){
        let newCar = {
            year: year,
            make: make,
            model: model,
            rowsOfSeats: rowsOfSeats,
            licensePlate: licensePlate
        }
        //You should add an axios (POST) like the react 3 mini code has on line 119
        //then setState with the response
        this.setState({carsList: newCar})
    }

    
    render (){
        console.log(this.state)
        let mappedCarsList = this.state.carsList.map( (element, index) => {
            return (
                <div key={'carsMapKey'+index}>
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
                    <input  
                        placeholder="Year" 
                        value={this.handleAddCar.year} 
                        onChange={(e) => this.handleAddCar(e.target.value)} 
                    />
                    <input 
                        placeholder="Make" 
                        value={this.state.make}
                        onChange={(e) => this.handleAddCar(e.target.value)} 
                    />
                    <input 
                        placeholder="Model" 
                        value={this.state.model}
                        onChange={(e) => this.handleAddCar(e.target.value)} 
                    />
                    Rows of Seats: <select 
                        value={this.state.rowsOfSeats}
                        onChange={(e) => this.handleAddCar(e.target.value)} 
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
                        onChange={(e) => this.handleAddCar(e.target.value)} 
                    />

                    <button onClick={this.handleAddCar} >Add</button>
                </div>
                <div>
                    {console.log(this.state)}
                    {mappedCarsList}
                </div>
            </div>
        )
    }
}