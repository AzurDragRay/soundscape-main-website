import { type NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image'
import type { StaticImageData } from "next/image"
import { api } from "~/utils/api";

import LOGO from '@/images/Soundscape_Logo.svg'
import Adidas_Logo from '@/images/Adidas_Logo.png'
import HERO_BG from '@/images/Desktop_Hero_Image_Edit.jpg'
import IPHONE_1 from '@/images/iPhone14_First.png'
import GROUP_INTRO from '@/images/Group_Intro.jpg'
import FEATURES_1 from '@/images/Features_1.png'
import FEATURES_2 from '@/images/Features_2.png'
import FEATURES_3 from '@/images/Features_3.png'
import ReactPlayer from 'react-player'

const logoSrc: string = (LOGO as string).toString() ;
const adidasSrc: string = Adidas_Logo.toString() ;
const HERO_BG_SRC: string = HERO_BG.toString();
const IPHONE_1_SRC: string = IPHONE_1.toString();
const GROUP_INTRO_SRC: string = GROUP_INTRO.toString();
const FEATURES_1_SRC: string = FEATURES_1.toString();
const FEATURES_2_SRC: string = FEATURES_2.toString();
const FEATURES_3_SRC: string = FEATURES_3.toString();



const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const HeaderLinks = [ 'Home', 'Features', 'About', 'Support', 'People', 'News & Features'];

  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  useEffect(() => {
   setInitialRenderComplete(true);
  }, []);
  

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen w-full flex-col bg-soundscape-white-bg mt-header-gap font-poppins">
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <header className="flex h-header w-full fixed top-0 left-0 z-50 px-16 py-4 items-center justify-between bg-soundscape-blue-bg "> 
          <div className="flex h-full w-auto">
            <Image className="h-full w-auto" src={logoSrc} height={0} width={0} alt=''/>
            <div className="flex flex-col w-auto px-4">
              <h1 className="w-full text-center text-soundscape-white text-2xl">Soundscape</h1>
              <h5 className="w-full text-center text-soundscape-white text-sm">for Everyone</h5>
            </div>
          </div>
          <div className="flex"> 
            { HeaderLinks.map((link, index) => {
              return (
                <Link className="flex h-10 w-auto text-soundscape-white text-center items-center text-base px-4 mx-3 cursor-pointer rounded-header-btn hover:bg-soundscape-dark-blue " href="/" key={index}>
                  {link}
                </Link>
              )
            })}
          </div>
        </header>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <div className='flex flex-col h-main-hero w-full relative justify-between'>
          <Image className="absolute h-full object-right-top object-cover z-10" src={HERO_BG_SRC} height={0} width={0} alt=''/>
          <div className="flex flex-col z-30 w-[66vw] gap-6 mt-32 ml-20">
              <h2 className="w-full text-left text-soundscape-white text-hero-title font-bold">Soundscape for Everyone</h2>
              <p className="font-work-sans font-normal w-full text-left text-soundscape-white text-3xl">Explore, discover, and have fun with<br/> your own 3D sound map of the word!</p>
              <button className="h-auto w-fit bg-soundscape-orange rounded-primary-btn px-16 py-4 text-soundscape-white text-lg font-semibold">Donate</button>
          </div>

          <div className="flex flex-row z-30 w-auto h-auto py-8 ml-20 gap-16">
            <Image className="h-20 w-auto" src={adidasSrc} height={0} width={0} alt=''/>
            <Image className="h-20 w-auto" src={adidasSrc} height={0} width={0} alt=''/>
            <Image className="h-20 w-auto" src={adidasSrc} height={0} width={0} alt=''/>
            <Image className="h-20 w-auto" src={adidasSrc} height={0} width={0} alt=''/>
          </div>

        </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <div className="flex flex-col w-full h-auto bg-soundscape-grey-bg py-28 px-20">
          <h2 className="section-title-blue w-fit bg-transparent py-2 font-bold text-soundscape-blue text-3xl ">What is Soundscape</h2>
          <div className="flex flex-row w-full h-auto px-20">
            <div className="flex flex-row w-1/2 h-auto py-12">
              <Image className="h-phone w-auto" src={IPHONE_1_SRC} height={0} width={0} alt=''/>
              <div className="flex flex-col px-8 py-8 gap-6">
                <h4 className="w-fit bg-transparent py-2 font-semibold text-soundscape-orange text-xl" >Spatial Audio Technology</h4>
                {/** mr-8 seemed to flow better */}
                <p className="mr-24 font-work-sans text-soundscape-blue font-medium">Soundscape uses 3D or spatial audio technology to enable people to build a richer awareness of their surroundings, thus becoming more confident and empowered to get around. </p>
              </div>
            </div>
            <div className="flex flex-row w-1/2 h-auto py-12">
            <Image className="h-phone w-auto" src={IPHONE_1_SRC} height={0} width={0} alt=''/>
              <div className="flex flex-col px-8 py-8 gap-6">
                <h4 className="w-fit bg-transparent py-2 font-semibold text-soundscape-orange text-xl" >Intuitive way to works</h4>
                {/** mr-8 seemed to flow better */}
                <p className="mr-24 font-work-sans text-soundscape-blue font-medium">Hence, Soundscape makes familiar places richer with the information it provides; and it makes unfamiliar places become familiar because of the intuitive way it works. </p>
              </div>
            </div>
          </div>
        </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <div className="flex flex-col w-full h-auto bg-soundscape-white py-28 px-20">
          <div className="flex flex-row w-full h-auto gap-10">
            <div className="w-1/2">
              <Image className="h-section-img w-auto rounded-section-image" src={GROUP_INTRO_SRC} height={0} width={0} alt=''/>
            </div>
            <div className="flex flex-col w-1/2 py-4 gap-6">
              <h2 className="section-title-orange w-fit bg-transparent py-2 font-bold text-soundscape-orange text-3xl ">Intro to Consortium</h2>
              <p className="font-work-sans text-soundscape-blue font-medium  mr-16">Following Microsoft’s decision to close down Soundscape, we are delighted to announce that a group of organizations and people, including the co-founders of Soundscape, have come together to not only make it available to existing users, but eventually make it available for everyone! </p>
              <button className="h-auto w-fit bg-soundscape-blue rounded-primary-btn px-16 py-3 text-soundscape-white text-lg font-semibold">Learn More</button> 
            </div>
          </div>
        </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <div className="flex flex-col w-full h-auto bg-soundscape-blue py-28 px-20">
          <div className="flex flex-row-reverse w-full h-auto gap-10"> {/* Just Have To Reverse here */}
            <div className="w-1/2">
              <div className='player-wrapper'>
                { !initialRenderComplete ? <></> : <ReactPlayer url='https://youtu.be/QR_2eF0YjM0' className='react-player' /> }
              </div>
              {/*<Image className="h-section-img w-auto rounded-section-image" src={GROUP_INTRO as ( HTMLElement & SVGElement )} height={0} width={0} alt=''/>*/}
            </div>
            <div className="flex flex-col w-1/2 py-4 gap-6">
              <h2 className="section-title-white w-fit bg-transparent py-2 font-bold text-soundscape-white text-3xl ">How Soundscape works</h2>
              <p className="font-work-sans text-soundscape-white font-medium mr-16">
                Soundscape provides information about your surroundings with synthesized binaural audio, creating the effect of 3D sound. It runs in the background in conjunction with navigation or other applications to provide you with additional context about the environment.
                <br/><br/>
                Your phone, in hand or in pocket, is used to track movement using location and activity sensors, and let you move toward a self-set audio beacon.
              </p>
            </div>
          </div>
        </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <div className="flex flex-col w-full h-auto bg-soundscape-white py-28 px-20">
          <div className="flex flex-row w-full flex-wrap h-auto">
            <div className="flex flex-col w-1/3 h-auto"> 
              {/* <Image className="" src={} alt="" /> */}
              <Image className="w-10/12" src={FEATURES_1_SRC} alt="" />
              <h4 className="w-fit bg-transparent py-2 font-semibold text-soundscape-orange text-xl" >Getting started with Soundscape</h4>
              <p className="mr-2 font-work-sans text-soundscape-blue font-medium pr-8">After you install Soundscape, connect a stereo headset or earbuds. Follow the introductions and when prompted, allow the app to access your location. Then, explore a familiar route to get used to how Soundscape delivers spatial information.</p>
            </div>
            <div className="flex flex-col w-1/3 h-auto"> 
              {/* <Image className="" src={} alt="" /> */}
              <Image className="w-10/12" src={FEATURES_2_SRC} alt="" />
              <h4 className="w-fit bg-transparent py-2 font-semibold text-soundscape-orange text-xl" >Device compatibility</h4>
              <p className="mr-2 font-work-sans text-soundscape-blue font-medium pr-8">Soundscape is an application designed to operate on iPhone SE, iPhone 6S, and newer models. It is engineered to be compatible with both wired and Bluetooth stereo headsets, providing users with a seamless audio experience.</p>
            </div>
            <div className="flex flex-col w-1/3 h-auto"> 
              {/* <Image className="" src={} alt="" /> */}
              <Image className="w-10/12" src={FEATURES_3_SRC} alt="" />
              <h4 className="w-fit bg-transparent py-2 font-semibold text-soundscape-orange text-xl" >Explore, discover, and have fun!</h4>
              <p className="mr-2 font-work-sans text-soundscape-blue font-medium pr-8">You can use Soundscape in a number of different ways, whether on a well-known route, out about with a friend or using it to discover new places.​</p>
            </div>
          </div>
        </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <div className="flex flex-col w-full h-auto bg-soundscape-blue py-28 px-20">
          <div className="flex flex-row w-full h-auto">
            <div className="flex flex-col w-1/2 h-auto">
              <h3 className="w-fit bg-transparent py-2 font-semibold text-soundscape-white text-2xl ">Stay up to date on <span className="text-soundscape-bright-blue">Soundscape for everyone.</span></h3>
              <p className="font-work-sans text-soundscape-white font-medium">Sign up to get the latest updates and news about Soundscape for Everyone.</p>
            </div>
            <div className="flex gap-8" >
              <div className="flex flex-col gap-2">
                <input type="text" placeholder="Email Address" className="flex px-4 py-3 w-96 text-lg rounded-primary-input bg-soundscape-input-bg border border-stone-300" /> 
                <p className="font-work-sans text-soundscape-white font-small text-sm" >We will only sporadically send you availability updates.</p>
              </div>
              <div>
                <button className="h-auto w-fit bg-soundscape-orange rounded-primary-btn px-10 py-3 text-soundscape-white text-lg font-semibold">Get Updates</button>
              </div>
            </div>
          </div>
        </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <div className="flex flex-col w-full h-auto bg-soundscape-white py-28 px-20">
          <h3 className="w-fit bg-transparent py-2 mb- font-semibold text-soundscape-dark-grey text-2xl">Disclaimer</h3>
          <div className="flex flex-row w-full gap-16">  
            <div className="flex w-1/2 ">
              <p>Microsoft Soundscape is not designed, intended or made available for diagnosis, treatment, or prevention of diseases and for use as a mobility aid or medical device; and is not designed or intended to be a substitute for professional medical advice, diagnosis, treatment, or judgement and should not be used to replace or as a substitute for professional </p>
            </div>
            <div className="flex w-1/2 ">
              <p>medical advice, diagnosis, treatment, or judgement. The mapping data incorporated into the Microsoft Soundscape program is captured from a third-party program, and therefore, there may be limitations with the accuracy of the information presented and the user is responsible for their actions and their own safety and well-being.</p>
            </div>
          </div>

        </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <footer className="flex flex-row justify-between px-16 p-8 bg-soundscape-dark-grey text-soundscape-white">
          <div className="flex flex-row">©{new Date().getFullYear()} Soundscape for Everyone</div>
          <div className="flex"> 
            { HeaderLinks.map((link, index) => {
              return (
                <Link className="flex h-10 w-auto text-soundscape-white text-center items-center text-base px-4 mx-3 cursor-pointer rounded-header-btn hover:bg-soundscape-dark-blue " href="/" key={index}>
                  {link}
                </Link>
              )
            })}
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;
