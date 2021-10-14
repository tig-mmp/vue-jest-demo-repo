- git remote add production https://github.com/tig-mmp/vue-jest-demo-repo.git

- git push production main

- git checkout -b improvements

- Commit

- git push production improvements

- On the repository vue-jest-demo-repo

      - Create a pull request

      - Coise a [CI application](https://github.com/marketplace/category/continuous-integration)

      - I choosed [CircleCI

  ](https://github.com/marketplace/circleci)

      - Configure it

      - On the https://app.circleci.com

          - Create a new project for vue-jest-demo-repo repository

              - Choose Node

              - Press `Commit and Run`

- git fetch production circleci-project-setup

- git merge production/circleci-project-setup

- git push production improvements

- Now the pull request shows the error: `All checks have failed` and `1 failing check`

- npm run test-update

- commit

- git push production improvements