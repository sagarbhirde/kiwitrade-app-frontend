#!/bin/bash

# Exit on error
set -e

# Create directory structure
mkdir -p src/{assets,components,config,hooks,layouts,locales/{en,es},pages,services,store,types,utils}
mkdir -p src/components/{common,features,seo}
mkdir -p src/__tests__/{components,hooks,utils}

# Create base files for i18n
echo '{
  "common": {
    "loading": "Loading...",
    "error": "An error occurred",
    "success": "Success!"
  },
  "navigation": {
    "home": "Home",
    "about": "About",
    "contact": "Contact"
  }
}' > src/locales/en/common.json

echo '{
  "common": {
    "loading": "Cargando...",
    "error": "Se produjo un error",
    "success": "¡Éxito!"
  },
  "navigation": {
    "home": "Inicio",
    "about": "Sobre Nosotros",
    "contact": "Contacto"
  }
}' > src/locales/es/common.json

echo "✅ Project structure created!"
