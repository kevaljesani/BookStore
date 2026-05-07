import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // You can add authentication middleware logic here
  const authToken = request.cookies.get('auth-storage');
  
  // Protect specific routes if needed
  // const protectedPaths = ['/checkout'];
  // if (protectedPaths.some(path => request.nextUrl.pathname.startsWith(path))) {
  //   if (!authToken) {
  //     return NextResponse.redirect(new URL('/login', request.url));
  //   }
  // }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};