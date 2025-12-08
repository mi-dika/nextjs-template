1. run `pnpm lint`. do we have errors? YES -> fix them and run again, NO -> continue
2. run `pnpm type-check`. do we have errors? YES -> fix them and run again, NO -> continue
3. run `pnpm test`. do we have errors? YES -> fix them and run again, NO -> continue
4. run `pnpm build`. do we have errors? YES -> fix them and run again, NO -> continue
5. run `pnpm format`. do we have errors? YES -> fix them and run again, NO -> continue
6. check all the code not commited yet and cluster the commits in logical groups
8. generate a commit message for each group
5. commit the group
6. continue until all the code is committed
7. update the `CHANGELOG.md` file with the changes (if needed) and commit it
