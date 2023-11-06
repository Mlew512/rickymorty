// import { Link } from "react"

const HomePage = () => {
    return(
      <>
      <div className="min-h-screen flex flex-col items-center justify-center relative">
        <img className="portal" src="./src/assets/portal.svg" alt="Portal" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img className="max-w-full max-h-50" src="./src/assets/rickymort.svg" alt="Rick and Morty" />
        </div>
      </div>

      </>
      )
}
export default HomePage;