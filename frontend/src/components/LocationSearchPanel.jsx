import React from 'react'

const LocationSearchPanel = (props) => {
  

  // sample array for location
  const locations = [
    "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal",
    "22B, Near Malhotra's cafe, Sheryians Coding School, Bhopal",
    "20A, Near Singhania's cafe, Sheryians Coding School, Bhopal",
    "11C, Near Gund's cafe, Sheryians Coding School, Bhopal",
  ]

  return (
    <div>
      {/* this is just a sample data */}
      {
        locations.map(function (elem, index) {
          return <div key={index} onClick={()=> {
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
          }} className='flex border-2 border-gray-50 active:border-black p-3 rounded-xl  items-center justify-start gap-4 my-2'>
            <h2 className='bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full '><i className="ri-map-pin-fill"></i></h2>
            <h4 className='font-medium'>{elem}</h4>
          </div>
        })
      }

    </div>
  )
}


export default LocationSearchPanel