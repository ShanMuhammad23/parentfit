import { Activity, Apple, Dumbbell, Heart, FileText } from "lucide-react";

const HowItWorks = () => {
    const steps = [
        {
            number: 1,
            title: "Blood Tests",
            description: "Comprehensive panel conducted by certified professionals at your parent's doorstep.",
            icon: Activity,
            bullets: [
                "No-hassle home visits at a time that suits your parents",
                "Full metabolic panel to assess overall health",
                "Results analyzed by our medical team within 48 hours"
            ],
        },
        {
            number: 2,
            title: "Diet Plan",
            description: "Personalized nutritional guidance based on test results and cultural preferences.",
            icon: Apple,
            bullets: [
                "Customized meal plans considering health conditions and preferences",
                "Regular consultations with certified dietitians",
                "Easy-to-follow recipes and shopping lists provided"
            ],
        },
        {
            number: 3,
            title: "Personal Training",
            description: "In-home session with certified trainers specialized in senior fitness.",
            icon: Dumbbell,
            bullets: [
                "Gentle, age-appropriate exercises tailored to mobility level",
                "Equipment provided or adapted from household items",
                "Focus on balance, strength, and daily functional movements"
            ],
        },
        {
            number: 4,
            title: "Weekly Welfare Check",
            description: "Regular video calls assessing physical and mental wellbeing.",
            icon: Heart,
            bullets: [
                "Friendly check-ins that your parents will look forward to",
                "Mental health assessment and cognitive exercises",
                "Immediate alerts to you if any concerns arise"
            ],
        },
        {
            number: 5,
            title: "Ongoing Reporting to You",
            description: "Secure dashboard updates with insights on progress and recommendations.",
            icon: FileText,
            bullets: [
                "Real-time updates after each session via our mobile app",
                "Monthly comprehensive progress reports",
                "Medical data securely stored and HIPAA-compliant"
            ],
        },
    ];

    return (
        <section className="bg-gray-900 pt-12 lg:pt-16 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        How{" "}
                        <span className="bg-linear-to-r from-teal-400 via-teal-500 to-purple-400 bg-clip-text text-transparent">
                            ParentFit
                        </span>{" "}
                        Works
                    </h2>
                    <p className="text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto font-dm-sans">
                        A comprehensive journey to better health, delivered with care
                    </p>
                </div>

                {/* Steps */}
                <div className="relative">
                    {/* Connecting Line - behind cards, not behind icons */}
                    <div className="hidden lg:block absolute top-28 left-0 right-0 h-0.5 bg-purple-300/40 z-0" />

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-3 relative z-10">
                        {steps.map((step) => {
                            const Icon = step.icon;
                            return (
                                <div key={step.number} className="relative flex flex-col items-center h-full">
                                    {/* Icon Circle - outside card */}
                                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary text-primary flex items-center justify-center mb-4 relative z-20">
                                        <Icon className="w-8 h-8 rounded-full text-primary stroke-2" />
                                    </div>
                                    
                                    {/* Card */}
                                    <div className="relative flex flex-col items-start text-left bg-black rounded-lg p-6 lg:p-5 border border-gray-700/30 hover:border-gray-600/50 transition-all w-full h-full z-10">
                                        {/* Step Number and Title */}
                                        <div className="mb-3 w-full text-center">
                                            <p className="text-xs mb-1 font-medium bg-linear-to-r from-purple-400 via-purple-800 to-purple-300 bg-clip-text text-transparent">Step {step.number}</p>
                                            <h3 className="text-lg font-bold text-white mb-2 font-host-grotesk">
                                                {step.title}
                                            </h3>
                                        </div>

                                        {/* Description */}
                                        <p className="text-base text-gray-400 leading-relaxed mb-4 font-dm-sans">
                                            {step.description}
                                        </p>

                                        {/* Bullet Points */}
                                        <ul className="space-y-2 w-full font-dm-sans">
                                            {step.bullets.map((bullet, index) => (
                                                <li key={index} className="text-sm text-gray-400 flex items-start">
                                                    <span className="text-primary text-base mr-2 mt-1">•</span>
                                                    <span className="leading-relaxed">{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;

