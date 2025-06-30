// 支持的语言列表
export const locales = ['zh', 'en', 'fr'] as const;
export type Locale = (typeof locales)[number];

// 默认语言
export const defaultLocale: Locale = 'zh';

// 获取消息的辅助函数
export async function getMessages(locale: Locale) {
  try {
    return (await import(`./i18n/messages/${locale}.json`)).default;
  } catch {
    // 如果找不到语言文件，返回默认语言的消息
    return (await import(`./i18n/messages/${defaultLocale}.json`)).default;
  }
}

// 设置用户语言偏好
export async function setUserLocale(locale: Locale) {
  const { cookies } = await import('next/headers');
  const cookieStore = await cookies();
  cookieStore.set('NEXT_LOCALE', locale);
  
  // 同时设置到 localStorage（仅在客户端）
  if (typeof window !== 'undefined') {
    localStorage.setItem('NEXT_LOCALE', locale);
  }
} 