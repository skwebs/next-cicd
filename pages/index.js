import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
import Link from "next/link";
import ConstantWideLayout from '@/components/layouts/ConstantWideLayout';
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>About | Anshu Memorial Academy </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="my-py w-full">
        <ConstantWideLayout className="px-4 md:px-6 lg:px-8">
          <div>
            Hindi
            {/* <Link href={`/students/register`} className="text-blue-500 underline">Register Student</Link> */}
          </div>
        </ConstantWideLayout>
      </div>
    </>
  )
}
