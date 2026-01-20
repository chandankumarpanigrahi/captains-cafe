// File location: /app/api/submit/route.js

import { google } from 'googleapis';

export async function POST(request) {
    try {
        // 1. Get form data
        const formData = await request.json();

        // 2. Use your API credentials (replace with YOUR values)
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
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
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
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