import { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
    state = {
        password: '',
        cliked: false,
        validtaed: false
    }
    hadleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }
    
    hadleButtonClick = (e) => {
        this.setState({
            cliked: true,
            validtaed: this.state.password === '0000'
        });
        this.input.focus();
    }
    
    render() {
        return (
            <div>
                <input
                    type="password"
                    value={this.state.password}
                    onChange={this.hadleChange}
                    className={this.state.cliked ? (this.state.validtaed ? 'success' : 'failure') : ''}
                    ref={(ref) => this.input=ref}
                />
                <button onClick={this.hadleButtonClick}>검증하기</button>
            </div>
        )
    }
}

export default ValidationSample;