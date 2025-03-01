interface SidebarButtonProps {
  label: string
  onClick: () => void
  path: string
  currentPath: string
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
  label, onClick, path, currentPath
}) => {
  const isActive = currentPath === path

  return (
    <button
      className={`p-2 rounded transition ${
        isActive ? "bg-blue-500 text-white font-semibold" : "hover:bg-gray-200"
      }`}
      onClick={(e) => {
        if (isActive) e.preventDefault()
        else onClick()
      }}
    >
      {label}
    </button>
  )
}

export default SidebarButton
