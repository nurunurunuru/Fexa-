import "../ai-chat/components/AIChatPage.css";

import AIChatHero from "../ai-chat/sections/AIChatHero";
import AIChatFeatures from "../ai-chat/sections/AIChatFeatures";
import AIConversationSection from "../ai-chat/sections/AIConversationSection";
import AIChannelsSection from "../ai-chat/sections/AIChannelsSection";
import AISocialSection from "../ai-chat/sections/AISocialSection";
import AIFinalCTA from "../ai-chat/sections/AIFinalCTA";

export default function AIChatPage() {
  return (
    <main className="ai-chat-page">
      <AIChatHero />
      <AIChatFeatures />
      <AIConversationSection />
      <AIChannelsSection />
      <AISocialSection />
      <AIFinalCTA />
    </main>
  );
}