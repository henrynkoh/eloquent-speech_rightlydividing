export interface Lesson {
  id: number;
  day: number;
  title: string;
  description: string;
  content: {
    overview: string;
    keyPoints: string[];
    biblicalFoundation?: {
      verse: string;
      reference: string;
      explanation: string;
    };
    practice: {
      title: string;
      instructions: string[];
      examples?: string[];
    };
    rightDivision?: {
      concept: string;
      explanation: string;
      verses?: { text: string; reference: string }[];
    };
  };
  duration: string;
}

export const curriculum: Lesson[] = [
  {
    id: 1,
    day: 1,
    title: "Confidence & Presence",
    description: "Eliminate fillers, master posture/eye contact/openings. Build foundational confidence for speaking truth.",
    duration: "15-20 min",
    content: {
      overview: "Build unshakeable confidence by eliminating weak language patterns and mastering physical presence. Learn to speak with authority that comes from knowing you're delivering truth, not just opinions.",
      keyPoints: [
        "Eliminate filler words (um, uh, like) that weaken your message",
        "Master posture: stand tall, shoulders back, feet planted",
        "Maintain steady eye contact - not staring, but connecting",
        "Craft powerful openings that grab attention in the first 10 seconds",
        "Speak from conviction, not from fear of man"
      ],
      biblicalFoundation: {
        verse: "Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth.",
        reference: "2 Timothy 2:15",
        explanation: "When you rightly divide truth, you speak with God's approval. This eliminates the need for human validation and gives you real confidence."
      },
      practice: {
        title: "Record Your Vision & Intro",
        instructions: [
          "Record a 1-minute video of your startup vision or ministry calling",
          "Refine your 30-second founder/intro for networking",
          "Watch it back - note every filler word, weak posture, or apologetic tone",
          "Re-record until you speak with conviction, not permission-seeking",
          "Practice in front of a mirror, maintaining eye contact with yourself"
        ],
        examples: [
          "Instead of: 'Um, I think maybe we could, like, help people...'",
          "Say: 'We help founders speak truth with confidence.'"
        ]
      },
      rightDivision: {
        concept: "Law vs. Grace in Communication",
        explanation: "Law-based speaking seeks approval through performance. Grace-based speaking flows from identity in Christ - you're already approved, so speak freely.",
        verses: [
          { text: "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God", reference: "Ephesians 2:8" },
          { text: "There is therefore now no condemnation to them which are in Christ Jesus", reference: "Romans 8:1" }
        ]
      }
    }
  },
  {
    id: 2,
    day: 2,
    title: "Boundaries, Feedback & Conflict",
    description: "Say 'no' politely, deliver tough feedback, de-escalate difficult people. Handle objections with grace.",
    duration: "15-20 min",
    content: {
      overview: "Learn to set boundaries without losing relationships, deliver feedback that builds up, and handle conflict with wisdom. Essential skills for leading teams and navigating difficult conversations.",
      keyPoints: [
        "Say 'no' with clarity and kindness - boundaries protect, they don't attack",
        "Deliver tough feedback using the 'observation + impact + request' framework",
        "De-escalate conflicts by listening first, responding second",
        "Handle objections by acknowledging, not defending",
        "Turn criticism into productive dialogue"
      ],
      biblicalFoundation: {
        verse: "Let your speech be alway with grace, seasoned with salt, that ye may know how ye ought to answer every man.",
        reference: "Colossians 4:6",
        explanation: "Grace in speech doesn't mean weakness - it means truth delivered with love, like salt that preserves and flavors."
      },
      practice: {
        title: "Role-Play Rejection & Feedback",
        instructions: [
          "Role-play rejecting a bad investor term sheet or partnership offer",
          "Practice delivering feedback to an underperforming team member",
          "Simulate handling a tough objection during a pitch or conversation",
          "Record yourself - are you defensive or gracious?",
          "Practice the pause: count to 3 before responding to criticism"
        ],
        examples: [
          "Bad: 'That's a terrible offer and you're trying to take advantage of us.'",
          "Good: 'I appreciate your interest. The terms don't align with our vision, so we'll pass. Thank you for your time.'"
        ]
      },
      rightDivision: {
        concept: "Spirit-Led vs. Law-Based Responses",
        explanation: "Law responds with rules and judgment. Spirit responds with wisdom and love. When you're led by the Spirit, you know when to speak and when to be silent.",
        verses: [
          { text: "For as many as are led by the Spirit of God, they are the sons of God", reference: "Romans 8:14" },
          { text: "If ye be led of the Spirit, ye are not under the law", reference: "Galatians 5:18" }
        ]
      }
    }
  },
  {
    id: 3,
    day: 3,
    title: "Storytelling & Voice Authority",
    description: "Craft compelling startup stories, control tone/pace/silence, read the room. Use narrative to make truth memorable.",
    duration: "15-20 min",
    content: {
      overview: "Master the art of storytelling to make your message stick. Learn to use your voice as an instrument - controlling pace, tone, and strategic silence to create impact.",
      keyPoints: [
        "Structure stories: problem → struggle → breakthrough → application",
        "Use pauses strategically - silence creates space for truth to land",
        "Vary your pace: slow for emphasis, faster for energy",
        "Control tone: lower for authority, warmer for connection",
        "Read the room: adjust your delivery based on audience response"
      ],
      biblicalFoundation: {
        verse: "And he said unto them, Go ye into all the world, and preach the gospel to every creature.",
        reference: "Mark 16:15",
        explanation: "The gospel itself is a story - the greatest story ever told. Learn to tell it, and your own stories will carry that same power."
      },
      practice: {
        title: "Tell Your Origin Story & Record Pitch Narration",
        instructions: [
          "Tell your startup or ministry origin story in under 2 minutes",
          "Record your pitch deck narration, focusing on tone and pace",
          "Practice using pauses: after key points, count to 2 silently",
          "Tell the same story 3 ways: to a child, to a peer, to an investor",
          "Watch your recording - where did you rush? Where did you linger?"
        ],
        examples: [
          "Use silence: 'The law condemned me... [pause 2 seconds] ...but the cross freed me.'",
          "Vary pace: Speak quickly through setup, slowly through the revelation"
        ]
      },
      rightDivision: {
        concept: "Old Testament Shadows vs. New Testament Reality",
        explanation: "Old Testament stories are shadows pointing to Christ. When you tell stories, show how they point to the cross - the ultimate story of redemption.",
        verses: [
          { text: "For the law having a shadow of good things to come, and not the very image of the things", reference: "Hebrews 10:1" },
          { text: "But now in Christ Jesus ye who sometimes were far off are made nigh by the blood of Christ", reference: "Ephesians 2:13" }
        ]
      }
    }
  },
  {
    id: 4,
    day: 4,
    title: "Pitching & Team Inspiration",
    description: "Structure killer investor pitch, inspire with vision, adapt mid-pitch. Communicate vision that aligns and energizes.",
    duration: "15-20 min",
    content: {
      overview: "Master the art of pitching - whether to investors, team members, or potential partners. Learn to inspire with vision while staying grounded in truth.",
      keyPoints: [
        "Structure: Problem → Market → Solution → Traction → Ask",
        "Lead with the problem, not your solution",
        "Use data to support, but story to persuade",
        "Inspire teams with vision, not just tasks",
        "Adapt mid-presentation based on audience engagement"
      ],
      biblicalFoundation: {
        verse: "Where there is no vision, the people perish: but he that keepeth the law, happy is he.",
        reference: "Proverbs 29:18",
        explanation: "Vision gives direction. But true vision comes from God's word rightly divided - not human ambition, but divine calling."
      },
      practice: {
        title: "Full 5-Minute Pitch & All-Hands Vision Update",
        instructions: [
          "Deliver a full 5-minute investor pitch (problem-solution-traction-ask)",
          "Write and deliver a team all-hands update that inspires",
          "Practice adapting: if they look confused, slow down and clarify",
          "If they're engaged, go deeper on the vision",
          "Record and get feedback: did you inspire action or just inform?"
        ],
        examples: [
          "Weak vision: 'We want to grow 20% this quarter.'",
          "Strong vision: 'We're building a platform that helps founders speak truth with confidence - imagine every startup leader communicating like Paul wrote to the churches.'"
        ]
      },
      rightDivision: {
        concept: "Peter's Kingdom Gospel vs. Paul's Mystery Gospel",
        explanation: "Peter preached the Kingdom coming to earth. Paul preached the mystery of the Body of Christ. Know which message you're delivering - Kingdom hope or Body truth.",
        verses: [
          { text: "Repent, and be baptized every one of you in the name of Jesus Christ", reference: "Acts 2:38 (Peter)" },
          { text: "For by grace are ye saved through faith... it is the gift of God", reference: "Ephesians 2:8 (Paul)" }
        ]
      }
    }
  },
  {
    id: 5,
    day: 5,
    title: "Negotiation, Q&A & Crisis Leadership",
    description: "Negotiate deals, handle Q&A/rapport, communicate in crises; review progress. Master high-stakes communication.",
    duration: "15-20 min",
    content: {
      overview: "Handle the highest-stakes moments: negotiations, tough Q&A sessions, and crisis communication. Learn to stay calm, clear, and truthful under pressure.",
      keyPoints: [
        "Negotiate from position of strength (you're already approved in Christ)",
        "Handle Q&A by listening fully, pausing, then answering concisely",
        "Build rapport quickly: find common ground, show genuine interest",
        "In crises: be transparent, take responsibility, communicate frequently",
        "Review and iterate: record yourself, seek feedback, track improvement"
      ],
      biblicalFoundation: {
        verse: "But sanctify the Lord God in your hearts: and be ready always to give an answer to every man that asketh you a reason of the hope that is in you with meekness and fear.",
        reference: "1 Peter 3:15",
        explanation: "Always be ready - not with memorized answers, but with the hope that's in you. That hope comes from rightly divided truth."
      },
      practice: {
        title: "Negotiation/Q&A Drill & Crisis Message",
        instructions: [
          "Simulate a funding or client negotiation - practice staying calm",
          "Do a post-pitch Q&A drill with tough questions",
          "Draft a crisis communication message (pivot, setback, or difficult news)",
          "Record your final pitch and compare to Day 1 - measure improvement",
          "Create a monthly practice plan: which skills need ongoing work?"
        ],
        examples: [
          "Crisis message structure: Acknowledge → Explain (briefly) → Action plan → Next steps",
          "Q&A technique: Repeat the question, pause, answer in 30 seconds max"
        ]
      },
      rightDivision: {
        concept: "Law's Condemnation vs. Grace's Freedom",
        explanation: "In negotiations and crises, law-based thinking creates fear and defensiveness. Grace-based thinking gives you freedom to be honest, take responsibility, and move forward.",
        verses: [
          { text: "There is therefore now no condemnation to them which are in Christ Jesus", reference: "Romans 8:1" },
          { text: "Stand fast therefore in the liberty wherewith Christ hath made us free, and be not entangled again with the yoke of bondage", reference: "Galatians 5:1" }
        ]
      }
    }
  }
];

export function getLessonById(id: number): Lesson | undefined {
  return curriculum.find(lesson => lesson.id === id);
}

export function getLessonByDay(day: number): Lesson | undefined {
  return curriculum.find(lesson => lesson.day === day);
}

