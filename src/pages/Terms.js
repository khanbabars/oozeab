import React from "react";
import { MDBContainer } from "mdbreact";
import { NavLink } from "react-router-dom";
import logos from "../images/ooze.PNG";
import Footer from "../components/Footer";
import { CookieConsentPage } from "../components/CookieConsentPage";

export const Terms = () => {
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
      <MDBContainer className="text-left my-5">
        <div>
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
            
            <h3>Äganderätt</h3>
            Produkten av det arbete som konsulten utför tillfaller kunden såvida
            inget annat avtalats.
            <br />
            <br />
            <h3>Utförande</h3>
            Uppdraget skall utföras med omsorg och på ett fackmannamässigt sätt.
            Konsulten representerar Ooze ab och skall uppträda professionellt
            och tillgodose bolagets affärsintressen hos slutkund/
            uppdragsgivare/samarbetspartner.
            <br />
            <br />
            <h3>Försäkring</h3>
            Leverantören förbinder sig att teckna konsultansvarsförsäkring.
            Leverantören skall vara beställaren behjälplig med uppgifter om
            denne önskar kontrollera att konsultansvarsförsäkring tecknats.
            <br />
            <br />
            <h3>Ersättning</h3>
            Ersättningen för uppdraget framgår av konsultavtalet. Ersättningen
            anges exklusive mervärdesskatt men inklusive kostnader för pension,
            semester och övriga förmåner. Om annan ersättning än löpande
            ersättning utgår framgår detta av konsultavtalet.
            <br />
            <br />
            <h3>Ansvar</h3>
            Leverantören ansvarar fullt ut för skada som han åsamkat
            beställaren, dock med följande undantag: Skada som beror på
            oavsiktlig förlust av data. Skada som beror på beställaren. Skada
            som beror på omständigheter utanför leverantörens kontroll. Skada
            hos tredje man. Beställarens rätt till skadestånd förfaller om han
            inte framställer krav på ersättning utan dröjsmål från det att han
            blev varse om skadans fulla omfattning.
            <br />
            <br />
            <h3>Skatter och avgifter</h3>
            Leverantören garanterar genom att denna inte är i dröjsmål med
            betalning av lagstadgade skatter och avgifter. Om sådant dröjsmål
            skulle uppkomma under avtalstiden förbinder sig leverantören att
            varsko beställaren om detta med omedelbar verkan.
            <br />
            <br />
            <h3>Force Majeure</h3>
            Om någon parts fullgörande av avtalet hindras av omständighet som
            kan anses utgöra force majeure, och parten skäligen inte kunnat
            räkna med, undvikit eller övervunnit denna, utgör detta en
            befrielsegrund för skadeståndsansvar enligt detta avtal.
            <br />
            <br />
            <h3>Tvist</h3>
            Tvist med anledning av detta avtal skall avgöras av skiljemän, i
            Stockholm, enligt svensk lag. Om värdet av det yrkade beloppet
            uppenbart inte överstiger 50 gånger det vid tiden för avtalsbrottet
            gällande prisbasbeloppet skall tvisten istället avgöras av en ensam
            skiljeman i Stockholm. Skiljemannen skall på parts begäran utses av
            Stockholms Handelskammare.
            <br/> <br/>

          </p>
        </div>
      </MDBContainer>
      <CookieConsentPage />
      <Footer />
    </React.Fragment>
  );
};
