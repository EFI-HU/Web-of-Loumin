import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { HomeIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: '页面未找到 - 404',
  description: '您访问的页面不存在',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 图标 */}
          <div className="mb-8">
            <div className="text-9xl font-bold text-primary/20 mb-4">404</div>
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-4xl">🔍</span>
            </div>
          </div>

          {/* 错误信息 */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            页面未找到
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
            抱歉，您访问的页面不存在。可能是页面地址错误，或者页面已被移动或删除。
          </p>

          {/* 建议操作 */}
          <div className="bg-muted/30 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold mb-4">您可以尝试：</h2>
            <ul className="text-left space-y-2 max-w-md mx-auto">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                检查网址是否正确
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                返回首页浏览其他内容
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                使用导航菜单查找页面
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                联系我获取帮助
              </li>
            </ul>
          </div>

          {/* 操作按钮 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" href="/" className="group">
              <HomeIcon className="mr-2 h-5 w-5" />
              返回首页
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              href="/about"
              className="group"
            >
              <ArrowLeftIcon className="mr-2 h-5 w-5" />
              了解更多
            </Button>
          </div>

          {/* 快速链接 */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-lg font-semibold mb-4">或者访问这些页面：</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/about" className="text-primary hover:text-primary/80 transition-colors">
                关于我
              </Link>
              <Link href="/projects" className="text-primary hover:text-primary/80 transition-colors">
                我的项目
              </Link>
              <Link href="/blog" className="text-primary hover:text-primary/80 transition-colors">
                博客文章
              </Link>
              <Link href="/contact" className="text-primary hover:text-primary/80 transition-colors">
                联系我
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 