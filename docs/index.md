## Writeup  

### Intro  
le challenge consistait en un site web vulnérable qui recensé des vidéos youtube de la chaine https://www.youtube.com/@squewe .  

### Injection SQL   
La premiere étape était d'identifier la faille qui n'etait autre  qu'une injection SQL qui était possible sur le champ de recherche de vidéo.  

### Union Based Injection   
La deuxième étape était de trouver comment ce champ était exploitable. Il fallait effectuer une attaque de type "Union Based" afin de pouvoir exfiltrer des données de la base de données. Une fois l'attaque effetuée par exemple en injectant cette partie de requette SQL :  
`"' UNION SELECT username, password, NULL, NULL, NULL, NULL FROM users --`  
l'attaquant devrait etre en possession des crédentiels de l'utilisateur admin. 


### SSH connection
En effectuant un scan de port sur la machine cible, nous pouvions idenifier un acces au service SSH. En utilisant les identifiants précedement exilftrés on peut acceder à la machine qui heberge le site web :  
ssh squewe@