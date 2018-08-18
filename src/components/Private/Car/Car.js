import React, {Component} from 'react';
import axios from 'axios';

export default class CarsList extends Component {
    constructor(){
        super()
    }

    render(){
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
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                        <input 
                            placeholder="License Plate #" 
                            value={this.state.licensePlate}
                            onChange={(e) => this.licensePlateHandler(e.target.value)} 
                        />

                        <button 
                            className='login button'
                            onClick={this.handleAddCar                            
                            }>Add</button>
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