# metric-design

[![npm version](https://badge.fury.io/js/%40noahs%2Fmetric-design.svg)](https://www.npmjs.com/package/@dimitrizindovic/metric-design?activeTab=readme)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Librairie TypeScript pour la conception et la manipulation de métriques, pensée pour l'architecture open source et la publication sur npm.

## Installation

```bash
npm install @dimitrizindovic/metric-design
```


## Utilisation

### Import ES Modules

```typescript
import { createMetric, formatMetric, sumMetrics, isValidMetric } from '@dimitrizindovic/metric-design'

// Création d'une métrique
const metric = createMetric('distance', 42, 'km')

// Validation
console.log(isValidMetric(metric)) // true

// Formatage
console.log(formatMetric(metric)) // '42 km'

// Somme de métriques
console.log(sumMetrics([
    createMetric('distance', 10, 'km'),
    createMetric('distance', 32, 'km')
])) // 42
```

### Import CommonJS

```javascript
const { createMetric, formatMetric } = require('@noahs/metric-design')
```

## API

### `createMetric(type: string, value: number, unit: string): Metric`

Crée une nouvelle métrique.

**Paramètres :**
- `type` (string) : Le type de la métrique (ex: 'distance')
- `value` (number) : La valeur
- `unit` (string) : L'unité (ex: 'km')

**Retourne :** Un objet `Metric`

### `isValidMetric(metric: Metric): boolean`

Vérifie si un objet est une métrique valide.

**Paramètres :**
- `metric` (Metric) : La métrique à valider

**Retourne :** `true` si valide, sinon `false`

### `formatMetric(metric: Metric): string`

Formate une métrique en chaîne lisible.

**Paramètres :**
- `metric` (Metric) : La métrique à formater

**Retourne :** Une chaîne formatée (ex: '42 km')

### `sumMetrics(metrics: Metric[]): number`

Calcule la somme des valeurs d'un tableau de métriques du même type/unité.

**Paramètres :**
- `metrics` (Metric[]) : Tableau de métriques

**Retourne :** La somme des valeurs

## Développement

### Prérequis

- Node.js >= 18.0.0
- npm ou yarn

### Installer les dépendances

```bash
npm install
```

### Scripts disponibles

```bash
# Lancer les tests
npm test

# Couverture des tests
npm run test:coverage

# Linter
npm run lint

# Formatter le code
npm run format

# Vérifier les types TypeScript
npm run typecheck

# Build de la librairie
npm run build
```

### Structure du projet

```
metric-design/
├── src/
│   ├── index.ts        # Point d'entrée principal
│   └── index.test.ts   # Tests unitaires
├── dist/               # Fichiers compilés (générés)
├── .github/
│   └── workflows/
│       └── ci.yml      # Configuration CI/CD
├── package.json
├── tsconfig.json       # Config TypeScript
├── vite.config.ts      # Config Vite
├── .eslintrc.cjs       # Config ESLint
└── .prettierrc         # Config Prettier
```

## Contribuer

Les contributions sont les bienvenues !

1. Forkez le projet
2. Créez une branche (`git checkout -b feature/ma-feature`)
3. Commitez vos changements (`git commit -m 'Ajout de ma feature'`)
4. Pushez (`git push origin feature/ma-feature`)
5. Ouvrez une Pull Request

### Règles de contribution

- Tous les tests doivent passer
- Respectez le style de code (`npm run lint` et `npm run format`)
- Ajoutez des tests pour toute nouvelle fonctionnalité
- Mettez à jour la documentation si besoin

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus d'informations.

## Remerciements

- Merci à tous les contributeurs
- Inspiré par les meilleures pratiques de la communauté JavaScript/TypeScript

---

Créé avec ❤️ par [Dimitri Z. , Noah S. et Antoine SCH](https://github.com/noahs)