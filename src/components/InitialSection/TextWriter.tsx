import Typewriter from 'typewriter-effect';

export default function TextWriter() {
    const listWords = [
        "Desarrollador Full Stack",
        "Ingeniero de Software",
        "Docente y Líder"
    ]


    return (
        <h2
            className="font-extrabold text-[42px] text-center bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent">
            <Typewriter
                options={{
                    strings: listWords,
                    autoStart: true,
                    loop: true,
                    delay: 50,

                }}
            />
        </h2>
    )
};


