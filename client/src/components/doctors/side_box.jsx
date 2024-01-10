const SideBox = ({doctor}) => {
    return(
        <div className='p-3 rounded-md lg:p-5 shadow-panelShadow'>
                        <div className='flex flex-col justify-center gap-[25px]'>
                            <div className='flex items-center justify-between '>
                                <p className='text-textColor text-[20px]  font-semibold'>Token Price</p>
                                <h1 className='text-headingColor text-[20px] font-bold'>{doctor && doctor.tokenPrice} RS</h1>
                            </div>
                            <div>
                                <p className='text-headingColor text-[16px]  font-bold'>Available slots : </p>
                                <ul>
                                    <li className='flex justify-between px-2 text-[14px] font-bold text-textColor'>Sunday <span>9:00AM - 2:00PM</span></li>
                                    <li className='flex justify-between px-2 text-[14px] font-bold text-textColor'>Sunday <span>9:00AM - 2:00PM</span></li>
                                    <li className='flex justify-between px-2 text-[14px] font-bold text-textColor'>Sunday <span>9:00AM - 2:00PM</span></li>
                                    
                                </ul>
                            </div>
                            <div className='btn flex items-center cursor-pointer justify-center'>
                                <button className=''>Book Appointment</button>
                            </div>
                        </div>
                    </div>
    )
}

export default SideBox;