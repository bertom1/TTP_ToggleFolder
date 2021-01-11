import React from 'react'

class Folder extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            toggle: true
        }
    }

    toggleFolder = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() {
        return (
            <div>
                <p>Header</p>
                <button type = "button" onClick = {this.toggleFolder}>toggle</button>
                {(this.state.toggle) ? <ul>
                    <li>File 1</li>
                    <li>File 2</li>
                    <li>File 3</li>
                </ul> :
                null}
            </div>
        )
    }
}

export default Folder