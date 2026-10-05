import "../ai-chat/components/AIChatPage.css";

import AIChatHero from "../ai-chat/sections/AIChatHero";
import AIChatFeatures from "../ai-chat/sections/AIChatFeatures";
import AIConversationSection from "../ai-chat/sections/AIConversationSection";
import AIChannelsSection from "../ai-chat/sections/AIChannelsSection";
import AISocialSection from "../ai-chat/sections/AISocialSection";
import AIFinalCTA from "../ai-chat/sections/AIFinalCTA";
import AIMessengerSection from "../ai-chat/sections/AIMessengerSection";
import AIInstagramSection from "../ai-chat/sections/AIInstagramSection";
import AIWhatsAppSection from "../ai-chat/sections/AIWhatsAppSection";

export default function AIChatPage() {
  return (
    <main className="ai-chat-page">
      <AIChatHero />
      <AIChatFeatures />
      <AIConversationSection />
      <AIChannelsSection />
      {/* <AISocialSection /> */}
      <AIMessengerSection/>
      <AIInstagramSection/>
      <AIWhatsAppSection/>
      <AIFinalCTA />
    </main>
  );
}