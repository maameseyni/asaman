# Configuration Google Maps

## 🗺️ **Étapes pour activer Google Maps :**

### 1. **Obtenir une clé API Google Maps**
1. Allez sur [Google Cloud Console](https://console.cloud.google.com/)
2. Créez un nouveau projet ou sélectionnez un projet existant
3. Activez l'API "Maps JavaScript API"
4. Créez des identifiants (clé API)
5. Restreignez la clé API à votre domaine (optionnel mais recommandé)

### 2. **Configurer la clé API**
1. Créez un fichier `.env.local` à la racine du projet
2. Ajoutez votre clé API :
```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=votre_cle_api_ici
```

### 3. **Fonctionnalités de la carte**
- ✅ 5 marqueurs pour vos implantations au Sénégal
- ✅ Popups informatifs au clic sur les marqueurs
- ✅ Liste des agences avec détails
- ✅ Design responsive et moderne
- ✅ Style personnalisé aux couleurs ASAMAN
- ✅ Fallback en cas d'erreur de chargement

### 4. **Localisations configurées**
- **Dakar** - Région de Dakar (24 propriétés)
- **Saly** - Petite Côte (18 propriétés)
- **Thiès** - Région de Thiès (12 propriétés)
- **Gorée** - Île de Gorée (8 propriétés)
- **Saint-Louis** - Région de Saint-Louis (15 propriétés)

### 5. **Test**
Une fois la clé API configurée, redémarrez le serveur de développement :
```bash
npm run dev
```

La carte Google Maps devrait s'afficher avec tous les marqueurs interactifs !
