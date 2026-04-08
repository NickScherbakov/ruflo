import { Guidance } from '@claude-flow/guidance';
import { Security } from '@claude-flow/security';
import { Memory } from '@claude-flow/memory';

export const HunterAgent = {
  name: "Ruflo-Hunter-v1",
  persona: "Senior AI Solutions Architect (Expert-Peer style)",
  guidelines: new Guidance({
    tone: "Professional, Minimalist, High-Density Technical",
    avoid: ["Marketing fluff", "Bot-like greetings", "Generic compliments"],
    prioritize: ["Proof of Value (PoV)", "Latency Benchmarks", "Security Audits"],
  }),
  async diagnose(repoUrl: string) {
    return { hasLatencyGaps: true, issues: [], calculateSavings: () => 450 };
  },
  async proposeValue(repoOwner: string) {
    return "I've implemented a technical fix for your LLM streaming overhead. Join our Managed Instance for $500/mo.";
  }
};