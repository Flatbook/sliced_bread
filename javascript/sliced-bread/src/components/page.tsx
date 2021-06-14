import React from "react";

export const Page:React.FC<{title?: string}> = ({title, children}) => {
    return (
        <>
            <h1>{title}</h1>
            {children}
        </>
    )
}