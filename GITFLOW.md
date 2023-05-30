# Git Flow  - Convention

## Commits convention

## Branches

### Main Branches :

- main: This is the main branch of the project, also known as the "stable" branch. This is the branch on which production versions of the code are stored. Validations of this branch are generally deployed on production servers.

### Dev branches :

- develop: This is the main development branch. Features under development, bug fixes and other modifications are merged into this branch. Feature branches are created from this branch.

### Feature Branches :
 
  - feature/<feature-name> : When you're working on a new feature, you can create a specific branch for it from the develop branch. For example, if you're working on a login feature, you can create a branch named feature/login. Once the feature is complete, the branch is merged into develop.

### Release Branches :

  - **release/<release-number>**: When you are preparing to release a new version of your application, you can create a release branch from develop. This branch allows you to stabilize functionality and focus on fixing bugs related to the specific version being prepared. Once the version is ready, the version branch is merged into both develop and main (or master), and a tag is created to mark the version.
