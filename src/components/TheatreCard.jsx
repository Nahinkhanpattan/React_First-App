export default function TheatreCard({card}) {
    let {name,dis,img}=card
    console.log({img},{dis},{name});
    
    return(
        <>
        <div className="cardContainer">
            <div className="card">
                <img src={img} alt="" />
                <h1>{name}</h1>
                <p>{dis}</p>
                <button onClick={()=>{alert(`you have clicked the Read More button of ${name} movie card`)}}>Read More</button>
            </div>
        </div>
        </>
    )
}