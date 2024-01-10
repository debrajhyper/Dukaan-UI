import { Card } from "../Card"
import { TableDisplay } from "../DisplayTable"
import { arrowDownIcon } from "../../icons"

export function Dashboard() {
    return (
        <div className='flex w-full h-full flex-col gap-[32px] items-start flex-nowrap p-[36px]'>
            <section className='flex flex-col gap-[24px] items-start self-stretch shrink-0 flex-nowrap'>
                <div className='flex justify-between items-center self-stretch shrink-0 flex-nowrap'>
                    <span className="shrink-0 basis-auto text-[20px] font-medium leading-[28px] text-[#1a181e] text-left whitespace-nowrap">
                        Overview
                    </span>
                    <button className='flex w-[137px] h-[36px] gap-[16px] bg-[#fff] rounded-[4px] justify-center items-center shrink-0 flex-nowrap border-solid border border-[#d9d9d9] pointer'>
                        <span className="flex justify-start items-start text-[16px] font-normal leading-[24px] text-[#4c4c4c] text-left whitespace-nowrap">
                            Last Month
                        </span>
                        <img src={arrowDownIcon} alt="arrow" width={16} height={16} className='bg-cover bg-no-repeat' />
                    </button>
                </div>
                <div className='flex flex-col sm:flex-row gap-[20px] items-start self-stretch shrink-0 flex-nowrap'>
                    <Card />
                </div>
            </section>
            <section className='flex w-full flex-col gap-[20px] items-start shrink-0 flex-nowrap'>
                <span className="shrink-0 basis-auto text-[20px] font-medium leading-[28px] text-[#1a181e] text-left whitespace-nowrap">
                    Transactions | This Month
                </span>
                <TableDisplay />
            </section>
        </div>
    )
}
