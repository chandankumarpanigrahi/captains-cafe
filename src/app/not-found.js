"use client"
import SubBanner from '@/components/common/sub banner'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

export default function NotFound() {
    const router = useRouter();

    return (
        <div className='w-full'>
            <div className='h-full'>
                <SubBanner
                    title="Not Found"
                    breadcrumbItems={[
                        { label: "Not Found" }
                    ]}
                />
            </div>
            <div className="min-h-60 flex flex-col items-center justify-center px-4 py-12 animate__animated animate__slideInUp">
                <h1 className="text-9xl font-bold text-amber-900 mb-5">4<span className='text-amber-800'>0</span>4</h1>
                <h2 className="text-3xl font-semibold text-amber-800 mb-6">Oops! <span className='text-amber-700'>Page Not Found</span></h2>
                <p className="text-[#103D68] text-center max-w-md mb-10 text-lg">
                    It seems this page has disappeared like the last cookie.
                    But don't worry, we've got plenty of other treats for you!
                </p>

                <div className="flex flex-wrap gap-3 justify-center mb-8">
                    <Link href="/">
                        <button className="px-8 py-3 bg-[#0B3F71] hover:bg-[#072f55] text-white rounded-full font-medium transition-colors shadow-md text-lg">
                            Back to Home
                        </button>
                    </Link>

                    <Link href="/menu">
                        <button className="px-8 py-3 bg-amber-900 hover:bg-amber-950 text-white rounded-full font-medium transition-colors shadow-md text-lg">
                            View Menu
                        </button>
                    </Link>
                </div>

                <div className="text-amber-600 text-sm">
                    Error Code: <span className="font-mono bg-amber-100 px-2 py-1 rounded">103D68-5D3820</span>
                </div>
            </div>
        </div>
    )
}