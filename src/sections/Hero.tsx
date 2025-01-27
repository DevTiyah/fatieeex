import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import memoji from '@/assets/images/memoji.png'
import grainImage from '@/assets/images/grain.jpg'
import './style.css'
// import StarIcon from '@/assets/icons/star.svg'
// import HeroOrbit from '@/components/HeroOrbit';
import HeroImage1 from '@/assets/images/HeroImage1.jpeg'
import HeroImage2 from '@/assets/images/HeroImage2.png'
import HeroImage3 from '@/assets/images/HeroImage3.png'
import HeroImage4 from '@/assets/images/HeroImage4.png'



export const HeroSection = () => {
  return (
    <div className='py-40 md:py-50 lg:py-30 relative z-0 overflow-x-clip'>
    <div className="magicpattern absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_80%,transparent)]">
      <div className='absolute inset-0 -z-30 opacity-10' style={{
        backgroundImage: `url(${grainImage.src})`,
        // backgroundAttachment: 'fixed',
        // backgroundRepeat: 'repeat-y',
        }}>;
      </div>
      <div className='absolute h-32 w-[200px] md:w-[300px] lg:w-[400px] top-20 -left-28 md:-left-32 lg:-left-32 transform opacity-60 -rotate-6 shadow-lg'>
        <Image
          src={HeroImage1}
          alt='img'
          className="border-none lg:h-[250px] h-[250px] w-[200px] md:w-[300px] lg:w-[400px] rounded-lg object-cover"
        />
      </div>
      <div className='absolute h-32 w-[200px] md:w-[300px] lg:w-[400px] top-96 -left-28 md:-left-32 lg:-left-32 transform opacity-80 rotate-12 md:rotate-6 lg:rotate-12  shadow-lg'>
        <Image
          src={HeroImage2}
          alt='img'
          className="border-none lg:h-[250px] h-[250px] w-[200px] md:w-[300px] lg:w-[400px] rounded-lg object-cover"
        />
      </div>
      <div className='absolute top-20 -right-28 md:-right-32 md:h-32 w-[200px] md:w-[300px] lg:w-[400px] transform opacity-80 rotate-12 md:rotate-6 lg:rotate-6  shadow-lg'>
        <Image
          src={HeroImage3}
          alt='img'
          className="border-none h-[250px] w-[400px] rounded-lg object-cover"
        />
      </div>
      <div className='absolute top-96 -right-80 md:-right-32 md:h-32 w-[400px] md:w-[300px] lg:w-[400px] transform opacity-60 -rotate-12 md:-rotate-6 lg:-rotate-6 shadow-lg'>
        <Image
          src={HeroImage4}
          alt='img'
          className="border-none h-[250px] w-[400px] rounded-lg object-cover"
        />
      </div>
      {/* <div className='size-[620px] hero-ring'></div>
      <div className='size-[820px] hero-ring'></div>
      <div className='size-[1020px] hero-ring'></div>
      <div className='size-[1220px] hero-ring'></div>
       <HeroOrbit size={430} rotation={-28} shouldOrbit orbitDuration='30s' shouldSpin spinDuration='3s'>
        <SparkleIcon className='size-8 text-emerald-300/20'/>
       </HeroOrbit>
       <HeroOrbit size={440} rotation={90} shouldOrbit orbitDuration='32s' shouldSpin spinDuration='3s'>
        <SparkleIcon className='size-5 text-emerald-300/20'/>
       </HeroOrbit>
       <HeroOrbit size={520} rotation={-50} shouldOrbit orbitDuration='34s'>
        <div className='size-2 bg-emerald-300/20 rounded-full'/>
       </HeroOrbit>
       <HeroOrbit size={530} rotation={160} shouldOrbit orbitDuration='36s' shouldSpin spinDuration='3s'>
        <SparkleIcon className='size-10 text-emerald-300/20'/>
       </HeroOrbit>
       <HeroOrbit size={550} rotation={0} shouldOrbit orbitDuration='38s' shouldSpin spinDuration='6s'>
        <StarIcon className='size-12 text-emerald-300'/>
       </HeroOrbit>
       <HeroOrbit size={590} rotation={110} shouldOrbit orbitDuration='40s' shouldSpin spinDuration='6s'>
        <StarIcon className='size-8 text-emerald-300'/>
       </HeroOrbit>
       <HeroOrbit size={650} rotation={-25} shouldOrbit orbitDuration='42s'>
        <div className='size-2 bg-emerald-300/20 rounded-full'/>
       </HeroOrbit>
       <HeroOrbit size={710} rotation={135} shouldOrbit orbitDuration='44s' shouldSpin spinDuration='3s'>
        <SparkleIcon className='size-14 text-emerald-300/20'/>
       </HeroOrbit>
       <HeroOrbit size={720} rotation={98} shouldOrbit orbitDuration='46s'>
        <div className='size-3 bg-emerald-300/20 rounded-full'/>
       </HeroOrbit>
       <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration='48s' shouldSpin spinDuration='6s'>
        <StarIcon className='size-28 text-emerald-300'/>
       </HeroOrbit> */}
    </div>
    <div className="container z-50">
      <div className='flex flex-col items-center'>
        <Image 
          className="size-[120px] z-10" 
          src={memoji} alt="tiyahdev"
        />
        <div className='bg-black border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
          <div className='bg-emerald-500 size-2.5 rounded-full relative'>
            <div className="bg-emerald-500 absolute inset-0 animate-ping-large rounded-full"></div>
          </div>
          <div className='text-sm font-medium'>Available for work</div>
        </div>
      </div>
      <div className='max-w-lg mx-auto'>
        <h1 className='z-10 font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>Building Top Tier Websites</h1>
        <p className='mt-4 text-center text-white/80 md:text-lg z-20'>
          I specialize in transforming designs into 
          functional, high performing web applications 
          that generates more leads.
        </p>
      </div>
        <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
          <button className='z-10 inline-flex items-center gap-2 border border-white-15 px-6 h-12 rounded-xl'>
            <span className='font-semibold text-sm' > Explore my work </span>
            <ArrowDown className="size-4"/>
          </button>
          <button className='z-10 inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
            <span>👋</span>
            <span className='font-semibold text-sm'>Let us connect</span>
          </button>
        </div>   
      </div>  
  </div>
  );
};
