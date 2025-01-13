import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'

const CaptainHome = () => {

    const [ridePopupPanel, setRidePopupPanel] = useState(true);
    const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);

    const ridePopupPanelRef = useRef(null);
    const confirmRidePopupPanelRef = useRef(null);


    useGSAP(function () {
        if (ridePopupPanel) {
          gsap.to(ridePopupPanelRef.current, {
            transform: 'translateY(0)'
          })
        }
        else {
          gsap.to(ridePopupPanelRef.current, {
            transform: 'translateY(100%)'
          })
        }
      }, [ridePopupPanel]);
      
    useGSAP(function () {
        if (confirmRidePopupPanel) {
          gsap.to(confirmRidePopupPanelRef.current, {
            transform: 'translateY(0)'
          })
        }
        else {
          gsap.to(confirmRidePopupPanelRef.current, {
            transform: 'translateY(100%)'
          })
        }
      }, [confirmRidePopupPanel]);

    return (
        <div className='h-screen'>
            <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
                <img className='w-16' src="https://imgs.search.brave.com/02_P5YeSyy1WG204Yw6PXZE4H8vIFyB9wYtRYd1r_uI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTEyMHg2Ny5wbmc" alt="img" />
                <Link to='/home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                    <i className="text-lg font-medium ri-logout-box-r-line"></i>
                </Link>
            </div>
            <div className='h-3/5'>
                <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="img" />
            </div>

            <div className='h-2/5 p-6'>
                <CaptainDetails />
            </div>

            <div ref={ridePopupPanelRef} className='fixed w-full z-10 translate-y-full  bg-white bottom-0 px-3 py-10 pt-12'>
                <RidePopUp setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
            </div>

            <div ref={confirmRidePopupPanelRef} className='fixed w-full h-screen z-10 translate-y-full  bg-white bottom-0 px-3 py-10 pt-12'>
                <ConfirmRidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel} />
            </div>
        </div>
    )
}

export default CaptainHome