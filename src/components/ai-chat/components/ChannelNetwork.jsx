import { Bot } from "lucide-react";
import { CHANNELS } from "../data/aiChatData";

export default function ChannelNetwork() {
  return (
    <div className="channel-network">

      <div className="channel-network-glow" />

      <div className="network-lines">
        <span className="network-line line-one" />
        <span className="network-line line-two" />
        <span className="network-line line-three" />
      </div>

      <div className="network-center">
        <div>
          <Bot size={25} />
        </div>

        <span>Fexa AI</span>
      </div>

      {CHANNELS.map((channel, index) => (
        <div
          key={channel.name}
          className={`channel-node channel-node-${index + 1}`}
        >
          <div className={channel.className}>
            {channel.symbol}
          </div>

          <span>{channel.name}</span>
        </div>
      ))}

    </div>
  );
}