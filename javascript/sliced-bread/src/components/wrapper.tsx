import React from "react";

export const Wrapper:React.FC = ({children}) => {
    return (
        <>
            <header>
              <h1 className="App-title">header</h1>
            </header>
            <div>
                {children}
            </div>
            <footer>
                footer
            </footer>
        </>
    )
}