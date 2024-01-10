const About = ({doctor}) =>{
    return(
        <div>
                            <div className=''>
                                <h3 className='text-[20px] leading-[30px] flex items-center gap-2 text-headingColor font-semibold'>About of
                                <span className='text-[24px] font-bold leading-9 text-irisBlueColor capitalize'>{doctor && doctor.name}</span>
                                </h3>
                                <p className='text_para max-w-[300px] md:max-w-[500px]'>{doctor && doctor.about}</p>
                            </div>
                            <div className='mt-12'>
                            <h3 className='text-[20px] leading-[30px] flex items-center gap-2 text-headingColor font-semibold'>Education</h3>
                            <ul className="pt-4 md:p-5">
                                <li className='text-irisBlueColor'>
                                    <span className='text-[15px] leading-7 font-semibold uppercase'>{doctor && doctor.education}</span>
                                </li>
                            </ul>
                            </div>
                            <div className='mt-12'>
                            <h3 className='text-[20px] leading-[30px] flex items-center gap-2 text-headingColor font-semibold'>Experience</h3>
                            <ul className="pt-4 md:p-5 grid sm:grid-cols-2 gap-[10px] md:gap-[30px]">
                                <li className='bg-[#fff9ea] rounded p-4'>
                                    <span className='text-[15px] text-yellowColor leading-7 font-semibold'>2yrs</span>
                                    <p className='text-[16px] leading-6 font-medium text-textColor'>Sr surgeon</p>
                                    <p className='text-[14px] leading-5 font-medium text-textColor'>kmh hospital , ppm</p>
                                </li>
                                <li className='bg-[#fff9ea] rounded p-4'>
                                    <span className='text-[15px] text-yellowColor leading-7 font-semibold'>2yrs</span>
                                    <p className='text-[16px] leading-6 font-medium text-textColor'>Sr surgeon</p>
                                    <p className='text-[14px] leading-5 font-medium text-textColor'>kmh hospital , ppm</p>
                                </li>
                                <li className='bg-[#fff9ea] rounded p-4'>
                                    <span className='text-[15px] text-yellowColor leading-7 font-semibold'>2yrs</span>
                                    <p className='text-[16px] leading-6 font-medium text-textColor'>Sr surgeon</p>
                                    <p className='text-[14px] leading-5 font-medium text-textColor'>kmh hospital , ppm</p>
                                </li>
                            </ul>
                            </div>
                        </div>
    )
}

export default About;