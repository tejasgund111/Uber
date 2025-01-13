import React from 'react'

const RidePopUp = (props) => {
    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setRidePopupPanel(false)
            }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>New Ride Available!</h3>

            <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
                <div className='flex items-center gap-3'>
                    <img className='h-12 w-12 rounded-full object-cover' src="data:image/jpeg;base64,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" alt="img" />
                    <h2 className='text-lg font-medium'>Harsh Patel</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2 Km</h5>
            </div>

            <div className='flex flex-col gap-2 justify-between items-center'>
                {/* <img className='h-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5O2PVmKwYLyptJf2j6AwLaJ8XiBAVt7Z8Cw&s" alt="car" /> */}
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className='text-lg ri-map-pin-user-fill'></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -m-1 text-gray-600'>Kankaiya Talab, Bhopal</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className='text-lg ri-map-pin-2-fill'></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -m-1 text-gray-600'>Kankaiya Talab, Bhopal</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className='ri-currency-line'></i>
                        <div>
                            <h3 className='text-lg font-medium'>$193.20</h3>
                            <p className='text-sm -m-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>

                <div className='mt-5 flex w-full items-center justify-between'>

                    <button onClick={() => {
                        props.setRidePopupPanel(false)
                    }} className='mt-1 bg-gray-300 text-gray-700 font-semibold p-3 px-10 rounded-lg'>Ignore</button>

                    <button onClick={() => {
                        props.setConfirmRidePopupPanel(true)
                    }} className='bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Accept</button>
                </div>
            </div>
        </div>
    )
}

export default RidePopUp