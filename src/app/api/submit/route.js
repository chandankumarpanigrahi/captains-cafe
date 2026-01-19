// File location: /app/api/submit/route.js

import { google } from 'googleapis';

export async function POST(request) {
    try {
        // 1. Get form data
        const formData = await request.json();

        // 2. Use your API credentials (replace with YOUR values)
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: "ccafe-589@the-captains-cafe.iam.gserviceaccount.com",
                private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQClzAFzCw40wxNM\nDuK4WrhzHpPFefkvKFgetRsoFTzL79YnJ17XSjPFZl7p6az+maKDRffgqYLgPkbP\ne2Kox71GZZQ7dbnM6hpI1aewCtluXgUm8CKDETqPo/BR1QLA9bbbmCBrym+gVubg\nYLAVmJPIddch/W7SsRYbAwFM8v1vNpU82VRHLx+vDJrVm8Ru9azCc/eHAD+88YiB\nZKXVFW8G8OzNVwZTn3dcO8o03g95L8PmVkGEPU6jQ3F8p+GI6M/zVtsr85Sm1KBb\nCO0eUxPt9MJDU25ry4202V1F+HKFQD7Ni1sntUWciEm7SVIfI4L0+BpGRWsViCep\nuvIfUtDhAgMBAAECggEAAPCAil/j2ytC57Lou6ZOJL4CtcREM2UcCCMX3dk+5OG2\nQI1iG2tazKXfVd/Zve9S/jlePW4bj3vK2uz1OBffU7kdDBtFHmHPA828cqx35zJC\nvPR0jA9B1fMsw3+eqD7tvKX4Bv8sVdlqRocULgcEuKWNIb9FXiJ0z+7CGpy+pPP2\nmXYnbm+ZaJOm2Tr76ypvTRm8RodEzhTX0o/lInvT73HlX6i2yLuInfiixrmaHVOs\n7zO9Vybzv13PAOB9/JszK4BSmPFvx5nqyZCcAr1ZvN7F9ngxEagM1Zyt4iNNeDV3\nvtAjgsOUrANlzrITga/+JJhcvEGkqI6ZpvGzmls4oQKBgQDTU0RdVicW3h3vwz61\nxxLqmCXMsMpBBJjJzz7IuI9Ap16d6m31y/kKH/sR9/lhE/tNmuV177/ojwm3qNlg\nYgC1GM1Kxe01lIysmffxIG+VrVT8gTi7DMa1styxUgy+XM3xk7WsQvQcGV89fxor\n91nKoM+7d/xAxUZ11lHaAHdJUwKBgQDI2MjUd3s+a8auSdnGR7V41Z8NqC6JtW54\neqjUiI7rt4bNjCrk1hufbvsAMd6WZ8u4cnhWfAEufNN9Lf6cDvYir+yK5oj8gpzD\n/SsHNBmDTcrUHK7a1icm1BzGYtM+/a6kSv4+anNzzJXp4VtZ/6kaZE9NkVDlX0RD\ncNqeTqJSewKBgQDI/Z08GMC84y0d6VkvktPPBD6PXGZBSJn494ADcGXvXECFeX50\nFTgcBSbKhEtPpa2StgwgC5M/ISxg3dtB7HQ3ygsXXwCpwUu6rgY/9FWsylrWfiDy\n5sfn8OIuVJeCRsopRg+4c0WxpAANgWHnBy8DpcdtykTFZdwKH3liGqdZuQKBgQCh\n1xWVJyYXOW9id73U6WmQkcpVjeTaMGlxCZ3LjLJlvIASV1UlCmY9xYbaNFUhK0hc\nO1k+jzPAivM8FnjotaGed9YKYxOVLYY242TtrAy24lODMg2v5wqrXhZFwdJpGq/E\nUW2nS832TK+sQ1yCG+Hek1/XqDXgbjCqi2COWdywywKBgQCfhyL1ZHF/JJZN1glS\ng48I2chN31/DHygmMQEbM1yvzeMTKPdFCvx5feyIUGpXI6zkVyopXGuWCBbm+7Gx\n7m54G1H37R3m61Km2iuXhROBlG/MfqR7WSqRkPKJ4dIX4SBEaWoXTBdNhwc/B+xL\nLCD4yZZ6ZYBUzI7yaPpeTJ5TOA==\n-----END PRIVATE KEY-----\n",
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets']
        });

        // 3. Connect to Google Sheets
        const sheets = google.sheets({ version: 'v4', auth });

        // 4. Prepare data row
        const timestamp = new Date().toLocaleString();
        const row = [
            timestamp,
            formData.name,
            formData.email,
            formData.phone,
            formData.country,
            formData.company,
            formData.service,
            formData.message
        ];

        // 5. Send to Google Sheets (replace YOUR_SHEET_ID)
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: "1ggveDBWyZh1C-xVy40aft98LTCA8q0s7h1yiZBER6sc", // 👈 Replace this
            range: "Sheet1!A:H",
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [row]
            }
        });

        // 6. Return success
        return Response.json({
            success: true,
            message: "Data saved to Google Sheets!"
        });

    } catch (error) {
        console.error("Error:", error);
        return Response.json({
            success: false,
            error: "Something went wrong"
        });
    }
}