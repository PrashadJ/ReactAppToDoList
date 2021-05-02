import React from 'react'

export const Footer = () => {
    let stylingFooter ={
        backgroundColor: "#98ded9",
        width: "100%",
        position: "fixed",
        marginTop:"auto",
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        bottom:"0"
    }

    return (
        <div className ="text-center p-3 text-black" style = {stylingFooter}>
            @Author: Prashad
        </div>
    )
}
