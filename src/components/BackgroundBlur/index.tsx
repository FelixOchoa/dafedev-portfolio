import { motion } from "framer-motion"

export default function BackroundBlur({ children }: { children: React.ReactNode }) {

    const RandomX = (limit: number) => {
        return Math.floor(Math.random() * limit)
    }

    const RandomY = (limit: number) => {
        return Math.floor(Math.random() * limit)
    }

    return (
        <main className="max-w-[1366px] flex flex-col items-center justify-center h-screen">
            <div className="flex flex-row items-center gap-[300px] relative">
                <motion.div
                    className="rounded-full w-[350px] h-[350px] bg-gradient-to-br from-purple-500 to-red-500 blur-3xl right-[400px] top-1/3"
                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                    animate={{ rotate: 300, scale: 1.2, x: RandomX(40), y: RandomY(70) }}
                >
                </motion.div>
                <motion.div
                    className="rounded-full w-[400px] h-[400px] bg-gradient-to-br from-red-500 to-purple-500 blur-3xl left-48 top-1/3"
                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                    animate={{ rotate: -300, scale: 1.2, x: RandomX(80), y: RandomY(60) }}
                >
                </motion.div>
            </div>
            <div className="absolute flex flex-col items-center justify-center w-[700px]">
                {children}
            </div>
        </main>
    )

}