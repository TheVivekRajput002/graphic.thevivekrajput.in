import React from 'react'

function CurveBox({ text, children }: { text: string, children?: React.ReactNode }) {
    return (
        <div>
            <div className='flex'>
                <img className='h-[52.5px] -scale-x-100' src="/svg/back.svg" alt="" />
                <span className='h-[38px] bg-[var(--color-bg-body)] flex items-center justify-center mb-[2px]'>
                    {children}
                </span>
                <img className='h-[38.5px] -scale-x-100' src="/svg/front.svg" alt="" />
            </div>

        </div>
    )
}

export default CurveBox