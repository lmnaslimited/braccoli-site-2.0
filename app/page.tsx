import { ThemeProvider } from "@repo/ui/components/contexts/ThemeContext"
import Header from "@repo/ui/components/Header"
import Hero from "@repo/ui/components/Hero"
import Introduction from "@repo/ui/components/Introduction"
import WhyLMNAs from "@repo/ui/components/WhyLMNAs"
import PainPointStorytelling from "@repo/ui/components/PainPointStorytelling"
import SolutionsOverview from "@repo/ui/components/SolutionsOverview"
import SocialProof from "@repo/ui/components/SocialProof"
import Callout from "@repo/ui/components/Callout"
import CustomerJourney from "@repo/ui/components/CustomerJourney"
import FAQs from "@repo/ui/components/FAQs"
import FinalCTA from "@repo/ui/components/FinalCTA"
import Footer from "@repo/ui/components/Footer"

export default function Home() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header />
        <main>
          <Hero />
          <Introduction />
          <WhyLMNAs />
          <PainPointStorytelling />
          <SolutionsOverview />
          <SocialProof />
          <Callout />
          <CustomerJourney />
          <FAQs />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

