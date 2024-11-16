'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Book, Users, Github, ExternalLink, Sparkles, Zap, Cloud, Database, Globe, CodeSquare } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useEffect, useState } from 'react'

export function NebulaGraphPortal() {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  if (!isBrowser) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-blue-950">
      <nav className="border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/icon.png?height=32&width=32" alt="NebulaGraph Logo" className="w-8 h-8" />
            <span className="text-white font-medium">NebulaGraph</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="https://docs.nebula-graph.com.cn/" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
              <Book className="w-4 h-4" />
              文档
            </a>
            <a href="https://discuss.nebula-graph.com.cn/" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
              <Users className="w-4 h-4" />
              社区
            </a>
            <a href="https://github.com/vesoft-inc/nebula" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
      </nav>

      <main>
        <section className="py-24 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              探索数据关系的魔法
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              在你的 Homelab 中部署新一代的开源、分布式图数据库，释放数据的无限可能
            </motion.p>
          </div>
        </section>

        <section className="py-24 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold text-white mb-6">
                NebulaGraph Studio
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                通过直观的可视化界面管理你的图数据。从数据导入到查询构建，
                从模式设计到数据探索，一站式解决图数据管理需求。
              </p>
              <motion.a
                href={`http://${window.location.hostname}:7001`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                启动 Studio <ChevronRight className="ml-2 h-5 w-5" />
              </motion.a>
            </div>
            <div className="order-1 md:order-2">
              <motion.div
                className="bg-gray-900 rounded-lg p-4 shadow-2xl"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <video
                  className="rounded-lg w-full"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/videos/studio_demo.mp4" type="video/mp4" />
                </video>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 container mx-auto px-4 bg-black/20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                className="bg-gray-900 rounded-lg p-4 shadow-2xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <video
                  className="rounded-lg w-full"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/videos/gephi_demo.mp4" type="video/mp4" />
                </video>
              </motion.div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                NebulaGraph Gephi
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                借助开源社区最受欢迎的 Gephi 可视化工具，
                以强大而灵活的方式展现你的图数据。支持自定义布局、
                交互式探索和高度可定制的视觉样式。
              </p>
              <motion.a
                href={`http://${window.location.hostname}:8501`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                启动 Gephi <ChevronRight className="ml-2 h-5 w-5" />
              </motion.a>
            </div>
          </div>
        </section>

        <section className="py-24 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                即将推出
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                NebulaGraph AI Suite
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                通过简单的 4 行代码实现复杂的图算法和分析。集成 Spark 引擎，
                支持网络分析、图算法等高级功能，让图数据分析变得简单而强大。
              </p>
              <motion.a
                href="https://github.com/wey-gu/nebulagraph-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                了解更多 <ExternalLink className="ml-2 h-5 w-5" />
              </motion.a>
            </div>
            <div className="order-1 md:order-2">
              <motion.div
                className="bg-gray-900 rounded-lg p-8 shadow-2xl relative overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                <div className="relative">
                  <SyntaxHighlighter
                    language="python"
                    style={atomDark}
                    customStyle={{
                      background: 'transparent',
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    {`from ng_ai import NebulaReader

reader = NebulaReader()
reader.scan(...)
df = reader.read()
df.algo.pagerank()`}
                  </SyntaxHighlighter>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 container mx-auto px-4 bg-black/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">
              探索 NebulaGraph 企业版的强大功能与标准
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
                <Zap className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">更专业的图可视化工具</h3>
                <p className="text-gray-300">提供更高级的可视化功能，助您深入洞察复杂的图数据关系。</p>
              </div>
              <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
                <Cloud className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">强大的云原生支持</h3>
                <p className="text-gray-300">无缝集成云环境，提供更灵活的部署和扩展选项。</p>
              </div>
              <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
                <Database className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">原生 Vector Index 支持</h3>
                <p className="text-gray-300">高效处理和检索向量数据，为 AI 和机器学习应用提供支持。</p>
              </div>
              <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
                <Globe className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">多地集群同步</h3>
                <p className="text-gray-300">实现跨地域的数据同步和一致性，满足全球化业务需求。</p>
              </div>
              <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
                <CodeSquare className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">全新 ISO-GQL 标准</h3>
                <p className="text-gray-300">支持更强大的图模式匹配、跨图计算与查询表达，以及原生的 GQL 图上计算能力。</p>
              </div>
            </div>
            <div className="text-center mt-12">
              <motion.a
                href="https://www.nebula-graph.com.cn/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                了解企业版详情 <ChevronRight className="ml-2 h-5 w-5" />
              </motion.a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-auto mb-4 md:mb-0 text-center md:text-left">
              <p className="text-sm text-gray-400">&copy; 2024 NebulaGraph 社区</p>
            </div>
            <div className="flex justify-center md:justify-end w-full md:w-auto">
              <a 
                href="https://nebula-graph.com.cn/" 
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center"
              >
                NebulaGraph 官网 <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}