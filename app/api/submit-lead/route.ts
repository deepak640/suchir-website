import { NextRequest, NextResponse } from "next/server";

async function getAccessToken(): Promise<string> {
  const res = await fetch("https://accounts.zoho.in/oauth/v2/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      client_id: process.env.ZOHO_CLIENT_ID!,
      client_secret: process.env.ZOHO_CLIENT_SECRET!,
      refresh_token: process.env.ZOHO_REFRESH_TOKEN!,
    }),
  });
  const data = await res.json();
  if (!data.access_token) throw new Error("Failed to get access token: " + JSON.stringify(data));
  return data.access_token;
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, mobile, message } = await req.json();
    if (!name || !email) {
      return NextResponse.json({ error: "Name and email required" }, { status: 400 });
    }

    const accessToken = await getAccessToken();

    const zohoRes = await fetch("https://www.zohoapis.in/crm/v2/Leads", {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            Last_Name: name,
            Email: email,
            Company: company || "",
            Phone: mobile || "",
            Description: message || "",
            Lead_Source: "Web Research",
            Lead_Status: "Not Contacted",
          },
        ],
      }),
    });

    const zohoData = await zohoRes.json();
    if (zohoData.data?.[0]?.status === "success" || zohoData.data?.[0]?.code === "SUCCESS") {
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ error: "Zoho error", details: zohoData }, { status: 500 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
