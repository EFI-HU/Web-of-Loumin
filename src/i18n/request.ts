import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';
import { locales, defaultLocale, Locale } from '@/lib/i18n';

export default getRequestConfig(async ({ locale }) => {
  // 从 cookies 获取语言设置
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get('NEXT_LOCALE')?.value as Locale;
  
  // 确定当前语言
  const resolvedLocale = localeCookie && locales.includes(localeCookie) 
    ? localeCookie 
    : locale || defaultLocale;

  return {
    locale: resolvedLocale,
    messages: (await import(`@/lib/i18n/messages/${resolvedLocale}.json`)).default
  };
}); 