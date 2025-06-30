'use client';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* 页面标题 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              联系我
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            期待与您探讨优质的科技创新项目，共同发现下一个投资机会
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* 联系信息 */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* 基本信息 */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">袁敏</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">现任职位</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    亲家集团 总裁 联合创始人<br/>
                    能猫资本 董事总经理
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">专业领域</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    科技创新股权投资、产业数字化、企业服务、金融科技
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">办公地址</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    北京市朝阳区大望京商务中心C座
                  </p>
                </div>
              </div>
            </Card>

            {/* 联系方式 */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">联系方式</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400">📧</span>
                  </div>
                  <div>
                    <p className="font-medium">邮箱</p>
                                    <a href="mailto:loumin_pku@163.com" className="text-blue-600 hover:text-blue-800">
                  loumin_pku@163.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 dark:text-green-400">📱</span>
                  </div>
                  <div>
                    <p className="font-medium">电话</p>
                    <a href="tel:18910992789" className="text-green-600 hover:text-green-800">
                      189-1099-2789
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400">💼</span>
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a href="https://linkedin.com/in/yuanmin" className="text-blue-600 hover:text-blue-800">
                      linkedin.com/in/yuanmin
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            {/* 投资偏好 */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">投资偏好</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300">产业数字化</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300">企业服务</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300">金融科技</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300">汽车科技</span>
                </div>
              </div>
            </Card>

          </div>

          {/* 联系表单 */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">项目合作咨询</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      姓名 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      公司名称
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="请输入公司名称"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      邮箱 *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="请输入您的邮箱"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      电话
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="请输入联系电话"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    所属行业
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    <option value="">请选择行业</option>
                    <option value="industrial-digitalization">产业数字化</option>
                    <option value="enterprise-service">企业服务</option>
                    <option value="fintech">金融科技</option>
                    <option value="auto-tech">汽车科技</option>
                    <option value="healthcare">医疗健康</option>
                    <option value="education">教育科技</option>
                    <option value="other">其他</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="stage" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    项目阶段
                  </label>
                  <select
                    id="stage"
                    name="stage"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    <option value="">请选择项目阶段</option>
                    <option value="idea">创意阶段</option>
                    <option value="mvp">MVP阶段</option>
                    <option value="early">早期阶段</option>
                    <option value="growth">成长期</option>
                    <option value="mature">成熟期</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    项目描述 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                    placeholder="请详细描述您的项目，包括商业模式、技术特点、市场前景等"
                  ></textarea>
                </div>

                <Button type="submit" className="w-full py-3">
                  发送项目信息
                </Button>
              </form>
            </Card>
          </div>

        </div>

        {/* 常见问题 */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              常见问题
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-3">什么类型的项目会被考虑？</h3>
              <p className="text-gray-600 dark:text-gray-400">
                我们主要关注产业数字化、企业服务、金融科技和汽车科技领域的早期到成长期项目，
                特别是具有技术创新、商业模式清晰、团队优秀的项目。
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-3">投资决策流程是怎样的？</h3>
              <p className="text-gray-600 dark:text-gray-400">
                通常包括初步沟通、项目评估、尽职调查、投资委员会审议等环节。
                从首次接触到完成投资一般需要1-3个月时间。
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-3">除了资金，还能提供什么支持？</h3>
              <p className="text-gray-600 dark:text-gray-400">
                我们为被投企业提供战略规划、商业模式优化、团队建设、
                资源对接等全方位的增值服务，帮助企业快速成长。
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-3">如何保护项目信息的保密性？</h3>
              <p className="text-gray-600 dark:text-gray-400">
                我们严格遵守保密协议，所有项目信息仅在投资决策相关人员中分享，
                并建立了完善的信息安全管理制度。
              </p>
            </Card>
          </div>
        </section>

      </div>
    </div>
  );
} 