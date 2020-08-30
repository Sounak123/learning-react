import React from 'react'

// export const HelloWorld = (props) => {
//     return (
//         <h2>
//             Hello {props.name}
//         </h2>
//     )
// }

class HelloWorld extends React.Component {
    render() {
        return (
            <h2>
                Hello {this.props.name}
            </h2>
        );
    }
}

export default HelloWorld;