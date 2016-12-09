import React, {
    Component,
    PropTypes,
} from 'react';

class Control extends Component {
    handleStart = () => this.props.handleStart();
    handleReset = () => this.props.handleReset();

    render() {
        return (
            <div>
                <button
                    onClick={
                        this.props.handleStart
                            ? this.handleStart
                            : this.handleReset
                    }
                >
                    {this.props.name}
                </button>
            </div>
        );
    }
}

Control.propTypes    = {};
Control.defaultProps = {};

export default Control;
