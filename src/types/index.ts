// 基础类型定义

export interface BaseEntity {
  id: string | number;
  createdAt: string;
  updatedAt: string;
}

// 项目相关类型
export interface Project extends BaseEntity {
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  category: string;
  date: string;
  status: '已完成' | '进行中' | '计划中';
  features: string[];
  demoUrl?: string;
  githubUrl?: string;
  highlights?: string[];
}

// 博客文章类型
export interface BlogPost extends BaseEntity {
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  author: string;
  views: number;
  featured: boolean;
  image: string;
  published: boolean;
}

// 联系表单类型
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// API响应类型
export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

// 技能类型
export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

// 工作经历类型
export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

// 社交媒体链接类型
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  description: string;
}

// 导航项类型
export interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

// 统计信息类型
export interface Stats {
  label: string;
  value: string;
}

// 主题类型
export type Theme = 'light' | 'dark' | 'system';

// 页面元数据类型
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  openGraph?: {
    title: string;
    description: string;
    image?: string;
  };
}

// 分页类型
export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

// 筛选器类型
export interface Filter {
  category?: string;
  tag?: string;
  status?: string;
  search?: string;
}

// 排序类型
export type SortOrder = 'asc' | 'desc';
export type SortField = 'date' | 'title' | 'views' | 'createdAt';

export interface Sort {
  field: SortField;
  order: SortOrder;
} 