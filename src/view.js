import React from 'react';
import InputContainer from './container/inputContainer';

export class View extends React.Component {
    render() {
        const centerStyle = {
            textAlign: 'center'
        }
        return (
            
            <div className="container">
            <br/>
                <div className="card">
                    <div className="card-header">
                        <h1 style={centerStyle}>Search Movie</h1>
                    </div>
                    <div className="card-body">
                        <InputContainer />
                    </div>
                    <div className="card-footer" style={centerStyle}>
                        <button type="button" className="btn btn-primary" text-center>Search</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default View