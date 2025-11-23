// function Card(){
//     return 'hi I am Card'
// }

// export default Card;

// function Card(){
//     return  <div className='card'>
//          <h1>Sarthak Sharma</h1>
//         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, illum?</p>
//        </div>
// }

// export default Card;


// import React from 'react'

// export const Card = () => {
//   return (
//     <div><div className='card'>
//           <h1>Sarthak Sharma</h1>
//          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, illum?</p>
//        </div></div>
//   )
// }
// export default Card;

// import React from 'react'

// const Card = (props) => {
//     console.log(props);
    
//   return (
//     <div><div className="card">
//          <img src={props.img} alt="" />
//          <h1>{props.user},{props.age}</h1>
//          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//          <button>View Profile</button>
//        </div>
//        </div>
//   )
// }

// export default Card

import React from 'react'
import {Bookmark} from 'lucide-react';


const Card = (props) => {
    console.log(props.company);
    
  return (
    <div className='card'>
        <div>
          <div className='top'>
          <img src={props.brandLogo} alt="nachiio" />
          <button>Save <Bookmark size={10}/></button>
        </div>
        <div className='center'>
          <h3>{props.company} <span>{props.datePosted}</span></h3>
          {/* <h3>Amazon <span>5 days ago</span></h3> */}
          <h2>{props.post}</h2>
          <div className='tag'>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
        </div>
        <div className='bottom'>
          <div>
            <div>
            </div>
            <h3>{props.pay}</h3>
            <p>Mumbai, India</p>
            </div>
            <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card