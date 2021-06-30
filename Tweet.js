const Tweet = (props) => {
    return (
        <div>    
            <h2>{props.username}</h2>
            <p>{props.name}</p>
            <p>{props.date}</p>
            <p>{props.message}</p>
        </div>
    )
}