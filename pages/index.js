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
        <title>DESTA IMAM MUTTAQIN</title>
        <link rel="icon" href="/favicon.ico" />
    <meta name="google-site-verification" content="1GwmVSj-cYNDoFB5piCsBZdmzUlTefvy6Q2XPOhALEw" />
      </Head>
        <NavbarSection/>
        <HeroSection/>
        <OwnerSection/> 
        <FeatureSection/>
         <FooterSection/>

    </div>
  )
}
