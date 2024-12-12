import './Preloader.css'

function Preloader()
{
    return(
        <div className="page">
            <h2>Loading data...</h2>
            <div className="lds-facebook"><div></div><div></div><div></div></div>
        </div>
        
    )
}
export default Preloader;