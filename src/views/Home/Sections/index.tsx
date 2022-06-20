import { FC } from 'react';

// sections
import HeroSection from "./HeroSection";
import AboutMeSection from "./AboutMeSection";
import GetInTouchSection from "./GetInTouchSection";
import RecentProjectsSection from "./RecentProjectsSection";


const Sections: FC = () => (
  <main className="main">
    <HeroSection />
    <AboutMeSection />
    <RecentProjectsSection />
    <GetInTouchSection />
  </main>
);

export {
  Sections as default
};