"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroBillboardTestimonial from "@/components/sections/hero/HeroBillboardTestimonial";
import FeatureCardOne from "@/components/sections/feature/FeatureCardOne";
import ProductCardFour from "@/components/sections/product/ProductCardFour";
import TestimonialCardSix from "@/components/sections/testimonial/TestimonialCardSix";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import { Coffee, Star, UtensilsCrossed, Heart, MapPin } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="medium"
      sizing="large"
      background="grid"
      cardStyle="gradient-mesh"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="ZASTÁVKA"
          navItems={[
            { name: "Zážitek", id: "experience" },
            { name: "Menu", id: "menu" },
            { name: "O nás", id: "about" },
            { name: "Kontakt", id: "contact" },
          ]}
          button={{ text: "Rezervace", href: "#contact" }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardTestimonial
          title="Vaše nejchutnější zastávka v srdci Příbrami"
          description="Zastavte se na výbornou kávu, skvělé snídaně a domácí pečivo. Pozůstaňte pro atmosféru, která vás očaruje."
          background={{ variant: "sparkles-gradient" }}
          tag="Moderní Gastronomie"
          tagIcon={Coffee}
          imageSrc="http://img.b2bpic.net/free-photo/table-chairs-bar_107420-65857.jpg"
          imageAlt="ZASTÁVKA - Útulné interiéry kavárny"
          mediaAnimation="blur-reveal"
          testimonials={[
            {
              name: "Pavlína Č.",              handle: "Stamgast",              testimonial: "Krásné prostředí a výborná káva. Rozhodně doporučuji.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiley-businesswoman-using-sign-language-outdoors-work_23-2148740316.jpg?_wi=1",              imageAlt: "Pavlína Č."},
            {
              name: "Lucie V.",              handle: "Návštěvnice",              testimonial: "Úžasné jídlo, steak mix – úžasná kombinace chutí a velká porce. Celkově úžasná večeře.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/shot-beautiful-young-businesswoman-wearing-blue-chiffon-shirt-while-standing-posing-gray-marble-wall_158595-6763.jpg?_wi=1",              imageAlt: "Lucie V."},
            {
              name: "Marek S.",              handle: "Podnikatel",              testimonial: "Příjemné místo, milá obsluha, dobré pití a jídlo. Bonusem je parkování ve dvoře.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-confident-businessman-portrait_158595-2939.jpg?_wi=1",              imageAlt: "Marek S."},
          ]}
          buttons={[
            { text: "Objednat si", href: "#menu" },
            { text: "Více informací", href: "#experience" },
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="experience" data-section="experience">
        <FeatureCardOne
          title="Zážitek v Zastávce"
          description="Každá návštěva je více než jen jídlo – je to chvíle pro sebe, prostor pro setkání a paměť na chuť."
          tag="Naše Hodnoty"
          tagIcon={Star}
          features={[
            {
              title: "Gastronomie na Úrovni",              description: "Od snídaní s domácím pečivem přes skvělé steaky až po sladké zákusky. Každý kousek je příprava s láskou.",              imageSrc: "http://img.b2bpic.net/free-photo/round-piece-traditional-russian-food-with-oily-sauce-slice-lemon-top_114579-1542.jpg",              imageAlt: "Qualitní jídlo - toasty, vejce, zákusky"},
            {
              title: "Atmosféra a Design",              description: "Moderní, útulné a čisté prostředí. Místo, kde se lidé zastaví během cesty nebo si užijí klidné chvíle.",              imageSrc: "http://img.b2bpic.net/free-photo/modern-cool-meeting-room_53876-153295.jpg",              imageAlt: "Interiér ZASTÁVKY - čisté a stylové"},
            {
              title: "Rychlá a Milá Obsluha",              description: "Tým, který vás přivítá s úsměvem a postaví se o vás. Kvalita a osobnost v každém kontaktu.",              imageSrc: "http://img.b2bpic.net/free-photo/handsome-men-restaurant_1157-45749.jpg",              imageAlt: "Profesionální tým ZASTÁVKY"},
            {
              title: "Parkování ve Dvoře",              description: "Praktické řešení pro automobilisty. Bezpečné parkování během vašeho pobytu u nás.",              imageSrc: "http://img.b2bpic.net/free-photo/emergency-mechanic-repairing-young-woman-vehicle-street_651396-2801.jpg",              imageAlt: "Parkování ve dvoře"},
          ]}
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardFour
          title="Naše Nabídka"
          description="Pečlivě vybrané ingredience a tradiční recepty. Každý pokrm je výběrem naší vášně pro dobré jídlo."
          tag="Menu"
          tagIcon={UtensilsCrossed}
          products={[
            {
              id: "1",              name: "Avokádový Toast s Vejcem",              price: "180 Kč",              variant: "Snídaně | Vegansky přizpůsobeno",              imageSrc: "http://img.b2bpic.net/free-photo/healthy-breakfast-sandwich-crisp-bread-with-guacamole-tomatoes-wooden-table_2829-5054.jpg",              imageAlt: "Avokádový toast s vejcem"},
            {
              id: "2",              name: "Croissant se Smetanou a Džemem",              price: "95 Kč",              variant: "Pečivo | Domácí výroba",              imageSrc: "http://img.b2bpic.net/free-photo/caucasian-traditional-pastry-qogal-wooden-cutting-board_114579-11993.jpg",              imageAlt: "Čerstvý croissant"},
            {
              id: "3",              name: "Steak Mix Premium",              price: "420 Kč",              variant: "Hlavní Jídlo | Večeře",              imageSrc: "http://img.b2bpic.net/free-photo/steak-with-vegetables_181624-989.jpg",              imageAlt: "Premium steak mix s přílohou"},
            {
              id: "4",              name: "Domácí Limonáda",              price: "65 Kč",              variant: "Nápoj | Přírodní ingredience",              imageSrc: "http://img.b2bpic.net/free-photo/top-view-lemonade-glasses-arrangement_23-2148037116.jpg",              imageAlt: "Čerstvá domácí limonáda"},
            {
              id: "5",              name: "Makrónky - Mix Příchutí",              price: "120 Kč",              variant: "Sladké | Sada 3 kusů",              imageSrc: "http://img.b2bpic.net/free-photo/dessert-with-ice-cream-jam-mint-side-view_141793-4402.jpg",              imageAlt: "Barevné makrónky v různých příchutích"},
            {
              id: "6",              name: "Výběrová Káva Espresso",              price: "85 Kč",              variant: "Nápoj | Kvalitní pražení",              imageSrc: "http://img.b2bpic.net/free-photo/young-woman-drinking-iced-coffee_23-2149624096.jpg",              imageAlt: "Latte art v šálku"},
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="Co si o nás myslí naši hosté"
          description="Autentické zkušenosti od lidí, kteří si ZASTÁVKU zamilovali."
          tag="Recenze"
          tagIcon={Heart}
          testimonials={[
            {
              id: "1",              name: "Pavlína Č.",              handle: "Místní podnikatelka",              testimonial: "Krásné prostředí a výborná káva. Rozhodně doporučuji. Je to má nová oblíbená zastávka na cestě do práce!",              imageSrc: "http://img.b2bpic.net/free-photo/smiley-businesswoman-using-sign-language-outdoors-work_23-2148740316.jpg?_wi=2",              imageAlt: "Pavlína Č."},
            {
              id: "2",              name: "Lucie V.",              handle: "Návštěvnice z Příbrami",              testimonial: "Úžasné jídlo, steak mix – úžasná kombinace chutí a velká porce. Celkově úžasná večeře. Vrátím se určitě!",              imageSrc: "http://img.b2bpic.net/free-photo/shot-beautiful-young-businesswoman-wearing-blue-chiffon-shirt-while-standing-posing-gray-marble-wall_158595-6763.jpg?_wi=2",              imageAlt: "Lucie V."},
            {
              id: "3",              name: "Marek S.",              handle: "Cestovatel",              testimonial: "Příjemné místo, milá obsluha, dobré pití a jídlo. Bonusem je parkování ve dvoře. Skvělý poměr ceny a kvality.",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-confident-businessman-portrait_158595-2939.jpg?_wi=2",              imageAlt: "Marek S."},
            {
              id: "4",              name: "Jana K.",              handle: "Milovnice dobrého jídla",              testimonial: "Pohodová kavárnička se vším dobrým, co se vyžaduje. Milé posezení u výborné kávy a domácí limonády.",              imageSrc: "http://img.b2bpic.net/free-photo/smiley-woman-bench_23-2148574708.jpg",              imageAlt: "Jana K."},
            {
              id: "5",              name: "Tomáš H.",              handle: "Pravidelný zákazník",              testimonial: "Čistota jako zrcadlo, káva jako v Itálii a personál s úsměvem. ZASTÁVKA je opravdu speciální místo.",              imageSrc: "http://img.b2bpic.net/free-photo/view-smiling-albino-athlete-relaxing-city_637285-8248.jpg",              imageAlt: "Tomáš H."},
            {
              id: "6",              name: "Alena P.",              handle: "Seniorka z okolí",              testimonial: "Vždy se tady cítím vítaná. Jídlo je skvělé, a hlavně – hygienické jako v nemocnici. Chválím!",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-old-person-portrait_23-2149254404.jpg",              imageAlt: "Alena P."},
          ]}
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={true}
          speed={40}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Oblíbeno v Příbrami a okolí"
          description="ZASTÁVKA je místem, kde se setkávají místní podnikatelé, rodiny a cestovatelé."
          tag="Komunita"
          textboxLayout="default"
          useInvertedBackground={false}
          names={[
            "Místní Podnikatelé",            "Rodinné Skupiny",            "Cestovatelé",            "Studenti",            "Senioři",            "Páry",            "Firemní Týmy",            "Cyklisté"]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Kontakt a Rezervace"
          title="Chcete se zastavit?"
          description="Napište nám nebo se na nás obraťte přímo. Těšíme se na vás v ZASTÁVCE na Mariánské 135 v Příbrami!"
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          tagIcon={MapPin}
          inputPlaceholder="Vaše jméno..."
          buttonText="Pošli nám zprávu"
          termsText="Kontaktujeme vás během 24 hodin. Vaše data si bezpečně uchovávame."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="ZASTÁVKA"
          columns={[
            {
              items: [
                { label: "O Kavárně", href: "#experience" },
                { label: "Naše Menu", href: "#menu" },
                { label: "Recenze Hostů", href: "#testimonials" },
              ],
            },
            {
              items: [
                {
                  label: "Adresa",                  href: "https://maps.google.com/?q=Mariánská+135,+Příbram"},
                { label: "Telefon", href: "tel:+420313623456" },
                { label: "Email", href: "mailto:info@zastavka-pribram.cz" },
              ],
            },
            {
              items: [
                { label: "Otevírací Doba", href: "#" },
                {
                  label: "Sociální Sítě",                  href: "https://facebook.com/zastavka.pribram"},
                { label: "Rezervace", href: "#contact" },
              ],
            },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
