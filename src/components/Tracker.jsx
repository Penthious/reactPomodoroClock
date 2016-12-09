import React, {
    Component,
    PropTypes,
} from 'react';

class Tracker extends Component {
    handleBreak = (value = null) => {
        if (value) {
            this.props.handleBreakTime(value);
        } else {
            this.props.handleBreakTime();
        }
    };
    handleWork  = (value = null) => {
        if (value) {
            this.props.handleWorkTime(value);
        } else {
            this.props.handleWorkTime(false);
        }
    };

    changeActive = (e) => {
        this.props.handleActive(e.target.innerHTML)
    };

    render() {
        return (
            <div>
                <div className="columns">
                    <div className="column is-offset-4">
                        <button onClick={this.changeActive}>
                            {this.props.name}
                        </button>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <button
                            onClick={
                                this.props.handleBreakTime
                                    ? () => this.handleBreak(false)
                                    : () => this.handleWork(false)
                            }
                        >
                            -
                        </button>
                    </div>
                    <div className="column"><span>{this.props.number}</span></div>
                    <div className="column">
                        <button
                            onClick={
                                this.props.handleBreakTime
                                    ? () => this.handleBreak(true)
                                    : () => this.handleWork(true)
                            }
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

Tracker.propTypes    = {};
Tracker.defaultProps = {};

export default Tracker;
