import React,{useState} from 'react'

export default function About(){
    const [bgcolor, setBgcolor] = useState({
        backgroundColor:'white',
        color:'black',
        border:'solid 2px cyan'
        
    })
    const[statec,SetStatec]= useState("Enable Dark Mode");

    {
    const magic=()=>{
        if(bgcolor.backgroundColor==='white'){
            setBgcolor({
                backgroundColor:'black',
                color:'white',
                border:'solid 1px red'
            })
            SetStatec("Enable Light Mode")
        }
        else{
            setBgcolor({
                backgroundColor:'white',
                color:'black',
                border:'solid 1px red'
            })
            SetStatec("Enable Dark Mode")
           
        }
    }
   
    return (
        <>

    
    <div className="accordion container my-2" style={bgcolor} id="accordionExample">
            <h1>About Us</h1>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button"style={bgcolor} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
            </button>
            </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body"style={bgcolor}>
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
        </div>
    </div>
    <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" style={bgcolor} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Accordion Item #2
        </button>
            </h2>
        <div id="collapseTwo"style={bgcolor}  className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
        </div>
  </div>
  <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed"style={bgcolor} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
            </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" style={bgcolor} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
        </div>
  </div>
  <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={magic} role="switch" id="flexSwitchCheckDefault"></input>
  <label className="form-check-label" onClick={magic} htmlFor="flexSwitchCheckDefault">{statec}</label>
</div>
</div>


      </>
    )
  }
}
