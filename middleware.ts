import { NextRequest, NextResponse } from 'next/server'
export async function middleware(req: NextRequest, res: Response) {
    console.log(process.env.PUBLIC_KEY)
}