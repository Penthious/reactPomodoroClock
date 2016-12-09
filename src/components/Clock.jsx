import React, {
    Component,
    PropTypes,
} from 'react';

import Tracker from './Tracker';
import Timer from './Timer';
import Control from './Control';
import './clock.sass';


class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'Work',
            name: 'Work',
            work: 'Work',
            workTime: '25',
            break: 'Break',
            breakTime: '5',
            minutes: '25',
            seconds: '00',
            start: 'false',
            breakInterval: setInterval(),
        }
    }

    updateWorkTime = (value = null) => {
        let workTime = +this.state.workTime;
        console.log(value);
        if(value){
            workTime ++;
            this.setState({workTime});
        }else {
            workTime --;
            this.setState({workTime});
        }
    };

    updateBreakTime = (value = null) => {
        let breakTime = +this.state.breakTime;
        console.log(value);
        if(value){
            breakTime ++;
            this.setState({breakTime});
        }else {
            breakTime --;
            this.setState({breakTime});
        }
    };

    updateActive = (active) => {
        if(active === 'Work'){
            this.setState({active, minutes: this.state.workTime});
        }
        if(active === 'Break'){
            this.setState({active, minutes: this.state.breakTime})
        }
    };

    handleStart = () => {
        if(this.state.active === 'Work'){
            this.setState({minutes: this.state.workTime});
        } else{
            this.setState({minutes: this.state.breakTime});
        }
    };

    handleReset = () => {
      if(this.state.active === 'Work'){
          this.setState({minutes: this.state.workTime});
      } else{
          this.setState({minutes: this.state.breakTime});
      }
    };

    render() {
        return (
            <div>
                <div className="columns">
                    <div className="column">
                        <Tracker
                            number={this.state.breakTime}
                            name={this.state.break}
                            handleActive={this.updateActive}
                            handleBreakTime={this.updateBreakTime}
                        />
                    </div>
                    <div className="column">
                        <Tracker
                            number={this.state.workTime}
                            name={this.state.work}
                            handleActive={this.updateActive}
                            handleWorkTime={this.updateWorkTime}
                        />
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-offset-5"><span>{this.state.active}</span></div>
                </div>
                <div className="columns">
                    <div className="column">
                        <Timer { ...this.state } />
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <Control name="Start" handleStart={this.handleStart}/>
                    </div>
                    <div className="column">
                        <Control name="Reset" handleReset={this.handleReset} />
                    </div>
                </div>
            </div>
        );
    }
}

Clock.propTypes    = {};
Clock.defaultProps = {};

export default Clock;
