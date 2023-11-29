import React, {useState} from 'react'

export default function About(props) {
     const [darkMode, setDarkMode ] = useState ({ color: 'black',
    backgroundColor : 'white'
 })
        
    const [btnText, setBtnStyle] = useState("Enable light mode ")   

     const toggleStyle = ()=> {
         if( darkMode.color === 'white' ){
             setDarkMode({
                
                 color: 'black',
                 backgroundColor : 'white'
             })
            setBtnStyle('Enable light mode');
         }
         else{
             setDarkMode({
                 color: 'white',
                 backgroundColor : 'black'
             })
           
             setBtnStyle('Enable to darkmode');
         }

     }
    let myStyle = {
      color : props.mode === 'dark'? 'white' : '#042743',
      backgroundColor: props.mode === 'dark'? '#042743' : 'white',
      border : '2px solid',
      borderColor : props.mode === 'dark'? 'white' : '#042743'
    }
  return (
    <div>
        <div className="container mt-5" style={darkMode}>
            <h1 className=''>About Us</h1>
      <div className="accordion" id="accordionExample" style={darkMode}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={darkMode}  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={darkMode}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={darkMode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={darkMode}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={darkMode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={darkMode}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    </div>
    <div className="container" style={darkMode}>
        <button className="btn btn-primary mt-3 mb-5" onClick={toggleStyle}  >{btnText}</button>
    </div>
    </div>
  )
}
