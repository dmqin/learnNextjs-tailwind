import Head from 'next/head'
import NavbarSection from '../components/NavbarSection'
import HeroSection from '../components/HeroSection'
import OwnerSection from '../components/OwnerSection'
import FeatureSection from '../components/FeatureSection'
import FooterSection from '../components/FooterSection'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <NavbarSection/>
        <HeroSection/>
        <OwnerSection/> 
        <FeatureSection/>
         <FooterSection/>

    </div>
  )
}
