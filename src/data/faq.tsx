import React from 'react';
import { FAQItem } from '../types';

export const faqData: FAQItem[] = [
  {
    question: 'Wann und wo findet das Wild Woods Open Air statt?',
    answer: (
      <>
        Das Wild Woods Open Air findet am 10. August 2024 ab 20 Uhr im Sommerkeller in Ellingen statt.
        <br />
        <a 
          href="https://maps.app.goo.gl/mKF66vzktzDdiamK6" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#d8a12c] hover:underline"
        >
          Standort auf Google Maps
        </a>
      </>
    )
  },
  {
    question: 'Ab welchem Alter ist das Open Air?',
    answer: 'Unsere Veranstaltungen sind ausnahmslos für Erwachsene. Du kannst unsere Open Airs (Sonnendeck & Wild Woods) ab 18 Jahren besuchen.'
  },
  {
    question: 'No-Gos',
    answer: 'Als deutliches Zeichen gegen Rassismus, Gewalt, Antisemitismus sowie jegliche Art der Diskriminierung ist es verboten, Kleidung zu tragen, deren Aufschrift oder Marke geeignet ist, Personen aufgrund ihrer Hautfarbe, Religion, Herkunft, Geschlechts oder sexuellen Orientierung zu diffamieren. Ebenso ist es verboten, sich auf eine Weise zu verhalten, die andere aufgrund ihrer Hautfarbe, Religion, Herkunft, Geschlechts oder sexuellen Orientierung diffamiert oder diskriminiert. Personen, die gegen diese Vorschriften verstoßen, wird nicht nur der Zugang zum Veranstaltungsgelände verwehrt, sondern sie müssen auch die Veranstaltung verlassen. Dies gilt auch für Besucher, die offensichtlich unter dem Einfluss von Alkohol und Drogen stehen.'
  },
  {
    question: 'Welche Gegenstände sind auf dem Gelände verboten?',
    answer: (
      <>
        Bei unseren Open Airs sind folgende Gegenstände verboten und dürfen nicht mitgebracht werden:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Waffen und grundsätzlich alle Gegenstände, die potenziell einen Menschen verletzen könnten</li>
          <li>Jegliche Getränke und Essen</li>
          <li>Tiere</li>
          <li>Drogen</li>
          <li>Taschen größer als A4</li>
          <li>Sprays</li>
        </ul>
        <p className="mt-3">
          Handykameras, einfache Digitalkameras und GoPros sind erlaubt. Professionelle Spiegelreflexkameras, Drohnen und gewerbliche Aufnahmen sind nicht erlaubt und müssen beim Veranstalter angemeldet werden.
        </p>
      </>
    )
  },
  {
    question: 'Wie bekomme ich Tickets?',
    answer: 'Tickets kannst Du online auf unserer Website kaufen. Ob es eine Abendkasse am Eventtag gibt, hängt vom Vorverkauf ab.'
  },
  {
    question: 'Wie komme ich zum Open Air?',
    answer: (
      <>
        Es gibt mehrere Möglichkeiten:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Bus-Shuttle-Service vom Busbahnhof in Weißenburg (gegenüber vom Café Pips)</li>
          <li>
            Zug zum Ellinger Bahnhof (ca. 20 Minuten Fußweg) - 
            <a 
              href="https://maps.app.goo.gl/tJiquJHBxyUysVhh7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#d8a12c] hover:underline ml-1"
            >
              Route anzeigen
            </a>
          </li>
          <li>Mit dem Auto</li>
        </ul>
      </>
    )
  },
  {
    question: 'Gibt es Parkmöglichkeiten?',
    answer: 'Ja, es gibt Parkmöglichkeiten in der Nähe des Veranstaltungsgeländes. Diese sind begrenzt verfügbar. Wir empfehlen das Nutzen unseres Shuttlebusses.'
  },
  {
    question: 'Kann ich auf dem Gelände übernachten?',
    answer: 'Übernachtungsmöglichkeiten auf dem Gelände sind nicht vorhanden. Bitte plane Deine Rückreise im Voraus.'
  },
  {
    question: 'Gibt es Essen und Trinken vor Ort?',
    answer: 'Ja, es gibt Essens- und Getränkestände auf dem Gelände. Zusätzlich bieten wir exklusive Getränkepakete an, die Du online vorab buchen kannst.'
  },
  {
    question: 'Was passiert bei schlechtem Wetter?',
    answer: 'Keine Sorge, wir haben an alles gedacht! Das Wild Woods Open Air findet auch bei regnerischem Wetter statt. Sollte das Wetter nicht mitspielen, werden wir zusätzliche überdachte Flächen bereitstellen, damit Du weiterhin das Open Air genießen kannst. Es gibt bereits einige gemütliche überdachte Bereiche, und wir haben vorgesorgt, um bei Bedarf das Gelände teilweise zu überdachen. Schließlich wollen wir, dass Du eine großartige Zeit hast – bei Sonne oder Regen. Kleide Dich einfach entsprechend, und wir kümmern uns um den Rest!'
  },
  {
    question: 'Informationen für Gäste mit Handicap',
    answer: (
      <>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Wenn in deinem Schwerbehindertenausweis ein "B" steht, ist der Eintritt für dich und eine Begleitperson kostenlos. 
            Ihr müsst euch nur mit Namen und Adresse bei{' '}
            <a 
              href="mailto:management@wildwoods-festival.de" 
              className="text-[#d8a12c] hover:underline"
            >
              management@wildwoods-festival.de
            </a>{' '}
            vor Eventbeginn anmelden.
          </li>
          <li>Medikamente dürfen mitgebracht werden, wenn sie medizinisch notwendig sind und ein ärztlicher Nachweis vorliegt.</li>
          <li>Leider können wir wegen der örtlichen Gegebenheiten keine speziellen Plätze für Schwerbehinderte anbieten.</li>
        </ul>
      </>
    )
  }
];
