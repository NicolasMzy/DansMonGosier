# Git Flow  - Convention

## Commits convention
\<type>: \<description>\<contenu supplémentaire facultatif> \<footer facultatif>  

Chaque partie en détail :
 
- 	<type> : Il s'agit du type de commit qui décrit la nature des modifications apportées. 
 
 Voici quelques types courants: 

 - **feat :** Une nouvelle fonctionnalité ajoutée. 

 - **fix :** Une correction de bogue. 

 - **docs :** Des modifications de documentation. 

 - **style :** Des changements de style (par exemple, indentation, espacement). 

 - **refactor :** Des modifications du code qui n'ajoutent ni ne corrigent de fonctionnalités. 

 - **test :** Des ajouts ou des modifications de tests. 

 - **chore :** Des tâches de maintenance ou des mises à jour générales. 

 - **<description> :** Une description concise du changement effectué. Essayez de la rédiger de manière claire et informative. 

 - **<contenu supplémentaire facultatif> :** Cette partie peut être utilisée pour fournir plus de détails sur le changement effectué. Par exemple, vous pouvez expliquer pourquoi vous avez apporté cette modification, mentionner des références à des problèmes ou des demandes de tirage (pull requests) associées, etc. 

 - **\<footer facultatif> :** Cette section est facultative et peut être utilisée pour inclure des informations supplémentaires telles que des notes spéciales, des références à des ressources externes, etc. 

## Branches

### Main Branches :

- **main :** This is the main branch of the project, also known as the "stable" branch. This is the branch on which production versions of the code are stored. Validations of this branch are generally deployed on production servers.

### Dev branches :

- **develop :** This is the main development branch. Features under development, bug fixes and other modifications are merged into this branch. Feature branches are created from this branch.

### Feature Branches :
 
  - **feature/\<feature-name> :** When you're working on a new feature, you can create a specific branch for it from the develop branch. For example, if you're working on a login feature, you can create a branch named feature/login. Once the feature is complete, the branch is merged into develop.

### Release Branches :

- **release/<release-number> :** When you're preparing to release a new version of your application, you can create a release branch from develop. 

This branch allows you to stabilize functionality and focus on fixing bugs related to the specific version being prepared. Once the version is ready, the version branch is merged into both develop and main (or master), and a tag is created to mark the version.
