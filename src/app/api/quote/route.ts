import { NextResponse } from "next/server"

const requiredFields = ["name", "phone", "requestType", "organization", "details"] as const

export async function POST(req: Request) {
  try {
    const data = await req.json()

    const missing = requiredFields.filter((field) => {
      const value = data?.[field]
      return typeof value !== "string" || value.trim().length === 0
    })

    if (missing.length > 0) {
      return NextResponse.json(
        { message: `Missing required fields: ${missing.join(", ")}` },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { message: "Support request received successfully." },
      { status: 200 }
    )
  } catch {
    return NextResponse.json({ message: "Invalid request payload." }, { status: 400 })
  }
}
