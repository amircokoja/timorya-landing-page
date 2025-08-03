export interface FAQItemType {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FAQItemType[] = [
  {
    id: "1",
    question: "Is the app really free to use?",
    answer:
      "Yes — 100% free. We're in an early-access phase, so all features are unlocked for our first users. No credit card required, no usage limits. In the future, we may introduce premium plans, but you'll always keep access to what you're using now.",
  },
  {
    id: "2",
    question: "Can I track time manually or just with a timer?",
    answer:
      "Both! You can log time manually, edit existing logs, or use a real-time tracker — whichever fits your workflow. Our calendar view makes it easy to stay in control of your schedule.",
  },
  {
    id: "3",
    question: "Who is this app for?",
    answer:
      "Freelancers, consultants, and solo professionals who want a simple but powerful way to track work and stay accountable. We're also building with future support for teams and organizations in mind.",
  },
  {
    id: "4",
    question: "Can I use the app on mobile or desktop?",
    answer:
      "Yes! The app is fully responsive and works smoothly on both desktop and mobile browsers. Whether you're at your desk or on the go, you can log your time and review your work with ease.",
  },
];
