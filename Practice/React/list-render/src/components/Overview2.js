import React from 'react';

class Overview extends React.Component {
    render() {
        return(
            <ul>
                {this.props.tasks.map(
                    function taskIterator(item, i) {
                        return (
                            <li key={i}>{item}</li>
                        )
                    }
                )}
            </ul>
        )
    }
}

export default Overview;