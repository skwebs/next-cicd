import ConstantWideLayout from '@/components/layouts/ConstantWideLayout'
import { redirect } from 'next/dist/server/api-utils'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'


const PageNotFound = () => {
    const router = useRouter();
    const [coutdown, setCoutdown] = useState(10)

    useEffect(() => {
        const interval = setInterval(() => {
            if (coutdown <= 0) {
                router.push('/')
            } else {
                setCoutdown(prev => prev - 1)
            }
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [coutdown, setCoutdown])

    return (
        <>
            <div className='mt-16 w-full flex flex-col pt-32 justify-center items-center'>
                <div className='flex justify-center items-center'>
                    <div className='text-6xl font-semibold text-sky-500 px-6'>
                        404
                    </div>
                    <div className='border-l-2 border-gray-400 font-semibold px-6'>
                        <div className='text-2xl md:text-4xl text-gray-500 dark:text-gray-300'>
                            Page Not Found
                        </div>
                        <p className='text-xs md:text-base text-gray-400'>Please check the URL in address bar and try again.</p>
                    </div>
                </div>
                <div className='mt-10 flex justify-center'>
                    <Link className="mx-2 px-4 py-2 rounded-lg bg-sky-400 dark:bg-sky-500 hover:bg-sky-500 dark:hover:bg-sky-600 active:scale-105 hover:text-white text-white font-semibold" href={`/`} >Go to Home</Link>
                    <Link className="px-4 py-2 rounded-lg bg-slate-500 hover:bg-slate-600 text-slate-100 mx-2 font-semibold dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 active:scale-105" href={`/contact`} >Contact Us</Link>
                </div>
                <div className='mt-5 text-slate-600 dark:text-sky-400'>You will redirect to <strong>Home Page</strong> in {coutdown} seconds</div>
            </div>
        </>
    )
}

export default PageNotFound
