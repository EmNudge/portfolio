import Layout from "../components/layouts/Main";
import TechnologiesSection from '../components/MainPage/TechnologiesSection'
import VoiceActingSection from '../components/MainPage/VoiceActingSection'
import DevelopingSection from '../components/MainPage/DevelopingSection'

const Index = () => {
  return (
    <Layout title="Calvin Kipperman" subtitle="Web Developer">
      <DevelopingSection />
      <VoiceActingSection />
      <TechnologiesSection />
    </Layout>
  );
};

export default Index;
