import SubBanner from '@/components/common/sub banner'
import Link from 'next/link'

export default function NotFound() {
    return (
        <>
            <SubBanner
                title="404 Error"
                breadcrumbItems={[
                    { label: "Not Found" }
                ]}
            />
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/">Return Home</Link>
        </>
    )
}