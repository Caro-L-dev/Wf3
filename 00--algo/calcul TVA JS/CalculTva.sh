#!/bin/bash
clear;
echo "Dis moi, que vaut la TVA ?";
echo "---";

# Déclaration des constantes
readonly TVA=20;

# Déclaration des variables
montantTVA=NULL;
prixHT=NULL;
prixTTC=NULL;

# Affiche une instruction pour l'utilisateur
# > Saisir le prix Hors Taxe.
echo "Saisir le prix Hors Taxe :";

# Capture la valeur d'entrée du prixHT
read prixHT;

# Calcul du montant de la TVA montant TVA
montantTVA=$(echo "$prixHT*($TVA/100)" | bc);
echo $montantTVA;

# Calcul du montant de la TTC prixTTC

