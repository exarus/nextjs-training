import { Navigation } from "@/app/components/navigation";
import { Footer } from "@/app/components/footer";
import { SocialsCarousel } from "@/app/components/socials-carousel";
import { Button } from "@/app/components/button";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Navigation />
      <main className="relative min-h-screen bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center gap-10 lg:items-start lg:pl-[206px]">
        <div className="absolute inset-0 bg-[url(/victoria.avif)] opacity-50 bg-cover bg-no-repeat bg-center -z-20"></div>
        <div className="flex flex-col font-title leading-[calc(11/12)] items-center lg:items-start text-7xl sm:text-8xl lg:text-[120px]">
          <div>Victoria</div>
          <div>Bianchini</div>
        </div>
        <Button>See more content</Button>
      </main>
      <div className="flex flex-col gap-14 pt-[89px]">
        <div className="flex flex-col gap-6 self-center leading-[1.4]">
          <span className="font-medium text-center text-[32px]">
            Follow our socials
          </span>
          <div className="text-base text-[rgba(255,255,255,0.7)] text-center">
            Check our profiles to stay up to date with the latest news from the
            SUBBD world.
          </div>
        </div>
        <SocialsCarousel />
      </div>
      <Footer />
    </div>
  );
}
