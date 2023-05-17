import React from "react";

export default function Hero() {
  return (
    <div className="containerhero">
      
      <div className="bg_section1">
        <div className="container">
          <h2>Mon savoir-faire</h2>
        </div>
        <div className="one flex">
          <div className="tow flex">
            <div className="free">
              <div className="five flex">
                <img
                  className="logoreact"
                  src="/img/react.png"
                  alt="logo react"
                />
                <p>React,</p>
              </div>
              <div className="six">
                <p>
                  React est une bibliothèque JavaScript très populaire pour la
                  création d'interfaces utilisateur dynamiques et interactives.
                  <br />
                  React est conçu pour être réactif. Les interfaces utilisateur
                  créées avec React sont rapides, fluides et réactives aux
                  interactions de l'utilisateur. React est une bibliothèque
                  puissante et flexible qui permet de créer des interfaces
                  utilisateur performantes et faciles à maintenir. Son
                  architecture modulaire, son Virtual DOM, sa syntaxe JSX, sa
                  communauté active et sa réactivité en font un choix populaire
                  pour les développeurs d'applications web modernes.
                </p>
              </div>
              <div></div>
            </div>
          </div>

          <div className="tow flex">
            <div className="free ">
              <div className="five flex">
                <img src="/img/vs code.png" alt="logo pc " />
                <p> VS Code</p>
              </div>
              <div className="six">
                <p>
                  Visual Studio Code
                  <br />
                  est un éditeur de code léger, rapide et hautement
                  personnalisable qui offre de nombreuses fonctionnalités pour
                  aider les développeurs à écrire du code plus rapidement et
                  plus efficacement. Avec son intégration Git, ses outils tiers
                  et son intelligence artificielle intégrée, il est devenu un
                  choix populaire pour les développeurs de tous niveaux.
                  <br />
                  VS Code est également intégré avec de nombreux autres outils
                  de développement, tels que les environnements de développement
                  virtuels, les gestionnaires de packages, les compilateurs et
                  les débogueurs. Cela facilite l'utilisation de ces outils dans
                  un environnement de développement unifié.
                </p>
              </div>
              <div></div>
            </div>
          </div>

          <div className="tow flex">
            <div className="free ">
              <div className="five flex">
                <img src="/img/responsive.png" alt="logo css" />
                <p>Responsive</p>
              </div>
              <div className="six">
                <p>
                  Le CSS (Cascading Style Sheets) va permettre aux sites Web de
                  s'adapter dynamiquement à la taille de l'écran de l'appareil
                  sur lequel ils sont consultés. Cela permet aux utilisateurs de
                  naviguer facilement sur le site, quel que soit l'appareil
                  utilisé, et peut aider à améliorer le taux de conversion et la
                  satisfaction des utilisateurs.le CSS est un outil puissant
                  pour créer des sites Web esthétiques, réactifs et bien conçus.
                  Tel est la puissance du css.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
