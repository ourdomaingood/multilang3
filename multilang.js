var langs = {
    en: {
        text1: "This site is made for sexual contacts only. <br> Send messages to fuck later!",
        text2: "PLEASE CONFIRM YOUR AGE",
        text3: "I'm over 18 years old"
    },
    de: {
        text1: "Diese Seite ist nur für sexuelle Kontakte gedacht. <br> Sende Nachrichten, um später zu ficken!",
        text2: "BITTE BESTÄTIGE DEIN ALTER",
        text3: "Ich bin über 18 Jahre alt"
    },
    fr: {
        text1: "Ce site est destiné uniquement aux contacts sexuels. <br> Envoyez des messages pour baiser plus tard !",
        text2: "VEUILLEZ CONFIRMER VOTRE ÂGE",
        text3: "J'ai plus de 18 ans"
    },
    es: {
        text1: "Este sitio está hecho solo para contactos sexuales. <br> ¡Envía mensajes para follar más tarde!",
        text2: "POR FAVOR CONFIRMA TU EDAD",
        text3: "Tengo más de 18 años"
    },
    it: {
        text1: "Questo sito è destinato solo a contatti sessuali. <br> Invia messaggi per scopare più tardi!",
        text2: "PER FAVORE CONFERMA LA TUA ETÀ",
        text3: "Ho più di 18 anni"
    },
    cs: {
        text1: "Tato stránka je určena pouze pro sexuální kontakty. <br> Posílejte zprávy, abyste si později užili sex!",
        text2: "PROSÍM POTVRĎTE SVŮJ VĚK",
        text3: "Je mi více než 18 let"
    },
    da: {
        text1: "Denne side er kun lavet til seksuelle kontakter. <br> Send beskeder for at knalde senere!",
        text2: "BEKRÆFT VENLIGST DIN ALDER",
        text3: "Jeg er over 18 år gammel"
    },
    nl: {
        text1: "Deze site is alleen bedoeld voor seksuele contacten. <br> Stuur berichten om later te neuken!",
        text2: "BEVESTIG JE LEEFTIJD ALSTUBLIEFT",
        text3: "Ik ben ouder dan 18 jaar"
    },
    pt: {
        text1: "Este site é feito apenas para contatos sexuais. <br> Envie mensagens para transar mais tarde!",
        text2: "POR FAVOR CONFIRME SUA IDADE",
        text3: "Tenho mais de 18 anos"
    },
    sl: {
        text1: "Ta stran je namenjena samo za spolne stike. <br> Pošljite sporočila za seks kasneje!",
        text2: "PROSIM POTRDITE SVOJO STAROST",
        text3: "Sem starejši od 18 let"
    },
    sk: {
        text1: "Táto stránka je určená iba na sexuálne kontakty. <br> Posielajte správy na neskorší sex!",
        text2: "PROSÍM POTVRĎTE SVOJ VEK",
        text3: "Mám viac ako 18 rokov"
    },
    pl: {
        text1: "Ta strona jest przeznaczona wyłącznie do kontaktów seksualnych. <br> Wysyłaj wiadomości, aby uprawiać seks później!",
        text2: "PROSZĘ POTWIERDŹ SWÓJ WIEK",
        text3: "Mam ponad 18 lat"
    },
    sv: {
        text1: "Denna sida är endast avsedd för sexuella kontakter. <br> Skicka meddelanden för att knulla senare!",
        text2: "VÄNLIGEN BEKRÄFTA DIN ÅLDER",
        text3: "Jag är över 18 år gammal"
    },
    no: {
        text1: "Dette nettstedet er kun laget for seksuelle kontakter. <br> Send meldinger for å ha sex senere!",
        text2: "VENNLIGST BEKREFT ALDEREN DIN",
        text3: "Jeg er over 18 år gammel"
    },
    fi: {
        text1: "Tämä sivusto on tarkoitettu vain seksuaalisiin kontakteihin. <br> Lähetä viestejä seksiä varten myöhemmin!",
        text2: "OLE HYVÄ JA VAHVISTA IKÄSI",
        text3: "Olen yli 18-vuotias"
    },
    ro: {
        text1: "Acest site este făcut doar pentru contacte sexuale. <br> Trimite mesaje pentru a face sex mai târziu!",
        text2: "VĂ RUGĂM SĂ CONFIRMAȚI VÂRSTA",
        text3: "Am peste 18 ani"
    },
    hu: {
        text1: "Ez az oldal kizárólag szexuális kapcsolatokra készült. <br> Küldj üzeneteket későbbi szexhez!",
        text2: "KÉRJÜK, ERŐSÍTSE MEG AZ ÉLETKORÁT",
        text3: "Elmúltam 18 éves"
    }
};

$(function () {
    var langBrowser = (((navigator.language || navigator.languages) || '').split('-') || [])[0],
        param = langs[langBrowser];
    if (param == undefined) {
        param = langs['en'];
        // 'en' - default language, if you want change language, please select in object abbreviation. Example: 'fr', 'ru' etc.
    } else {
        $('.text1').html(param['text1']);
        $('.text2').html(param['text2']);
        $('.text3').html(param['text3']);
    }
});