import about1 from '../../assets/business.png';


const Card = () =>{
    return(
        <div>
            <div className='rounded-md cursor-pointer w-[270px] px-4 text-center py-5 mb-5'>
                    <div className='flex items-center justify-center'>
                      <img className='' src={about1} alt="" />
                    </div>
                    <h1 className='md:text-2xl text-[21px]  text-black font-[600]'>Heading</h1>
                    <p className='mt-4 text-textColor font-[500]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam enim similique .</p>
                </div>
        </div>
    )
}

export default Card;