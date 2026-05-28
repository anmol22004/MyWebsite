import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Films from './pages/Films'

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/films" element={<Films />} />
      </Routes>
    </Layout>
  )
}

