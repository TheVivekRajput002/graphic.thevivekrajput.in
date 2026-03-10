import React from 'react'

function CurveBox({ text }: { text: string }) {
    return (
        <div>
            <div className='flex'>
                <img className='h-10' src="front.svg" alt="" />
                <span className='h-10 bg-black flex items-center justify-center'>
                    <p>{text}</p>
                </span>
                <img className='h-[50px]' src="back.svg" alt="" />
            </div>

        </div>
    )
}

export default CurveBox