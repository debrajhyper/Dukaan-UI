import { TableHeader, TableData } from './TableDisplayData'
import TableSearch from './TableSearch'
import { sortIcon, downloadIcon } from '../../icons'
import TableRow from './TableRow'
import { Pagination } from '../Pagination'

export function TableDisplay() {
    return (
        <div className='flex w-full mb-[36px] py-[12px] px-[12px] pb-[24px] flex-col items-end shrink-0 flex-nowrap bg-[#fff] rounded-[8px] relative shadow-[0_2px_6px_0_rgba(26,24,30,0.04)]'>
            <div className='flex w-full flex-col sm:flex-row justify-between items-between gap-[12px] shrink-0 flex-nowrap'>
                <TableSearch />
                <div className='flex w-fit gap-[12px] justify-end items-center shrink-0 flex-nowrap'>
                    <button title='Sort' className='flex w-[79px] py-[6px] px-[12px] gap-[6px] items-center shrink-0 flex-nowrap bg-[#fff] rounded-[4px] border-solid border border-[#d9d9d9] pointer'>
                        <span className="shrink-0 basis-auto text-[16px] font-normal leading-[24px] text-[#4c4c4c] text-left whitespace-nowrap">
                            Sort
                        </span>
                        <img src={sortIcon} alt='sort' width={16} height={16} className='shrink-0 bg-cover bg-no-repeat' />
                    </button>
                    <button title='Download' className='w-[36px] h-[36px] text-center rounded-[4px] border-solid border border-[#d9d9d9]'>
                        <img src={downloadIcon} alt='download' width={20} height={20} className='mx-auto bg-cover bg-no-repeat' />
                    </button>
                </div>
            </div>
            <div className='overflow-x-auto md:overflow-x-hidden'>
                <table className='w-full table-fixed'>
                    <thead className='flex w-full mt-[12px] py-[10px] px-[12px] items-center flex-nowrap bg-[#f2f2f2] rounded-[4px]'>
                        <tr className='flex w-full gap-[40px] items-center shrink-0 flex-nowrap bg-[#f2f2f2] rounded-[4px]'>
                            {
                                TableHeader.map((item, index) => {
                                    const { name, align, icon } = item
                                    return (
                                        <th key={index} className={`w-full flex gap-[4px] justify-${align} items-center grow shrink-0 basis-0 flex-nowrap`}>
                                            <span className={`flex justify-${align} items-start shrink-0 basis-auto text-[14px] font-medium leading-[20px] text-[#4c4c4c] relative text-right whitespace-nowrap`}>
                                                {name}
                                            </span>
                                            {
                                                icon ? <img src={icon} alt='icon' width={14} height={14} className='shrink-0 bg-cover bg-no-repeat' /> : null
                                            }
                                        </th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            TableData.map((item, index) => {
                                const { OrderID, OrderDate, OrderAmount, TransactionFees } = item
                                return (
                                    <tr key={index} className='flex w-auto h-[48px] py-[14px] mx-[12px] gap-[40px] items-center shrink-0 flex-nowrap bg-[#fff] text-[#1a181e] border-b-2'>
                                        <TableRow OrderID={OrderID} OrderDate={OrderDate} OrderAmount={OrderAmount} TransactionFees={TransactionFees} />
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <Pagination />
        </div>
    )
}
