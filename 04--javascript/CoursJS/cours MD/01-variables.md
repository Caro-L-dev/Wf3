# Variables et Primitives  


## Variables

### Syntaxes

```txt
<nom variable> = <valeur>;
window.<nom variable> = <valeur>;
```

`window` est une référence à l'instance Javascript de la fenetre du navigateur qui éxécute le script.

### var

- Instruction de déclaration d'une variable.  

  ```js
  var name = "John";
  var age;
  ```

- Portée Globale ou Portée de Fonction

### let

- Déclaration de variables dont la portée se limite au bloc courant.

### const

- Instruction de déclaration de variables dont la portée se limite au bloc courant.
- Interdit une nouvelle affectation.  

## Primitives

- Type de données qui ne sont pas des objets et ne possède pas de méthodes.
- 6 types de primitives :
  - **String** est le terme utilisé pour représenter du texte.
  - **Number** est le terme utilisé pour représenter une donnée numérique.
  - **Booléen** désigne un type de donnée logique qui prend deux valeurs **vrai** ou **faux**.  
  - **Null** représente une référence qui pointe vers un objet ou une adresse invalide ou inexistante.  
  - **Undefined** valeur automatiquement affecté aux variables qui viennent d'etre déclarées.  
  - **Symbol** Nouveauté ES6, reprèsente un pointeur unique vers un objet par exemple.