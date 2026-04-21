import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";

interface QuizQuestion {
  id: number;
  question: string;
  options: { value: string; label: string; weight: { [key: string]: number } }[];
}

const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "What type of work appeals to you most?",
    options: [
      { value: "building", label: "Building and creating software", weight: { technical: 3, data: 1, specialized: 1 } },
      { value: "analyzing", label: "Analyzing data and finding insights", weight: { data: 3, technical: 1, specialized: 1 } },
      { value: "protecting", label: "Protecting systems and data", weight: { specialized: 3, technical: 2, data: 1 } },
      { value: "exploring", label: "Still exploring tech options", weight: { specialized: 3, technical: 2, data: 2 } },
    ],
  },
  {
    id: 2,
    question: "Which skills do you want to develop?",
    options: [
      { value: "coding", label: "Programming and software development", weight: { technical: 3, data: 2, specialized: 1 } },
      { value: "data-skills", label: "Data analysis and machine learning", weight: { data: 3, technical: 1, specialized: 1 } },
      { value: "security", label: "Security and risk management", weight: { specialized: 3, technical: 2, data: 1 } },
      { value: "sales", label: "Digital sales and business", weight: { specialized: 3, technical: 1, data: 1 } },
    ],
  },
  {
    id: 3,
    question: "What's your background?",
    options: [
      { value: "tech", label: "Some technical/IT experience", weight: { technical: 3, data: 2, specialized: 2 } },
      { value: "analytical", label: "Analytical or business role", weight: { data: 3, specialized: 2, technical: 1 } },
      { value: "non-tech", label: "Non-technical background", weight: { specialized: 3, technical: 2, data: 1 } },
      { value: "stem", label: "STEM education", weight: { data: 3, technical: 3, specialized: 1 } },
    ],
  },
  {
    id: 4,
    question: "What work environment do you prefer?",
    options: [
      { value: "creative", label: "Creative and visual projects", weight: { technical: 3, data: 1, specialized: 2 } },
      { value: "analytical-env", label: "Data-driven decision making", weight: { data: 3, specialized: 2, technical: 1 } },
      { value: "strategic", label: "Strategic and security-focused", weight: { specialized: 3, technical: 2, data: 1 } },
      { value: "variety", label: "Variety and exploration", weight: { specialized: 3, technical: 2, data: 2 } },
    ],
  },
  {
    id: 5,
    question: "What motivates you most?",
    options: [
      { value: "building-things", label: "Building things people use", weight: { technical: 3, data: 1, specialized: 1 } },
      { value: "insights", label: "Discovering insights and patterns", weight: { data: 3, technical: 1, specialized: 1 } },
      { value: "protecting-others", label: "Protecting and securing systems", weight: { specialized: 3, technical: 2, data: 1 } },
      { value: "impact", label: "Business impact and growth", weight: { specialized: 3, data: 2, technical: 1 } },
    ],
  },
];

const trackInfo = {
  technical: {
    name: "Technical Track",
    duration: "6 months",
    description: "Software Engineering, Web Development, or QA Engineering",
    reasons: [
      "You're interested in building and testing software",
      "You enjoy logical problem-solving",
      "You want hands-on technical skills",
    ],
    path: "/tracks",
  },
  data: {
    name: "Data Track",
    duration: "6 months",
    description: "Data Analytics, Data Science, or AI Engineering",
    reasons: [
      "You enjoy working with data and insights",
      "You have analytical thinking abilities",
      "You want to solve problems with data",
    ],
    path: "/tracks",
  },
  specialized: {
    name: "Specialized Track",
    duration: "6 months",
    description: "Cybersecurity, Digital Sales, or Tech Orientation",
    reasons: [
      "You're drawn to security, sales, or exploring options",
      "You want specialized domain expertise",
      "You prefer focused career paths",
    ],
    path: "/tracks",
  },
};

export const TrackSelectorQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [scores, setScores] = useState({ technical: 0, data: 0, specialized: 0 });
  const navigate = useNavigate();

  const handleAnswer = (value: string, weights: { [key: string]: number }) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    const newScores = { ...scores };
    Object.entries(weights).forEach(([track, weight]) => {
      newScores[track as keyof typeof scores] += weight;
    });
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const getRecommendedTrack = () => {
    const maxScore = Math.max(scores.technical, scores.data, scores.specialized);
    if (scores.technical === maxScore) return "technical";
    if (scores.data === maxScore) return "data";
    return "specialized";
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    const recommendedTrack = getRecommendedTrack();
    const track = trackInfo[recommendedTrack];

    return (
      <Card className="p-8 max-w-2xl mx-auto">
        <div className="text-center space-y-6">
          <div className="text-4xl">🎯</div>
          <h2 className="text-3xl font-bold">Your Recommended Track:</h2>
          <div className="bg-accent/10 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-accent mb-2">{track.name}</h3>
            <p className="text-muted-foreground">{track.duration} • {track.description}</p>
          </div>
          
          <div className="text-left space-y-3">
            <p className="font-semibold">Based on your answers, this track is perfect for you because:</p>
            <ul className="space-y-2">
              {track.reasons.map((reason, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button onClick={() => navigate(track.path)} size="lg" className="flex-1">
              View Track Details
            </Button>
            <Button onClick={() => navigate("/apply")} variant="outline" size="lg" className="flex-1">
              Apply Now
            </Button>
          </div>

          <Button variant="ghost" onClick={() => { setShowResults(false); setCurrentQuestion(0); setAnswers([]); setScores({ technical: 0, data: 0, specialized: 0 }); }}>
            Retake Quiz
          </Button>
        </div>
      </Card>
    );
  }

  const question = questions[currentQuestion];

  return (
    <Card className="p-8 max-w-2xl mx-auto">
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} />
        </div>

        <h2 className="text-2xl font-bold">{question.question}</h2>

        <div className="space-y-3">
          {question.options.map((option) => (
            <Button
              key={option.value}
              variant="outline"
              className="w-full h-auto py-4 px-6 text-left justify-start hover:bg-accent/10 hover:border-accent"
              onClick={() => handleAnswer(option.value, option.weight)}
            >
              {option.label}
            </Button>
          ))}
        </div>

        {currentQuestion > 0 && (
          <Button variant="ghost" onClick={handleBack}>
            ← Back
          </Button>
        )}
      </div>
    </Card>
  );
};
