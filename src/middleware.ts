import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export const middleware = (request: NextRequest) => {
  console.log("Has middleware!")
  return NextResponse.next()
}
 