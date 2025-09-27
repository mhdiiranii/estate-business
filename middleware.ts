import { NextResponse } from 'next/server'
import type {NextRequest} from 'next/server'

export async function middleware(request:NextRequest) {
  const token = request.cookies.get('authjs.session-token')?.value

  const routes = ['/login','/login/register']

  if(token && routes.includes( request.nextUrl.pathname) ){
    return NextResponse.redirect(new URL('/',request.url))
  }

  if(request.nextUrl.pathname === '/login'){
    return NextResponse.next()
  }

  if(!token){
    return NextResponse.redirect(new URL('/login',request.url))
  }

  return NextResponse.next()

}

export const config = {
  matcher: ['/((?!api|_next|favicon.ico).*)'],
};