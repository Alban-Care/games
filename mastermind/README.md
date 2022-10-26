# Mastermind

Le jeu se jouera en une manche.
Le but sera de découvrir un code de 4 couleurs en un minimum de rangée (maximum 12 rangées).

## Dérouelement

Au premier tour le joueur choisira une combianison de 4 couleurs parmis 6 (jaune, bleu, rouge, vert, blanc, noir)

- Si un ou plusieurs pions correspondent par leurs positions et leurs couleurs à ceux du code à découvrir, alors le nombre de pion placé sera affichée à gauche

- Si un ou plusieurs pions correspondent uniquement par leur couleur, alors le nombre de pion de couleur découvert sera affichée à droite du codificateur
  
- S'il n'y a aucune correspondance, 0 sera affiché dans chaque colonne.

Les autres tours se dérouleront sur le même schéma jusqu'à la victoire ou la défaite du joueur


## Variante : le "Super" Master Mind

Il existe de nombreuses variantes suivant le nombre de couleurs, de rangées ou de trous et les couleurs utilisés pour les pions.
- 8 couleurs (rouge, jaune, bleu, orange, vert, blanc, violet, rose)
- découvrir un code de 5 couleurs en 12 rangées

La variante du jeu avec 4 pions et 6 couleurs permet 6^4 = 1296 combinaisons
La variante du jeu avec 5 pions et 8 couleurs 8^5 = 32 768 combinaisons
