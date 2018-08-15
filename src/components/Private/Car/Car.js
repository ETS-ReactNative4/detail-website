import React, {Component} from 'react';
import axios from 'axios';

export default class CarsList extends Component {
    constructor(){
        super()
    }

    render(){
        let mappedCarsList = this.state.carsList.map( (element, index) => {
            return (
                <div key={element.id}>
                    <button
                        className='login button'
                        onClick={() => {
                            axios.put('/api/car/' + element.id)
                        }}
                    >edit</button>
                    <button 
                        className='login button'
                        onClick={() => {
                            axios.delete('/api/car/' + element.id)
                            .then((res) => this.setState({carsList: res.data}))}
                        }>delete</button> 

                    <p key={'year'+element.id}>Year: {element.year}</p>
                    <p key={'make'+element.id}>Make: {element.make}</p>
                    <p key={'model'+element.id}>Model: {element.model}</p>
                    <div key={'licplate'+element.id}> 
                        License Plate #: {element.licenseplate} 
                        {this.state.editPlate === true ? 
                            <p> 
                                <input 
                                    placeholder={element.licenseplate}
                                    onChange={(e) => this.handleSavePlate(e.target.value)}
                                    ></input> 
                                <button
                                    onClick={() => {
                                        let newPlate = {licenseplate: this.state.licensePlate}
                                        axios.put('/api/car/' + element.id, newPlate)
                                        .then((res) => this.setState({carsList: res.data, licenseplate: ''}))
                                    }}
                                >Save</button> 
                            </p> : ''} 
                            <button 
                                className='login button' 
                                key={'licplate'+element.id}
                                onClick={this.handleEditPlate} 
                                >{this.state.editPlate ? 'Save' : 'Update'}
                            </button>
                            
                    </div>
                    <p>
                        {}
                    </p>
                    <p key={'rows'+element.id}>Rows of Seats: {element.rowsofseats}</p>
                    <br></br>
                </div>
            )
        })
        return(
        <div>
            <br></br>
            <br></br>
            {mappedCarsList}
        </div>
)
    }
}