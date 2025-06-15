import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // 支持的语言列表
  locales: ['zh', 'en', 'fr'],
  
  // 默认语言
  defaultLocale: 'zh',
  
  // 移除本地化前缀，使用单一域名
  localePrefix: 'never',
  
  // 禁用自动语言检测，使用手动切换
  localeDetection: false
});

export const config = {
  // 匹配所有路径除了 api, _next, 静态文件等
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}; 