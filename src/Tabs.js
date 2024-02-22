import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {FaRandom, FaMountain, FaRunning} from "react-icons/fa";
//border-bottom : none;

import "../src/styles/Tabs.css"
import Tab1 from './components/Tab1'
import Tab2 from "./components/Tab2"
import Tab3 from "./components/Tab3"
import Tab4 from "./components/Tab4"

const TabsComp = ({ toggle, setToggle }) => {




  return (
    <>

      <Tabs>
        <TabList className="placeTabs-hold">
          <Tab className='tabImg md:pr-1 pr-0'>
            <div className='w-8'>
              <FaRandom className='md:w-8 w-6' />
              {/*<img className='md:w-8 w-6' src='https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg' alt='hey' />*/}
            </div>

          </Tab>

          <Tab className='tabImg md:pr-1 pr-0'>
            <div className='w-8'>
              {/*<img className='md:w-8 w-6' src='https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg' alt='hey' />*/}
              <FaMountain className='md:w-8 w-6' />
            </div>

          </Tab>

          <Tab className='tabImg md:pr-1 pr-0'>
            <div className='w-8'>
              {/*<img className='md:w-8 w-6' src='https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg' alt='hey' />*/}
              <FaRunning className='md:w-8 w-6' />
            </div>

          </Tab>

          <Tab className='tabImg md:pr-1 pr-0'>
            <div className='w-8'>
              <img className='md:w-8 w-6' src='https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg' alt='hey' />
            </div>

          </Tab>

        </TabList>



        <TabPanels>
          <TabPanel className="tab-content"> <Tab1 pushDown={toggle} />  </TabPanel>
          <TabPanel className="tab-content"> <Tab2 pushDown={toggle} />  </TabPanel>
          <TabPanel className="tab-content"> <Tab3 pushDown={toggle} />  </TabPanel>
          <TabPanel className="tab-content"> <Tab4 pushDown={toggle} />  </TabPanel>
        </TabPanels>

      </Tabs >

    </>
  )
}

export default TabsComp
//         <TabList className={toggle === true? "tabs-hold-pushDown" : "tabs-hold"}>

