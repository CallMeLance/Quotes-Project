const quotes = [
    {
    "quote": "Never pretend to a love which you do not actually feel, for love is not ours to command.",
    "author": "Alan Watts"
    }, {
    "quote": "You can observe a lot just by watching.",
    "author": "Yogi Berra"
    }, {
    "quote": "A house divided against itself cannot stand.",
    "author": "Abraham Lincoln"
    }, {
    "quote": "Difficulties increase the nearer we get to the goal.",
    "author": "Johann Wolfgang von Goethe"
    }, {
    "quote": "Fate is in your hands and no one elses",
    "author": "Byron Pulsifer"
    }, {
    "quote": "You'll have bad times, but it'll wake you up to the good stuff that you weren't paying attention to.",
    "author": "Robin Williams"
    }, {
    "quote": "Find something to believe in, find it for yourself, and when you do, pass it onto the future.",
    "author": "Solid Snake"
    }, {
    "quote": "Muddy water is best cleared by leaving it alone.",
    "author": "Alan Watts"
    }, {
    "quote": "Life is a learning experience, only if you learn.",
    "author": "Yogi Berra"
    }, {
    "quote": "Self-complacency is fatal to progress.",
    "author": "Margaret Sangster"
    }, {
    "quote": "No matter what, you keep finding something to fight for.",
    "author": "Joel from TLOU"
    }, {
    "quote": "Don't argue, propose a solution and work it out",
    "author": "Lance Franz"
    }, {
    "quote": "We can only learn to love by loving.",
    "author": "Iris Murdoch"
    }, {
    "quote": "Even if you're on the right track, you'll get run over eventually if you just sit there.",
    "author": "Will Rogers"
    }, {
    "quote": "Learn from yesterday, live for tomorrow & hope for tomorrow..",
    "author": "Albert Einstein"
    }, {
    "quote": "Today is the tomorrow we worried about yesterday.",
    "author": "unkown"
    }, {
    "quote": "It's easier to see the mistakes on someone else's paper.",
    "author": "unknown"
    }, {
    "quote": "Trouble is only opportunity in work clothes.",
    "author": "Henry J. Kaiser"
    }, {
    "quote": "A rolling stone gathers no moss.",
    "author": "Publilius Syrus"
    }, {
    "quote": "Ideas are the beginning points of all fortunes.",
    "author": "Napoleon Hill"
    }, {
    "quote": "Everything in life is luck.",
    "author": "Donald Trump"
    }, {
    "quote": "Doing nothing is better than being busy doing nothing.",
    "author": "Lao Tzu"
    }, {
    "quote": "Trust yourself. You know more than you think you do.",
    "author": "Benjamin Spock"
    }, {
    "quote": "Study the past, if you would divine the future.",
    "author": "Confucius"
    }, {
    "quote": "Whose around you and whose down for you are two different things, know the difference.",
    "author": "Tee Grizzley"
    }, {
    "quote": "From error to error one discovers the entire truth.",
    "author": "Sigmund Freud"
    },{
    "quote": "Work out your own salvation. Do not depend on others.",
    "author": "Buddha"
    }, {
    "quote": "One today is worth two tomorrows.",
    "author": "Benjamin Franklin"
    }, {
    "quote": "Once you choose hope, anythings possible.",
    "author": "Christopher Reeve"
    }, {
    "quote": "Trying to define yourself is like trying to bite your own teeth.",
    "author": "Alan Watts"
    }, {
    "quote": "One fails forward toward success.",
    "author": "Charles Kettering"
    }, {
    "quote": "From small beginnings come great things.",
    "author": ""
    }, {
    "quote": "Learning is a treasure that will follow its owner everywhere",
    "author": "Chinese proverb"
    }, {
    "quote": "Be as you wish to seem.",
    "author": "Socrates"
    }, {
    "quote": "The world is always in movement.",
    "author": "V. Naipaul"
    }, {
    "quote": "Never mistake activity for achievement.",
    "author": "John Wooden"
    }, {
    "quote": "What worries you masters you.",
    "author": "Haddon Robinson"
    }, {
    "quote": "One faces the future with ones past.",
    "author": "Pearl Buck"
    }, {
    "quote": "Goals are the fuel in the furnace of achievement.",
    "author": "Brian Tracy"
    }, {
    "quote": "Who sows virtue reaps honour.",
    "author": "Leonardo da Vinci"
    }, {
    "quote": "Be kind whenever possible. It is always possible.",
    "author": "Dalai Lama"
    }, {
    "quote": "Talk doesn't cook rice.",
    "author": "Chinese proverb"
    }, {
    "quote": "He is able who thinks he is able.",
    "author": "Buddha"
    }, {
    "quote": "Be as you wish to seem.",
    "author": "Socrates"
    }, {
    "quote": "A goal without a plan is just a wish.",
    "author": "Larry Elder"
    }, {
    "quote": "To succeed, we must first believe that we can.",
    "author": "Michael Korda"
    }, {
    "quote": "Learn from yesterday, live for today, hope for tomorrow.",
    "author": "Albert Einstein"
    }, {
    "quote": "A weed is no more than a flower in disguise.",
    "author": "James Lowell"
    }, {
    "quote": "Do, or do not. There is no try.",
    "author": "Yoda"
    }, {
    "quote": "All serious daring starts from within.",
    "author": "Harriet Beecher Stowe"
    }, {
    "quote": "The best teacher is experience learned from failures.",
    "author": "Byron Pulsifer"
    }, {
    "quote": "Think how hard physics would be if particles could think.",
    "author": "Murray Gell-Mann"
    }, {
    "quote": "Love is the flower you've got to let grow.",
    "author": "John Lennon"
    }, {
    "quote": "Don't wait. The time will never be just right.",
    "author": "Napoleon Hill"
    }, {
    "quote": "One fails forward toward success.",
    "author": "Charles Kettering"
    }, {
    "quote": "Time is the wisest counsellor of all.",
    "author": "Pericles"
    }, {
    "quote": "You give before you get.",
    "author": "Napoleon Hill"
    }, {
    "quote": "Wisdom begins in wonder.",
    "author": "Socrates"
    }, {
    "quote": "Without courage, wisdom bears no fruit.",
    "author": "Baltasar Gracian"
    }, {
    "quote": "Change in all things is sweet.",
    "author": "Aristotle"
    }, {
    "quote": "What you fear is that which requires action to overcome.",
    "author": "Byron Pulsifer"
    }, {
    "quote": "The best teacher is experience learned from failures.",
    "author": "Byron Pulsifer"
    }, {
    "quote": "When performance exceeds ambition, the overlap is called success.",
    "author": "Cullen Hightower"
    }, {
    "quote": "When deeds speak, words are nothing.",
    "author": "African proverb"
    }, {
    "quote": "Real magic in relationships means an absence of judgement of others.",
    "author": "Wayne Dyer"
    }, {
    "quote": "When performance exceeds ambition, the overlap is called success.",
    "author": "Cullen Hightower"
    }, {
    "quote": "I never think of the future. It comes soon enough.",
    "author": "Albert Einstein"
    }, {
    "quote": "Skill to do comes of doing.",
    "author": "Ralph Emerson"
    }, {
    "quote": "Wisdom is the supreme part of happiness.",
    "author": "Sophocles"
    }, {
    "quote": "I believe that every person is born with talent.",
    "author": "Maya Angelou"
    }, {
    "quote": "The years teach much which the days never know.",
    "author": "Ralph Emerson"
    }, {
    "quote": "Our distrust is very expensive.",
    "author": "Ralph Emerson"
    }, {
    "quote": "All know the way; few actually walk it.",
    "author": "Bodhidharma"
    }, {
    "quote": "Great talent finds happiness in execution.",
    "author": "Johann Wolfgang von Goethe"
    }, {
    "quote": "Faith in oneself is the best and safest course.",
    "author": "Michelangelo"
    }, {
    "quote": "Courage is going from failure to failure without losing enthusiasm.",
    "author": "Winston Churchill"
    }, {
    "quote": "The two most powerful warriors are patience and time.",
    "author": "Leo Tolstoy"
    }, {
    "quote": "Talk doesn't cook rice.",
    "author": "Chinese proverb"
    }, {
    "quote": "A beautiful thing is never perfect.",
    "author": "unknown"
    }
];
export default quotes;      