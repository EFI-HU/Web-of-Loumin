import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { INVESTMENT_CASES, INVESTMENT_AREAS } from '@/lib/constants';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* 页面标题 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              投资组合
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            深度参与的优质投资项目，见证科技创新的力量
          </p>
        </div>

        {/* 投资统计 */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600 dark:text-gray-400">年投资经验</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">1500+</div>
              <div className="text-gray-600 dark:text-gray-400">项目调研</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">15亿+</div>
              <div className="text-gray-600 dark:text-gray-400">股权交易(人民币)</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">4</div>
              <div className="text-gray-600 dark:text-gray-400">核心投资领域</div>
            </Card>
          </div>
        </section>

        {/* 投资领域 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              投资领域
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INVESTMENT_AREAS.map((area, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">💼</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {area.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {area.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* 投资案例 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              代表性投资案例
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {INVESTMENT_CASES.map((project, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs rounded-full">
                        {project.sector}
                      </span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 text-xs rounded-full">
                        {project.stage}
                      </span>
                      <span className={`px-3 py-1 text-xs rounded-full ${
                        project.status === '已上市' 
                          ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-2xl">🚀</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* 投资理念 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              投资理念
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold mb-3">深度研究</h3>
              <p className="text-gray-600 dark:text-gray-400">
                深入了解行业趋势和技术发展，发现具有长期价值的投资机会
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-3">价值创造</h3>
              <p className="text-gray-600 dark:text-gray-400">
                不仅是资金提供方，更是战略合作伙伴，帮助企业实现可持续增长
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-3">前瞻布局</h3>
              <p className="text-gray-600 dark:text-gray-400">
                关注新兴技术和商业模式，在变革的早期阶段发现机会
              </p>
            </Card>
          </div>
        </section>

        {/* 合作邀请 */}
        <section className="text-center">
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
            <h2 className="text-2xl font-bold mb-4">寻找优质项目</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              如果您有优秀的科技创新项目，特别是在产业数字化、企业服务、金融科技、汽车科技等领域，
              欢迎与我们联系，共同探讨合作可能性。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button>
                <a href="mailto:loumin_pku@163.com">项目提交</a>
              </Button>
              <Button variant="outline">
                <a href="/contact">联系方式</a>
              </Button>
            </div>
          </Card>
        </section>

      </div>
    </div>
  );
} 