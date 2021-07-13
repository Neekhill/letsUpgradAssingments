import React from 'react'

function Button({ buttonName }) {
    return (
        <button style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 15, paddingBottom: 15, marginLeft: 10, backgroundColor: "#721fa6", color: "#e1d4e9", fontSize: 20, border: "none", borderRadius: 5 }}>{buttonName}</button>
    )
}

export default Button
