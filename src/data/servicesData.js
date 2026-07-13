export const servicesData = [
  {
    id: "swedish-massage",
    name: "Swedish Massage",
    shortDescription: "A classic, gentle full-body massage designed to promote overall relaxation, improve circulation, and soothe sore muscles.",
    longDescription: "Our Swedish Massage is the quintessential wellness therapy. Using a combination of long, gliding strokes (effleurage), kneading (petrissage), and gentle friction, our certified therapists work to release tension in the superficial muscle layers. This treatment is ideal for first-time spa-goers or anyone seeking to reduce stress and achieve a deep state of calm.",
    pricing: [
      { duration: 30, price: 55 },
      { duration: 60, price: 85 },
      { duration: 90, price: 120 }
    ],
    benefits: [
      "Promotes deep physical and mental relaxation",
      "Enhances blood circulation and oxygen flow",
      "Reduces muscle tension and stiffness",
      "Lowers stress hormones (cortisol) in the body",
      "Improves sleep quality and general well-being"
    ],
    expectations: [
      "Light to medium pressure tailored to your preference",
      "Use of organic, unscented nourishing massage oils",
      "A quiet, dimly lit room with soothing ambient sounds",
      "Draping with soft, warm linens for your absolute privacy"
    ],
    gradient: "from-[#F3EFE9] to-[#E8D7D0]",
    icon: "Flower2",
    reviews: [
      { author: "Emma S.", rating: 5, date: "July 10, 2026", text: "The Swedish massage was exactly what I needed after a stressful work week. The therapist was incredibly gentle and the atmosphere was so peaceful." },
      { author: "Michael B.", rating: 4, date: "June 28, 2026", text: "Very relaxing session. The pressure was perfect. The parlour itself is very clean and smells amazing." },
      { author: "Sophia L.", rating: 5, date: "June 15, 2026", text: "Absolutely loved it. I drifted off to sleep halfway through. It is truly done with love and care!" },
      { author: "David K.", rating: 5, date: "May 29, 2026", text: "Professional staff, clean rooms, and a wonderful massage. I will definitely be a regular client." },
      { author: "Olivia P.", rating: 4, date: "May 12, 2026", text: "Great experience. It helped ease the tension in my shoulders. Strongly recommend it." }
    ]
  },
  {
    id: "deep-tissue-massage",
    name: "Deep Tissue Massage",
    shortDescription: "A therapeutic massage targeting deeper muscle layers and connective tissues to relieve chronic pain and muscle stiffness.",
    longDescription: "Designed for those experiencing chronic tension or recovering from intense physical activity, our Deep Tissue Massage focuses on the deeper layers of muscle tissue. Using slow, deliberate strokes and deep finger pressure, the therapist targets specific problem areas to break down adhesions (muscle knots) and restore natural range of motion.",
    pricing: [
      { duration: 30, price: 65 },
      { duration: 60, price: 95 },
      { duration: 90, price: 135 }
    ],
    benefits: [
      "Releases chronic muscle tension and stubborn knots",
      "Reduces inflammation and alleviates pain",
      "Aids in recovery from sports injuries",
      "Improves posture and joint flexibility",
      "Lowers blood pressure and heart rate"
    ],
    expectations: [
      "Firm, deep pressure utilizing forearms, elbows, and knuckles",
      "Active communication to ensure your comfort level",
      "Focus on specific areas of tightness (e.g., lower back, neck, shoulders)",
      "Mild soreness for 24-48 hours post-massage, followed by deep relief"
    ],
    gradient: "from-[#E8E2D8] to-[#4E6E5D]/20",
    icon: "Sparkles",
    reviews: [
      { author: "Rachel G.", rating: 5, date: "July 08, 2026", text: "Excellent therapeutic work. She found knots in my shoulder blade I didn't even know were there. Highly effective." },
      { author: "John D.", rating: 5, date: "July 02, 2026", text: "Best deep tissue massage I have received in years. The therapist was knowledgeable and had excellent technique." },
      { author: "Linda W.", rating: 4, date: "June 20, 2026", text: "Intense but very necessary! I walked out feeling two inches taller. Perfect for anyone with chronic back pain." },
      { author: "Thomas H.", rating: 5, date: "June 05, 2026", text: "Very professional. The pressure was intense but always within my comfort zone. Great communication." },
      { author: "Grace M.", rating: 4, date: "May 22, 2026", text: "Helped immensely with my lower back stiffness. Cozy environment and highly skilled therapist." }
    ]
  },
  {
    id: "hot-stone-massage",
    name: "Hot Stone Massage",
    shortDescription: "A luxurious warming therapy using heated basalt stones to deeply relax muscles and balance energy flow.",
    longDescription: "Experience the ultimate in comforting warmth. During this treatment, smooth, heated volcanic basalt stones are placed on key energy centers of your body and used as extensions of the therapist's hands. The deep, penetrating heat relaxes muscles, allowing for deeper access without heavy pressure, resulting in an exceptionally soothing and grounding experience.",
    pricing: [
      { duration: 60, price: 105 },
      { duration: 90, price: 145 }
    ],
    benefits: [
      "Melts away muscle tension through deep thermal penetration",
      "Significantly reduces stress, anxiety, and mental fatigue",
      "Boosts lymphatic flow and cellular metabolism",
      "Improves quality of sleep and relaxation",
      "Provides a comforting sense of safety and grounding"
    ],
    expectations: [
      "Warm stones coated in luxurious oil glided smoothly over muscles",
      "Comfortable, therapeutic heat levels checked frequently",
      "Stones placed strategically along your back, palms, or toes",
      "A deeply relaxing, sensory-rich experience"
    ],
    gradient: "from-[#F3EFE9] to-[#DFBA5B]/30",
    icon: "Flame",
    reviews: [
      { author: "Jessica T.", rating: 5, date: "July 12, 2026", text: "Pure bliss! The heat from the stones penetrated deep into my muscles. Perfect for a cold rainy day." },
      { author: "Noreen K.", rating: 5, date: "July 01, 2026", text: "The hot stone treatment at Saib's is magical. Extremely calming and luxurious. Worth every penny." },
      { author: "Arthur C.", rating: 5, date: "June 18, 2026", text: "Incredibly relaxing. The heat is so soothing. The therapist was masterfully skilled in placing and moving the stones." },
      { author: "Sarah P.", rating: 4, date: "May 30, 2026", text: "Wonderful service. I felt pampered from the moment I walked in. The stones felt amazing." },
      { author: "Megan F.", rating: 5, date: "May 10, 2026", text: "An absolute dream. Best relaxation experience ever. Highly recommend if you want to completely switch off." }
    ]
  },
  {
    id: "aromatherapy-massage",
    name: "Aromatherapy Massage",
    shortDescription: "A sensory journey combining gentle massage with customized, therapeutic-grade organic essential oils.",
    longDescription: "Our Aromatherapy Massage combines the healing power of touch with the therapeutic properties of organic essential oils. Before your treatment begins, you will select from our curated botanical blends—whether you seek uplifting citrus, calming lavender, or grounding eucalyptus. The therapist uses gentle, rhythmic strokes to help your skin absorb the oils while you inhale their healing aromas.",
    pricing: [
      { duration: 30, price: 60 },
      { duration: 60, price: 90 },
      { duration: 90, price: 125 }
    ],
    benefits: [
      "Calms the nervous system and uplifts emotional state",
      "Nourishes the skin with high-quality organic carrier oils",
      "Eases muscle tightness while soothing sensory overload",
      "Enhances mental clarity and reduces anxiety",
      "Supports immune function through botanical extracts"
    ],
    expectations: [
      "A personalized aroma inhalation consultation prior to the massage",
      "Gentle to medium fluid strokes tailored to ease tension",
      "A wonderfully fragrant environment that aids mental relaxation",
      "Oils left on the skin post-treatment to continue absorption"
    ],
    gradient: "from-[#FAF8F5] to-[#4E6E5D]/15",
    icon: "Wind",
    reviews: [
      { author: "Chloe R.", rating: 5, date: "July 09, 2026", text: "The lavender and sage blend was divine. I felt my anxiety melt away instantly. A beautiful experience." },
      { author: "Lucas A.", rating: 5, date: "June 25, 2026", text: "Highly customizable and highly relaxing. Choosing my own scent made it feel very personal. 10/10." },
      { author: "Clara E.", rating: 4, date: "June 11, 2026", text: "So peaceful. The smell of the oils lasted all day. The massage itself was very soft and comforting." },
      { author: "Isabella V.", rating: 5, date: "May 27, 2026", text: "A truly sensory escape. It is clear that everything here is done with love and care." },
      { author: "Julian S.", rating: 4, date: "May 14, 2026", text: "Very good. Helpful for clearing the mind. The massage therapist was fantastic." }
    ]
  },
  {
    id: "thai-massage",
    name: "Thai Massage",
    shortDescription: "An energizing, interactive session incorporating yoga-like stretching, acupressure, and joint mobilization.",
    longDescription: "Known as 'lazy man's yoga,' Thai Massage is performed on a comfortable floor mat with the client fully clothed. Your therapist uses their hands, elbows, knees, and feet to guide you through a series of yoga-like stretches while applying rhythmic pressure along the body's major energy lines (Sen lines). This treatment improves flexibility, relieves tension, and balances energy.",
    pricing: [
      { duration: 60, price: 90 },
      { duration: 90, price: 130 }
    ],
    benefits: [
      "Significantly increases range of motion and flexibility",
      "Relieves joint pain, stiffness, and chronic muscle aches",
      "Boosts energy levels and mental alertness",
      "Stimulates lymphatic circulation and detoxification",
      "Reduces physical stress and enhances athletic performance"
    ],
    expectations: [
      "Performed fully clothed in loose, comfortable attire (provided by us)",
      "Traditional mat on the floor rather than a standard massage table",
      "No oils or lotions applied during this treatment",
      "Dynamic stretches and deep, rhythmic compressions"
    ],
    gradient: "from-[#F3EFE9] to-[#DFD0C6]",
    icon: "Compass",
    reviews: [
      { author: "Elena M.", rating: 5, date: "July 07, 2026", text: "Unbelievable stretch! I feel so light and energized. It's like yoga but someone else does all the work for you." },
      { author: "David T.", rating: 4, date: "June 22, 2026", text: "Excellent joint mobilization. It really helped open up my hips. The therapist was highly trained and professional." },
      { author: "Karen L.", rating: 5, date: "June 09, 2026", text: "My body feels completely reset. It's intense stretching but it leaves you feeling absolutely amazing." },
      { author: "Victor O.", rating: 5, date: "May 24, 2026", text: "Outstanding technique. Clean room, friendly receptionist, and an energizing massage." },
      { author: "Amber P.", rating: 4, date: "May 06, 2026", text: "Perfect if you are stiff from sitting at a desk all day. Great active stretches!" }
    ]
  },
  {
    id: "full-body-relaxation-massage",
    name: "Full Body Relaxation Massage",
    shortDescription: "A gentle, therapeutic treatment focused entirely on melting away stress and calming your mind.",
    longDescription: "Our signature Full Body Relaxation Massage is tailored for individuals seeking a sanctuary from everyday life. Focusing on light, rhythmic strokes and smooth flowing movements, this massage induces a deep state of peace. We utilize organic, soothing botanical oils and hot towels to cocoon you in comfort, nurturing both your body and spirit.",
    pricing: [
      { duration: 60, price: 80 },
      { duration: 90, price: 115 },
      { duration: 120, price: 155 }
    ],
    benefits: [
      "Calms hyperactive nervous systems and reduces stress",
      "Improves skin tone and moisture through organic oils",
      "Eases minor muscular tension without any discomfort",
      "Gives a complete mental reset and emotional comfort",
      "Reduces tension headaches and physical fatigue"
    ],
    expectations: [
      "Soft, warm lighting and customized organic massage oil",
      "Gentle, fluid pressure designed to relax, not to fix deep knots",
      "Hot steamed towels applied to the back and feet at the end",
      "An unhurried, luxury pampering experience"
    ],
    gradient: "from-[#E8D7D0] to-[#FAF8F5]",
    icon: "Heart",
    reviews: [
      { author: "Lily F.", rating: 5, date: "July 11, 2026", text: "The name says it all. Total relaxation. The hot towels at the end were a beautiful touch." },
      { author: "Brian N.", rating: 5, date: "July 03, 2026", text: "Highly professional service. A calm, safe, and beautiful environment. Done with true love and care." },
      { author: "Amelia V.", rating: 5, date: "June 19, 2026", text: "I fell asleep multiple times! The sheets are incredibly soft and the room temperature was perfect." },
      { author: "Nora S.", rating: 4, date: "June 04, 2026", text: "So calming. Excellent therapists who really understand how to create a restful experience." },
      { author: "Leo D.", rating: 5, date: "May 18, 2026", text: "The best escape from the daily grind. Clean, peaceful, and wonderfully soothing." }
    ]
  },
  {
    id: "prenatal-massage",
    name: "Prenatal Massage",
    shortDescription: "A nurturing and safe massage designed specifically for expectant mothers in their second or third trimester.",
    longDescription: "Specifically tailored to the unique needs of pregnancy, our Prenatal Massage relieves the physical discomforts associated with carrying a child. Utilizing safe positioning with specialized supportive cushions and organic, scent-free oils, our trained therapists gently address backaches, leg cramps, swollen ankles, and fatigue, providing a tranquil space for mother and baby.",
    pricing: [
      { duration: 60, price: 95 },
      { duration: 90, price: 130 }
    ],
    benefits: [
      "Relieves backaches, neck strain, and hip joint pain",
      "Reduces swelling in hands, legs, and ankles (edema)",
      "Improves sleep and reduces gestational anxiety",
      "Enhances blood circulation to both mother and baby",
      "Promotes hormone balance and reduces physical stress"
    ],
    expectations: [
      "Comfortable side-lying positioning with luxurious support pillows",
      "Gentle, specialized strokes that avoid sensitive pressure points",
      "Scent-free organic oils to prevent nausea or skin irritation",
      "Available only for mothers past their first trimester (12+ weeks)"
    ],
    gradient: "from-[#FAF8F5] to-[#E8D7D0]/50",
    icon: "Baby",
    reviews: [
      { author: "Samantha K.", rating: 5, date: "July 05, 2026", text: "Being 32 weeks pregnant, my back was killing me. The pillows made me so comfortable, and the therapist knew exactly how to relieve my hip pain safely." },
      { author: "Evelyn R.", rating: 5, date: "June 27, 2026", text: "So relaxing! Highly recommend to any expecting mama. They take such good care of you." },
      { author: "Diana P.", rating: 5, date: "June 12, 2026", text: "Incredibly gentle and supportive. Scent-free oil was a lifesaver. The parlour feels like a warm sanctuary." },
      { author: "Victoria M.", rating: 4, date: "May 25, 2026", text: "Very relaxing session. I slept so well that night. The pillow setup was fantastic." },
      { author: "Lauren C.", rating: 5, date: "May 08, 2026", text: "A beautiful gift. Highly professional therapists who understand pregnancy safety." }
    ]
  },
  {
    id: "reflexology-massage",
    name: "Reflexology (Foot Massage)",
    shortDescription: "An ancient healing art targeting pressure points on the feet to promote systemic health and relaxation.",
    longDescription: "Reflexology is based on the principle that specific points on the soles, heels, and toes of the feet correspond to different organs and systems throughout the body. By applying focused pressure using thumbs and fingers to these reflex zones, our practitioners stimulate the body's natural healing pathways, relieve fatigue, and restore a sense of overall balance.",
    pricing: [
      { duration: 30, price: 50 },
      { duration: 60, price: 75 }
    ],
    benefits: [
      "Relieves tired, aching feet and lower leg fatigue",
      "Stimulates internal organ function and nerve activity",
      "Improves blood circulation and energy flow",
      "Induces a deep, relaxing state of full-body peace",
      "Reduces head discomfort, anxiety, and sinus congestion"
    ],
    expectations: [
      "Warm herbal foot soak and gentle scrub before the session",
      "Client remains fully clothed, reclining in a comfortable chair",
      "Fingertip and thumb pressure on the feet and ankles",
      "A soothing organic peppermint/eucalyptus foot cream finish"
    ],
    gradient: "from-[#F3EFE9] to-[#4E6E5D]/10",
    icon: "Activity",
    reviews: [
      { author: "Julia H.", rating: 5, date: "July 06, 2026", text: "The herbal foot soak was so refreshing. My feet feel brand new, and honestly, my whole body feels more balanced." },
      { author: "Pamela N.", rating: 4, date: "June 29, 2026", text: "Excellent reflexology session. Very professional and clean. It really helped with my plantar fasciitis pain." },
      { author: "Robert T.", rating: 5, date: "June 14, 2026", text: "Amazing experience. The room was extremely comfortable and the pressure was incredibly precise." },
      { author: "Alice M.", rating: 5, date: "May 26, 2026", text: "I love the peppermint foot cream they use. Very invigorating yet relaxing. Wonderful!" },
      { author: "Fiona B.", rating: 4, date: "May 15, 2026", text: "Great relief for tired feet. Perfect for those who stand all day at work." }
    ]
  },
  {
    id: "head-shoulder-massage",
    name: "Head & Shoulder Massage",
    shortDescription: "A focused, stress-relieving massage targeting key areas of stored tension: the neck, shoulders, and scalp.",
    longDescription: "For those who hold stress in their upper body or spend long hours in front of screens, this treatment offers targeted relief. Combining muscle kneading along the neck and shoulders with acupressure and gentle friction across the scalp, this massage helps release tension, reduce headaches, and clear mental clutter in a short, effective session.",
    pricing: [
      { duration: 30, price: 50 },
      { duration: 45, price: 65 },
      { duration: 60, price: 80 }
    ],
    benefits: [
      "Quickly relieves tension in the neck, shoulders, and upper back",
      "Alleviates tension headaches and eye strain",
      "Increases blood flow to the head and scalp",
      "Promotes mental clarity, focus, and alertness",
      "Highly convenient option for a quick midday refresh"
    ],
    expectations: [
      "Can be done seated in a specialized chair or lying on a table",
      "Focuses exclusively on the upper body and head",
      "Warm aromatherapy oil used for the scalp (optional)",
      "Immediate release of upper body stiffness"
    ],
    gradient: "from-[#E8E2D8] to-[#FAF8F5]",
    icon: "User",
    reviews: [
      { author: "Natalie K.", rating: 5, date: "July 10, 2026", text: "My tension headaches are gone! The scalp massage was heavenly. I will definitely book this weekly." },
      { author: "Kevin L.", rating: 5, date: "June 30, 2026", text: "Perfect for desk workers. Quick, effective, and extremely relaxing. Highly professional staff." },
      { author: "Melissa C.", rating: 4, date: "June 17, 2026", text: "Great pressure on my shoulders. I felt the tension melt away. Beautiful and cozy parlour." },
      { author: "Ethan W.", rating: 5, date: "June 02, 2026", text: "The scalp massage was amazing. The essential oils used made the experience even better." },
      { author: "Isabel B.", rating: 4, date: "May 20, 2026", text: "Short but sweet! Very soothing and cleared my mind completely." }
    ]
  },
  {
    id: "couples-massage",
    name: "Couples Massage",
    shortDescription: "Share a peaceful relaxation experience side-by-side with a partner, friend, or family member in our custom suite.",
    longDescription: "Relax together in our spacious couples' suite. Perfect for anniversaries, birthdays, or simply a shared retreat, this service allows two people to receive a massage of their choice (such as Swedish or Deep Tissue) simultaneously from two separate therapists. The room is enhanced with soft lighting, beautiful aromas, and a warm, shared peaceful energy.",
    pricing: [
      { duration: 60, price: 180 },
      { duration: 90, price: 260 }
    ],
    benefits: [
      "Provides a shared bonding experience in a peaceful setting",
      "Induces deep full-body relaxation for both individuals",
      "Reduces physical stress and mental fatigue",
      "Comfortable introduction to massage for a hesitant partner",
      "Includes complimentary premium organic tea service"
    ],
    expectations: [
      "Two massage tables side-by-side in a large, private suite",
      "Individual consultations to tailor each person's massage pressure",
      "Calm, romantic ambient lighting and soft music",
      "Premium tea or water served post-treatment"
    ],
    gradient: "from-[#E8D7D0] to-[#DFBA5B]/20",
    icon: "Users",
    reviews: [
      { author: "Charlotte & Tom", rating: 5, date: "July 04, 2026", text: "We celebrated our anniversary here and it was incredible. The suite is beautiful, the tea was delicious, and both massages were top-notch." },
      { author: "Anna & Sarah", rating: 5, date: "June 26, 2026", text: "Brought my sister for her birthday. A wonderful experience. Very relaxing, and we loved being in the same room." },
      { author: "Mark & Julie", rating: 5, date: "June 11, 2026", text: "Incredibly relaxing and professional. The therapists matched our individual preferences perfectly." },
      { author: "Emily J.", rating: 4, date: "May 28, 2026", text: "Beautifully set up. A very luxurious treatment room and highly attentive staff." },
      { author: "Alex & Pat", rating: 5, date: "May 15, 2026", text: "Highly recommend the couples suite. It's a wonderful sanctuary to escape to together." }
    ]
  },
  {
    id: "sports-massage",
    name: "Sports Massage",
    shortDescription: "A dynamic, performance-focused massage to aid athletic recovery, increase range of motion, and prevent injury.",
    longDescription: "Tailored to active individuals and athletes, our Sports Massage combines deep tissue techniques, active stretching, and targeted compression. Designed to address the muscles specific to your sport, this therapy improves tissue elasticity, reduces lactic acid buildup, and enhances overall flexibility, helping you recover faster and perform at your best.",
    pricing: [
      { duration: 60, price: 95 },
      { duration: 90, price: 135 }
    ],
    benefits: [
      "Speeds up post-workout muscle recovery times",
      "Reduces muscle soreness (DOMS) and stiffness",
      "Increases joint range of motion and tissue flexibility",
      "Helps prevent athletic injuries and muscle strain",
      "Improves localized blood circulation and lymphatic drainage"
    ],
    expectations: [
      "Therapist will discuss your training schedule and specific problem areas",
      "Incorporation of active stretching, compression, and friction",
      "May use cooling gel (e.g. menthol/arnica) to reduce muscle soreness",
      "A vigorous yet therapeutic and relieving treatment"
    ],
    gradient: "from-[#E8E2D8] to-[#4E6E5D]/30",
    icon: "ShieldAlert",
    reviews: [
      { author: "Brooke S.", rating: 5, date: "July 09, 2026", text: "As a runner training for a marathon, this was a lifesaver. The therapist did amazing work on my tight calves and hamstrings." },
      { author: "Danielle H.", rating: 4, date: "June 24, 2026", text: "Very effective active stretches. It really helped with my hip mobility. Professional and knowledgeable therapist." },
      { author: "Marcus V.", rating: 5, date: "June 08, 2026", text: "Outstanding recovery session. The cooling arnica gel at the end was excellent. Highly recommend for any athlete." },
      { author: "Ryan G.", rating: 5, date: "May 26, 2026", text: "Great pressure. Found all my tight spots and worked them out. Very professional." },
      { author: "Jessica M.", rating: 4, date: "May 13, 2026", text: "Very therapeutic. My muscles feel relaxed and recovered. Safe environment." }
    ]
  },
  {
    id: "bamboo-massage",
    name: "Bamboo Massage",
    shortDescription: "An exotic deep-relaxation therapy utilizing warmed hollow bamboo canes to roll and knead muscles.",
    longDescription: "Discover the healing rhythms of the East. In our Bamboo Massage, hollow bamboo canes of varying lengths and diameters are heated and used as massage tools. The therapist rolls and kneads the warm bamboo over your muscles, providing a deep, consistent pressure that effortlessly breaks down tension. The thermal effect combined with the rolling motion creates a highly relaxing and unique sensory experience.",
    pricing: [
      { duration: 60, price: 100 },
      { duration: 90, price: 140 }
    ],
    benefits: [
      "Relieves deep-seated muscle tension and soreness",
      "Stimulates blood circulation and sensory nerve endings",
      "Aids in lymphatic drainage and cellular detoxification",
      "Provides a unique, rhythmic, and soothing texture",
      "Melts stress and restores full-body vitality"
    ],
    expectations: [
      "Warm bamboo canes glided and rolled over muscles with oil",
      "Consistent, firm pressure that targets larger muscle groups",
      "Soothing rhythmic tapping and rolling sensations",
      "Deeply calming thermal warmth throughout the treatment"
    ],
    gradient: "from-[#F3EFE9] to-[#4E6E5D]/25",
    icon: "Leaf",
    reviews: [
      { author: "Tanya L.", rating: 5, date: "July 12, 2026", text: "What a unique experience! The warm bamboo felt like hot rollers on my back. It got deep into my muscles without any pain." },
      { author: "Neil R.", rating: 5, date: "June 29, 2026", text: "Highly recommend trying this. The pressure is very even and the warmth is incredibly soothing. Wonderful spa!" },
      { author: "Heather D.", rating: 5, date: "June 14, 2026", text: "Saib's parlour is beautiful and the bamboo massage was exceptional. Professional, clean, and so relaxing." },
      { author: "Gillian M.", rating: 4, date: "May 27, 2026", text: "Very interesting and very relaxing massage. The therapist was highly skilled. Nice warm environment." },
      { author: "Stephanie A.", rating: 5, date: "May 11, 2026", text: "Amazing deep tissue relief using the bamboo rollers. I feel completely rejuvenated. Done with care!" }
    ]
  },
  {
    id: "nabila-special",
    name: "Nabila Special",
    shortDescription: "An intimate, head-to-toe romantic journey crafted for the soul — where every touch is tender, every moment cherished, and every breath shared in warmth.",
    longDescription: "The Nabila Special is our most intimate and emotionally connected offering — a full-body romantic experience designed for those who seek more than relaxation. From the very first gentle touch at your feet, our therapist works with deep intention and tenderness, tracing every curve of your body with warm, scented oils in a slow, devoted rhythm.\n\nBeginning with a soft caress from your toes, each stroke travels with loving purpose — up through the legs, across the abdomen, along the arms, and finally to the crown of your head. Delicate kisses of warm towels are pressed to your skin at each milestone, mimicking the intimate warmth of a lover's touch. Rose petals, dim candlelight, and a bespoke romantic playlist set the mood for a deeply personal connection between body and soul.\n\nThis session closes with a tranquil heart-center hold — a moment of stillness where breath, energy, and emotion align. You will leave feeling profoundly seen, nurtured, and adored.",
    pricing: [
      { duration: 90, price: 3500 },
      { duration: 120, price: 4800 }
    ],
    benefits: [
      "Deep emotional relaxation and intimate body awareness",
      "Full-body tension release from toes to crown",
      "Heightened sensory connection through scented oils and warm towels",
      "Promotes feelings of love, safety, and inner peace",
      "Restores romantic energy and personal confidence"
    ],
    expectations: [
      "Rose-infused warm oil massage covering the entire body",
      "Gentle warm towel kisses applied at each stage of the journey",
      "Candlelit private suite with a curated romantic playlist",
      "Session closes with a calming heart-center breathwork hold",
      "Exclusively for adult clients — advance booking required"
    ],
    gradient: "from-[#F5E6EC] to-[#E8D0DA]",
    icon: "Gem",
    reviews: []
  }
];
