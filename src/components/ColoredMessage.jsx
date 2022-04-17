export const ColoredMessage = (props) => {

    const { color, children } = props;

    const contentStyle = {
        color,
        fontSize: "20px"
    };

    return <p style={contentStyle}>{children}</p>
}


// props を分解前提で受け取る場合
//
// export const ColoredMessage = ({ color, children }) => {

//     const { color, children } = props;

//     const contentStyle = {
//         color,
//         fontSize: "20px"
//     };

//     return <p style={contentStyle}>{children}</p>
// }