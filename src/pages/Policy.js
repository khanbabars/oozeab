import React from "react";
import Container from 'react-bootstrap/Container';
import { NavLink } from "react-router-dom";
import logos from "../images/ooze.PNG";
import Footer from "../components/Footer";
import { CookieConsentPage } from "../components/CookieConsentPage";

export const Policy = () => {
  return (
    <React.Fragment>
      <NavLink to="/">
        &nbsp; &nbsp;
        <img
          src={logos}
          style={{
            paddingTop: "23px",
            height: "73px",
            width: "116px",
            paddingLeft: "5px",
          }}
          alt="logo_photo_assigment"
        />
      </NavLink>
      <br /> <br />
      <hr />
      <Container className="text-left my-5">
        <div>
          <br />
          <h3>Personuppgiftspolicy</h3>
          <br />
          <p
            style={{
              paddingLeft: "20px",
              paddingTop: "10px",
              fontSize: "15px",
              color: "black",
              display: "inline-block",
              textAlign: "left",
            }}
          >
            Ooze AB har antagit följande personuppgiftspolicy i egenskap av
            personuppgiftsansvarig för anställdas/konsulter:s personuppgifter.
            Denna personuppgiftspolicy ger information om insamling, behandling,
            lagring och delning av personuppgifter avseende individuellt
            identifierbara anställda och konsulter. <br />
            Vi på Ooze lägger största vikt att all behandling utförs med
            beaktande av alla grundläggande principer i dataskyddsförordningen.
            I ansvaret ligger att uppgifterna <br /> <br />
            samlas in för särskilda, uttryckliga och berättigade ändamål <br />
            är adekvata, relevanta och inte för omfattande <br />
            korrekta och uppdaterade <br />
            inte förvaras längre än nödvändigt <br />
            behandlas på ett säkert sätt. <br />
            <br />
            <h3>Uppgifter som behandlas</h3>
            För att kunna fullgöra sina rättigheter och bevaka sina skyldigheter
            enligt anställningsavtal, tillhörande tillämpliga kollektivavtal och
            författningar, kommer OOze som uppdragsgivare att behandla den
            anställdes/konsulters personuppgifter i form av
            <br />
            <br />
            namn, personnummer, kontaktuppgifter, bild
            <br />
            anställningstid, anställningsform
            <br />
            betyg, erfarenheter, utveckling
            <br />
            övriga sådana uppgifter som är nödvändiga och relevanta för att Ooze
            ska kunna uthyra konsulter i särskilda kompetensområde
            <br />
            <br />
            <h3>Rättsliga grunden för behandlingen</h3>
            Den rättsliga grunden för behandling av uppgifter är{" "}
            <b>fullgörande av anställningsavtal</b>, och de på
            anställningsförhållandet tillämpliga kollektivavtalen eller andra
            bestämmelser eller till följd av lag eller rättsliga förpliktelser
            till exempel i förhållande till Skatteverket eller försäkringsbolag.
            Behandling av personuppgifter i Ooze kan också åvila på den
            rättsliga grunden<b> (berättigat intresse) intresseavvägning</b> när
            vi till exempel skickar uppgifter på våra konsulkter till tredje
            part i affärsupphandlingar.
            <br />
            <br />
            <h3>Ändamål med uppgifter</h3>
            Rekrytering, kompetensutveckling, karriärplanering och utveckling,
            uthyrning av konsulter <br />
            intern arbetsledning, planering och hantering av arbetsstyrkan,
            behov av och tillgång till olika resurser, projektbemanning och
            resursallokering <br />
            finansiell planering, rapportering, upprättande av budget och analys{" "}
            <br />
            <br />
            <br />
            <h3>Mottagare av uppgifter</h3>
            Uppgifterna kan lämnas ut till andra bolag inom koncernen Ooze.
            Dessutom kan personuppgifter lämnas ut till tredje part och
            myndigheter för följande syfte
            <br />
            <b>Till myndigheter:</b> om Ooze anser att skydda sina egna eller
            tredje parts intresse kan uppgifterna lämnas ut i följd av
            förpliktelse.
            <br />
            <b>Till tredje part:</b> uppgifter kan lämnas ut till tredje part
            eller kunder i samband med affärsupphandling, för att uppvisa
            kompetens i speciella området.
            <br />
            <br />
            <br />
            <h3>Lagring- och gallringstid</h3>
            I Ooze lagras och behandlas anställdes eller konsulters uppgifter så
            länge som det är nödvändigt i förhållande till de ändamål som
            uppgifterna insamlats för. För att fullgöra sina förpliktelser
            enligt avtal och uppfylla skyldigheter enligt bokföringslagen sparar
            vi uppgifter på anställda. <br />
            Eftersom Ooze har skyldighet att gallra vissa uppgifter i samband
            med att anställningen avslutas, därför raderas vissa uppgifter i
            samband med avslutad anställning efter 2 år. <br />
            <br />
            <b>Dina rättigheter</b>
            <br />
            Få tillgång till sina personuppgifter
            <br />
            Kräva rättelse av sina personuppgifter
            <br />
            Kräva behandling av uppgifter begränsas <br />
            eller <br />
            få sina uppgifter raderad som behandlas av Ooze i enlighet med de
            rättigheter som följer lagstiftning om dataskydd.
            <br />
            <b>OBS:</b> Dessa rättigheter kan begränsas av andra bestämmelser i
            dataskyddslagstiftningen eller om ett sådant krav skulle vara
            olämplig i ett enskilt fall.
            <br />
            <br />
            <h3>Kontaktinformation</h3>
            Ooza AB, Org. nr. 559256-6383 är personuppgiftsansvarig för
            behandlingen av dina personuppgifter och ansvarar för behandlingen
            av uppgifter sker i enlighet med gällande dataskyddslagstiftning.
            <br />
            <br />
            <h3>Frågor?</h3>
            <b>Har du generella frågor så kan du ställa dem till oss</b> <br />
            DSO (Dataskyddsombud) Shazib Saleem Warraich(0700679299)
          </p>
        </div>
      </Container>
      <CookieConsentPage />
      <Footer />
    </React.Fragment>
  );
};
