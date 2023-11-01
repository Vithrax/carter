import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getServerAuthSession } from "@/server/auth";
import { AreaChart, RefreshCw, Shield, User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="mt-20 flex h-full flex-col items-center gap-16">
      {/* Title */}
      <section id="start" className="space-y-8">
        <h1 className="text-center text-5xl font-bold tracking-tight">
          The ultimate <span className="text-primary">shopping</span> management
        </h1>
        <p className="text-center text-muted-foreground">
          Plan your groceries list like never before. <br />
          Add your products, save and reuse. <br />
          Make it <span className="font-bold text-primary">YOURS.</span>
        </p>

        {/* Buttons */}
        <div className="mx-auto space-x-2">
          <div className="flex items-center justify-center gap-3">
            <Button size={session ? "lg" : "default"} asChild>
              {!session ? (
                <Link href="/sign-in">Start planning</Link>
              ) : (
                <Link href="/app">Go to app</Link>
              )}
            </Button>
            {!session && (
              <Button variant="outline">
                <Link href="#getting-started">Learn more</Link>
              </Button>
            )}
          </div>
        </div>

        {/* Users */}
        <div className="w-full bg-muted py-4 text-center font-semibold">
          <span className="font-extrabold text-primary">30.000+</span> lists
          created last year!
        </div>
      </section>

      {/* Image stack */}
      <section className="relative my-8 w-full px-4 py-6">
        <div className="mx-auto mb-16 mt-8 w-4/5 overflow-hidden rounded-xl border-background object-contain">
          <Image
            src="/photo-3.jpg"
            alt="Bag filled with groceries standing on a table"
            width={3682}
            height={5523}
          />
        </div>
        <div className="absolute right-4 top-0 w-1/2 overflow-hidden rounded-xl border-2 border-background object-contain">
          <Image
            src="/photo-2.jpg"
            alt="Zoomed vegetable section in a market"
            width={6720}
            height={4480}
          />
        </div>
        <div className="absolute bottom-0 left-4 w-3/6 overflow-hidden rounded-xl border-2 border-background object-contain">
          <Image
            src="/photo-1.jpg"
            alt="Woman with shopping cart reaching for product"
            width={4000}
            height={4000}
          />
        </div>
      </section>

      {/* Featured */}
      <section id="featured" className="w-full bg-muted px-2 py-8">
        <h3 className="text-center text-xs uppercase text-muted-foreground dark:text-zinc-300">
          Trusted by the best.
        </h3>
        <div className="mt-4 grid grid-cols-5 items-center gap-2">
          <div>
            <Image
              src="/logos/Netflix.png"
              alt="Netflix logo"
              width={2265}
              height={755}
            />
          </div>
          <div>
            <Image
              src="/logos/NIKE.png"
              alt="NIKE logo"
              width={512}
              height={512}
            />
          </div>
          <div>
            <Image
              src="/logos/Amazon.png"
              alt="Amazon logo"
              width={885}
              height={524}
              className="rounded-lg dark:bg-white"
            />
          </div>
          <div>
            <Image
              src="/logos/Samsung.png"
              alt="Samsung logo"
              width={2250}
              height={800}
            />
          </div>
          <div>
            <Image
              src="/logos/Youtube.png"
              alt="Youtube logo"
              width={2000}
              height={857}
            />
          </div>
        </div>
      </section>

      {/* How to start */}
      <section id="getting-started" className="w-full px-6 py-4">
        <ul className="space-y-20">
          <li className="space-y-1">
            <h4 className="text-5xl font-extrabold text-zinc-300 dark:text-zinc-700">
              01
            </h4>
            <p className="text-xl font-semibold text-primary">
              Create a free account
            </p>
            <p className="text-sm">
              You can use your Google or Github account to make the process more
              seamless.
            </p>
          </li>
          <li className="space-y-1">
            <h4 className="text-5xl font-extrabold text-zinc-300 dark:text-zinc-700">
              02
            </h4>
            <p className="text-xl font-semibold text-primary">
              Build your own library
            </p>
            <p className="text-sm">
              Create products that will be used to create sets and shopping
              lists.
            </p>
          </li>
          <li className="space-y-1">
            <h4 className="text-5xl font-extrabold text-zinc-300 dark:text-zinc-700">
              03
            </h4>
            <p className="text-xl font-semibold text-primary">
              Start saving money!
            </p>
            <p className="text-sm">
              With just few clicks compose your shopping lists from your own
              library, using your own products.
            </p>
          </li>
        </ul>
      </section>

      {/* More details */}
      <section id="details" className="w-full bg-muted px-4 py-12">
        <p className="text-center">
          Cartapp is a fully web based application that enchance your experience
          and efficeny when buying groceries. Find below just few of many
          features that makes Cartapp an amazing app:
        </p>
        <ul className="mt-8 space-y-4 pl-4">
          <li className="flex items-center justify-start gap-1.5">
            <Shield className="text-primary" />
            <span className="text-sm">Fully private and secure.</span>
          </li>
          <li className="flex items-center justify-start gap-1.5">
            <AreaChart className="text-primary" />
            <span className="text-sm">Built-in analyse panel</span>
          </li>
          <li className="flex items-center justify-start gap-1.5">
            <User2 className="text-primary" />
            <span className="text-sm">Personalized experience</span>
          </li>
          <li className="flex items-center justify-start gap-1.5">
            <RefreshCw className="text-primary" />
            <span className="text-sm">Auto synchronize data</span>
          </li>
        </ul>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="w-full px-4 py-4">
        <ul className="space-y-16">
          <li>
            <blockquote className="border-l-2 pl-6 italic">
              I have no idea there is soo much to improve until i tried Cartapp.
              After 6 months of using it i cant even imagine how i was managing
              my groceries before!
            </blockquote>
            <div className="mt-3 flex items-center gap-1.5 pl-2">
              <Avatar>
                <AvatarImage
                  src="https://i.pravatar.cc/150?img=3"
                  alt="Steve Jobs"
                />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="">Steve Jobs</span>
                <span className="text-xs text-muted-foreground">
                  CEO at Apple inc.
                </span>
              </div>
            </div>
          </li>
          <li>
            <blockquote className="mt-6 border-l-2 pl-6 italic">
              Before Cartapp i was throwing away food, and as it turned out,
              money too. Im bad at micromanaging but this app changed it all.
            </blockquote>
            <div className="mt-3 flex items-center gap-1.5 pl-2">
              <Avatar>
                <AvatarImage
                  src="https://i.pravatar.cc/150?img=4"
                  alt="Oprah Winfrey"
                />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="">Oprah Winfrey</span>
                <span className="text-xs text-muted-foreground">
                  Founder of The Oprah Winfrey Show.
                </span>
              </div>
            </div>
          </li>
          <li>
            <blockquote className="mt-6 border-l-2 pl-6 italic">
              I can&apos;t endorse Cartapp enough. It not only helped me with my
              spendings, but also my friends and family to whom i recomended it.
            </blockquote>
            <div className="mt-3 flex items-center gap-1.5 pl-2">
              <Avatar>
                <AvatarImage
                  src="https://i.pravatar.cc/150?img=5"
                  alt="Kim Kardashian"
                />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="">Kim Kardashian</span>
                <span className="text-xs text-muted-foreground">
                  Celebrity, founder of SKIMS
                </span>
              </div>
            </div>
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section id="cta" className="w-full bg-muted px-2 py-12 text-center">
        <h3 className="text-5xl font-bold tracking-tight">Sounds good?</h3>
        <p className="mt-1 text-lg">
          Of course it does. <br />
          Dont&apos;t wait. Join Cartapp now.
        </p>
        <Button size="lg" className="mb-1 mt-8">
          <Link href="/sign-in">Start saving</Link>
        </Button>
      </section>
    </main>
  );
}
