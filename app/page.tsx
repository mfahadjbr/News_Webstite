import Article from "@/components/Article";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero-section";
import LatestPosts from "@/components/Latest-posts";
import NewsGrid from "@/components/News-grids";
import News1 from "@/components/News1";
import AroundWorld from "@/components/Around-world";
import Newsletter from "@/components/Newsletter";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <NewsGrid />
        <News1 />
        <LatestPosts />
        <Article />
        <AroundWorld />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

