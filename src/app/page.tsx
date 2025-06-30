'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChartBarIcon, 
  BuildingOfficeIcon, 
  BanknotesIcon, 
  TruckIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  CalendarIcon,
  AcademicCapIcon,
  TrophyIcon,
  ArrowUpIcon,
  ChevronDownIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import { 
  INVESTMENT_AREAS, 
  WORK_EXPERIENCE, 
  EDUCATION, 
  AWARDS, 
  INVESTMENT_CASES,
  BLOG_POSTS 
} from '@/lib/constants';
import Image from 'next/image';

// 统计数据
const STATS = [
      { label: "投资经验", value: "10+", unit: "年" },
  { label: "项目研究", value: "1500+", unit: "个" },
  { label: "交易金额", value: "15+", unit: "亿" },
  { label: "成功案例", value: "20+", unit: "个" }
];

// 动画变体
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // 监听滚动位置
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'insights', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-900 dark:text-white">
              娄敏
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: '首页' },
                { id: 'about', label: '关于' },
                { id: 'portfolio', label: '投资组合' },
                { id: 'insights', label: '行业洞察' },
                { id: 'contact', label: '联系' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                      : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* 首页部分 */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-12">
              {/* 头像 */}
              <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden shadow-lg">
        <Image
                  src="/Photos/WechatIMG697.jpg"
                  alt="娄敏"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 60%' }}
          priority
        />
              </div>
              
              {/* 姓名 */}
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                娄敏
              </h1>
              
                             {/* 个人简介区域 */}
               <div className="max-w-2xl mx-auto">
                 {/* 职位头衔组件 - 居中对齐 */}
                 <motion.div 
                   className="mb-8 flex justify-center"
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.2 }}
                 >
                   <div className="space-y-3 max-w-md">
                     <div className="flex items-center">
                       <span className="text-blue-600 dark:text-blue-400 font-medium w-4 flex-shrink-0 mr-4">•</span>
                       <span className="text-slate-800 dark:text-slate-200 font-medium text-justify">熊猫资本 董事总经理</span>
                     </div>

                     <div className="flex items-center">
                       <span className="text-blue-600 dark:text-blue-400 font-medium w-4 flex-shrink-0 mr-4">•</span>
                       <span className="text-slate-800 dark:text-slate-200 font-medium text-justify">亲家集团 总裁 联合创始人</span>
                     </div>

                     <div className="flex items-center">
                       <span className="text-blue-600 dark:text-blue-400 font-medium w-4 flex-shrink-0 mr-4">•</span>
                       <span className="text-slate-800 dark:text-slate-200 font-medium text-justify">金融投资专家 · 科技创新投资人</span>
                     </div>

                     <div className="flex items-center">
                       <span className="text-blue-600 dark:text-blue-400 font-medium w-4 flex-shrink-0 mr-4">•</span>
                       <span className="text-slate-800 dark:text-slate-200 font-medium text-justify">北京市朝阳区青联常委</span>
                     </div>

                     <div className="flex items-center">
                       <span className="text-blue-600 dark:text-blue-400 font-medium w-4 flex-shrink-0 mr-4">•</span>
                       <span className="text-slate-800 dark:text-slate-200 font-medium text-justify">中国政法大学校外导师</span>
                     </div>
                   </div>
                 </motion.div>

                 {/* 专业经验描述 */}
                 <motion.div 
                   className="text-center bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6"
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.4 }}
                 >
                   <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                     10年科技创新股权投资经验，专注于产业数字化、企业服务、金融科技等领域的早期创新项目投资
                   </p>
                 </motion.div>
               </div>
            </div>

            {/* 统计数据 */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {STATS.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    {stat.label}{stat.unit}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* 投资领域 */}
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {INVESTMENT_AREAS.map((area, index) => {
                const IconComponent = {
                  'chart-bar': ChartBarIcon,
                  'building-office': BuildingOfficeIcon,
                  'banknotes': BanknotesIcon,
                  'truck': TruckIcon
                }[area.icon] || ChartBarIcon;

                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                  >
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                      {area.name}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {area.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            <div className="mt-12">
              <button
                onClick={() => scrollToSection('about')}
                className="animate-bounce"
              >
                <ChevronDownIcon className="w-8 h-8 text-slate-400" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 关于部分 */}
      <section id="about" className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              关于我
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                              拥有10年科技创新股权投资经验和2年创业管理经验，专注于早期创新项目投资
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 工作经历 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
                <BriefcaseIcon className="w-6 h-6 mr-3 text-indigo-600 dark:text-indigo-400" />
                工作经历
              </h3>
              <div className="space-y-6">
                {WORK_EXPERIENCE.map((job, index) => (
                  <div key={index} className={`relative pl-8 pb-8 border-l-2 border-indigo-200 dark:border-indigo-700${index === WORK_EXPERIENCE.length - 1 ? ' last:pb-0' : ''}`}>
                    {/* 时间线圆点 */}
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full shadow-lg z-10"></div>
                    {/* 最后一项用背景色块遮住竖线 */}
                    {index === WORK_EXPERIENCE.length - 1 && (
                      <div className="absolute left-0 top-4 w-0.5 h-full bg-white dark:bg-slate-800 z-20"></div>
                    )}
                    <div className="bg-gradient-to-br from-white to-indigo-50/30 dark:from-slate-800 dark:to-indigo-900/20 p-6 rounded-xl border border-indigo-100 dark:border-indigo-800/50 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                          {job.position}
                        </h4>
                        {job.current && (
                          <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs rounded-full font-medium shadow-sm">
                            在职
                          </span>
                        )}
                      </div>
                      <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-3 text-base">
                        {job.company}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex items-center">
                        <CalendarIcon className="w-4 h-4 mr-2 text-indigo-500" />
                        {job.period}
                      </p>
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 教育背景和奖项 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              {/* 教育背景 */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
                  <AcademicCapIcon className="w-6 h-6 mr-3 text-blue-600" />
                  教育背景
                </h3>
                <div className="space-y-4">
                  {EDUCATION.map((edu, index) => (
                    <div key={index} className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                        {edu.school}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                        {edu.degree}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center">
                        <CalendarIcon className="w-4 h-4 mr-1" />
                        {edu.period}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 奖项荣誉 */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
                  <TrophyIcon className="w-6 h-6 mr-3 text-blue-600" />
                  奖项荣誉
                </h3>
                <div className="space-y-3">
                  {AWARDS.map((award, index) => (
                    <div key={index} className="flex items-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <StarIcon className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">{award}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 投资组合部分 */}
      <section id="portfolio" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              投资组合
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              精选投资案例，涵盖金融科技、企业服务、汽车科技等多个领域
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {INVESTMENT_CASES.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative bg-gradient-to-br from-white to-indigo-50/40 dark:from-slate-800 dark:to-indigo-900/30 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-indigo-100 dark:border-indigo-800/50 group hover:scale-105"
              >
                {/* 状态标签 */}
                <span className={`absolute right-6 top-6 px-3 py-1 text-xs font-bold rounded-full shadow-sm transition-all duration-300
                  ${project.status === '已上市' ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white' :
                    project.status === '持续增长' ? 'bg-gradient-to-r from-blue-400 to-indigo-500 text-white' :
                    project.status === '行业领先' ? 'bg-gradient-to-r from-purple-400 to-pink-500 text-white' :
                    'bg-gradient-to-r from-yellow-400 to-orange-400 text-white'}
                `}>
                  {project.status}
                </span>
                {/* 项目名称 */}
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4 text-center tracking-tight">
                  {project.name}
                </h3>
                {/* 描述 */}
                <p className="text-slate-600 dark:text-slate-300 mb-6 text-base text-center leading-relaxed min-h-[48px]">
                  {project.description}
                </p>
                {/* 行业与阶段标签 */}
                <div className="flex justify-center gap-4 mt-4">
                  <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium">
                    <span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>
                    {project.sector}
                  </span>
                  <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-medium">
                    <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
                    {project.stage}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* 投资理念 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">投资理念</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              &ldquo;深度研究，价值创造，前瞻布局&rdquo; - 专注于具有长期价值的科技创新项目，
              通过深入的行业研究和专业的投资判断，为创业者提供资本和资源支持，
              共同推动科技创新和产业升级。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 行业洞察部分 */}
      <section id="insights" className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              行业洞察
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              分享投资思考和行业观察，探讨科技创新的发展趋势
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {BLOG_POSTS.map((post, index) => (
              <motion.article
                key={index}
                variants={fadeInUp}
                className="bg-slate-50 dark:bg-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 text-sm rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500 dark:text-slate-400 flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      {post.date}
                    </span>
                    <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium">
                      阅读更多 →
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 联系部分 */}
      <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              联系我
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              如果您有优质的创新项目或投资合作意向，欢迎与我联系
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 联系信息 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  联系方式
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <PhoneIcon className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-slate-700 dark:text-slate-300">18910992789</span>
                  </div>
                  <div className="flex items-center">
                    <EnvelopeIcon className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-slate-700 dark:text-slate-300">loumin_pku@163.com</span>
                  </div>
                  <div className="flex items-start">
                    <MapPinIcon className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <span className="text-slate-700 dark:text-slate-300">
                      北京市朝阳区大望京商务中心C座
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  投资偏好
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-slate-700 dark:text-slate-300">产业数字化转型项目</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-slate-700 dark:text-slate-300">B2B企业服务平台</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-slate-700 dark:text-slate-300">金融科技创新应用</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-slate-700 dark:text-slate-300">智能出行和汽车科技</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 联系表单 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  项目合作
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        姓名
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                        placeholder="请输入您的姓名"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        公司
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                        placeholder="请输入公司名称"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      邮箱
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                      placeholder="请输入邮箱地址"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      项目描述
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                      placeholder="请简要描述您的项目..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
        >
                    发送消息
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">娄敏</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              专注于科技创新投资，致力于发现和培育具有长期价值的优秀企业
            </p>
          </div>
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-400">
              @面向未来 娄敏 保留所有权利
            </p>
          </div>
        </div>
      </footer>

      {/* 回到顶部按钮 */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors z-50"
          >
            <ArrowUpIcon className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
