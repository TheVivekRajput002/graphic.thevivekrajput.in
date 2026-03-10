import React from 'react'


function MyIntro() {
    return (
        <div className='flex gap-4  items-center'>
            <img height={70} width={70} src="/images/pfp.png" alt="" />
            <div className='flex flex-col '>
                <p className='text-lg'>Vivek Rajput</p>
                <p className='text-sm text-zinc-400'>Digital Designer</p>
            </div>
        </div>
    )
}

export default MyIntro