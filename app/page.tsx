import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, MapPin, Route } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center">
          <div className="mr-4 font-bold">PEI Mussel Tear</div>
          <nav className="flex flex-1 items-center justify-end space-x-4">
            <Link href="#about" className="text-sm font-medium">
              About
            </Link>
            <Link href="#details" className="text-sm font-medium">
              Details
            </Link>
            <Link href="#registration" className="text-sm font-medium">
              Registration
            </Link>
            <Link href="#rules" className="text-sm font-medium">
              Rules
            </Link>
            <Link href="#tracker" className="text-sm font-medium">
              Tracker
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/pei-mussel-tear-hero.png"
              alt="PEI Mussel Tear - Red dirt road with logo"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <div className="container relative z-10 py-24 text-center text-white md:py-32">
            <p className="mt-48 text-xl">
              Prince Edward Island's first ultra-endurance cycling race
            </p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeKmuqfYM1VoWxSGpRN8ki75qZbezTKQVZp_a6ToLU7zF07Mw/viewform?usp=preview">
              <Button className="mt-8 bg-red-700 hover:bg-red-800">
                Register Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </section>

        <section id="about" className="bg-white py-16">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight">
              About the Race
            </h2>
            <Separator className="my-6 bg-red-700" />
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                The PEI Mussel Tear is a self-supported 430km gravel cycling
                event that spans the beautiful province of Prince Edward Island
                from one end to the other. While many maritime cycling
                enthusiasts have conquered the famous Confederation Trail, this
                race minimizes time spent on the modern railbed and highlights
                some of PEI's lesser-known red dirt roads.
              </p>
              <br />
              <p className="text-lg leading-relaxed">
                This event will take riders through tourist hotspots such as
                Summerside, Cavendish, Victoria by the Sea, Charlottetown and
                St. Peter's Bay. Enjoy these re-supply points while you can as
                the majority of the ride will be nothing but red dirt, farmland
                and the sound of your freewheel.
              </p>
              <br />
              <p> Are you up for the challenge?</p>
              <br />
              <p>
                The PEI Mussel Tear is a Cycling PEI-sanction event. This means
                that members of Cycling PEI participating in the event will
                enjoy the sport accident and liability insurance coverage that
                comes with their membership.
              </p>
            </div>
          </div>
        </section>

        <section id="details" className="bg-red-50 py-16">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight">Event Details</h2>
            <Separator className="my-6 bg-red-700" />
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Calendar className="h-12 w-12 text-red-700" />
                  <h3 className="mt-4 text-xl font-bold">Date</h3>
                  <p className="mt-2 text-center">
                    Start: August 30th @ 9:00am
                    <br />
                    Cut off time: August 31st @ 7:00pm
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Route className="h-12 w-12 text-red-700" />
                  <h3 className="mt-4 text-xl font-bold">Distance</h3>
                  <p className="mt-2 text-center">430 kilometres</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Clock className="h-12 w-12 text-red-700" />
                  <h3 className="mt-4 text-xl font-bold">Time Limit</h3>
                  <p className="mt-2 text-center">34 hours</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <MapPin className="h-12 w-12 text-red-700" />
                  <h3 className="mt-4 text-xl font-bold">Location</h3>
                  <p className="mt-2 text-center">
                    Start: North Cape Lighthouse (Tignish, PEI)
                    <br />
                    Finish: East Point Lighthouse (Elmira, PEI)
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="registration" className="bg-white py-16">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight">Registration</h2>
            <Separator className="my-6 bg-red-700" />
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-bold">Pricing</h3>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Cycling PEI, Cycling NS and Velo NB members: $60 per rider
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Non-members/ all other riders: $70 per rider</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Tracking Fees: $30+ USD (see details below)</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm italic">
                  *For those entering the pairs category, please register
                  individually and indicate the name of your teammate on the
                </p>
              </div>
              w
              <div className="flex flex-col justify-center space-y-4">
                <Button className="bg-red-700 hover:bg-red-800">
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeKmuqfYM1VoWxSGpRN8ki75qZbezTKQVZp_a6ToLU7zF07Mw/viewform?usp=preview">
                    Click here to register
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link
                    href="https://form.jotform.com/followmychallengeusa/pei-mussel-tear"
                    target="_blank"
                  >
                    Click here to secure tracking device or mapping service
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="rules" className="bg-red-50 py-16">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight">Race Rules</h2>
            <Separator className="my-6 bg-red-700" />
            <div className="prose max-w-none">
              <p>
                This is a self-supported event which means no outside support is
                allowed. Any supplies, accommodation or assistance required on
                route must be available to all riders.
              </p>
              <br />
              <p>
                Riders will be provided with the official racecourse GPX file
                one week prior to the start date. It should be uploaded to your
                GPS device (Garmin, Wahoo, etc) and followed from tip to tip. If
                riders must deviate from course for any reason, they must
                re-enter the course at the point they exited. A draft of the
                course is available at the following link* but is subject to
                change prior to race day. Riders must finish the race in the
                category in which they entered (i.e. solo or pairs).
              </p>
              <br />
              <p>
                The following list is required at the start line to participate:
                headlight, tail light, GPS device, cell phone and a portable
                charger to support the listed items. All riders will also
                require a tracking device (available to rent from Follow My
                Challenge USA) if unable to provide your own.
              </p>
              <br />
              <p>
                *Draft Course:{" "}
                <Link
                  href="https://ridewithgps.com/routes/48965739"
                  className="text-red-700 hover:underline"
                  target="_blank"
                >
                  https://ridewithgps.com/routes/48965739
                </Link>
              </p>
            </div>
          </div>
        </section>

        <section id="tracker" className="bg-white py-16">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight">
              Tracker Information
            </h2>
            <Separator className="my-6 bg-red-700" />
            <div className="prose max-w-none">
              <p>
                All tracking and mapping is organized by Follow My Challenge, a
                third party organization that provides tracker rentals and
                mapping services for events of this nature. A tracker is
                required to participate. If you are supplying your own tracking
                device (SPOT, Garmin InReach) there is mapping fee of $30 USD.
                If you require a rental tracking device, there is a fee of $80
                USD which includes both the device and mapping fee.
              </p>
              <br />
              <p>
                Prices are determined by Follow My Challenge and they are happy
                to answer any questions you may have regarding their services.
                Payment is made directly through the company at the link above.
                Please note, this is separate from the registration fee.
              </p>
              <br />
              <p>
                Anyone requiring a rental tracking device will be able to simply
                pick it up at the start line and leave it at the finish line –
                we'll take care the rest.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-red-900 py-8 text-white">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold">PEI Mussel Tear</h3>
              <p className="mt-1 text-sm">
                Prince Edward Island's first ultra-endurance cycling race
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm">
                Please email{" "}
                <a
                  href="mailto:peimusseltear@gmail.com"
                  className="underline hover:text-red-200"
                >
                  peimusseltear@gmail.com
                </a>{" "}
                with any questions.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
