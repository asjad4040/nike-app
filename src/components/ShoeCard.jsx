import React from 'react'

const ShoeCard = ({ imgUrl, bigShoeImg, changeBigShoeImg }) => {
    const handleOnClick=()=>{
        if(bigShoeImg!==imgUrl.bigShoe){
            changeBigShoeImg(imgUrl.bigShoe)
        }
    }
    return (
        <div className={`border-2 rounded-xl ${
            bigShoeImg===imgUrl.bigShoe ? "border-red-500" : "border-transparent"
        } cursor-pointer max-xl:flex-1`} 
        onClick={handleOnClick}>
            <div className='flex items-center justify-center bg-cover bg-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
                <img src={imgUrl.thumbnail}
                    alt='shoe colletion'
                    width={127}
                    height={103.34}
                    className='object-contain' />
            </div>
        </div>
    )
}

export default ShoeCard
