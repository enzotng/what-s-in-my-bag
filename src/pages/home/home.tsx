import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import BagModel3D from "../../components/BagModel3D";
import franceTVLogo from "../../assets/images/svg/france-tv.svg";

const Home = () => {
    const navigate = useNavigate();
    const [isOpening, setIsOpening] = useState(false);

    const handleBagClick = () => {
        setIsOpening(true);
        setTimeout(() => {
            navigate("/inside-bag");
        }, 2500);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--white-100)] relative overflow-hidden">
            <motion.div
                className="absolute inset-0 bg-gradient-radial from-[var(--white-90)] to-[var(--white-100)]"
                animate={{
                    opacity: [0.8, 1, 0.8],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <AnimatePresence>
                {!isOpening && (
                    <>
                        <motion.div
                            className="absolute top-16 left-0 right-0 text-center z-20 bg-white-100 p-4"
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-7xl text-[var(--dark-100)] mb-4 tracking-wider">
                                <span className="font-body text-5xl">
                                    What's in my{" "}
                                </span>
                                bag?
                            </h1>
                            <p className="text-lg md:text-xl text-[var(--dark-70)] max-w-2xl mx-auto px-4">
                                On a pas tous le même bagage
                            </p>
                        </motion.div>

                        <motion.div
                            className="absolute inset-0 w-full mx-auto z-10 mt-10"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={
                                !isOpening
                                    ? { opacity: 1, scale: 1 }
                                    : {
                                          scale: 3,
                                          z: 1000,
                                          opacity: 1,
                                      }
                            }
                            transition={
                                !isOpening
                                    ? { duration: 1, delay: 0.3 }
                                    : {
                                          duration: 2,
                                          ease: [0.43, 0.13, 0.23, 0.96],
                                      }
                            }
                        >
                            <BagModel3D
                                onBagClick={handleBagClick}
                                isZooming={isOpening}
                            />
                        </motion.div>

                        <motion.div
                            className="absolute bottom-6 left-0 right-0 text-center z-20 flex flex-col gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            <p className="text-sm text-[var(--dark-50)]">
                                Découvrez davantage l'histoire d'Anila sur
                            </p>
                            <img
                                src={franceTVLogo}
                                alt="France TV Logo"
                                className="mx-auto mb-2 w-32 opacity-70"
                            />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpening && (
                    <motion.div
                        className="absolute inset-0 z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="absolute inset-0"
                            initial={{
                                background:
                                    "radial-gradient(circle, rgba(244,244,231,0) 0%, rgba(244,244,231,0.5) 50%)",
                            }}
                            animate={{
                                background: [
                                    "radial-gradient(circle, rgba(244,244,231,0) 0%, rgba(244,244,231,0.5) 50%)",
                                    "radial-gradient(circle, rgba(244,244,231,0.3) 30%, rgba(244,244,231,0.8) 70%)",
                                    "radial-gradient(circle, rgba(244,244,231,0.8) 50%, rgba(244,244,231,1) 100%)",
                                    "rgba(244,244,231,1)",
                                ],
                            }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />

                        <motion.div
                            className="absolute inset-0 flex items-center justify-center pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 1, 0] }}
                            transition={{
                                duration: 2,
                                times: [0, 0.3, 0.7, 1],
                            }}
                        >
                            <motion.div
                                className="text-[var(--dark-80)] text-xs font-light uppercase tracking-widest"
                                initial={{ scale: 0.8, y: 0 }}
                                animate={{
                                    scale: [0.8, 1, 1.2],
                                    y: [0, 0, -100],
                                    opacity: [0, 1, 0],
                                }}
                                transition={{ duration: 2, ease: "easeOut" }}
                            >
                                Entrée dans le sac
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="absolute inset-0"
                            initial={{ scale: 1, opacity: 0 }}
                            animate={{
                                scale: [1, 0.8, 0.5],
                                opacity: [0, 0.5, 0],
                            }}
                            transition={{ duration: 2, ease: "easeIn" }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Home;
