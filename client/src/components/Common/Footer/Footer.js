import React from 'react'
import AnimatedElement from '../Animation/AnimatedElement'
import Link from "next/link";

export default function Footer() {

  return (
    <div className="relative bottom-0 bg-[#272626]">
      <footer className="text-white body-font">
        <div className="container px-5 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

          {/* G Map  */}
          <AnimatedElement className=' rounded-lg '>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.1175999612465!2d86.43867407446673!3d23.81441687862682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bc9fac678481%3A0x122cb1d133a89995!2sIndian%20Institute%20of%20Technology%20(Indian%20School%20of%20Mines)%2C%20Dhanbad!5e0!3m2!1sen!2sin!4v1727617688198!5m2!1sen!2sin" width="100%" height="400" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </AnimatedElement>


          {/* Footer Links  */}
          {/* Departments */}
          <AnimatedElement className=" flex-grow flex flex-wrap mb-10 text-left order-first">
            
            {/* Downloads */}
            
            {/* Admission Enquiry
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">Admission Enquiry</h2>
              <nav className="list-none mb-10">
                <li>
                  <a target='_blank' href='/DocFiles/Documents for Admission SESE.pdf' className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Documents for Admission</a>
                </li>
                <li>
                  <Link href='/contact' className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Contact Us</Link>
                </li>

              </nav>
            </div> */}

            {/* SESE Online */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">SESE Online</h2>
              <nav className="list-none mb-10">
                <li>
                  <a target='_blank' href='https://www.linkedin.com/in/society-of-environmental-science-and-engineering-iit-ism-dhanbad-b894162bb/' className="text-white hover:text-gray-300 cursor-pointer"> &#8658; LinkedIn</a>
                </li>
                <li>
                  <a target='_blank' href='https://www.instagram.com/' className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Instagram</a>
                </li>
                <li>
                  <a target='_blank' href='https://www.youtube.com/channel/' className="text-white hover:text-gray-300 cursor-pointer"> &#8658; YouTube</a>
                </li>
                <li>
                  <a target='_blank' href='https://iitism.irins.org/profile/97522' className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Professors</a>
                </li>
               

              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">Address</h2>

              <p className="text-white hover:text-gray-300 cursor-pointer">Near Upper Ground </p>
              <p className="text-white hover:text-gray-300 cursor-pointer">IIT ISM Rd,</p>
              <p className="text-white hover:text-gray-300 cursor-pointer">IIT (ISM), Sardar Patel Nagar</p>
              <p className="text-white hover:text-gray-300 cursor-pointer">Kalyanpur, Dhanbad</p>
              <p className="text-white hover:text-gray-300 cursor-pointer">sese@iitism.ac.in</p>
              <h4 className="text-white hover:text-gray-300 cursor-pointer">+91 1234567890</h4>
            </div>

          </AnimatedElement>
        </div>

        <div>
          <div>
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p className="text-gray-300 text-sm text-center sm:text-left">© 2026 SESE —
                <a rel="noopener noreferrer" className="text-gray-300 ml-1" target="_blank">@SESE</a>
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a className="text-gray-300" href='https://m.facebook.com/_' target='_blank'>
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-300">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-300" href='https://www.instagram.com/' target='_blank'>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-300" href='https://www.linkedin.com/in/society-of-environmental-science-and-engineering-iit-ism-dhanbad-b894162bb/' target='_blank'>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
// removed Labs from Footer
 /* <div className="lg:w-2/5 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">Labs</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/academics/departments/ece" className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Electronics & Communication</Link>
                </li>
                <li>
                  <Link href="/academics/departments/cse" className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Computer Science</Link>
                </li>
                <li>
                  <Link href="/academics/departments/csbs" className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Computer Science & Business Systems</Link>
                </li>
                <li>
                  <Link href="/academics/departments/ee" className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Electrical Engineering</Link>
                </li>
                <li>
                  <Link href="/academics/departments/eee" className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Electrical & Electronics</Link>
                </li>
                <li>
                  <Link href="/academics/departments/me" className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Mechanical Engineering</Link>
                </li>
              </nav>
            </div>
*/

 // removed syllabus from the footer 
 /* <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3"> Syllabus</h2>
              <nav className="list-none mb-10">
                <li>
                  <a target='_blank' href='https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ese.pdf' className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Syllabus</a>
                </li>
              
              </nav>
            </div>
*/