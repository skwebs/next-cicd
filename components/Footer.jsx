import Link from 'next/link';
import Brand from './Brand';
import ConstantWideLayout from './layouts/ConstantWideLayout';
import SocialIcons from './SocialIcons';

const Footer = () => {
  return (
    <>
      <div className='w-full'>

        <ConstantWideLayout className="px-4 md:px-6 lg:px-8">


          {/* divider */}
          <div className='my-container'>
            <hr className='w-full dark:border-slate-700' />
          </div>
          {/* footer from here */}
          <div className='w-full my-4'>
            <div className='my-container'>
              <div className=' dark:border-slate-600 '>
                <div>

                  <div className=" md:flex md:items-center md:justify-between mx-auto ">
                    <span className="flex text-sm gap-2 text-slate-500 dark:text-slate-300 sm:text-center">  <span className=''>&copy; {new Date().getFullYear()}{" "}</span>
                      <Link href="/"><Brand /></Link> All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-2 sm:justify-center md:mt-0">
                      {<SocialIcons />}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </ConstantWideLayout>
      </div>
    </>
  )
}

export default Footer
