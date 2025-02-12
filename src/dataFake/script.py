import json
import requests
import time

# Remplacez par votre clé d'API Pexels obtenue sur https://www.pexels.com/api/
PEXELS_API_KEY = 'XsZ5qYyH5lUrKNDE3EqGL6GaXuZ7lQJBq8PsMY17V88RrWt2h5xpsTyl'
PEXELS_SEARCH_URL = 'https://api.pexels.com/v1/search'

def check_url(url):
    """Vérifie que l'URL renvoie un code HTTP 200 (lien valide)."""
    try:
        response = requests.head(url, timeout=5)
        return response.status_code == 200
    except requests.RequestException:
        return False

def get_image_url_pexels(query, retries=3, delay=5):
    """
    Recherche une image via l'API Pexels pour le query donné.
    La réponse attendue est un JSON contenant une clé "photos",
    et on récupère l'URL de l'image (ici la version "medium").
    """
    headers = {
        "Authorization": PEXELS_API_KEY,
        "Accept": "application/json"
    }
    params = {
        "query": query,
        "per_page": 1,
        "page": 1
    }
    attempt = 0
    while attempt < retries:
        try:
            response = requests.get(PEXELS_SEARCH_URL, headers=headers, params=params, timeout=10)
        except requests.RequestException as e:
            print(f"Erreur lors de la requête pour '{query}' : {e}")
            return None

        if response.status_code == 200:
            try:
                data = response.json()
            except ValueError as e:
                print(f"Erreur JSON pour '{query}' : {e}")
                return None

            photos = data.get("photos")
            if photos and len(photos) > 0:
                # On récupère la version "medium" de l'image
                image_url = photos[0].get("src", {}).get("medium")
                if image_url and check_url(image_url):
                    return image_url
                else:
                    print(f"Aucune image valide trouvée pour '{query}'.")
                    return None
            else:
                print(f"Aucune photo trouvée pour '{query}'.")
                return None
        else:
            print(f"Erreur pour '{query}' : Code {response.status_code} - {response.text} (tentative {attempt+1}/{retries})")
            attempt += 1
            time.sleep(delay)
    return None

def main():
    # Charger le fichier JSON contenant vos plantes
    with open('plant_collection.json', 'r', encoding='utf-8') as f:
        plants = json.load(f)

    used_images = set()
    updated_plants = []

    # Traiter uniquement les 10 premiers éléments
    for plant in plants[:10]:
        # Utiliser le nom latin si disponible, sinon le nom commun
        plant_name = plant.get('latin_name') or plant.get('name')
        if not plant_name:
            print("Aucun nom pour cet élément, on passe.")
            plant['image'] = None
            updated_plants.append(plant)
            continue

        # On peut ajouter le mot "plant" pour affiner la recherche
        query = f"{plant_name} plant"
        print(f"Recherche d'image pour '{plant_name}' (query: '{query}')...")
        image_url = get_image_url_pexels(query)

        if image_url and image_url not in used_images:
            used_images.add(image_url)
            plant['image'] = image_url
        else:
            plant['image'] = None

        updated_plants.append(plant)
        time.sleep(1)

    # Enregistrer le nouveau fichier JSON mis à jour
    with open('plant_collection_updated.json', 'w', encoding='utf-8') as f:
        json.dump(updated_plants, f, ensure_ascii=False, indent=2)
    print("Mise à jour terminée. Le fichier 'plant_collection_updated.json' a été créé.")

if __name__ == "__main__":
    main()
