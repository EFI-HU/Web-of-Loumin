'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 关于 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              关于
            </h3>
            <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
              娄敏的个人网站，分享我的项目、想法和经历。
            </p>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              快速链接
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-base text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                >
                  首页
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-base text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                >
                  关于
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-base text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                >
                  项目
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-base text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                >
                  博客
                </Link>
              </li>
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              联系方式
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="mailto:loumin_pku@163.com"
                  className="text-base text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                >
                  loumin_pku@163.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/loumin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* 订阅 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              订阅更新
            </h3>
            <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
              订阅我的博客，获取最新更新。
            </p>
            <form className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="输入您的邮箱"
                  className="min-w-0 flex-1 rounded-l-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-base text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button
                  type="submit"
                  className="flex-shrink-0 rounded-r-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  订阅
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} 娄敏. 保留所有权利。
          </p>
        </div>
      </div>
    </footer>
  );
} 