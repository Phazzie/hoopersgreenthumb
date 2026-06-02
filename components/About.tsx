import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="bg-forest py-24 px-[5%]">
      <div className="grid grid-cols-1 lg:grid-cols-[5fr_6fr] gap-16 lg:gap-28 items-center">
        <div className="relative">
          <div className="relative z-10 rounded overflow-hidden aspect-[4/5]">
            <Image
              src="/images/portrait.jpg"
              alt="Thomas Hooper — owner of Hooper's Green Thumb"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </div>
          <div className="hidden lg:block absolute top-5 left-5 right-[-20px] bottom-[-20px] border-2 border-gold rounded z-0" />
        </div>
        <div>
          <p className="eyebrow mb-4">The Man Behind the Work</p>
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] text-cream mb-8">
            One man.<br />One green thumb.<br />Your whole yard.
          </h2>
          <p className="text-cream/70 leading-[1.85] mb-5 text-[0.97rem]">
            I started Hooper&apos;s Green Thumb because I believe your yard should be something
            you&apos;re proud of — not just maintained. There&apos;s a real difference between a yard
            that&apos;s been cut and a yard that&apos;s been cared for.
          </p>
          <p className="text-cream/70 leading-[1.85] mb-5 text-[0.97rem]">
            When you hire me, you&apos;re not getting a rotating crew. You get{' '}
            <strong className="text-gold font-semibold">me, Thomas</strong> — every single visit.
            I learn your property, I remember what you like, and I take it personally when
            the work isn&apos;t right.
          </p>
          <p className="text-cream/70 leading-[1.85] mb-10 text-[0.97rem]">
            <strong className="text-gold font-semibold">Born and raised in Kalamazoo.</strong>{' '}
            These are my neighbors&apos; homes. I treat them accordingly.
          </p>
          <a href="#contact" className="btn btn-gold btn-lg">
            Let&apos;s Talk About Your Yard
          </a>
        </div>
      </div>
    </section>
  )
}
