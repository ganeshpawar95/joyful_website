function Home() {
  return (
    <div className="container mx-auto py-4 px-4">
      <div className="grid gap-x-5 gap-y-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5">
        <div className="bg-blue-500 min-h-48 flex items-center justify-center rounded-lg">1</div>
        <div className="bg-blue-400 min-h-48 flex items-center justify-center rounded-lg">2</div>
        <div className="bg-blue-300 min-h-48 flex items-center justify-center rounded-lg">3</div>
        <div className="bg-blue-200 min-h-48 flex items-center justify-center rounded-lg">4</div>
        <div className="bg-blue-100 min-h-48 flex items-center justify-center rounded-lg">5</div>
      </div>
    </div>
  )
}

export default Home