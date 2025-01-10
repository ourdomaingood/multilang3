var langs = {
    en: {
        text1: 'This site is made for sexual contacts only. <br> Send messages to fuck later!',
        text2: 'PLEASE CONFIRM YOUR AGE',
    },
    de: {
        text1: 'Diese Seite ist nur für sexuelle Kontakte gedacht. <br> Sende Nachrichten, um später zu ficken!',
        text2: 'BITTE BESTÄTIGE DEIN ALTER',
    },
    fr: {
        text1: 'Ce site est destiné uniquement aux contacts sexuels. <br> Envoyez des messages pour baiser plus tard !',
        text2: 'VEUILLEZ CONFIRMER VOTRE ÂGE',
    },
    es: {
        text1: 'Este sitio está hecho solo para contactos sexuales. <br> ¡Envía mensajes para follar más tarde!',
        text2: 'POR FAVOR CONFIRMA TU EDAD',
    },
    it: {
        text1: 'Questo sito è destinato solo a contatti sessuali. <br> Invia messaggi per scopare più tardi!',
        text2: 'PER FAVORE CONFERMA LA TUA ETÀ',
    },
    cs: {
        text1: 'Tato stránka je určena pouze pro sexuální kontakty. <br> Posílejte zprávy, abyste si později užili sex!',
        text2: 'PROSÍM POTVRĎTE SVŮJ VĚK',
    },
    da: {
        text1: 'Denne side er kun lavet til seksuelle kontakter. <br> Send beskeder for at knalde senere!',
        text2: 'BEKRÆFT VENLIGST DIN ALDER',
    },
    nl: {
        text1: 'Deze site is alleen bedoeld voor seksuele contacten. <br> Stuur berichten om later te neuken!',
        text2: 'BEVESTIG JE LEEFTIJD ALSTUBLIEFT',
    },
    pt: {
        text1: 'Este site é feito apenas para contatos sexuais. <br> Envie mensagens para transar mais tarde!',
        text2: 'POR FAVOR CONFIRME SUA IDADE',
    },
    sl: {
        text1: 'Ta stran je namenjena samo za spolne stike. <br> Pošljite sporočila za seks kasneje!',
        text2: 'PROSIM POTRDITE SVOJO STAROST',
    },
    sk: {
        text1: 'Táto stránka je určená iba na sexuálne kontakty. <br> Posielajte správy na neskorší sex!',
        text2: 'PROSÍM POTVRĎTE SVOJ VEK',
    },
    pl: {
        text1: 'Ta strona jest przeznaczona wyłącznie do kontaktów seksualnych. <br> Wysyłaj wiadomości, aby uprawiać seks później!',
        text2: 'PROSZĘ POTWIERDŹ SWÓJ WIEK',
    },
    sv: {
        text1: 'Denna sida är endast avsedd för sexuella kontakter. <br> Skicka meddelanden för att knulla senare!',
        text2: 'VÄNLIGEN BEKRÄFTA DIN ÅLDER',
    },
    no: {
        text1: 'Dette nettstedet er kun laget for seksuelle kontakter. <br> Send meldinger for å ha sex senere!',
        text2: 'VENNLIGST BEKREFT ALDEREN DIN',
    },
    fi: {
        text1: 'Tämä sivusto on tarkoitettu vain seksuaalisiin kontakteihin. <br> Lähetä viestejä seksiä varten myöhemmin!',
        text2: 'OLE HYVÄ JA VAHVISTA IKÄSI',
    },
    ro: {
        text1: 'Acest site este făcut doar pentru contacte sexuale. <br> Trimite mesaje pentru a face sex mai târziu!',
        text2: 'VĂ RUGĂM SĂ CONFIRMAȚI VÂRSTA',
    },
    hu: {
        text1: 'Ez az oldal kizárólag szexuális kapcsolatokra készült. <br> Küldj üzeneteket későbbi szexhez!',
        text2: 'KÉRJÜK, ERŐSÍTSE MEG AZ ÉLETKORÁT',
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
    }
});