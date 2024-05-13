import React from "react";
import Ephemo from "./Ephemo";

export default function Main() {
  // TODO: get ephemos from API
  const ephemos = [
    "Today's sunrise painted the sky in hues of gold, igniting a spark of hope within. Amidst life's chaos, nature's beauty reminds me to cherish each moment.",
    "The weight of expectations bears heavy on my shoulders. Yet, amidst the doubts, I find solace in small victories. Progress, not perfection, guides my path.",
    "Navigating turbulent seas, our ship battles fierce winds and crashing waves. Yet, with unwavering resolve, we sail forth, bound by the promise of distant shores.",
    "Each data point unveils a glimpse of the greater truth, yet mysteries linger in the uncharted territories of knowledge. With each discovery, the quest for understanding deepens.",
    "Words dance upon the page, weaving tales of love, loss, and the human condition. In the silence of creation, I find sanctuary, painting the canvas of existence with ink and emotion.",
    "Beneath foreign skies, I wander, a nomad in search of fleeting moments and everlasting memories. Each step carries me closer to the heart of adventure, where the world becomes my home.",
    "In the laboratory's embrace, I unravel the secrets of the universe, one experiment at a time. Amidst the equations and hypotheses, curiosity fuels the fire of discovery.",
    "In the realm of dreams, imagination reigns supreme. Here, I soar on wings of fantasy, exploring landscapes born from the depths of my mind. Reality fades, and possibility knows no bounds.",
    "With sweat upon my brow and determination in my heart, I push beyond the limits of my endurance. Each step, each breath, brings me closer to the pinnacle of achievement.",
    "Amongst the petals and leaves, I find solace in the rhythm of nature's symphony. Through nurturing hands, life flourishes, and in the garden's embrace, I find peace.",
    "In the annals of time, echoes of the past linger, whispering tales of triumph and tragedy. With each page turned, I journey through the corridors of history, seeking to understand the tapestry of human experience.",
    "With brush in hand, I breathe life into blank canvases, weaving dreams into reality. Each stroke tells a story, each color a symphony of emotion, as creativity flows from heart to hand.",
    "In the stillness of the present moment, I find serenity amidst life's chaos. With each breath, I journey inward, exploring the depths of consciousness and embracing the essence of being.",
    "Amidst the questions that linger in the depths of existence, I seek truth and meaning. Through contemplation and introspection, I navigate the labyrinth of thought, in pursuit of enlightenment.",
    "In the laughter of children and the warmth of family, I find joy beyond measure. Amidst the chaos of parenthood, love remains the guiding light, illuminating the path forward.",
  ];
  return (
    <main>
      {ephemos.map((ephemo) => (
        <Ephemo message={ephemo} />
      ))}
    </main>
  );
}
