import Article from "./components/Article/Article.tsx"
import Feedback from "./components/Feedback/Feedback.tsx"
import Footer from "./components/Footer/Footer.tsx"
import Header from "./components/Header/Header.tsx"
import Download from "./components/LearnAndDownload/Download/Download.tsx"
import Learn from "./components/LearnAndDownload/Learn/Learn.tsx"
import Services from "./components/Services/Services.tsx"

 function App() {
  return (
    <>
      <Header />
      <Services />
      <Learn />
      <Download />
      <Feedback />
      <Article />
      <Footer />
    </>    
  )
}

export default App
