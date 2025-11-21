import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import anilaImg from '../../assets/images/jpeg/anila.jpg';
import bertiImg from '../../assets/images/jpeg/berti.jpg';
import issiagaImg from '../../assets/images/jpeg/issiaga.jpg';
import luisImg from '../../assets/images/jpeg/luis.jpg';
import randImg from '../../assets/images/jpeg/rand.jpg';
import franceTVLogo from '../../assets/images/svg/france-tv.svg';
import sadnessAudio from '../../assets/audio/sadness.mp3';

const Intro = () => {
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [displayedText, setDisplayedText] = useState('');
  const [showButton, setShowButton] = useState(false);
  const [audioStarted, setAudioStarted] = useState(false);

  const textParts = [
    { text: "Derrière chaque voix, un ", highlight: false },
    { text: "exil", highlight: true },
    { text: ". Derrière chaque objet, une ", highlight: false },
    { text: "mémoire", highlight: true },
    { text: ". Ils sont cinq à avoir tout quitté. Découvrez l'empreinte de leur ", highlight: false },
    { text: "voyage", highlight: true },
    { text: " : le fardeau du ", highlight: false },
    { text: "départ", highlight: true },
    { text: ", l'essentiel préservé, et le ", highlight: false },
    { text: "courage", highlight: true },
    { text: " de la traversée.", highlight: false },
  ];

  const fullText = textParts.map(part => part.text).join('');

  const renderText = (text: string) => {
    let currentIndex = 0;
    return textParts.map((part, i) => {
      const partStart = currentIndex;
      const partEnd = currentIndex + part.text.length;
      currentIndex = partEnd;

      if (text.length < partStart) return null;

      const visibleText = text.slice(partStart, Math.min(partEnd, text.length));
      if (!visibleText) return null;

      if (part.highlight) {
        return <span key={i} className="font-title text-[3.5rem] pr-2">{visibleText}</span>;
      }
      return <span key={i}>{visibleText}</span>;
    });
  };

  const startExperience = () => {
    setAudioStarted(true);
    if (audioRef.current) {
      audioRef.current.volume = 1;
      audioRef.current.play();
    }
  };

  useEffect(() => {
    if (!audioStarted) return;

    let currentIndex = 0;
    const typingSpeed = 50;

    const typeWriter = () => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeWriter, typingSpeed);
      } else {
        setTimeout(() => setShowButton(true), 500);
      }
    };

    const initialDelay = setTimeout(() => {
      typeWriter();
    }, 1000);

    return () => {
      clearTimeout(initialDelay);
    };
  }, [audioStarted]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const photoFrames = [
    { id: 1, x: '5%', y: '8%', rotation: -5, image: anilaImg },
    { id: 2, x: '82%', y: '12%', rotation: 8, image: bertiImg },
    { id: 3, x: '8%', y: '65%', rotation: 3, image: issiagaImg },
    { id: 4, x: '85%', y: '68%', rotation: -7, image: luisImg },
    { id: 5, x: '10%', y: '35%', rotation: -3, image: randImg },
  ];

  return (
    <div className="min-h-screen bg-[var(--white-100)] relative overflow-hidden flex items-center justify-center">
      <audio ref={audioRef} src={sadnessAudio} loop />

      {!audioStarted && (
        <div className="absolute inset-0 z-50 bg-[var(--white-100)] flex items-center justify-center">
          <button
            onClick={startExperience}
            className="px-12 py-6 bg-[var(--dark-100)] text-[var(--white-100)] border-2 border-[var(--dark-100)] hover:bg-[var(--white-100)] hover:text-[var(--dark-100)] transition-colors"
          >
            <span className="text-lg uppercase tracking-widest font-light">
              Commencer
            </span>
          </button>
        </div>
      )}

      {photoFrames.map((frame, index) => (
        <motion.div
          key={frame.id}
          className="absolute w-48 h-64 bg-[var(--white-90)] border-8 border-[var(--dark-100)] shadow-2xl overflow-hidden"
          style={{
            left: frame.x,
            top: frame.y,
            rotate: `${frame.rotation}deg`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.2, duration: 0.6 }}
        >
          <img
            src={frame.image}
            alt={`Photo ${frame.id}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}

      <div className="relative z-20 max-w-2xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-2xl md:text-3xl text-[var(--dark-100)] font-light" style={{ lineHeight: 'normal' }}>
            {renderText(displayedText)}
            <motion.span
              className="inline-block w-1 h-8 bg-[var(--dark-100)] ml-1 align-middle"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </p>
        </motion.div>

        <AnimatePresence>
          {showButton && (
            <motion.div
              className="mt-16 flex flex-col md:flex-row gap-4 items-center justify-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <button
                className="px-8 py-4 bg-[var(--dark-100)] text-[var(--white-100)] border-2 border-[var(--dark-100)] hover:bg-[var(--white-100)] hover:text-[var(--dark-100)] transition-colors"
                onClick={() => navigate('/home')}
              >
                <span className="text-sm uppercase tracking-widest font-light">
                  Continuer
                </span>
              </button>

              <a
                href="https://www.france.tv/slash/exiles/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[var(--white-100)] text-[var(--dark-100)] border-2 border-[var(--dark-100)] hover:bg-[var(--dark-100)] hover:text-[var(--white-100)] transition-colors inline-block"
              >
                <span className="text-sm uppercase tracking-widest font-light">
                  Voir le documentaire
                </span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <img
          src={franceTVLogo}
          alt="France TV"
          className="h-5 opacity-60"
        />
      </motion.div>
    </div>
  );
};

export default Intro;
