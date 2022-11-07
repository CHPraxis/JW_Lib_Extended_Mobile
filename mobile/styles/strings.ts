import LocalizedStrings from "react-native-localization";

const localStrings = {
    en: {
      hello: "Hello!",
      goodMorning: "Good morning",
      LiveStreams: "Live Streams",
      News: "News",
      Clips: "Clips",
      Questions: "Questions",
      PraxisPick: "Praxis' Picks",
      Podcast: "Podcasts",
      Upcoming: "Upcoming",
    },
    es: {
      hello: "¡Hola!",
      goodMorning: "Buenos días",
      LiveStreams: "Live Streams espanol",
      News: "News",
      Clips: "Clips",
      Questions: "Questions",
      PraxisPick: "Praxis' Picks",
      Podcast: "Podcasts",
     // Upcoming: "Upcoming",
    }
  };
  
  export const strings = new LocalizedStrings({
    en: localStrings.en,
   // es: localStrings.es,
   //or:  ...localStrings
  });
  