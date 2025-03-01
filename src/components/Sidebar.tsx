const SideBar = () => {
  return (
    <div className="w-48 h-full p-5 flex flex-col">
      <div className="flex flex-col gap-4 pt-10">
        <button className="hover:bg-gray-200 p-2 rounded">
          My Posts
        </button>
        <button className="hover:bg-gray-200 p-2 rounded">
          Statistics
        </button>
      </div>
    </div>
  )
}

export default SideBar
