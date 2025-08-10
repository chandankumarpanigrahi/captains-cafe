import { google } from 'googleapis';
import { NextResponse } from 'next/server';

// Utility function to get Google Sheets API client
const getSheetsClient = () => {
    const clientEmail = 'captains-cafe@qwick-checkin.iam.gserviceaccount.com';
    const privateKey = "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDb4kEboriRgopX\nJvFZWoT1MRxcOIeukhIL6S+IKBN+LTu8P63AnOh8qmFkn4+HTbeGflz1ztmb8Jp5\nAUN+3V1SSHXWt2RgiWo/1llIe84bEh4p6lkpeNy/NvWMbeozVkeA/OO0AdT1Ku1Y\n5KzA91AmSAhb6s6j59U9MGoFa2JfPuI+QyIOsiMra8MieDTYXO00q/W4aYP1U01v\nDbioHQnX6YnhWshiyMIiXAgXGJhV2tAUcOESukviAMJv9zuHk0VNxwLLa4JdTRF/\nOtgR/JCCsehZ7WKv1jAqrXeXbnrzQbcr2bfUBt2Rkj7nCpq6W1U2OmiCRLd4wT2W\nM/JFpEsZAgMBAAECggEAAl62DbCTbXMTH2Uarxg+DGABAp/z22503ha/dcfbzO17\nIjhr/KJcUaKq/dEH9KECcENKqHYYK5l8ar84HWUQqU9BYOT1YqJ8iA9dAz5dXnaT\np2dAmoU0WOXEYAT7xB2jE+l14VXvOAzERePiFkrcHOuEFoyJeWQJbPlJfUE27Fid\nrD56V2vfRK3bsgQyy/A2d6ps5qBgcgFSK2uqYvr1L0RWrZ1XZEyVwH6EzaDfbvpJ\neBy13T34ZVZvMpsFGXjSDmh/Ei9O+fShICspHVQ1NWkU1UAx/DueOuibVoQpBIxl\nebJUiguiMgEBKrXzlIsmFwMOvGesM5tj0o98AdUZgQKBgQD4RksX7kstyo3Jtegv\nUR8yeZkDt9sPBn0+TbXKqdY/ewVC1I6BbATTx6VN22p+X4f4/MYMdMgyMO11AuXt\npUTzbYy8Jkas0tS5+UREhBzWQKiGXkVNTkvrzD4p+Lnj428uHOZsuUCQVm8xIxYV\nxpOS/Qt6MjPenokfOFFqhx45mQKBgQDiuc49iQRbyXfdSrcjsel1AplU1OvAlZX8\nBBfOl3PlgfxDFJUwIFDBboDNHav+vqiR/6M6ePLpPkB0mPoJEtph65/lLkVBzpDG\nfr9AP4Vh4HE3ddM3P1hbpPAkfJgJpRPOeOQTvuKp9Ya/Cyv/xFtk1/UsBvtheL33\nJ0aTxTCNgQKBgQDW8eyjjFAUFfBJeS7KgF4VEgdym6OQz5pw7VB9ZCq0DOrSIDo8\nPGu1enxX+qWpQUX0P8urDxQfuBJtIpQz+cjHQ8n7PtwjVeiMFg2PkB1zNMlyg31W\nX3oFbG9JYSh27vnbn3OzH3ORQvPDQ9AkDCbJtEBSi9IyY2jt2ZFLPC3jyQKBgQCI\nx1FNvEhd21gtr3J23VEbHxtDm0QypcubAxkdsC7iCZ4XFea+5u/xEeowVDM79ueZ\nVKCzmN3qqnyWGufU64PFyTFoQJbVkXmz1iko6GleV9nVfIaU8OksOIALcwMB5o3h\nZPsrkmAJ6q6EuIetwFbmqoYlLn0fG4l2/kHMygx1gQKBgQCQIzzrP1gDUHCpm1IF\nOjRhDJGODXR4jzb/bRO/g2odtAReTbfSL/Du22EPmPWpVZhZq7xmv6kGxXDoP1RF\niLZElwOqueP3LYb8eCCXIbn3rUaZw+9LM1k9ENfPw9+GZYqQsYr7wC9iir5n5P2Z\nd1j3hXO1cp8xg62tUZljiaIIbA==\n-----END PRIVATE KEY-----\n";
    const spreadsheetId = "1-lqhk92YAtBOqY2dHo1Qdy-gODEPXIA5c1ym-YsnDb8";

    if (!clientEmail || !privateKey || !spreadsheetId) {
        throw new Error('Missing Google Sheets configuration in environment variables.');
    }

    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: clientEmail,
            private_key: privateKey,
        },
        scopes: ["https://docs.google.com/spreadsheets/d/1-lqhk92YAtBOqY2dHo1Qdy-gODEPXIA5c1ym-YsnDb8/edit?usp=sharing"],
    });

    return {
        sheets: google.sheets({ version: 'v4', auth }),
        spreadsheetId,
    };
};

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, orderType, message } = body;

        // Validation
        if (!name || !email || !orderType || !message) {
            return new NextResponse(
                JSON.stringify({ error: 'Missing required fields.' }), 
                { 
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'POST, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type',
                    }
                }
            );
        }

        const { sheets, spreadsheetId } = await getSheetsClient();

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Sheet1!A:D',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [[name, email, orderType, message]],
            },
        });

        return new NextResponse(
            JSON.stringify({ 
                success: true, 
                updatedRange: response.data.updates?.updatedRange 
            }),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                }
            }
        );

    } catch (error) {
        console.error('Error writing to Google Sheets:', error);
        return new NextResponse(
            JSON.stringify({ error: 'Internal server error' }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                }
            }
        );
    }
}

// Add this OPTIONS handler for CORS preflight requests
export async function OPTIONS() {
    return new NextResponse(null, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        }
    });
}