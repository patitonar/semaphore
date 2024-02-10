import { rmSync } from "fs"

const folderName = "packages"

const gitIgnored = [
    "contracts/build",
    "contracts/cache",
    "contracts/node_modules",
    "web-app/node_modules",
    "web-app/.next"
]

const packages = ["cli-template-monorepo-ethers", "cli-template-monorepo-subgraph"]

async function main() {
    packages.map((pkg) =>
        gitIgnored.map((f) => rmSync(`${folderName}/${pkg}/apps/${f}`, { recursive: true, force: true }))
    )
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
