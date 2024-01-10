import { data } from './CardData'

export function Card() {
    return (
        <>
            {
                data.map((item, index) => {
                    const { name, value } = item
                    return (
                        <div key={index} className='w-full flex p-[20px] gap-[24px] flex-col justify-center items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[8px] shadow-[0_2px_6px_0_rgba(26,24,30,0.04)]'>
                            <div className='flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap'>
                                <span className="shrink-0 basis-auto text-[16px] font-normal leading-[24px] text-[#4c4c4c] text-left whitespace-nowrap">
                                    {name}
                                </span>
                                <span className="shrink-0 basis-auto text-[32px] font-medium leading-[38px] text-[#1a181e] text-left whitespace-nowrap">
                                    {value}
                                </span>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
