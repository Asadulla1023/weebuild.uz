import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['ru', 'uz'],
  defaultLocale: ''
});
 
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};