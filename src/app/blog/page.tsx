import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  CalendarIcon,
  ClockIcon,
  ArrowRightIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: '博客',
  description: '分享技术见解、学习心得和开发经验',
};

const blogPosts = [
  {
    id: 1,
    title: 'Next.js 14 全面指南：从入门到精通',
    excerpt: '深入探讨Next.js 14的新特性，包括App Router、Server Components、流式渲染等现代Web开发技术。',
    content: '本文将带你全面了解Next.js 14的核心特性和最佳实践...',
    date: '2024.01.15',
    readTime: '8分钟',
    category: 'React',
    tags: ['Next.js', 'React', '前端开发'],
    author: '娄敏',
    views: 1250,
    featured: true,
    image: '/api/placeholder/600/300'
  },
  {
    id: 2,
    title: 'TypeScript 高级类型技巧与最佳实践',
    excerpt: '掌握TypeScript的高级类型系统，提升代码质量和开发效率。涵盖泛型、条件类型、映射类型等高级概念。',
    content: 'TypeScript作为JavaScript的超集，提供了强大的类型系统...',
    date: '2024.01.10',
    readTime: '12分钟',
    category: 'TypeScript',
    tags: ['TypeScript', '前端开发', '类型系统'],
    author: '娄敏',
    views: 980,
    featured: false,
    image: '/api/placeholder/600/300'
  },
  {
    id: 3,
    title: 'Tailwind CSS 实战：构建现代化用户界面',
    excerpt: '学习如何使用Tailwind CSS快速构建美观、响应式的用户界面，掌握实用的设计模式和组件开发技巧。',
    content: 'Tailwind CSS是一个功能类优先的CSS框架...',
    date: '2024.01.05',
    readTime: '10分钟',
    category: 'CSS',
    tags: ['Tailwind CSS', 'CSS', 'UI设计'],
    author: '娄敏',
    views: 750,
    featured: true,
    image: '/api/placeholder/600/300'
  },
  {
    id: 4,
    title: 'Node.js 性能优化指南',
    excerpt: '深入分析Node.js应用的性能瓶颈，提供实用的优化策略和监控方案，帮助构建高性能的后端服务。',
    content: 'Node.js应用的性能优化是后端开发中的重要课题...',
    date: '2023.12.28',
    readTime: '15分钟',
    category: 'Node.js',
    tags: ['Node.js', '性能优化', '后端开发'],
    author: '娄敏',
    views: 1100,
    featured: false,
    image: '/api/placeholder/600/300'
  },
  {
    id: 5,
    title: 'React Hooks 最佳实践与常见陷阱',
    excerpt: '深入理解React Hooks的工作原理，避免常见的错误用法，掌握高效的状态管理和副作用处理技巧。',
    content: 'React Hooks彻底改变了我们编写React组件的方式...',
    date: '2023.12.20',
    readTime: '11分钟',
    category: 'React',
    tags: ['React', 'Hooks', '状态管理'],
    author: '娄敏',
    views: 890,
    featured: false,
    image: '/api/placeholder/600/300'
  },
  {
    id: 6,
    title: '现代Web开发工具链配置指南',
    excerpt: '从零开始配置现代Web开发环境，包括构建工具、代码质量工具、测试工具等，提升开发体验和效率。',
    content: '良好的开发工具链是高效开发的基础...',
    date: '2023.12.15',
    readTime: '9分钟',
    category: '工具',
    tags: ['开发工具', 'Webpack', 'Vite'],
    author: '娄敏',
    views: 650,
    featured: false,
    image: '/api/placeholder/600/300'
  }
];

const categories = [
  { name: '全部', count: blogPosts.length },
  { name: 'React', count: blogPosts.filter(post => post.category === 'React').length },
  { name: 'TypeScript', count: blogPosts.filter(post => post.category === 'TypeScript').length },
  { name: 'CSS', count: blogPosts.filter(post => post.category === 'CSS').length },
  { name: 'Node.js', count: blogPosts.filter(post => post.category === 'Node.js').length },
  { name: '工具', count: blogPosts.filter(post => post.category === '工具').length }
];

const featuredPosts = blogPosts.filter(post => post.featured);
const regularPosts = blogPosts.filter(post => !post.featured);

export default function BlogPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* 页面标题 */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            我的博客
          </h1>
          <p className="text-xl text-muted-foreground">
            分享技术见解、学习心得和开发经验
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* 主要内容区域 */}
            <div className="lg:col-span-3">
              {/* 精选文章 */}
              {featuredPosts.length > 0 && (
                <section className="mb-16">
                  <h2 className="text-2xl font-bold mb-8 flex items-center">
                    <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
                    精选文章
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {featuredPosts.map((post) => (
                      <Card key={post.id} hover className="h-full group overflow-hidden">
                        <div className="aspect-video bg-muted overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-300">
                            <span className="text-muted-foreground">文章配图</span>
                          </div>
                        </div>
                        <CardHeader>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                            <div className="flex items-center">
                              <CalendarIcon className="w-4 h-4 mr-1" />
                              {post.date}
                            </div>
                            <div className="flex items-center">
                              <ClockIcon className="w-4 h-4 mr-1" />
                              {post.readTime}
                            </div>
                            <div className="flex items-center">
                              <EyeIcon className="w-4 h-4 mr-1" />
                              {post.views}
                            </div>
                          </div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </CardTitle>
                          <CardDescription className="line-clamp-3">
                            {post.excerpt}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <Button variant="outline" className="w-full group/btn">
                            阅读全文
                            <ArrowRightIcon className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              )}

              {/* 最新文章 */}
              <section>
                <h2 className="text-2xl font-bold mb-8 flex items-center">
                  <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
                  最新文章
                </h2>
                <div className="space-y-6">
                  {regularPosts.map((post) => (
                    <Card key={post.id} hover className="overflow-hidden">
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <div className="aspect-video md:aspect-square bg-muted">
                            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                              <span className="text-muted-foreground">文章配图</span>
                            </div>
                          </div>
                        </div>
                        <div className="md:w-2/3">
                          <CardHeader>
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center">
                                  <CalendarIcon className="w-4 h-4 mr-1" />
                                  {post.date}
                                </div>
                                <div className="flex items-center">
                                  <ClockIcon className="w-4 h-4 mr-1" />
                                  {post.readTime}
                                </div>
                              </div>
                              <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                                {post.category}
                              </span>
                            </div>
                            <CardTitle className="text-xl hover:text-primary transition-colors line-clamp-2">
                              {post.title}
                            </CardTitle>
                            <CardDescription className="line-clamp-2">
                              {post.excerpt}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center justify-between">
                              <div className="flex flex-wrap gap-2">
                                {post.tags.slice(0, 2).map((tag) => (
                                  <span
                                    key={tag}
                                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <EyeIcon className="w-4 h-4 mr-1" />
                                {post.views}
                              </div>
                            </div>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>
            </div>

            {/* 侧边栏 */}
            <div className="lg:col-span-1">
              <div className="space-y-8 sticky top-8">
                {/* 分类 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">文章分类</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div
                          key={category.name}
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                        >
                          <span className="font-medium">{category.name}</span>
                          <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">
                            {category.count}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* 热门标签 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">热门标签</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'JavaScript', '前端开发', '后端开发'].map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* 统计信息 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">博客统计</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">总文章数</span>
                        <span className="font-bold text-primary">{blogPosts.length}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">总阅读量</span>
                        <span className="font-bold text-primary">
                          {blogPosts.reduce((total, post) => total + post.views, 0).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">分类数量</span>
                        <span className="font-bold text-primary">{categories.length - 1}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 订阅 */}
                <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardHeader>
                    <CardTitle className="text-lg">订阅更新</CardTitle>
                    <CardDescription>
                      获取最新的技术文章和学习资源
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" href="/contact">
                      联系我订阅
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 