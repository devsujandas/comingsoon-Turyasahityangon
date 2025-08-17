"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Instagram, Mail, BookOpen, Clock, Calendar, Star, Heart } from "lucide-react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function ComingSoonPage() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  // Target date: August 25th, 2025 at 9:00 PM IST
  const targetDate = new Date("2025-08-25T21:00:00+05:30")

  useEffect(() => {
    setMounted(true)

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#FAF6F1] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#8B5E3C] border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with paper texture */}
      <div className="fixed inset-0 bg-[#FAF6F1]">
        {/* Paper texture overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #F8F3E8 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, #EADBC8 1px, transparent 1px),
              linear-gradient(45deg, transparent 40%, rgba(212, 184, 150, 0.1) 50%, transparent 60%)
            `,
            backgroundSize: "20px 20px, 20px 20px, 40px 40px",
          }}
        />

        {/* Traditional Bengali manuscript border pattern */}
        <div className="absolute inset-0">
          <div
            className="absolute top-0 left-0 right-0 h-8 opacity-20"
            style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                #8B5E3C 0px,
                #8B5E3C 2px,
                transparent 2px,
                transparent 12px,
                #D4B896 12px,
                #D4B896 14px,
                transparent 14px,
                transparent 24px
              )`,
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-8 opacity-20"
            style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                #8B5E3C 0px,
                #8B5E3C 2px,
                transparent 2px,
                transparent 12px,
                #D4B896 12px,
                #D4B896 14px,
                transparent 14px,
                transparent 24px
              )`,
            }}
          />
          <div
            className="absolute top-0 bottom-0 left-0 w-8 opacity-20"
            style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                #8B5E3C 0px,
                #8B5E3C 2px,
                transparent 2px,
                transparent 12px,
                #D4B896 12px,
                #D4B896 14px,
                transparent 14px,
                transparent 24px
              )`,
            }}
          />
          <div
            className="absolute top-0 bottom-0 right-0 w-8 opacity-20"
            style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                #8B5E3C 0px,
                #8B5E3C 2px,
                transparent 2px,
                transparent 12px,
                #D4B896 12px,
                #D4B896 14px,
                transparent 14px,
                transparent 24px
              )`,
            }}
          />
        </div>

        {/* Corner decorative elements */}
        <div className="absolute top-8 left-8 w-16 h-16 opacity-15">
          <div className="w-full h-full border-4 border-[#8B5E3C] rounded-full relative">
            <div className="absolute inset-2 border-2 border-[#D4B896] rounded-full">
              <div className="absolute inset-1 bg-[#8B5E3C] rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
        <div className="absolute top-8 right-8 w-16 h-16 opacity-15">
          <div className="w-full h-full border-4 border-[#8B5E3C] rounded-full relative">
            <div className="absolute inset-2 border-2 border-[#D4B896] rounded-full">
              <div className="absolute inset-1 bg-[#8B5E3C] rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-8 w-16 h-16 opacity-15">
          <div className="w-full h-full border-4 border-[#8B5E3C] rounded-full relative">
            <div className="absolute inset-2 border-2 border-[#D4B896] rounded-full">
              <div className="absolute inset-1 bg-[#8B5E3C] rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 w-16 h-16 opacity-15">
          <div className="w-full h-full border-4 border-[#8B5E3C] rounded-full relative">
            <div className="absolute inset-2 border-2 border-[#D4B896] rounded-full">
              <div className="absolute inset-1 bg-[#8B5E3C] rounded-full opacity-30"></div>
            </div>
          </div>
        </div>

        {/* Floating decorative elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-8 h-8 opacity-10"
        >
          <Star className="w-full h-full text-[#8B5E3C]" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/3 right-1/3 w-6 h-6 opacity-10"
        >
          <Heart className="w-full h-full text-[#8B5E3C]" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute bottom-1/3 left-1/5 w-10 h-10 opacity-10"
        >
          <BookOpen className="w-full h-full text-[#8B5E3C]" />
        </motion.div>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="flex items-center justify-center mb-6 gap-2 sm:gap-4">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="w-12 h-12 sm:w-16 sm:h-16 bg-[#8B5E3C]/10 rounded-full flex items-center justify-center flex-shrink-0"
              >
                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-[#8B5E3C]" />
              </motion.div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#4A2F19] font-bengali text-center px-2">
                তুর্য সাহিত্যাঙ্গন
              </h1>
              <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="w-12 h-12 sm:w-16 sm:h-16 bg-[#8B5E3C]/10 rounded-full flex items-center justify-center flex-shrink-0"
              >
                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-[#8B5E3C] scale-x-[-1]" />
              </motion.div>
            </div>
          </motion.div>

          {/* Coming Soon Message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-[#EADBC8]/50">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A2F19] mb-6 font-bengali leading-tight"
              >
                শীঘ্রই আসছে
              </motion.h2>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.6 }}
                className="h-1 bg-gradient-to-r from-transparent via-[#8B5E3C] to-transparent mx-auto mb-8 max-w-md"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-xl md:text-2xl lg:text-3xl text-[#8B5E3C] font-medium mb-8 font-bengali leading-relaxed"
              >
                বাংলা সাহিত্যের নতুন অধ্যায়
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="text-lg md:text-xl text-[#4A2F19] font-bengali mb-8"
              >
                কাহিনী-কাব্য-পত্র আর কিছুটা আবেগের সমাহার
              </motion.p>

              {/* Launch Date */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="bg-gradient-to-r from-[#8B5E3C] to-[#4A2F19] text-white rounded-2xl p-6 mb-8 shadow-lg"
              >
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Calendar className="w-6 h-6" />
                  <span className="text-lg font-semibold font-bengali">অপেক্ষার উন্মোচন</span>
                </div>
                <p className="text-2xl md:text-3xl font-bold font-bengali mb-2">২৫শে আগস্ট, ২০২৫</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-[#EADBC8]/50">
              <div className="flex items-center justify-center gap-3 mb-8">
                <Clock className="w-8 h-8 text-[#8B5E3C]" />
                <h3 className="text-2xl md:text-3xl font-bold text-[#4A2F19] font-bengali">অবশিষ্ট প্রহর</h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={timeLeft.days}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-br from-[#8B5E3C] to-[#4A2F19] text-white rounded-2xl p-4 md:p-6 shadow-lg"
                  >
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                      {timeLeft.days.toString().padStart(2, "0")}
                    </div>
                    <div className="text-sm md:text-base font-medium font-bengali opacity-90">দিন</div>
                  </motion.div>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={timeLeft.hours}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-br from-[#8B5E3C] to-[#4A2F19] text-white rounded-2xl p-4 md:p-6 shadow-lg"
                  >
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                      {timeLeft.hours.toString().padStart(2, "0")}
                    </div>
                    <div className="text-sm md:text-base font-medium font-bengali opacity-90">ঘন্টা</div>
                  </motion.div>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={timeLeft.minutes}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-br from-[#8B5E3C] to-[#4A2F19] text-white rounded-2xl p-4 md:p-6 shadow-lg"
                  >
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                      {timeLeft.minutes.toString().padStart(2, "0")}
                    </div>
                    <div className="text-sm md:text-base font-medium font-bengali opacity-90">মিনিট</div>
                  </motion.div>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={timeLeft.seconds}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-br from-[#8B5E3C] to-[#4A2F19] text-white rounded-2xl p-4 md:p-6 shadow-lg"
                  >
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                      {timeLeft.seconds.toString().padStart(2, "0")}
                    </div>
                    <div className="text-sm md:text-base font-medium font-bengali opacity-90">সেকেন্ড</div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* About This Website section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12"
          >
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl border border-[#EADBC8]/50">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-center mb-8"
              >
                <div className="flex items-center justify-center gap-3 mb-6">
                  <BookOpen className="w-8 h-8 text-[#8B5E3C]" />
                  <h3 className="text-2xl md:text-3xl font-bold text-[#4A2F19] font-bengali">এই ওয়েবসাইট সম্পর্কে</h3>
                  <BookOpen className="w-8 h-8 text-[#8B5E3C] scale-x-[-1]" />
                </div>

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.9 }}
                  className="h-1 bg-gradient-to-r from-transparent via-[#8B5E3C] to-transparent mx-auto mb-8 max-w-sm"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="space-y-6 text-left max-w-3xl mx-auto"
              >
                <div className="bg-gradient-to-r from-[#8B5E3C]/10 to-[#4A2F19]/10 rounded-2xl p-6 border-l-4 border-[#8B5E3C]">
                  <p className="text-lg md:text-xl text-[#4A2F19] font-bengali leading-relaxed">
                    <strong className="text-[#8B5E3C]">তুর্য সাহিত্যাঙ্গন</strong> একটি বাংলা সাহিত্যের ডিজিটাল প্ল্যাটফর্ম যেখানে আপনি
                    পাবেন কাহিনী, কবিতা, চিঠিপত্র এবং আবেগময় লেখার সমাহার।
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/50 rounded-xl p-6 border border-[#EADBC8]/30">
                    <h4 className="text-xl font-bold text-[#8B5E3C] font-bengali mb-3 flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      আমাদের লক্ষ্য
                    </h4>
                    <p className="text-[#4A2F19] font-bengali leading-relaxed">
                      বাংলা সাহিত্যের ঐতিহ্যকে ডিজিটাল যুগে এগিয়ে নিয়ে যাওয়া এবং নতুন প্রজন্মের কাছে সাহিত্যের সৌন্দর্য পৌঁছে দেওয়া।
                    </p>
                  </div>

                  <div className="bg-white/50 rounded-xl p-6 border border-[#EADBC8]/30">
                    <h4 className="text-xl font-bold text-[#8B5E3C] font-bengali mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5" />
                      কী পাবেন
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#8B5E3C] rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="text-[#4A2F19] font-bengali font-semibold">ছন্দবদ্ধ কবিতা</p>
                          <p className="text-sm text-[#8B5E3C] font-bengali">ঐতিহ্যবাহী ছন্দে রচিত আবেগময় কবিতা</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#8B5E3C] rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="text-[#4A2F19] font-bengali font-semibold">উপাখ্যান ও গল্প</p>
                          <p className="text-sm text-[#8B5E3C] font-bengali">জীবনঘনিষ্ঠ ছোটগল্প ও উপাখ্যান</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#8B5E3C] rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="text-[#4A2F19] font-bengali font-semibold">রিয়ালিজম</p>
                          <p className="text-sm text-[#8B5E3C] font-bengali">বাস্তবতাভিত্তিক সাহিত্য ও সমাজচিত্র</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#8B5E3C] rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="text-[#4A2F19] font-bengali font-semibold">খোলা চিঠি</p>
                          <p className="text-sm text-[#8B5E3C] font-bengali">হৃদয়ের গভীর থেকে লেখা ব্যক্তিগত পত্র</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#4A2F19]/5 to-[#8B5E3C]/5 rounded-2xl p-6 text-center border border-[#EADBC8]/20">
                  <p className="text-lg text-[#8B5E3C] font-bengali font-medium">
                    "লেখনী হলো হৃদয়ের ভাষা, যা নীরবতার মাঝেও কথা বলে। প্রতিটি শব্দে লুকিয়ে থাকে অনুভূতির গভীরতা।"
                  </p>
                  <p className="text-sm text-[#4A2F19] mt-3 opacity-80">- তুর্য সরকার</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-2xl border border-[#EADBC8]/50 relative overflow-hidden">
              {/* Decorative background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 right-4 w-20 h-20 border-2 border-[#8B5E3C] rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-[#4A2F19] rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[#8B5E3C] rounded-full"></div>
              </div>

              <div className="relative z-10">
                {/* Header with decorative elements */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="w-8 h-8 text-[#8B5E3C]"
                    >
                      <Heart className="w-full h-full" />
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#4A2F19] font-bengali">যোগাযোগ রাখুন</h3>
                    <motion.div
                      animate={{ rotate: [0, -360] }}
                      transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="w-8 h-8 text-[#8B5E3C]"
                    >
                      <Heart className="w-full h-full" />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="h-1 bg-gradient-to-r from-transparent via-[#8B5E3C] to-transparent mx-auto mb-6 max-w-xs"
                  />
                </div>

                {/* Inspirational Bengali quote */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="bg-gradient-to-r from-[#8B5E3C]/10 to-[#4A2F19]/10 rounded-2xl p-6 mb-8 border-l-4 border-[#8B5E3C] text-center"
                >
                  <p className="text-lg md:text-xl text-[#4A2F19] font-bengali leading-relaxed italic mb-3">
                    "সাহিত্যের সাথে যুক্ত থাকুন, কারণ প্রতিটি লেখায় লুকিয়ে আছে জীবনের নতুন অর্থ। আমাদের সাথে থাকুন এই সুন্দর যাত্রায়।"
                  </p>
                  <p className="text-sm text-[#8B5E3C] font-bengali font-medium">- তুর্য সরকার</p>
                </motion.div>

                {/* Social media buttons - optimized for mobile */}
                <div className="flex flex-row items-center justify-center gap-4 sm:gap-8">
                  <motion.a
                    whileHover={{ scale: 1.1, y: -8 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.instagram.com/turya_i?igsh=MTY0N294eWkxOHJ2eg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#8B5E3C] via-[#4A2F19] to-[#8B5E3C] rounded-3xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 rounded-3xl"></div>
                      <Instagram className="w-8 h-8 sm:w-10 sm:h-10 text-white group-hover:scale-125 transition-transform duration-300 relative z-10" />
                    </div>
                    <div className="mt-2 sm:mt-3 text-center">
                      <p className="text-sm sm:text-base font-bengali font-bold text-[#4A2F19] group-hover:text-[#8B5E3C] transition-colors">
                        ইনস্টাগ্রাম
                      </p>
                      <p className="text-xs text-[#8B5E3C] font-bengali opacity-80">@turya_i</p>
                    </div>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.1, y: -8 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:Turyasahityangon@gmail.com"
                    className="group flex flex-col items-center"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#4A2F19] via-[#8B5E3C] to-[#4A2F19] rounded-3xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 rounded-3xl"></div>
                      <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-white group-hover:scale-125 transition-transform duration-300 relative z-10" />
                    </div>
                    <div className="mt-2 sm:mt-3 text-center">
                      <p className="text-sm sm:text-base font-bengali font-bold text-[#4A2F19] group-hover:text-[#8B5E3C] transition-colors">
                        ইমেইল
                      </p>
                      <p className="text-xs text-[#8B5E3C] font-bengali opacity-80">যোগাযোগ করুন</p>
                    </div>
                  </motion.a>
                </div>

                {/* Call to action */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="text-center mt-8"
                >
                  <p className="text-[#8B5E3C] font-bengali text-sm md:text-base leading-relaxed">
                    আপডেট পেতে ফলো করুন • প্রশ্ন থাকলে মেইল করুন
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Footer Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <p className="text-[#8B5E3C] text-lg font-bengali mb-2">সাহিত্যের নতুন যাত্রায় আমাদের সাথে থাকুন</p>
            <div className="text-sm text-[#4A2F19] space-y-1">
              <div>© 2025 Turyasahityangon. All rights reserved.</div>
              <div>Designed & Developed by Sujan Das</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
