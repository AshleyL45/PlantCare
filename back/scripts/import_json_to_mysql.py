import json
import mysql.connector

# Connexion à la base de données MySQL
conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="password",
    database="plantCare_db"
)
cursor = conn.cursor()

# Charger le fichier JSON
with open("../plant_collection_updated.json", "r", encoding="utf-8") as file:
    plants = json.load(file)

# Vérification des données chargées
print(f"🔍 Nombre de plantes dans le JSON : {len(plants)}")

# Dictionnaire pour stocker les types de soins déjà ajoutés
care_types = {}

# Insérer les données dans la table 'product'
for index, plant in enumerate(plants):
    print(f"🔍 Traitement de la plante {index + 1}/{len(plants)} : {plant['name']}")

    # Vérifier si le produit existe déjà en base
    cursor.execute("SELECT id FROM product WHERE name = %s", (plant["name"],))
    existing_product = cursor.fetchone()

    if existing_product:
        product_id = existing_product[0]
        print(f"❌ Produit déjà existant : {plant['name']} (ID: {product_id}) - Ignoré")
    else:
        try:
            # Insérer uniquement si le produit n'existe pas encore
            cursor.execute("""
                INSERT INTO product (name, latin_name, description, stock, category, rating, size, pet_friendly, image, price)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            """, (
                plant["name"],
                plant.get("latin_name", ""),  # 🔹 Utilisation de get() pour éviter KeyError si la clé manque
                plant.get("description", ""),
                int(plant.get("quantity", 0)),  # 🔹 Conversion en entier pour éviter des erreurs
                plant.get("category", ""),
                int(plant.get("rating", 0)),  # 🔹 Assurer un entier
                plant.get("size", ""),
                bool(plant.get("pet_friendly", False)),  # 🔹 Assurer une valeur booléenne
                plant.get("image", ""),
                float(plant.get("price", 0.0))  # 🔹 Assurer un float pour éviter des erreurs SQL
            ))

            # Récupérer l'ID du produit inséré
            product_id = cursor.lastrowid
            print(f"✅ Produit inséré : {plant['name']} (ID: {product_id})")

        except mysql.connector.Error as err:
            print(f"⚠️ ERREUR lors de l'insertion de {plant['name']} : {err}")

    # Insérer les types de soins et éviter les doublons
    for care in plant.get("care_type", []):
        if care not in care_types:
            cursor.execute("INSERT IGNORE INTO care_type (name) VALUES (%s)", (care,))
            conn.commit()
            cursor.execute("SELECT id FROM care_type WHERE name = %s", (care,))
            care_id = cursor.fetchone()[0]
            care_types[care] = care_id
        else:
            care_id = care_types[care]

        # Associer le produit à son type de soin en évitant les doublons
        cursor.execute("""
            INSERT IGNORE INTO product_care_type (product_id, care_type_id)
            VALUES (%s, %s)
        """, (product_id, care_id))

# Valider les transactions et fermer la connexion
conn.commit()
cursor.close()
conn.close()

print("✅ Importation des données terminée avec succès !")
