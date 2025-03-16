# Avant de commencer
Pour lancer le site, ouvrez un terminal et tapez : 
```cmd 
npm start
```
Pour accéder au site : http://localhost:3000

Les vues html se trouves dans le répertoire /views

Le fichier javascript à modifier (si besoin) : /public/javascripts/index.js

Le fichier CSS à modifier (si besoin): /public/stylesheets/style.css

# Questions

1. Nous souhaitons afficher les liens de réseaux sociaux en rouge sur fond bleu lors du survol de la souris. (temps: 5 min)
2. Nous souhaiterions valider l'email saisi dans le champs "Yout email" lorsque l'utilisateur sort du champs. Appliquer une bordure rouge sur le champs si l'email est invalide. Une variable contient une expression régulière (simpliste) pour valider l'email. (temps: 10min)
3. Nous souhaitons pouvoir suspendre le décompte en cliquant sur "Pause Countdown". Lorsque le décompte est arrêté, le bouton devient "Resume Countdown" et il apparaît en vert. Le click sur "Resume Countdown" relance le décompte, change le libelée à "Pause Countdown" et apparait en rouge (temps: 15 min)
4. Nous souhaiterions faire fonctionner l'abonnement à la newsletter. Lorsque l'utilisateur entre un email valide et clique sur le bouton "Subscribe", faire un POST sur l'api /newsletter/subscribe avec l'email dans le body et afficher un message avec le contenu de la réponse. (15 min)