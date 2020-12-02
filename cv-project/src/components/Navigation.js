import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


class Navigation extends React.Component {

    render() {

        return(
            <nav>
                <div className="top-bar">
                    <span></span>
                    <span>Create your CV</span>
                    <div className="icons">
                        <i className="fa fa-home"></i>
                        <i className="fab fa-github"></i>
                        <i className="fab fa-linkedin-in"></i>
                    </div>
                </div>

                <button onClick={this.props.exportPDF}>Export to PDF</button>

        
        
        
            </nav>
        )
    }

}

export default Navigation