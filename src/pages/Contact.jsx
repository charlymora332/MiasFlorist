import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SubTitulo from '../components/SubTitulo';
import florera1 from '../assets/contact/florera1.png';
import formContact from '../assets/contact/formContact.png';
import FormContact from '../components/FormContact';
function Contact() {
  return (
    <div className='pt-36 tv:bg-[#DDDDDD] tv:pt-24'>
      <div className='sticky top-0 z-50 h-4 w-full'>
        <Header />
      </div>

      <div className='relative flex h-auto min-h-[calc(100vh-10rem)] w-full flex-row items-center gap-4 px-[10%] py-[4%] tv:flex-col tv:justify-center tv:gap-0 tv:p-0'>
        {/* <div className="absolute left-0 bottom-0 w-[52%] h-[40%] bg-f6dcdc -z-10 rounded-r-[4rem] tv:hidden"></div> */}

        <div className='flex w-1/2 flex-col justify-center tv:min-h-[calc(100vh-6rem)] tv:w-11/12 tv:pb-8 tv:text-lg'>
          <SubTitulo
            despues={'Contact us'}
            estilosCirculos={'!bg-black'}
            estilosLetra={'!text-f7527a mv:!text-4xl'}
            estilosPrinc={'!w-max'}
          />

          <p className='text-131313 mv:text-justify'>
            Mia's Florist is here to craft your story with favorite flowers and
            tailored details for your special occasion in Connecticut. Let us
            lend a hand in creating the perfect touch just for you.
          </p>
          <FormContact />
        </div>
        <div className='flex w-1/2 flex-col justify-center tv:w-full tv:items-center'>
          <img
            src={formContact}
            alt='img decoration'
            className='aspect-square h-auto w-full object-contain tv:w-full tv:rounded-t-3xl tv:bg-f6dcdc'
          />
        </div>
      </div>

      <div className='grid grid-cols-3 gap-10 bg-f6dcdc p-20 text-center text-xl tv:grid-cols-1 tv:gap-28'>
        <div className=''>
          <h3 className='mb-4 text-3xl font-black text-f7527a'>Mia’ Florist</h3>
          <p className='text-lg'>
            <b>Over 10 Years of Expertise, </b> Turning Special Moments into
            Extraordinary Occasions.
          </p>
        </div>

        <div className=''>
          <h3 className='mb-4 text-3xl font-black text-f7527a'>Our Team</h3>
          <p>
            Experienced florists guarantee that each creation will bring beauty
            and joy to your moments, creating floral wonders that tell your
            unique story.
          </p>
        </div>

        <div className='font-bold'>
          <h3 className='mb-4 text-3xl font-black text-f7527a'>Contact us</h3>
          <h5 className='font-semibold text-f7527a'>860 796 9144</h5>
          <a href='mailto:manager@miasflorist.com'>manager@miasflorist.com</a>
          <h5>363 park ave East Hartford ct 06108</h5>
        </div>
      </div>

      <div className='relative flex h-auto w-full flex-row items-center px-[10%] py-20 tv:flex-col tv:justify-center tv:gap-6 tv:p-0'>
        <div className='absolute bottom-0 left-0 -z-10 h-[40%] w-[52%] rounded-r-[4rem] bg-f6dcdc tv:hidden'></div>
        <div className='flex w-1/2 flex-col justify-center tv:w-full tv:items-center'>
          <img
            src={florera1}
            alt='img decoration'
            className='aspect-square h-auto w-[90%] object-contain mv:rounded-none tv:w-full'
          />
        </div>
        <div className='flex w-1/2 flex-col justify-center tv:w-10/12 tv:pb-8 tv:text-lg'>
          <SubTitulo
            despues={'Mia’s Florist '}
            estilosCirculos={'!bg-black'}
            estilosLetra={'!text-f7527a mv:!text-4xl'}
            estilosPrinc={'!w-max'}
          />
          <h5 className='text-xl font-bold'>
            Your Best Choice for Delivery in Connecticut
          </h5>
          <p className='text-131313 mv:text-justify'>
            We are your premier destination for enchanting floral experiences
            and fast flower deliveries in East Hartford, Hartford, Manchester,
            Glastonbury, Bolton, Willimantic, West Hartford, East, Windsor,
            North Windsor and surrounding areas. Our floral expertise seamlessly
            blends art with comfort, as we craft meticulously hand-selected
            arrangements to transform every occasion into a truly memorable one.
            With Mia's Florist, you can expect fast, hassle-free delivery of
            fresh flowers straight to your door.
            <br />
            <br />
            As your florist of choice, Mia's Florist goes above and beyond,
            consistently exceeding expectations by creating exquisite floral
            arrangements that add a touch of magic to your life. Whether you're
            celebrating important moments or conveying heartfelt emotions, our
            enchanting flower-shopping experience is designed to make every
            moment special. Each delivery from Mia's Florist is a carefully
            crafted expression of love and beauty, guaranteed to make your
            Connecticut occasions stand out with the freshest, most impactful
            flowers.
          </p>
        </div>
      </div>

      <div className='w-full'>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
