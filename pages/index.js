import Layout from "../components/layouts/Main";
import TechnologiesSection from '../components/MainPage/TechnologiesSection'
import VoiceActingSection from '../components/MainPage/VoiceActingSection'
import DevelopingSection from '../components/MainPage/DevelopingSection'
import ArticlesSection from '../components/MainPage/ArticlesSection'
import ProjectsSection from '../components/MainPage/ProjectsSection'

const Index = () => {
  return (
    <Layout title="Calvin Kipperman" subtitle="Web Developer">
      <DevelopingSection />
      <VoiceActingSection />
      <TechnologiesSection />
      <ArticlesSection />
      <ProjectsSection />
    </Layout>
  );
};

export default Index;
