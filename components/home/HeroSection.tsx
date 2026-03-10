import React from 'react'
import CurveBox from "@/components/ui/CurveBox";
import LCurveBox from "@/components/ui/LCurveBox";
import DynamicBox from "@/components/ui/DynamicBox";
import ToggleButton from '../ui/ToggleButton';
import Available from '../ui/Available';
import MyIntro from '../ui/MyIntro';

function HeroSection() {
    return (
        <div className='h-100 w-full bg-[var(--color-bg-hero-section)] relative rounded-2xl px-10'>

            {/* top bar  */}
            <div >
                <div className='absolute top-0 left-0'>

                <LCurveBox text="Menu" children={
                    <div className='flex gap-3 items-center justify-center mb-[2px]'>
                        <p>Home</p>
                        <ToggleButton />
                        <Available />
                    </div>
                } />
                </div>
                <div className='absolute top-0 right-0'>

                <CurveBox text="Menu" children={<p className='text-sm '>Menu</p>} />
                </div>
            </div>
       

            {/* my MyIntro  */}
            <div className='pt-20'>
            <MyIntro />

            </div>


        </div>
    )
}

export default HeroSection