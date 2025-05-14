import Image from "next/image"

export default function Home() {
  return (
    <div className="w-screen h-dvh flex flex-col justify-between items-center font-[family-name:var(--font-geist-sans)]">
      <main className="my-auto flex flex-col md:flex-row items-center w-2/3 md:h-1/2 mx-auto md:pt-16">
        <h1 className="text-4xl md:text-7xl font-bold text-center">
          Josmar Muñoz
        </h1>
        <div className="mx-16 my-16 md:my-16">
          <Image
            className="rounded-full min-h-72 min-w-48"
            src="/photo.jpg"
            alt="Josmar Muñoz"
            priority
            width={1000}
            height={1000}
          />
        </div>
        <h2 className="text-4xl md:text-7xl font-bold text-center">
          Software Engineer
        </h2>
      </main>
      <footer className="w-full flex flex-row justify-end items-center p-8">
        <div className="flex flex-row">
          <a
            href="https://github.com/josmaralejandro"
            className="mr-4 cursor-pointer hover:scale-110 transition-transform duration-200"
            target="_blank"
          >
            <Image
              src="/github.svg"
              alt="GitHub"
              width={32}
              height={32}
            />
          </a>
          <a
            href="https://gitlab.com/josmaralejandro"
            className="mr-4 cursor-pointer hover:scale-110 transition-transform duration-200"
            target="_blank"
          >
            <Image
              src="/gitlab.svg"
              alt="GitLab"
              width={32}
              height={32}
            />
          </a>
          <a
            href="mailto:josmar@josmarmunoz.dev"
            className="mr-4 cursor-pointer hover:scale-110 transition-transform duration-200"
            target="_blank"
          >
            <Image
              src="/mail.svg"
              alt="Email"
              width={32}
              height={32}
            />
          </a>
        </div>
      </footer>
    </div>
  )
}
