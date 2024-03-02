import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import "@/styles/globals.css"
export function generateStaticParams() {
  return [{ locale: 'ru' }, { locale: 'uz' }];
}

export default async function LocaleLayout({ children, params: { locale } }: any) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <title>WEE BUILD</title>
        <meta name="description" content="WEE BUILD - repairing website made with next js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        maxHeight:"100%"
      }}>
        {/* <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider> */}
        <h1 style={{
          textAlign: "center",
        }}>{locale === "uz" ? "Sayt vaqtincha ishlab chiqish rejimida" : "Сайт временно находится в режиме разработки"}</h1>
      </body>
    </html>
  );
}