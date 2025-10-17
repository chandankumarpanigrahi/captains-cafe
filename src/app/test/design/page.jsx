"use client";
import React from 'react'
import DataTable from '@/components/ui/data-table';
import { Badge } from '@/components/ui/badge';
import SubBanner from '@/components/common/sub banner'

const Design = () => {
    const users = [
        { id: 1, name: "Sourav Nayak", email: "sourav.nayak@scottish.co.uk", role: "Admin", status: "active", joinDate: "2024-01-10" },
        { id: 2, name: "Priyanka Behera", email: "priyanka.behera@scottish.co.uk", role: "User", status: "active", joinDate: "2024-02-05" },
        { id: 3, name: "Rakesh Sahoo", email: "rakesh.sahoo@scottish.co.uk", role: "Manager", status: "inactive", joinDate: "2024-03-12" },
        { id: 4, name: "Smita Patra", email: "smita.patra@scottish.co.uk", role: "User", status: "active", joinDate: "2024-04-18" },
        { id: 5, name: "Chinmay Panda", email: "chinmay.panda@scottish.co.uk", role: "Admin", status: "active", joinDate: "2024-05-01" },
        { id: 6, name: "Ankita Swain", email: "ankita.swain@scottish.co.uk", role: "Editor", status: "inactive", joinDate: "2024-05-22" },
        { id: 7, name: "Bikash Mohanty", email: "bikash.mohanty@scottish.co.uk", role: "User", status: "active", joinDate: "2024-06-15" },
        { id: 8, name: "Debasmita Rout", email: "debasmita.rout@scottish.co.uk", role: "User", status: "active", joinDate: "2024-07-08" },
        { id: 9, name: "Gourav Dash", email: "gourav.dash@scottish.co.uk", role: "Admin", status: "inactive", joinDate: "2024-07-25" },
        { id: 10, name: "Sasmita Lenka", email: "sasmita.lenka@scottish.co.uk", role: "User", status: "active", joinDate: "2024-08-04" },
        { id: 11, name: "Alok Ranjan", email: "alok.ranjan@scottish.co.uk", role: "Manager", status: "active", joinDate: "2024-08-20" },
        { id: 12, name: "Meera Pradhan", email: "meera.pradhan@scottish.co.uk", role: "User", status: "inactive", joinDate: "2024-09-02" },
        { id: 13, name: "Subham Barik", email: "subham.barik@scottish.co.uk", role: "Editor", status: "active", joinDate: "2024-09-18" },
        { id: 14, name: "Puja Mishra", email: "puja.mishra@scottish.co.uk", role: "User", status: "active", joinDate: "2024-10-05" },
        { id: 15, name: "Ranjan Swain", email: "ranjan.swain@scottish.co.uk", role: "Admin", status: "inactive", joinDate: "2024-10-22" },
        { id: 16, name: "Lipsa Mohapatra", email: "lipsa.mohapatra@scottish.co.uk", role: "User", status: "active", joinDate: "2024-11-10" },
        { id: 17, name: "Amit Kumar", email: "amit.kumar@scottish.co.uk", role: "User", status: "active", joinDate: "2024-11-28" },
        { id: 18, name: "Rituparna Nayak", email: "rituparna.nayak@scottish.co.uk", role: "Editor", status: "inactive", joinDate: "2024-12-03" },
        { id: 19, name: "Chandan Behera", email: "chandan.behera@scottish.co.uk", role: "Admin", status: "active", joinDate: "2024-12-20" },
        { id: 20, name: "Sneha Das", email: "sneha.das@scottish.co.uk", role: "User", status: "active", joinDate: "2025-01-05" },
        { id: 21, name: "Rupali Panda", email: "rupali.panda@scottish.co.uk", role: "User", status: "active", joinDate: "2025-01-12" },
        { id: 22, name: "Manas Ranjan Swain", email: "manas.swain@scottish.co.uk", role: "Admin", status: "inactive", joinDate: "2025-01-25" },
        { id: 23, name: "Lina Patnaik", email: "lina.patnaik@scottish.co.uk", role: "User", status: "active", joinDate: "2025-02-01" },
        { id: 24, name: "Ashutosh Dash", email: "ashutosh.dash@scottish.co.uk", role: "Manager", status: "active", joinDate: "2025-02-10" },
        { id: 25, name: "Nirupama Mohanty", email: "nirupama.mohanty@scottish.co.uk", role: "User", status: "inactive", joinDate: "2025-02-15" },
        { id: 26, name: "Debasis Jena", email: "debasis.jena@scottish.co.uk", role: "Editor", status: "active", joinDate: "2025-02-20" },
        { id: 27, name: "Shradha Sahu", email: "shradha.sahu@scottish.co.uk", role: "User", status: "active", joinDate: "2025-03-01" },
        { id: 28, name: "Chandan Kumar Panigrahi", email: "chandan.panigrahi@scottish.co.uk", role: "Super Admin", status: "active", joinDate: "2025-03-12" },
        { id: 29, name: "Ipsita Behera", email: "ipsita.behera@scottish.co.uk", role: "Admin", status: "active", joinDate: "2025-03-25" },
        { id: 30, name: "Bijay Mohanty", email: "bijay.mohanty@scottish.co.uk", role: "User", status: "inactive", joinDate: "2025-04-03" },
        { id: 31, name: "Snehalata Pradhan", email: "snehalata.pradhan@scottish.co.uk", role: "Editor", status: "active", joinDate: "2025-04-10" },
        { id: 32, name: "Sourav Ranjan", email: "sourav.ranjan@scottish.co.uk", role: "User", status: "active", joinDate: "2025-04-18" },
        { id: 33, name: "Ananya Mishra", email: "ananya.mishra@scottish.co.uk", role: "User", status: "active", joinDate: "2025-04-25" },
        { id: 34, name: "Rohit Mohapatra", email: "rohit.mohapatra@scottish.co.uk", role: "Admin", status: "inactive", joinDate: "2025-05-01" },
        { id: 35, name: "Namrata Das", email: "namrata.das@scottish.co.uk", role: "User", status: "active", joinDate: "2025-05-12" },
        { id: 36, name: "Tapan Sahu", email: "tapan.sahu@scottish.co.uk", role: "User", status: "active", joinDate: "2025-05-20" },
        { id: 37, name: "Lipika Pattnaik", email: "lipika.pattnaik@scottish.co.uk", role: "Editor", status: "active", joinDate: "2025-05-25" },
        { id: 38, name: "Satyajit Mohanty", email: "satyajit.mohanty@scottish.co.uk", role: "Manager", status: "inactive", joinDate: "2025-06-01" },
        { id: 39, name: "Sujata Nayak", email: "sujata.nayak@scottish.co.uk", role: "User", status: "active", joinDate: "2025-06-10" },
        { id: 40, name: "Kumar Ranjan", email: "kumar.ranjan@scottish.co.uk", role: "User", status: "active", joinDate: "2025-06-18" },
        { id: 41, name: "Minati Sahoo", email: "minati.sahoo@scottish.co.uk", role: "User", status: "inactive", joinDate: "2025-06-25" },
        { id: 42, name: "Rajesh Das", email: "rajesh.das@scottish.co.uk", role: "Admin", status: "active", joinDate: "2025-07-01" },
        { id: 43, name: "Madhuri Barik", email: "madhuri.barik@scottish.co.uk", role: "User", status: "active", joinDate: "2025-07-08" },
        { id: 44, name: "Subhashree Panda", email: "subhashree.panda@scottish.co.uk", role: "Super Admin", status: "inactive", joinDate: "2025-07-15" },
        { id: 45, name: "Sunita Behera", email: "sunita.behera@scottish.co.uk", role: "User", status: "active", joinDate: "2025-07-20" },
        { id: 46, name: "Rabi Pradhan", email: "rabi.pradhan@scottish.co.uk", role: "User", status: "active", joinDate: "2025-07-28" },
        { id: 47, name: "Jayashree Mohanty", email: "jayashree.mohanty@scottish.co.uk", role: "Admin", status: "active", joinDate: "2025-08-02" },
        { id: 48, name: "Ramesh Lenka", email: "ramesh.lenka@scottish.co.uk", role: "User", status: "inactive", joinDate: "2025-08-10" },
        { id: 49, name: "Pratibha Dash", email: "pratibha.dash@scottish.co.uk", role: "User", status: "active", joinDate: "2025-08-20" },
        { id: 50, name: "Sibasish Behera", email: "sibasish.behera@scottish.co.uk", role: "Manager", status: "active", joinDate: "2025-08-25" },
        { id: 51, name: "Nivedita Sahu", email: "nivedita.sahu@scottish.co.uk", role: "Editor", status: "active", joinDate: "2025-09-03" },
        { id: 52, name: "Amitabh Patra", email: "amitabh.patra@scottish.co.uk", role: "User", status: "inactive", joinDate: "2025-09-10" },
        { id: 53, name: "Kajal Mishra", email: "kajal.mishra@scottish.co.uk", role: "User", status: "active", joinDate: "2025-09-15" },
        { id: 54, name: "Bijaya Nayak", email: "bijaya.nayak@scottish.co.uk", role: "Admin", status: "active", joinDate: "2025-09-22" },
        { id: 55, name: "Archana Rout", email: "archana.rout@scottish.co.uk", role: "User", status: "active", joinDate: "2025-09-28" },
        { id: 56, name: "Kishore Das", email: "kishore.das@scottish.co.uk", role: "User", status: "inactive", joinDate: "2025-10-05" },
        { id: 57, name: "Rupesh Mohapatra", email: "rupesh.mohapatra@scottish.co.uk", role: "Manager", status: "active", joinDate: "2025-10-10" },
        { id: 58, name: "Anjali Swain", email: "anjali.swain@scottish.co.uk", role: "User", status: "active", joinDate: "2025-10-18" },
        { id: 59, name: "Rajlaxmi Jena", email: "rajlaxmi.jena@scottish.co.uk", role: "Editor", status: "active", joinDate: "2025-10-25" },
        { id: 60, name: "Bhabani Mohanty", email: "bhabani.mohanty@scottish.co.uk", role: "User", status: "active", joinDate: "2025-11-01" },
        { id: 61, name: "Deepak Swain", email: "deepak.swain@scottish.co.uk", role: "User", status: "active", joinDate: "2025-11-05" },
        { id: 62, name: "Supriya Mohapatra", email: "supriya.mohapatra@scottish.co.uk", role: "User", status: "active", joinDate: "2025-11-10" },
        { id: 63, name: "Satyabrata Behera", email: "satyabrata.behera@scottish.co.uk", role: "Manager", status: "inactive", joinDate: "2025-11-12" },
        { id: 64, name: "Ranjita Lenka", email: "ranjita.lenka@scottish.co.uk", role: "Editor", status: "active", joinDate: "2025-11-15" },
        { id: 65, name: "Sambit Nayak", email: "sambit.nayak@scottish.co.uk", role: "Admin", status: "active", joinDate: "2025-11-18" },
        { id: 66, name: "Arpita Mohanty", email: "arpita.mohanty@scottish.co.uk", role: "User", status: "inactive", joinDate: "2025-11-22" },
        { id: 67, name: "Subrat Patra", email: "subrat.patra@scottish.co.uk", role: "User", status: "active", joinDate: "2025-11-25" },
        { id: 68, name: "Payal Sahu", email: "payal.sahu@scottish.co.uk", role: "Editor", status: "active", joinDate: "2025-11-28" },
        { id: 69, name: "Abinash Das", email: "abinash.das@scottish.co.uk", role: "User", status: "active", joinDate: "2025-12-02" },
        { id: 70, name: "Tanya Raut", email: "tanya.raut@scottish.co.uk", role: "User", status: "inactive", joinDate: "2025-12-05" },
        { id: 71, name: "Dipti Pradhan", email: "dipti.pradhan@scottish.co.uk", role: "Admin", status: "active", joinDate: "2025-12-10" },
        { id: 72, name: "Rupak Sahu", email: "rupak.sahu@scottish.co.uk", role: "User", status: "active", joinDate: "2025-12-15" },
        { id: 73, name: "Ipsita Dash", email: "ipsita.dash@scottish.co.uk", role: "User", status: "active", joinDate: "2025-12-20" },
        { id: 74, name: "Sidharth Nayak", email: "sidharth.nayak@scottish.co.uk", role: "Editor", status: "inactive", joinDate: "2025-12-24" },
        { id: 75, name: "Namita Baral", email: "namita.baral@scottish.co.uk", role: "User", status: "active", joinDate: "2025-12-28" },
        { id: 76, name: "Bikram Mohanty", email: "bikram.mohanty@scottish.co.uk", role: "Manager", status: "active", joinDate: "2026-01-02" },
        { id: 77, name: "Ananya Lenka", email: "ananya.lenka@scottish.co.uk", role: "User", status: "active", joinDate: "2026-01-08" },
        { id: 78, name: "Saswati Sahu", email: "saswati.sahu@scottish.co.uk", role: "User", status: "inactive", joinDate: "2026-01-12" },
        { id: 79, name: "Rohit Dash", email: "rohit.dash@scottish.co.uk", role: "Admin", status: "active", joinDate: "2026-01-16" },
        { id: 80, name: "Pallavi Jena", email: "pallavi.jena@scottish.co.uk", role: "User", status: "active", joinDate: "2026-01-20" },
        { id: 81, name: "Milan Kumar", email: "milan.kumar@scottish.co.uk", role: "User", status: "active", joinDate: "2026-01-25" },
        { id: 82, name: "Tushar Pradhan", email: "tushar.pradhan@scottish.co.uk", role: "User", status: "inactive", joinDate: "2026-02-01" },
        { id: 83, name: "Pranati Mishra", email: "pranati.mishra@scottish.co.uk", role: "Editor", status: "active", joinDate: "2026-02-05" },
        { id: 84, name: "Soubhagya Patra", email: "soubhagya.patra@scottish.co.uk", role: "Manager", status: "active", joinDate: "2026-02-10" },
        { id: 85, name: "Ankita Nayak", email: "ankita.nayak@scottish.co.uk", role: "User", status: "active", joinDate: "2026-02-15" },
        { id: 86, name: "Subhashree Das", email: "subhashree.das@scottish.co.uk", role: "User", status: "inactive", joinDate: "2026-02-18" },
        { id: 87, name: "Debasis Rout", email: "debasis.rout@scottish.co.uk", role: "Admin", status: "active", joinDate: "2026-02-22" },
        { id: 88, name: "Tanushree Mohanty", email: "tanushree.mohanty@scottish.co.uk", role: "User", status: "active", joinDate: "2026-02-25" },
        { id: 89, name: "Arun Swain", email: "arun.swain@scottish.co.uk", role: "Editor", status: "inactive", joinDate: "2026-03-01" },
        { id: 90, name: "Deepali Panda", email: "deepali.panda@scottish.co.uk", role: "User", status: "active", joinDate: "2026-03-05" },
        { id: 91, name: "Aurobinda Sahu", email: "aurobinda.sahu@scottish.co.uk", role: "Manager", status: "active", joinDate: "2026-03-10" },
        { id: 92, name: "Priyadarshini Dash", email: "priyadarshini.dash@scottish.co.uk", role: "User", status: "inactive", joinDate: "2026-03-12" },
        { id: 93, name: "Ritesh Behera", email: "ritesh.behera@scottish.co.uk", role: "User", status: "active", joinDate: "2026-03-15" },
        { id: 94, name: "Rojalin Mohapatra", email: "rojalin.mohapatra@scottish.co.uk", role: "User", status: "active", joinDate: "2026-03-18" },
        { id: 95, name: "Kunal Ranjan", email: "kunal.ranjan@scottish.co.uk", role: "Admin", status: "inactive", joinDate: "2026-03-20" },
        { id: 96, name: "Bharati Sahu", email: "bharati.sahu@scottish.co.uk", role: "User", status: "active", joinDate: "2026-03-25" },
        { id: 97, name: "Siddhartha Das", email: "siddhartha.das@scottish.co.uk", role: "Editor", status: "active", joinDate: "2026-04-01" },
        { id: 98, name: "Chinmayee Nayak", email: "chinmayee.nayak@scottish.co.uk", role: "User", status: "inactive", joinDate: "2026-04-04" },
        { id: 99, name: "Amarendra Behera", email: "amarendra.behera@scottish.co.uk", role: "Manager", status: "active", joinDate: "2026-04-10" },
        { id: 100, name: "Sasmita Patnaik", email: "sasmita.patnaik@scottish.co.uk", role: "User", status: "active", joinDate: "2026-04-15" },
        { id: 101, name: "Rupesh Nayak", email: "rupesh.nayak@scottish.co.uk", role: "User", status: "active", joinDate: "2026-04-20" },
        { id: 102, name: "Madhusmita Swain", email: "madhusmita.swain@scottish.co.uk", role: "User", status: "inactive", joinDate: "2026-04-25" },
        { id: 103, name: "Srikant Savat", email: "srikant.savat@scottish.co.uk", role: "Admin", status: "active", joinDate: "2026-05-01" },
        { id: 104, name: "Laxmipriya Mohanty", email: "laxmipriya.mohanty@scottish.co.uk", role: "User", status: "active", joinDate: "2026-05-05" },
        { id: 105, name: "Arunima Lenka", email: "arunima.lenka@scottish.co.uk", role: "Editor", status: "active", joinDate: "2026-05-10" },
        { id: 106, name: "Sourav Barik", email: "sourav.barik@scottish.co.uk", role: "User", status: "inactive", joinDate: "2026-05-12" },
        { id: 107, name: "Lopamudra Das", email: "lopamudra.das@scottish.co.uk", role: "User", status: "active", joinDate: "2026-05-15" },
        { id: 108, name: "Debabrata Sahu", email: "debabrata.sahu@scottish.co.uk", role: "Manager", status: "active", joinDate: "2026-05-20" },
        { id: 109, name: "Sushree Behera", email: "sushree.behera@scottish.co.uk", role: "User", status: "active", joinDate: "2026-05-25" },
        { id: 110, name: "Niladri Mohanty", email: "niladri.mohanty@scottish.co.uk", role: "User", status: "inactive", joinDate: "2026-05-30" },
        { id: 111, name: "Pritam Panda", email: "pritam.panda@scottish.co.uk", role: "Admin", status: "active", joinDate: "2026-06-02" },
        { id: 112, name: "Manisha Sahoo", email: "manisha.sahoo@scottish.co.uk", role: "User", status: "active", joinDate: "2026-06-05" },
        { id: 113, name: "Rajeshwari Dash", email: "rajeshwari.dash@scottish.co.uk", role: "User", status: "active", joinDate: "2026-06-10" },
        { id: 114, name: "Sandeep Pradhan", email: "sandeep.pradhan@scottish.co.uk", role: "Editor", status: "inactive", joinDate: "2026-06-15" },
        { id: 115, name: "Binita Nayak", email: "binita.nayak@scottish.co.uk", role: "User", status: "active", joinDate: "2026-06-18" },
        { id: 116, name: "Ashutosh Jena", email: "ashutosh.jena@scottish.co.uk", role: "User", status: "active", joinDate: "2026-06-22" },
        { id: 117, name: "Rina Mohapatra", email: "rina.mohapatra@scottish.co.uk", role: "Manager", status: "active", joinDate: "2026-06-25" },
        { id: 118, name: "Pratyush Sahu", email: "pratyush.sahu@scottish.co.uk", role: "User", status: "inactive", joinDate: "2026-06-28" },
        { id: 119, name: "Sucharita Behera", email: "sucharita.behera@scottish.co.uk", role: "User", status: "active", joinDate: "2026-07-01" },
        { id: 120, name: "Archana Mohanty", email: "archana.mohanty@scottish.co.uk", role: "User", status: "active", joinDate: "2026-07-05" }
    ];

    const columns = [
        {
            key: 'id',
            header: 'ID',
            filterable: false
        },
        {
            key: 'name',
            header: 'Name',
            cell: (row) => <span className="font-semibold whitespace-nowrap">{row.name}</span>
        },
        {
            key: 'email',
            header: 'Email'
        },
        {
            key: 'role',
            header: 'Role'
        },
        {
            key: 'status',
            header: 'Status',
            cell: (row) => (<Badge variant={row.status === 'active' ? 'default' : 'secondary'}>{row.status}</Badge>)
        },
        {
            key: 'joinDate',
            header: 'Join Date',
            cell: (row) => new Date(row.joinDate).toLocaleDateString()
        },
    ];

    return (
        <>
            <SubBanner
                title="Test Design"
                breadcrumbItems={[
                    { label: "Test", href: "/test" },
                    { label: "Design" }
                ]}
            />
            <div className='container py-10'>
                <DataTable
                    columns={columns}
                    data={users}
                    enableSorting={true}
                    enableFiltering={true}
                    enableColumnFilters={true}
                    enableRowSelection={true}
                    enableColumnVisibility={true}
                    enableExport={true}
                    enablePagination={true}
                    pageSizeOptions={[5, 10, 25, "all"]}
                    defaultPageSize={10}
                />
            </div>
        </>
    )
}

export default Design;