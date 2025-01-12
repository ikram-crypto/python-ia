import random

# Étape 1 : Lire un entier n au clavier
n = int(input("Entrez un entier n: "))

# Étape 2 : Générer une liste de n nombres aléatoires entre 1 et 10
liste = [random.randint(1, 10) for _ in range(n)]
print("Liste générée :", liste)

# Étape 3 : Compter les occurrences de chaque élément
compteur = {}
for i in liste:
    if i in compteur:
        compteur[i] += 1
    else:
        compteur[i] = 1

# Étape 4 : Afficher les occurrences
for element, frequence in compteur.items():
    print(f"{element} apparait {frequence} fois")

# Étape 5 : Trouver le nombre le plus fréquent
max_apparitions = max(compteur.values())  # Trouver la fréquence maximale
candidats = [key for key, value in compteur.items() if value == max_apparitions]  # Nombres ayant cette fréquence
nombre_plus_frequent = max(candidats)  # Trouver le plus grand nombre parmi les candidats

# Étape 6 : Afficher le résultat
print(f"Le nombre qui apparait le plus de fois est {nombre_plus_frequent}, avec {max_apparitions} occurrences.")
