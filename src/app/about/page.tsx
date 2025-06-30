import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { WORK_EXPERIENCE, EDUCATION, AWARDS } from '@/lib/constants';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* 个人简介 */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                关于我
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              专注科技创新投资的金融专家，致力于发现和培育改变世界的科技企业
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                袁敏 - 金融投资专家
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  拥有10年科技创新股权投资经验，近2年科技创业及公司全面管理经验。
                  在科技创新与数字化变革、企业管理、战略规划、团队建设、商业模式、投融资等方面具有丰富的实战经验。
                </p>
                <p>
                  曾在复星锐正资本、人人公司等知名机构担任核心投资职位，参与投资了SoFi、量化派、开思时代等优秀项目。
                  期间交流考察约1500个创新创业项目，参与约15亿人民币股权交易。
                </p>
                <p>
                  荣获2017年福布斯中国30岁以下精英，具备北京大学双学士学位和乌特勒支大学金融经济学硕士学位。
                  社会责任感强，自驱力强，自我学习速度快，是一名富有创新精神的实践者。
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white">
                <h3 className="text-xl font-bold mb-4">核心专长</h3>
                <ul className="space-y-2">
                  <li>• 产业数字化投资</li>
                  <li>• 企业服务与金融科技</li>
                  <li>• 汽车交通科技</li>
                  <li>• 战略规划与团队建设</li>
                  <li>• 商业模式设计</li>
                  <li>• 投融资管理</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 工作经历 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              工作经历
            </span>
          </h2>
          <div className="space-y-6">
            {WORK_EXPERIENCE.map((job, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {job.company}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                      {job.position}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 mt-2 md:mt-0">
                    <span className="text-gray-500 dark:text-gray-400">{job.period}</span>
                    {job.current && (
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 text-xs rounded-full">
                        当前
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {job.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* 教育背景 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              教育背景
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {EDUCATION.map((edu, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {edu.school}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {edu.degree}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  {edu.period}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* 奖项荣誉 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              奖项荣誉
            </span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AWARDS.map((award, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">🏆</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  {award}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* 联系方式 */}
        <section className="text-center">
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
            <h2 className="text-2xl font-bold mb-4">期待与您合作</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              如果您有优秀的科技创新项目，或希望探讨合作机会，欢迎联系我
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button>
                <a href="mailto:loumin_pku@163.com">发送邮件</a>
              </Button>
              <Button variant="outline">
                <a href="/contact">更多联系方式</a>
              </Button>
            </div>
          </Card>
        </section>

      </div>
    </div>
  );
} 