import { arrowRightIcon, arrowLeftIcon } from "../../icons"

const count = ['1', '...', '10', '11', '12', '13', '14', '15', '16', '17', '18']

export function Pagination() {
    return (
        <div className='pt-[24px] w-full flex flex-col gap-[24px] justify-center items-center shrink-0 flex-nowrap overflow-hidden'>
            <div className='flex flex-col sm:flex-row gap-[24px] items-center shrink-0 flex-nowrap'>
                <button className='flex w-[100px] p-[6px] gap-[6px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[4px] border-solid border border-[#d9d9d9] pointer'>
                    <img src={arrowRightIcon} alt='icon' width={18} height={18} className='shrink-0' />
                    <span className="flex items-start shrink-0 basis-auto text-[14px] font-medium leading-[20px] text-[#4c4c4c] text-center whitespace-nowrap">
                        Previous
                    </span>
                </button>
                <div className='flex gap-[8px] items-start shrink-0 flex-nowrap'>
                    {
                        count.map((item, index) => {
                            return (
                                <div key={index} className={`${item === '10' ? 'bg-[#146EB4] text-[#FFFFFF]' : 'text-[#4c4c4c]'} flex w-[28px] h-[28px] py-[2px] flex-col gap-[8px] justify-center items-center shrink-0 flex-nowrap rounded-[4px]`}>
                                    <span className="self-stretch shrink-0 basis-auto text-[10px] sm:text-[14px] font-normal leading-[20px] text-center">
                                        {item}
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
                <button className='flex w-[74px] p-[6px] gap-[6px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[4px] border-solid border border-[#d9d9d9] pointer'>
                    <span className="flex items-start shrink-0 basis-auto text-[14px] font-medium leading-[20px] text-[#4c4c4c] text-center whitespace-nowrap">
                        Next
                    </span>
                    <img src={arrowLeftIcon} alt='icon' width={18} height={18} className='shrink-0' />
                </button>
            </div>
        </div>
    )
}
