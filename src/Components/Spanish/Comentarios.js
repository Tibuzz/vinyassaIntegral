import React from 'react';

export function Comentarios() {

  const comentarios = [
    {
      content: "Roberto Partida is a radiant person, and this quality naturally and organically manifests in his yoga classes. Technically, Roberto is a master, but his teaching and practice go far beyond technique. He breathes light and life into his classes which go far beyond poses or philosophy. Roberto seems to express caring and compassion naturally in his words, gestures, and instructions. The only bad thing in my experience of having yoga classes with Roberto is that almost every other class becomes a disappointment by comparison. If you have the chance to practice with Roberto Partida, take it.",
      name: "Scott Ezell, USA"
    },
    {
      content: "Practicar yoga con Roberto ha sido una experiencia que me ha hecho contactar tan profundamente con lo que significa la práctica y lo importante que es darnos un tiempo diario para alinearnos y limpiar a nuestro ser, que después de trabajar con él, como guía, he decidido seguir sus pasos para expandir mi conocimiento y experiencia sobre esta ergonomía milenaria volviéndome instructora de yoga. El estilo de practicar de Roberto es gentil, sutil y muy sabio. Recomiendo a cualquier persona que busque iniciarse en este estilo de vida o quiera inspirarse para realizar una práctica orientada a una sanación interna honda que se acerque a un ser de luz como lo es Roberto. Él canaliza su experiencia filosófica, artística y física en cada encuentro y trasmite los valores del yoga más bellos con su actuar.",
      name: "Carla, México"
    },
    {
      content: "Roberto es un maestro increíble, he practicado yoga por más de 5 años y tomado muchas clases en distintos lugares y me atrevo a decir que no he encontrado mejores clases que las de Roberto. Durante los 6 meses de clases que tomé con él, logré superarme en mis asanas, en la meditación, en mi fluidez en yoga, y eso se vió reflejado en mi vida en general. Siempre estaré agradecida con Roberto. Me encanta que en sus clases siempre transmite tranquilidad, paciencia, confianza y al mismo tiempo fuerza, maestros como él es difícil de encontrar.",
      name: "Marcela, México"
    },
    {
      content: "Roberto è quello che si può definire un vero maestro, nella pratica, nella vita e nell’infinita dolcezza e accoglienza che trasmette. Praticare guidati da lui è un esperienza ricca di tecnica, precisione ed emozionante spiritualità. Una volta mi è stato detto di ringraziare i miei maestri durante una meditazione, Roberto è sicuramente uno di loro.",
      name: "Kiara, Italia"
    },
    {
      content: "Roberto mi ha sorpreso per la semplicità con la quale arriva al dettaglio. In quella semplicità, in quel modo diretto di insegnare riesce ad arrivare al cuore della pratica e risvegliare la consapevolezza altrui sul respiro e su asana che prima di allora il tuo corpo non riusciva a percepire. Raro caso di insegnante, vero, reale.",
      name: "Francesco, Italia"
    },
    {
      content: "Tomar clases con Roberto es una experiencia dulce y a la vez exigente, por un lado, me permitió sentirme en autocuidado y por otro lado, me planteaba desafíos interesantes que me hacían avanzar en mi práctica. Lo recomiendo ampliamente como maestro, estará atento, presente y es un maravilloso ser humano.",
      name: "Nadiafna, Venezuela"
    },
    {
      content: "Roberto was my first yoga teacher to introduce me to true yoga. Before practicing with Roberto I didn’t understand why breathing was important; I spent classes planning my day and measuring my body to others around me. Practicing under Robertos guidance challenged me in new ways, he taught me to find comfort in stillness and integrity in my practice. I am forever grateful for his calming energy and love for yoga – it carries on in his students. Thank you for the gift of true yoga .",
      name: "Nellie, New Zeland"
    },
    {
      content: "Roberto is truly the most wonderful yoga teacher I’ve ever worked with. His classes are challenging but welcoming – he meets his students exactly where they are and helps them to deepen their practice in whatever way they need, regardless of their level of experience with yoga. He is sensitive and warm, always aware of his students’ individual needs and happy to offer assistance. In class, it’s clear that Roberto cares deeply about his practice and takes it very seriously, and yet he is also able to be goofy and light-hearted. Through my work with Roberto, I was able to find moments of that real yogic connection between mind and body. He helped me greatly.",
      name: "Lizzie, USA"
    },
    {
      content: "Roberto is a truly talented and heartfelt teacher. I have recently discovered his classes and am filled with wonder and gratitude every time I attend. His presence and love make me feel very supported, and his guidance takes me to places within myself I have never been to before. I am a yoga teacher myself, and have been a practitioner for many years, yet I find myself sincerely humbled and at peace when I practice under him. If you are thinking about training, this is the man to teach you: you will be very lucky.",
      name: "Josephine, ENGLAND"
    }
  ];

  const comments = comentarios.map((comentario, i) =>{ 
    return (
      <div className='comments' key={i}>
       <p className='contenu'>{comentario.content}</p>
       <p className='name'>{comentario.name}</p>
      </div>
     )
    });

     
  //const names = comentarios.map(comentario => <li className='name' key={comentario.name}>{comentario.name}</li>)
  
    return (
      <div className='comentarios' id="comentarios">
        <h2>Comentarios</h2>
        <div className='commentsDiv'>
        {comments}
        </div>
      </div>
    )
 
}