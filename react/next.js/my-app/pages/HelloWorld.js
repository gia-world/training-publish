function HelloWorld(){
    return(
        <div>
            Hello world
            <p>scoped!</p>
            <style jsx>{`
            p{
                color:blue;
            }
            div{
                background:skyblue;
            }
            @media(max-width:600px){
                div{
                    background:navy;
                }
            }
            `}</style>
            <style global jsx>{`
            body{
                background:grey;
            }
            `}

            </style>
        </div>
    )
}

export default HelloWorld