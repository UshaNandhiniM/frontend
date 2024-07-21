import { Accordion } from 'flowbite-react';
import React from 'react';
import Navbar from '../Components/Navbar';

const Faqs = () => {
    return (
      <div>
        <Navbar/>
        <br/>
        <h1  className=" text-center border-l-black"  id="faq">Frequently Asked Questions</h1>
      <br/>
      <br/>
      
      <div className='container-lg'>
      <Accordion>
      <Accordion.Panel>
        <Accordion.Title>What is CarCare?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          CarCare is a network of technology-enabled car service centres, offering a seamless service experience at the convenience of a tap. With our highly skilled technicians, manufacturer recommended procedures and the promise of genuine spare parts, we are your best bet.                          

          </p>
          
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Why should I choose CarCare?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
              CarCare offers the best car services and solutions at fair and flexible prices. You end up saving up to 40% compared to what 
              is charged at Authorised Service Centres and Multi-brand workshops
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>How can you offer upto 40% savings on services?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Our distinctive business model enables us to provide affordable car services. We achieve savings on labour costs, centralized bulk procurement of spare parts, no real-estate overheads, and adept operational excellence, which are passed on straight to You-
                the Customer
          </p>
        </Accordion.Content>
      </Accordion.Panel>
            <Accordion.Panel>
            <Accordion.Title>Where can I book a car service with CarCare?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
              You can book a CarCare car service directly from our website or by downloading the exclusive Android App.
                Want a more human experience? call or WhatsApp on 8398 970 970.
                CarCare car services are also available on Paytm Mall
              </p>
            </Accordion.Content>
          </Accordion.Panel>
                <Accordion.Panel>
                <Accordion.Title>What if I am not available to drop my car?</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Worry not! We’ll take care of everything. We offer free pick-up and drop-in.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
    </Accordion>
    </div>
    </div>
    );
};

export default Faqs;