import { NextResponse } from 'next/server';

export function middleware(request) {
  const authTokens = request.cookies.get("authTokens")?.value;

  if (request.nextUrl.pathname.startsWith("/start") && !authTokens) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  
  if (authTokens && request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/start', request.url));
  }

  
  if (authTokens && request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/start', request.url));
  }

  const response = NextResponse.next()

}

export const config = {
  matcher: ['/start(.*)', '/'],
}



  /*const allowedOrigins = ['http://172.20.20.3:8001/']
  
  const corsOptions = {
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  }*/

 /* const origin = request.headers.get('origin') ?? ''
  const isAllowedOrigin = allowedOrigins.includes(origin)
  const isPreflight = request.method === 'OPTIONS'
 
  if (isPreflight) {
    const preflightHeaders = {
      ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
      ...corsOptions,
    }
    return NextResponse.json({}, { headers: preflightHeaders })
  }*/

     
 /* if (isAllowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', origin)
  }
 
  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value)
  })
 
  return response*/